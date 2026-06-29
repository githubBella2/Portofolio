import { useState } from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [lang, setLang] = useState<"id" | "en">("id");

  return (
    <>
      <Head>
        <title>Margareta Kristiana — Fullstack Developer</title>
      </Head>

      <div className="bg-sand">
        <Navbar lang={lang} setLang={setLang} />

        <Hero lang={lang} />
        <Skill lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />

        <Footer />
      </div>
    </>
  );
}