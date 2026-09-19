export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-white"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-20 w-8 bg-[var(--navy)] md:h-28 md:w-12" />

      <div className="mx-auto grid min-h-screen max-w-[1200px] items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-20 lg:pt-28">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--navy-light)]">
            Senior Frontend Engineer
          </p>

          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-medium leading-[0.82] tracking-[-0.07em] text-[var(--navy)]">
            Zernalda
            <span className="block font-bold">Septian</span>
          </h1>

          <div className="mt-8 h-px w-24 bg-[var(--navy)]" />

          <h2 className="mt-8 max-w-2xl text-2xl font-medium leading-tight tracking-[-0.03em] text-[var(--navy)] md:text-4xl">
            I build reliable digital products from story to release.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
            Senior Frontend Engineer specializing in React, Next.js,
            TypeScript, cross-platform delivery, product quality, and
            AI-assisted development.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center bg-[var(--surface)] px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>

            <a
              href="/cv/zernalda-septian-cv.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center border border-[var(--navy)] px-6 text-sm font-semibold text-[var(--navy)] transition-colors hover:bg-[var(--surface)]"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-secondary)]">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Cross-Platform Delivery</span>
            <span>AI-Assisted Development</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="absolute -left-5 -top-5 h-full w-full border border-[var(--border)]" />

          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--surface-strong)]">
            <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.2em] text-[var(--text-secondary)]">
              Profile Photo
            </div>
          </div>

          <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-[var(--navy)] md:h-20 md:w-20" />
        </div>
      </div>
    </section>
  );
}