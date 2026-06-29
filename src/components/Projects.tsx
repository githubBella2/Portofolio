import { translations } from "@/constants/translations";

interface ProjectsProps {
  lang: "id" | "en";
}

const PROJECT_TAGS = [
  ["PHP", "Yii Framework", "MySQL"],
  ["Ionic", "PHP", "Typescript", "MySQL"],
  ["Ionic", "MySQL", "Google Map API"],
  ["NextJS", "Typescript", "AI Integration", "Node.js"],
];

const PROJECT_LINKS = [
  "#",
  "https://kp-mekar.web.app/home",
  "https://ta-ekursus.web.app/login",
  "#",
];

export default function Projects({ lang }: ProjectsProps) {
  const t = translations[lang];

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#FFC857] opacity-10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-moss opacity-20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-moss opacity-20 blur-3xl rounded-full pointer-events-none" />

      {/* Decorative code symbols */}
      <div className="absolute top-20 right-10 text-[180px] font-bold text-moss/5 pointer-events-none">
        {"</>"}
      </div>

      <div className="absolute top-20 left-10 text-[180px] font-bold text-moss/5 pointer-events-none">
        {"</>"}
      </div>

      <div className="absolute top-80 right-10 text-[180px] font-bold text-moss/5 pointer-events-none">
        {"</>"}
      </div>

      <div className="absolute top-80 left-10 text-[180px] font-bold text-moss/5 pointer-events-none">
        {"</>"}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <p className="section-label mb-3">{t.projectsLabel}</p>

        <h2 className="font-display font-bold text-moss text-3xl md:text-4xl max-w-xl">
          {t.projectsTitle}
        </h2>

        <p className="mt-4 text-sage max-w-2xl">
          {t.projectsDesc}
        </p>

        {/* Project Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {t.projectsData.map((p, index) => (
            <a
              key={p.title}
              href={PROJECT_LINKS[index]}
              target={
                PROJECT_LINKS[index] !== "#" ? "_blank" : undefined
              }
              rel="noreferrer"
              className="
                group
                rounded-2xl
                p-7
                border border-moss/20
                bg-white/20
                backdrop-blur-sm
                hover:border-[#FFC857]/50
                hover:bg-white/30
                transition-all duration-300
              "
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display font-bold text-moss text-xl">
                  {p.title}
                </h3>

                <span className="text-moss text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <p className="mt-3 text-sage leading-relaxed">
                {p.desc}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {PROJECT_TAGS[index].map((tag) => (
                  <span
                    key={tag}
                    className="
                      text-xs
                      px-3
                      py-1
                      rounded-full
                      bg-moss/10
                      border border-moss/10
                      text-moss
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}