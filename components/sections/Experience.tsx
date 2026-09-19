type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  featured?: boolean;
};

const experiences: Experience[] = [
  {
    company: "Otten Coffee",
    role: "Senior Frontend Engineer | Cross-Platform & AI-Assisted Product Delivery",
    period: "Oct 2020 - Present",
    summary:
      "Leading reliable ecommerce experiences from product story through release across desktop, mobile web, iOS, and Android.",
    highlights: [
      "Ecommerce & product ownership",
      "Frontend architecture",
      "Release quality & AI-assisted delivery",
    ],
    featured: true,
  },
  {
    company: "Salt Digital Agency",
    role: "Frontend Engineer",
    period: "Mar 2020 - Jun 2020",
    summary:
      "Built responsive product interfaces and connected them to the APIs and services needed for dependable feature delivery.",
    highlights: ["React & Angular", "API integrations", "Pixel-precise UI"],
  },
  {
    company: "Pointstar PTE LTD",
    role: "Application Engineer",
    period: "Jan 2019 - Feb 2020",
    summary:
      "Developed cloud-connected web applications with Angular, GraphQL, Node.js, and Google Cloud Platform services.",
    highlights: ["Angular", "GraphQL & REST APIs", "Google Cloud Platform"],
  },
  {
    company: "PT. Conexus Solusi",
    role: "Fullstack Engineer",
    period: "Sep 2016 - Dec 2018",
    summary:
      "Delivered full-stack business applications, dashboards, and monitoring tools for enterprise and public-sector needs.",
    highlights: ["Laravel & PHP", "Enterprise dashboards", "Monitoring tools"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-[var(--surface)] py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--navy-light)]">
            Career path
          </p>
          <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] text-[var(--navy)] md:text-6xl">
            Experience
          </h2>
          <p className="mt-6 text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
            Building ecommerce, digital products, and internal tools with a focus
            on thoughtful implementation, product quality, and reliable delivery.
          </p>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-px bg-[var(--border)] md:left-[180px]"
          />

          <div className="pl-8 md:pl-0">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="relative grid gap-5 border-b border-[var(--border)] py-10 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10 md:py-12"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[37px] h-2.5 w-2.5 rounded-full border-2 border-[var(--surface)] md:left-[175px] ${
                    experience.featured
                      ? "top-0 bg-[var(--navy)]"
                      : "top-10 bg-[var(--navy-light)] md:top-12"
                  }`}
                />

                <p className="text-sm font-semibold text-[var(--navy-light)] md:pt-1">
                  {experience.period}
                </p>

                <div
                  className={
                    experience.featured
                      ? "md:-ml-5 md:border-l-4 md:border-[var(--navy)] md:pl-8"
                      : ""
                  }
                >
                  <p className="text-xl font-semibold tracking-[-0.03em] text-[var(--navy)] md:text-2xl">
                    {experience.company}
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
                    {experience.role}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                    {experience.summary}
                  </p>
                  <ul
                    className="mt-6 flex flex-wrap gap-2"
                    aria-label={`${experience.company} focus areas`}
                  >
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="border border-[var(--border)] px-3 py-1.5 text-xs font-semibold text-[var(--navy)]"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
