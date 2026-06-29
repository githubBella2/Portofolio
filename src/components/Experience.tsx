import { translations } from "@/constants/translations";

interface ExperienceProps {
  lang: "id" | "en";
}

const EXPERIENCE_STACKS = [
  ["PHP", "Laravel", "MySQL"],
  ["PHP", "Yii Framework", "MySQL", "JavaScript"],
];

export default function Experience({
  lang,
}: ExperienceProps) {
  const t = translations[lang];

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-moss/5 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#FFC857] opacity-10 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-moss opacity-20 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-moss opacity-20 blur-3xl rounded-full pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full border border-moss/20" />

        <div className="absolute -top-24 -left-24 w-[22rem] h-[22rem] rounded-full border border-moss/20" />

        <div className="absolute top-28 right-0 w-1/2 border-t border-dashed border-moss/20" />

        <p className="section-label mb-3">
          {t.experienceLabel}
        </p>

        <div className="w-16 h-1 rounded-full bg-khaki mb-4" />

        <h2 className="font-display font-bold text-moss text-3xl md:text-4xl max-w-xl">
          {t.experienceTitle}
        </h2>

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-moss/20" />

          <div className="space-y-12">
            {t.experienceData.map((exp, index) => (
              <div
                key={exp.role + exp.period}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-sand border-2 border-moss" />

                <div className="flex items-center gap-3 mb-1">
                  <p className="text-sm text-sage">
                    {exp.period}
                  </p>

                  {(exp.period.includes("Sekarang") ||
                    exp.period.includes("Present")) && (
                    <span className="text-[11px] px-2 py-1 rounded-full bg-moss text-sand">
                      {lang === "id"
                        ? "Sekarang"
                        : "Present"}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-moss text-xl">
                  {exp.role}
                </h3>

                <p className="text-sage text-sm mb-4">
                  {exp.place}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {EXPERIENCE_STACKS[index].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-moss/10 text-moss"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <ul className="space-y-2 max-w-2xl">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-moss/80 leading-relaxed"
                    >
                      <span className="text-sage mt-1">
                        ▸
                      </span>

                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}