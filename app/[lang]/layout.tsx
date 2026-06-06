import { notFound } from "next/navigation";
import { isLang, languages, type Lang } from "@/lib/i18n";
import { PageShell } from "@/components/PageShell";
import { StructuredData } from "@/components/StructuredData";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <PageShell lang={lang as Lang}>
      <StructuredData lang={lang as Lang} />
      {children}
    </PageShell>
  );
}
