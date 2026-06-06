import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} | Custom Paint Without Limits`,
    template: `%s | ${site.name}`
  },
  description:
    "Premium custom paint and airbrush studio in Istanbul for helmets, motorcycles, Vespas, bicycles and automotive projects.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg"
  },
  openGraph: {
    title: `${site.name} | Custom Paint Without Limits`,
    description:
      "Unique airbrush artwork for helmets, motorcycles, Vespas, bicycles and automotive projects.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1600,
        height: 900,
        alt: "Custom painted motorcycle"
      }
    ],
    locale: "tr_TR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "Custom paint and airbrush portfolio studio in Istanbul."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
