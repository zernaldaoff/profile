export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6 lg:px-8">
        <a
          href="#top"
          className="text-lg font-semibold tracking-[-0.02em] text-[var(--navy)]"
        >
          ZS.
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--text-secondary)] md:flex">
          <a
            href="#about"
            className="transition-colors hover:text-[var(--navy)]"
          >
            About
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-[var(--navy)]"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="transition-colors hover:text-[var(--navy)]"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-[var(--navy)]"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}