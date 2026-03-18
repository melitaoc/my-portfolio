export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
        <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
          About Me
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          A little bit about me
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-600">
          I&apos;m a computer science student who enjoys building projects that
          combine technical problem-solving with creativity. I&apos;m especially
          interested in software engineering, frontend development, and creating
          experiences that feel both polished and thoughtful.
        </p>

        <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600">
          I love working on projects where I can learn new tools, experiment
          with design, and turn ideas into something interactive and useful.
        </p>
      </div>
    </section>
  );
}