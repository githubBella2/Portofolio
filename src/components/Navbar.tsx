import { useEffect, useState } from "react";
import { translations } from "@/constants/translations";

interface NavItem {
  href: string;
  label: string;
}

interface NavbarProps {
  lang: "id" | "en";
  setLang: React.Dispatch<React.SetStateAction<"id" | "en">>;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const t = translations[lang];

  const getNavItems = (): NavItem[] => [
    { href: "#home", label: t.home },
    { href: "#skill", label: t.skill },
    { href: "#experience", label: t.experience },
    { href: "#projects", label: t.projects },
    { href: "#contact", label: t.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-header border-b border-moss/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-lg tracking-tight text-moss"
        >
          MK<span className="text-sage">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {getNavItems().map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2 rounded-full bg-moss text-sand text-sm font-medium hover:bg-sage transition-colors"
          >
            {t.contact}
          </a>

          {/* Language Switch */}
          <div className="flex items-center text-sm text-moss">
            <button
              onClick={() => setLang("id")}
              className={`transition-colors ${
                lang === "id"
                  ? "font-semibold text-moss"
                  : "text-moss/50"
              }`}
            >
              ID
            </button>

            <span className="mx-2 text-moss/40">|</span>

            <button
              onClick={() => setLang("en")}
              className={`transition-colors ${
                lang === "en"
                  ? "font-semibold text-moss"
                  : "text-moss/50"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Hamburger */}
        <button
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block h-[1.5px] w-6 bg-moss transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-moss transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] w-6 bg-moss transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-sand border-t border-moss/10 px-6 py-6 flex flex-col gap-5">
          {getNavItems().map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="nav-link text-base"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-moss text-sand text-sm font-medium"
          >
            {t.contact}
          </a>

          {/* Language Switch Mobile */}
          <div className="flex items-center justify-center gap-3 pt-3 border-t border-moss/10">
            <button
              onClick={() => setLang("id")}
              className={`${
                lang === "id"
                  ? "font-semibold text-moss"
                  : "text-moss/50"
              }`}
            >
              ID
            </button>

            <span className="text-moss/40">|</span>

            <button
              onClick={() => setLang("en")}
              className={`${
                lang === "en"
                  ? "font-semibold text-moss"
                  : "text-moss/50"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}