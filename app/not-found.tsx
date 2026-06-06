import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blood">404</p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">Page Not Found</h1>
        <p className="mt-5 text-white/62">The project or page you are looking for is not available.</p>
        <Link
          href="/tr"
          className="mt-8 inline-flex bg-blood px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}
