import Link from "next/link";
import { Flame } from "lucide-react";
import { dictionary, languageNames, languages, localizedPath, type Lang } from "@/lib/i18n";

const navItems = ["portfolio", "services", "process", "about", "blog", "contact"] as const;

export function Header({ lang }: { lang: Lang }) {
  const t = dictionary[lang];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:flex-nowrap lg:px-8">
        <Link href={localizedPath(lang)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-blood/55 bg-blood/12">
            <Flame className="h-5 w-5 text-blood" aria-hidden />
          </span>
          <span className="font-display text-lg uppercase tracking-[0.18em] text-white">
            Airbrush Istanbul
          </span>
        </Link>
        <nav className="order-last flex w-full items-center gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm text-white/72 lg:order-none lg:w-auto lg:overflow-visible lg:pb-0">
          {navItems.map((item) => (
            <Link key={item} href={localizedPath(lang, item)} className="transition hover:text-white">
              {t.nav[item]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 text-xs font-semibold">
          {languages.map((item) => (
            <Link
              key={item}
              href={localizedPath(item)}
              className={`border px-3 py-2 transition ${
                item === lang
                  ? "border-blood bg-blood text-white"
                  : "border-white/15 bg-white/5 text-white/65 hover:text-white"
              }`}
            >
              {languageNames[item]}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
