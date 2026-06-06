export const languages = ["tr", "en"] as const;

export type Lang = (typeof languages)[number];

export const languageNames: Record<Lang, string> = {
  tr: "TR",
  en: "EN"
};

export const defaultLang: Lang = "tr";

export const dictionary = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      portfolio: "Portfolyo",
      services: "Hizmetler",
      process: "Süreç",
      about: "Hakkımızda",
      blog: "Blog",
      contact: "İletişim"
    },
    common: {
      studio: "Airbrush Istanbul",
      viewPortfolio: "Portfolyoyu İncele",
      contact: "İletişim",
      featured: "Öne Çıkan Projeler",
      all: "Tümü",
      techniques: "Kullanılan Teknikler",
      beforeAfter: "Öncesi / Sonrası",
      projectBrief: "Proje Detayı",
      readArticle: "Yazıyı Oku",
      formName: "Adınız",
      formEmail: "E-posta",
      formProject: "Projeniz",
      send: "Gönder"
    },
    home: {
      headline: "Custom Paint Without Limits",
      subheadline:
        "Unique airbrush artwork for helmets, motorcycles, Vespas, bicycles and automotive projects.",
      intro:
        "Kadıköy merkezli atölyede her yüzey; boya, airbrush ve el işçiliğiyle tek seferlik bir imzaya dönüşür."
    }
  },
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio",
      services: "Services",
      process: "Process",
      about: "About",
      blog: "Blog",
      contact: "Contact"
    },
    common: {
      studio: "Airbrush Istanbul",
      viewPortfolio: "View Portfolio",
      contact: "Contact",
      featured: "Featured Projects",
      all: "All",
      techniques: "Techniques Used",
      beforeAfter: "Before / After",
      projectBrief: "Project Brief",
      readArticle: "Read Article",
      formName: "Name",
      formEmail: "Email",
      formProject: "Project",
      send: "Send"
    },
    home: {
      headline: "Custom Paint Without Limits",
      subheadline:
        "Unique airbrush artwork for helmets, motorcycles, Vespas, bicycles and automotive projects.",
      intro:
        "From a Kadikoy workshop, every surface becomes a one-off signature through paint, airbrush and hand-built detail."
    }
  }
} as const;

export function isLang(value: string): value is Lang {
  return languages.includes(value as Lang);
}

export function localizedPath(lang: Lang, path = "") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${cleanPath === "/" ? "" : cleanPath}`;
}
