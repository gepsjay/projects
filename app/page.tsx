import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to your Next.js App!</h1>
      <p>This is the root page.</p>
      <p>
        I've moved your to-do list to a separate page. You can access it here:
      </p>
      <Link href="/TodoList" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go to To-Do List
      </Link>
      <p style={{ marginTop: '2rem', color: '#666' }}>
        Any other route you visit will be handled by a catch-all page.
      </p>
    </main>
  );
}
