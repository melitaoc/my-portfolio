export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl px-6 py-24"
    >
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
            Projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Things I&apos;ve built
          </h2>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="text-xl font-semibold">Project One</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            A short description of your project goes here. Explain what it does,
            what technologies you used, and what you learned from building it.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            React · TypeScript · Tailwind
          </p>
        </article>

        <article className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <h3 className="text-xl font-semibold">Project Two</h3>
          <p className="mt-3 text-sm leading-7 text-neutral-600">
            Add another project here. Later, we can turn this into reusable
            project cards and connect them to real GitHub/demo links.
          </p>
          <p className="mt-4 text-sm text-neutral-500">
            Next.js · Python · SQL
          </p>
        </article>
      </div>
    </section>
  );
}