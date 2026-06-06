import { Paintbrush, Shield, Bike, Car, Palette, Wrench } from "lucide-react";
import { FadeIn } from "@/components/Animated";
import { services } from "@/lib/content";
import { type Lang } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site";

const icons = [Shield, Wrench, Paintbrush, Bike, Car, Palette];

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "services");
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;

  return (
    <section className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blood">{lang === "tr" ? "Hizmetler" : "Services"}</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {lang === "tr" ? "Servis değil, özel üretim boya işi." : "Not service work. Custom paint craft."}
          </h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.title.en} delay={index * 0.05}>
                <article className="min-h-64 border border-white/10 bg-graphite p-7 transition hover:border-blood/70 hover:bg-[#191919]">
                  <Icon className="h-9 w-9 text-blood" />
                  <h2 className="mt-8 font-display text-3xl uppercase leading-none text-white">{service.title[lang]}</h2>
                  <p className="mt-4 text-sm leading-6 text-white/62">{service.text[lang]}</p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
