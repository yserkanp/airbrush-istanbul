import { processSteps } from "@/lib/content";
import { type Lang } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "process");
}

export default async function ProcessPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;

  return (
    <section className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blood">{lang === "tr" ? "Süreç" : "Process"}</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {lang === "tr" ? "Fikirden teslimata kontrollü akış." : "A controlled flow from idea to delivery."}
          </h1>
        </div>
        <ol className="relative border-l border-blood/50">
          {processSteps.map((step, index) => (
            <li key={step.en} className="ml-8 grid gap-5 border-b border-white/10 py-8 md:grid-cols-[180px_1fr]">
              <span className="absolute -left-[17px] grid h-8 w-8 place-items-center border border-blood bg-ink text-xs font-bold text-blood">
                {index + 1}
              </span>
              <p className="font-display text-3xl uppercase text-white">{step[lang]}</p>
              <p className="max-w-2xl text-sm leading-6 text-white/60">
                {lang === "tr"
                  ? "Her adımda yüzey kalitesi, tasarım bütünlüğü ve son kat dayanıklılığı birlikte kontrol edilir."
                  : "Each stage checks surface quality, design integrity and final-coat durability together."}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
