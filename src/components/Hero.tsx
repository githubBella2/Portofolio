import ContourRings from "./ContourRings";
import { translations } from "@/constants/translations";

interface HeroProps {
  lang: "id" | "en";
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10 overflow-hidden"
    >
      <ContourRings className="!flex items-center justify-end right-[-10%] top-0" />

      <div className="flex-1">
        {/* LABEL */}
        <p className="section-label mb-6">
          {t.heroLabel}
        </p>

        {/* TITLE */}
        <h1 className="font-display font-bold text-moss leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl">
          {t.heroTitle}{" "}
          <span className="relative inline-block">
            Margareta Kristiana
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="10"
              viewBox="0 0 200 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 6 Q50 0 100 6 T200 6"
                stroke="#918B76"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
          .
        </h1>

        {/* DESC */}
        <p className="mt-6 text-lg md:text-xl text-sage max-w-xl leading-relaxed">
          {t.heroDesc}
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 rounded-full bg-moss text-sand font-medium hover:bg-sage transition-colors"
          >
            {t.heroProjectBtn}
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full border border-moss/30 text-moss font-medium hover:bg-moss/5 transition-colors"
          >
            {t.heroContactBtn}
          </a>
        </div>

        {/* INFO */}
        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 text-sm text-sage">
          <span>{t.heroExperience}</span>
          <span>{t.heroOpen}</span>
          <span>{t.heroAI}</span>
        </div>

        {/* LINKS */}
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <a
            href="https://www.linkedin.com/in/margareta-kristiana"
            target="_blank"
            rel="noreferrer"
            className="text-moss/80 hover:text-moss underline underline-offset-4"
          >
            linkedin.com/in/margareta-kristiana
          </a>

          <a
            href="https://github.com/margaretakristiana"
            target="_blank"
            rel="noreferrer"
            className="text-moss/80 hover:text-moss underline underline-offset-4"
          >
            github.com/margaretakristiana
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src="/images/IMG_1522.JPG"
          alt="Profile"
          className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-lg border border-moss/20"
        />
      </div>
    </section>
  );
}