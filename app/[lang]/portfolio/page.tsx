import { PortfolioFilter } from "@/components/PortfolioFilter";
import { dictionary, type Lang } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "portfolio");
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = dictionary[lang];

  return (
    <section className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blood">{t.nav.portfolio}</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {lang === "tr" ? "Projeler boya kabininden konuşur." : "Projects speak from the paint booth."}
          </h1>
          <p className="mt-5 text-white/62">
            {lang === "tr"
              ? "Kasktan otomotive uzanan işleri kategoriye göre filtreleyin ve her projenin detayına inin."
              : "Filter work from helmets to automotive pieces and open each project for the full detail."}
          </p>
        </div>
        <PortfolioFilter lang={lang} />
      </div>
    </section>
  );
}
