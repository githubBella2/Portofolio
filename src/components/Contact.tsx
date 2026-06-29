import ContourRings from "./ContourRings";
import { translations } from "@/constants/translations";

interface ContactEntry {
  label: string;
  value: string;
  href: string;
}

const CONTACTS: ContactEntry[] = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/margareta-kristiana",
    href: "https://www.linkedin.com/in/margareta-kristiana",
  },
  {
    label: "GitHub",
    value: "github.com/margaretakristiana",
    href: "https://github.com/margaretakristiana",
  },
  {
    label: "Email",
    value: "yubellamargareta@gmail.com",
    href: "mailto:yubellamargareta@gmail.com",
  },
];

interface ContactProps {
  lang: "id" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const t = translations[lang];

  return (
    <section
      id="contact"
      className="relative  md:py-20 px-6 md:px-10 bg-moss overflow-hidden"
    >
      <ContourRings
        className="!flex items-center justify-center left-1/2 -translate-x-1/2"
        color="#FFC857" overflow-hidden
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <p className="section-label text-[#FFC857]/80 mb-3">
          {t.connect}
        </p>

        <h2 className="font-display font-bold text-3xl md:text-5xl max-w-2xl leading-tight text-[#FFC857]">
          {t.contactTitle}
        </h2>

        <p className="mt-5 text-[#FFC857]/80 max-w-xl leading-relaxed">
          {t.contactDesc}
        </p>

        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel="noreferrer"
              className="block p-5 rounded-2xl border border-[#FFC857]/20 hover:bg-[#FFC857]/10 transition-colors"
            >
              <p className="text-xs uppercase tracking-widest text-[#FFC857]/70">
                {c.label}
              </p>

              <p className="mt-2 font-medium text-[#FFC857] break-all">
                {c.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}