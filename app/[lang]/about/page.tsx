import Image from "next/image";
import { type Lang } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "about");
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;

  return (
    <section className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85"
            alt="Custom paint workshop"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blood">{lang === "tr" ? "Hakkımızda" : "About"}</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {lang === "tr" ? "Boya kabini, sanat masası ve performans garajı." : "Paint booth, art table and performance garage."}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/68">
            {lang === "tr"
              ? "Airbrush Istanbul, hazır şablonlardan uzak duran; her kask, depo, Vespa gövdesi veya paneli sahibine özel bir karaktere dönüştüren custom paint atölyesidir."
              : "Airbrush Istanbul is a custom paint studio built away from template work, turning every helmet, tank, Vespa body or panel into a character made for its owner."}
          </p>
          <p className="mt-5 text-white/58">
            {lang === "tr"
              ? "Odak noktası büyük fotoğraflarla görülebilen işçilik, derin vernik, kontrollü yüzey hazırlığı ve tek seferlik airbrush detaylarıdır."
              : "The focus is visible craft: deep clear coat, controlled surface preparation and one-off airbrush detail that deserves large-format photography."}
          </p>
        </div>
      </div>
    </section>
  );
}
