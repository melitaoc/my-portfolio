export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
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