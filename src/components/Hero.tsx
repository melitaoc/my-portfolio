export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="animate-float-slow absolute right-10 top-32 h-40 w-40 rounded-full bg-lime-200/60 blur-3xl" />

      <div className="animate-float-slow-reverse absolute left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-lime-100/70 blur-2xl" />

      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
        Computer Science Portfolio
      </p>

      <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
        Hi, I&apos;m Melita
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 sm:text-xl">
        I build thoughtful, creative digital experiences and projects.
        Welcome to my little corner of the internet.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#projects"
          className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href="#about"
          className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          About Me
        </a>
      </div>
    </section>
  );
}