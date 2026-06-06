"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-ink px-4 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-blood">Error</p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">Something Stalled</h1>
        <p className="mt-5 text-white/62">Please retry the page load.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 bg-blood px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
