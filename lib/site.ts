import type { Metadata } from "next";
import { posts, projects } from "./content";
import { dictionary, localizedPath, type Lang } from "./i18n";

export const site = {
  name: "Airbrush Istanbul",
  url: "https://www.airbrushistanbul.com",
  email: "info@airbrushistanbul.com",
  phone: "+90 555 670 26 26",
  address: "Kadikoy, Istanbul, Turkiye",
  ogImage:
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=85"
};

export const pageSlugs = ["", "portfolio", "services", "process", "about", "blog", "contact"] as const;

const pageCopy: Record<(typeof pageSlugs)[number], Record<Lang, { title: string; description: string }>> = {
  "": {
    tr: {
      title: "Custom Paint Without Limits",
      description:
        "Kask, motosiklet, Vespa, bisiklet ve otomotiv projeleri icin premium custom paint ve airbrush portfolyosu."
    },
    en: {
      title: "Custom Paint Without Limits",
      description:
        "Premium custom paint and airbrush portfolio for helmets, motorcycles, Vespas, bicycles and automotive projects."
    }
  },
  portfolio: {
    tr: {
      title: "Portfolyo",
      description: "Airbrush Istanbul tarafindan tamamlanan kask, motosiklet, Vespa, bisiklet ve otomotiv projeleri."
    },
    en: {
      title: "Portfolio",
      description: "Completed helmet, motorcycle, Vespa, bicycle and automotive custom paint projects by Airbrush Istanbul."
    }
  },
  services: {
    tr: {
      title: "Hizmetler",
      description: "Kask boyama, motosiklet boyama, Vespa custom paint, bisiklet ve otomotiv airbrush hizmetleri."
    },
    en: {
      title: "Services",
      description: "Helmet painting, motorcycle painting, Vespa custom paint, bicycle and automotive airbrush services."
    }
  },
  process: {
    tr: {
      title: "Süreç",
      description: "Danismadan teslimata kadar Airbrush Istanbul custom paint sureci."
    },
    en: {
      title: "Process",
      description: "The Airbrush Istanbul custom paint process from consultation to delivery."
    }
  },
  about: {
    tr: {
      title: "Hakkımızda",
      description: "Kadikoy merkezli Airbrush Istanbul custom paint atolyesinin sanat ve iscilik yaklasimi."
    },
    en: {
      title: "About",
      description: "The craft, art and workshop approach behind Airbrush Istanbul in Kadikoy."
    }
  },
  blog: {
    tr: {
      title: "Blog",
      description: "Custom paint, airbrush sanat, kask boyama ve motosiklet boya sureci hakkinda SEO uyumlu yazilar."
    },
    en: {
      title: "Blog",
      description: "SEO-ready articles about custom paint, airbrush art, helmet painting and motorcycle paint process."
    }
  },
  contact: {
    tr: {
      title: "İletişim",
      description: "Airbrush Istanbul ile kask, motosiklet, Vespa, bisiklet veya otomotiv projeniz icin iletisime gecin."
    },
    en: {
      title: "Contact",
      description: "Contact Airbrush Istanbul for a helmet, motorcycle, Vespa, bicycle or automotive paint project."
    }
  }
};

export function getPageMetadata(lang: Lang, slug: (typeof pageSlugs)[number]): Metadata {
  const copy = pageCopy[slug][lang];
  const path = localizedPath(lang, slug);

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: path,
      languages: {
        tr: localizedPath("tr", slug),
        en: localizedPath("en", slug)
      }
    },
    openGraph: {
      title: `${copy.title} | ${site.name}`,
      description: copy.description,
      url: `${site.url}${path}`,
      siteName: site.name,
      images: [{ url: site.ogImage, width: 1600, height: 900, alt: site.name }],
      locale: lang === "tr" ? "tr_TR" : "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${copy.title} | ${site.name}`,
      description: copy.description,
      images: [site.ogImage]
    }
  };
}

export function getStructuredData(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kadikoy",
      addressRegion: "Istanbul",
      addressCountry: "TR"
    },
    image: site.ogImage,
    description: dictionary[lang].home.subheadline,
    sameAs: [site.url],
    makesOffer: projects.slice(0, 6).map((project) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "CreativeWork",
        name: project.title[lang],
        description: project.description[lang]
      }
    })),
    subjectOf: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title[lang],
      description: post.excerpt[lang]
    }))
  };
}
