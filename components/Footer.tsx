import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { dictionary, localizedPath, type Lang } from "@/lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const t = dictionary[lang];

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-2xl uppercase tracking-[0.18em]">Airbrush Istanbul</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/58">
            {lang === "tr"
              ? "Kask, motosiklet, Vespa, bisiklet ve otomotiv projeleri için özel boya ve airbrush atölyesi."
              : "Custom paint and airbrush studio for helmets, motorcycles, Vespas, bicycles and automotive projects."}
          </p>
        </div>
        <div className="space-y-3 text-sm text-white/68">
          <p className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-blood" /> +90 555 670 26 26
          </p>
          <p className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-blood" /> info@airbrushistanbul.com
          </p>
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-blood" /> Kadıköy, Istanbul
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-white/68">
          {Object.entries(t.nav).map(([key, label]) => (
            <Link key={key} href={localizedPath(lang, key === "home" ? "" : key)} className="hover:text-white">
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
