import { translations } from "@/constants/translations";

interface SkillItem {
  name: string;
  level: number;
}

interface SkillGroup {
  title: string;
  items: SkillItem[];
}

const SKILL_GROUPS_ID: SkillGroup[] = [
  {
    title: "Arsitektur",
    items: [
      { name: "REST API Design", level: 80 },
      { name: "MVC (Laravel / Yii)", level: 80 },
    ],
  },
  {
    title: "Bahasa & Framework",
    items: [
      { name: "Laravel & PHP", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "React & Ionic", level: 75 },
      { name: "Node.js", level: 65 },
      { name: "C#", level: 55 },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { name: "MySQL", level: 80 },
      { name: "Git & Version Control", level: 80 },
      { name: "Tailwind CSS / Next.js", level: 70 },
    ],
  },
  {
    title: "Sedang Dipelajari — AI",
    items: [
      { name: "Prompt Engineering & LLM API", level: 55 },
      { name: "Integrasi AI ke Aplikasi Web", level: 50 },
      { name: "Dasar Machine Learning (Python)", level: 35 },
    ],
  },
];

const SKILL_GROUPS_EN: SkillGroup[] = [
  {
    title: "Architecture",
    items: [
      { name: "REST API Design", level: 80 },
      { name: "MVC (Laravel / Yii)", level: 80 },
    ],
  },
  {
    title: "Languages & Frameworks",
    items: [
      { name: "Laravel & PHP", level: 85 },
      { name: "JavaScript / TypeScript", level: 80 },
      { name: "React & Ionic", level: 75 },
      { name: "Node.js", level: 65 },
      { name: "C#", level: 55 },
    ],
  },
  {
    title: "Database & Tools",
    items: [
      { name: "MySQL", level: 80 },
      { name: "Git & Version Control", level: 80 },
      { name: "Tailwind CSS / Next.js", level: 70 },
    ],
  },
  {
    title: "Currently Learning — AI",
    items: [
      { name: "Prompt Engineering & LLM API", level: 55 },
      { name: "AI Integration for Web Apps", level: 50 },
      { name: "Machine Learning Fundamentals (Python)", level: 35 },
    ],
  },
];

function SkillBar({ name, level }: SkillItem) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-sand font-medium">{name}</span>
        <span className="text-sand/60">{level}%</span>
      </div>

      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full bg-[#FFC857]"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

interface SkillProps {
  lang: "id" | "en";
}

export default function Skill({ lang }: SkillProps) {
  const t = translations[lang];

  const skillGroups =
    lang === "id" ? SKILL_GROUPS_ID : SKILL_GROUPS_EN;

  return (
    <section
      id="skill"
      className="relative py-24 md:py-32 px-6 md:px-10 bg-moss overflow-hidden"
    >
      {/* DOT BACKGROUND */}
      <div className="absolute top-0 -right-32 w-[70vw] h-full overflow-hidden pointer-events-none">
        <div className="grid grid-cols-12 gap-8 opacity-20">
          {[...Array(144)].map((_, i) => (
            <span
              key={i}
              className={`
                rounded-full bg-[#FFC857]
                ${i % 3 === 0 ? "w-5 h-5" : "w-3 h-3"}
              `}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-label mb-3 text-[#FFC857]">
          {t.skillLabel}
        </p>

        <h2 className="font-display font-bold text-sand text-3xl md:text-4xl max-w-xl">
          {t.skillTitle}
        </h2>

        <p className="mt-4 text-sand/70 max-w-2xl leading-relaxed">
          {t.skillDesc}
        </p>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-2xl
                p-7
                bg-white/5
                border border-white/10
                backdrop-blur-sm
              "
            >
              <h3 className="font-display font-bold text-[#FFC857] text-lg mb-6">
                {group.title}
              </h3>

              <div className="space-y-5">
                {group.items.map((item) => (
                  <SkillBar key={item.name} {...item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}