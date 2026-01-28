"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Box {
  name: string;
  width: number;
  depth: number;
  material: string;
  stackable: boolean;
}

export default function ResultPage() {
  const searchParams = useSearchParams();
  const width = Number(searchParams?.get("width") ?? 0);
  const depth = Number(searchParams?.get("depth") ?? 0);

  const [results, setResults] = useState<Box[]>([]);

  useEffect(() => {
    const STORAGE_BOXES: Box[] = [
      { name: "ニトリ Aボックス", width: 38, depth: 26, material: "プラ", stackable: true },
      { name: "無印 Bボックス", width: 36, depth: 24, material: "天然", stackable: false },
      { name: "IKEA Cボックス", width: 40, depth: 28, material: "布", stackable: true },
    ];

    const filtered = STORAGE_BOXES.filter(
      (box) => box.width <= width && box.depth <= depth
    );

    setResults(filtered);
  }, [width, depth]);

  return (
    <div className="min-h-screen p-8 bg-zinc-50">
      <h1 className="text-2xl font-bold mb-4">検索結果</h1>
      <p className="text-lg mb-6">
        あなたの入力サイズ：幅 {width} cm / 奥行 {depth} cm
      </p>

      {results.length === 0 ? (
        <p className="text-zinc-500">該当する収納ボックスはありませんでした。</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {results.map((box, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-300 p-4 bg-white dark:bg-black dark:border-zinc-700"
            >
              <h2 className="font-semibold">{box.name}</h2>
              <p>幅: {box.width} cm / 奥行: {box.depth} cm</p>
              <p>素材: {box.material}</p>
              <p>{box.stackable ? "積み重ね可" : "積み重ね不可"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
