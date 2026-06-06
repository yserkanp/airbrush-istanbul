import { getStructuredData } from "@/lib/site";
import type { Lang } from "@/lib/i18n";

export function StructuredData({ lang }: { lang: Lang }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData(lang)).replace(/</g, "\\u003c")
      }}
    />
  );
}
