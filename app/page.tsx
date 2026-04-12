import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl mb-10 text-zinc-600 dark:text-zinc-400 max-w-lg">
        Explore some of the applications and experiments I've built with Next.js and Tailwind CSS.
      </p>
      <Link
        href="/TodoList"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-95"
      >
        View To-Do List App
      </Link>
    </main>
  );
}
