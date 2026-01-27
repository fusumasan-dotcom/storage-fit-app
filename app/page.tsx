import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col gap-8 py-24 px-8 bg-white dark:bg-black">
  <section className="space-y-4">
    <h1 className="text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
      収納ボックス、サイズで失敗したことありませんか？
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
</main>

    </div>
  );
}
