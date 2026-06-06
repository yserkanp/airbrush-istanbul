import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { categoryLabels, type projects } from "@/lib/content";
import { localizedPath, type Lang } from "@/lib/i18n";

type Project = (typeof projects)[number];

export function ProjectCard({ project, lang, priority = false }: { project: Project; lang: Lang; priority?: boolean }) {
  return (
    <Link
      href={localizedPath(lang, `portfolio/${project.slug}`)}
      className="group relative block overflow-hidden bg-graphite shadow-redline"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={project.images[0]}
          alt={project.title[lang]}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale-[0.18] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-3 inline-flex border border-blood/40 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-blood backdrop-blur">
          {categoryLabels[project.category][lang]}
        </div>
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-2xl uppercase leading-none text-white">{project.title[lang]}</h3>
          <ArrowUpRight className="h-5 w-5 text-white/65 transition group-hover:text-blood" />
        </div>
      </div>
    </Link>
  );
}
