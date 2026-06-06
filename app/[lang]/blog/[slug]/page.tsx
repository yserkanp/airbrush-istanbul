import { notFound } from "next/navigation";
import { posts } from "@/lib/content";
import { languages, localizedPath, type Lang } from "@/lib/i18n";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return languages.flatMap((lang) => posts.map((post) => ({ lang, slug: post.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title[lang],
    description: post.excerpt[lang],
    alternates: {
      canonical: localizedPath(lang, `blog/${post.slug}`),
      languages: {
        tr: localizedPath("tr", `blog/${post.slug}`),
        en: localizedPath("en", `blog/${post.slug}`)
      }
    },
    openGraph: {
      title: post.title[lang],
      description: post.excerpt[lang],
      url: `${site.url}${localizedPath(lang, `blog/${post.slug}`)}`,
      type: "article",
      images: [{ url: site.ogImage }]
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: Lang; slug: string }> }) {
  const { lang, slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="bg-ink px-4 pb-24 pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm uppercase tracking-[0.3em] text-blood">Airbrush Istanbul Journal</p>
        <h1 className="mt-4 font-display text-6xl uppercase leading-none text-white">{post.title[lang]}</h1>
        <p className="mt-6 text-lg leading-8 text-white/68">{post.excerpt[lang]}</p>
        <div className="mt-10 max-w-none space-y-6 border-t border-white/10 pt-8 text-white/65 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:uppercase [&_h2]:text-white [&_p]:leading-7">
          <p>
            {lang === "tr"
              ? "Bu yazı yapısı SEO için hazırlanmış bir içerik şablonudur. Proje fotoğrafları, bakım önerileri, boya teknikleri ve müşteri kararını kolaylaştıran bölüm başlıklarıyla genişletilebilir."
              : "This article structure is prepared as an SEO-ready content template. It can be expanded with project photography, care notes, paint techniques and decision-focused section headings."}
          </p>
          <h2>{lang === "tr" ? "Tasarım yaklaşımı" : "Design approach"}</h2>
          <p>
            {lang === "tr"
              ? "İyi custom paint işi yüzeyi kapatmakla değil, parçanın formunu güçlendiren grafik ritmi kurmakla başlar."
              : "Good custom paint starts by building a graphic rhythm that strengthens the form of the part, not simply covering the surface."}
          </p>
          <h2>{lang === "tr" ? "Teknik dikkat noktaları" : "Technical notes"}</h2>
          <p>
            {lang === "tr"
              ? "Yüzey hazırlığı, astar, maskeleme, airbrush katmanları ve vernik kalitesi son görünüm kadar uzun ömrü de belirler."
              : "Surface preparation, primer, masking, airbrush layers and clear coat quality define both the final look and long-term durability."}
          </p>
        </div>
      </div>
    </article>
  );
}
