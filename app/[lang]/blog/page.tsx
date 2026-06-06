import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { posts } from "@/lib/content";
import { dictionary, localizedPath, type Lang } from "@/lib/i18n";
import { getPageMetadata } from "@/lib/site";

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  return getPageMetadata(lang, "blog");
}

export default async function BlogPage({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params;
  const t = dictionary[lang];

  return (
    <section className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-blood">{t.nav.blog}</p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">
            {lang === "tr" ? "Custom paint bilgi arşivi." : "Custom paint knowledge archive."}
          </h1>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.slug} href={localizedPath(lang, `blog/${post.slug}`)} className="group border border-white/10 bg-graphite p-7 transition hover:border-blood/70">
              <div className="flex items-start justify-between gap-5">
                <h2 className="font-display text-3xl uppercase leading-none text-white">{post.title[lang]}</h2>
                <ArrowUpRight className="h-5 w-5 text-white/45 transition group-hover:text-blood" />
              </div>
              <p className="mt-4 text-sm leading-6 text-white/62">{post.excerpt[lang]}</p>
              <p className="mt-8 text-xs uppercase tracking-[0.22em] text-blood">{t.common.readArticle}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
