import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/Animated";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/content";
import { dictionary, localizedPath, type Lang } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "");
}

export default async function HomePage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = dictionary[lang];
  const featured = projects.filter((project) => project.featured).slice(0, 8);

  return (
    <>
      <section className="noise relative min-h-screen overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=2200&q=90"
          alt="Custom motorcycle paint project"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.45),rgba(0,0,0,0.72))]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-3 border border-blood/40 bg-black/45 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/78 backdrop-blur">
              <Sparkles className="h-4 w-4 text-blood" />
              Premium Custom Paint Studio
            </div>
            <h1 className="font-display text-6xl uppercase leading-[0.88] text-white text-balance sm:text-7xl lg:text-8xl">
              {t.home.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">{t.home.subheadline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href={localizedPath(lang, "portfolio")}
                className="inline-flex items-center gap-3 bg-blood px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-black"
              >
                {t.common.viewPortfolio} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={localizedPath(lang, "contact")}
                className="inline-flex items-center gap-3 border border-white/20 bg-white/8 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white hover:bg-white hover:text-black"
              >
                {t.common.contact}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ink px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-blood">{t.common.featured}</p>
                <h2 className="mt-3 max-w-3xl font-display text-5xl uppercase leading-none text-white">
                  {lang === "tr" ? "Atölyenin vitrini işin kendisi." : "The work is the showroom."}
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-white/58">{t.home.intro}</p>
            </div>
          </FadeIn>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.04}>
                <ProjectCard project={project} lang={lang} priority={index < 2} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-graphite px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["01", lang === "tr" ? "El işçiliği" : "Handcraft"],
            ["02", lang === "tr" ? "Otomotiv kalite yüzey" : "Automotive-grade finish"],
            ["03", lang === "tr" ? "Tek seferlik tasarım" : "One-off design"]
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-5 border-l border-blood/50 bg-black/30 p-6">
              <Gauge className="h-8 w-8 text-blood" />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">{number}</p>
                <p className="font-display text-2xl uppercase text-white">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
