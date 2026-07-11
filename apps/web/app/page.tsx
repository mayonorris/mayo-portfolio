export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-950">
      <section className="mx-auto flex max-w-3xl flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
          Sprint 1 web scaffold
        </p>
        <h1 className="text-4xl font-semibold tracking-normal sm:text-5xl">
          Next.js application shell
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-700">
          Minimal technical page for validating the App Router, TypeScript,
          Tailwind CSS, ESLint, and the pnpm workspace build.
        </p>
      </section>
    </main>
  );
}