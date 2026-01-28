"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const [width, setWidth] = useState(0);
  const [depth, setDepth] = useState(0);
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const w = Number(searchParams.get("width") ?? 0);
    const d = Number(searchParams.get("depth") ?? 0);
    setWidth(w);
    setDepth(d);

    const boxes = [
      { name: "ニトリ A", width: 38, depth: 26, stackable: true },
      { name: "無印 B", width: 36, depth: 24, stackable: false },
    ];

    setResults(boxes.filter(box => box.width <= w && box.depth <= d));
  }, [searchParams]);

  return (
    <div>
      <h1>検索結果</h1>
      <p>幅: {width} / 奥行: {depth}</p>
      {results.length === 0 ? (
        <p>該当なし</p>
      ) : (
        results.map((box, i) => (
          <div key={i}>
            <p>{box.name}</p>
            <p>{box.width} x {box.depth}</p>
            <p>{box.stackable ? "積み重ね可" : "不可"}</p>
          </div>
        ))
      )}
    </div>
  );
}
