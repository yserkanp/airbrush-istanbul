import Image from "next/image";
import { notFound } from "next/navigation";
import { categoryLabels, projects } from "@/lib/content";
import { dictionary, languages, localizedPath, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return languages.flatMap((lang) => projects.map((project) => ({ lang, slug: project.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title[lang],
    description: project.description[lang],
    alternates: {
      canonical: localizedPath(lang, `portfolio/${project.slug}`),
      languages: {
        tr: localizedPath("tr", `portfolio/${project.slug}`),
        en: localizedPath("en", `portfolio/${project.slug}`)
      }
    },
    openGraph: {
      title: project.title[lang],
      description: project.description[lang],
      url: `${site.url}${localizedPath(lang, `portfolio/${project.slug}`)}`,
      images: [{ url: project.images[0] }]
    }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const t = dictionary[lang];

  return (
    <article className="bg-ink pb-24 pt-28">
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image src={project.images[0]} alt={project.title[lang]} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/45 to-black/25" />
        <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-7xl items-end px-4 pb-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.3em] text-blood">{categoryLabels[project.category][lang]}</p>
            <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white lg:text-8xl">
              {project.title[lang]}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{project.description[lang]}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.45fr] lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2">
          {project.images.map((image, index) => (
            <div key={image} className={index === 0 ? "relative aspect-[16/10] sm:col-span-2" : "relative aspect-square"}>
              <Image src={image} alt={`${project.title[lang]} gallery ${index + 1}`} fill className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
            </div>
          ))}
        </div>
        <aside className="border border-white/10 bg-graphite p-6">
          <h2 className="font-display text-3xl uppercase text-white">{t.common.projectBrief}</h2>
          <p className="mt-4 text-sm leading-6 text-white/62">{project.description[lang]}</p>
          <h3 className="mt-8 text-sm uppercase tracking-[0.24em] text-blood">{t.common.techniques}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/72">
            {project.techniques.map((technique) => (
              <li key={technique} className="border-l border-blood/50 pl-3">{technique}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 font-display text-4xl uppercase text-white">{t.common.beforeAfter}</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-steel">
            <Image src={project.before} alt="Before custom paint" fill className="object-cover opacity-75" sizes="50vw" />
            <span className="absolute left-4 top-4 bg-black/70 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white/75">Before</span>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-steel">
            <Image src={project.after} alt="After custom paint" fill className="object-cover" sizes="50vw" />
            <span className="absolute left-4 top-4 bg-blood px-3 py-2 text-xs uppercase tracking-[0.18em] text-white">After</span>
          </div>
        </div>
      </section>
    </article>
  );
}
