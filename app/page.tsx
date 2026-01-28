"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/result?width=${width}&depth=${depth}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-8">
      <main className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">収納ボックスサイズ診断</h1>
        <p className="mb-6">
          幅と奥行を入力すると、ぴったりの収納ボックスを表示します。
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="number"
            placeholder="幅 (cm)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="奥行 (cm)"
            value={depth}
            onChange={(e) => setDepth(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            検索
          </button>
        </form>
      </main>
    </div>
  );
}
