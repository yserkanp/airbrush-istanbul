import { Mail, MapPin, Phone } from "lucide-react";
import { dictionary, type Lang } from "@/lib/i18n";
import { ContactForm } from "@/components/ContactForm";
import { site, getPageMetadata } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = dictionary[lang];

  return (
    <section className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-blood">{t.nav.contact}</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {lang === "tr" ? "Projenizi boya kabinine taşıyalım." : "Bring your project to the booth."}
          </h1>
          <div className="mt-10 space-y-4 text-white/70">
            <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blood" /> {site.phone}</p>
            <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blood" /> {site.email}</p>
            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-blood" /> Kadıköy, Istanbul</p>
          </div>
          <iframe
            title="Airbrush Istanbul Google Maps"
            className="mt-8 h-72 w-full border border-white/10 grayscale"
            loading="lazy"
            src="https://www.google.com/maps?q=Kad%C4%B1k%C3%B6y%20Istanbul%20Airbrush%20Istanbul&output=embed"
          />
        </div>
        <ContactForm lang={lang} />
      </div>
    </section>
  );
}
