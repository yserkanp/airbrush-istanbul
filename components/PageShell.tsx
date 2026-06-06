import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import type { Lang } from "@/lib/i18n";

export function PageShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <>
      <Header lang={lang} />
      <main>{children}</main>
      <Footer lang={lang} />
    </>
  );
}
