"use client";

import { useState } from "react";

export default function Home() {
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-24 px-8 bg-white dark:bg-black">
  <section className="space-y-4">
    <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
      収納ボックス、サイズで失敗したことありませんか？
返品・買い直しを防ぐためのサイズ判定ツールです
    </h1>

    <p className="text-lg text-zinc-700 dark:text-zinc-300">
      棚サイズを入力するだけで、
      <br />
      <strong>本当にぴったり収まる市販収納ボックス</strong>
      がわかります。
    </p>

    <p className="text-sm text-zinc-500">
      ※ ニトリ・無印などの実在商品を元に判定しています
    </p>
  </section>

  {/* ↓ この下に、あとで検索フォームやフィルタを入れる */}
<section className="mt-8 w-full max-w-md space-y-4">
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
      棚の内寸（幅 cm）
    </label>
<input
  type="number"
  placeholder="例：38"
  value={width}
  onChange={(e) => setWidth(e.target.value)}
  className="rounded-md border border-zinc-300 px-3 py-2 ..."
/>

  </div>

  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
      棚の内寸（奥行 cm）
    </label>
    <input
  type="number"
  placeholder="例：26"
  value={depth}
  onChange={(e) => setDepth(e.target.value)}
  className="rounded-md border border-zinc-300 px-3 py-2 ..."
/>
  </div>
</section>
<button
  className="mt-6 w-full max-w-md rounded-md bg-black px-4 py-3 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
>
  このサイズで探す
</button>
</main>
    </div>
  );
}
