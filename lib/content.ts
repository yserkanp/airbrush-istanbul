import type { Lang } from "./i18n";

export type Category =
  | "helmets"
  | "motorcycles"
  | "vespa"
  | "bicycles"
  | "automotive"
  | "special-projects";

export const categoryLabels: Record<Category, Record<Lang, string>> = {
  helmets: { tr: "Kasklar", en: "Helmets" },
  motorcycles: { tr: "Motosikletler", en: "Motorcycles" },
  vespa: { tr: "Vespa", en: "Vespa" },
  bicycles: { tr: "Bisikletler", en: "Bicycles" },
  automotive: { tr: "Otomotiv", en: "Automotive" },
  "special-projects": { tr: "Özel Projeler", en: "Special Projects" }
};

export const projects = [
  {
    slug: "carbon-flame-helmet",
    category: "helmets",
    featured: true,
    title: { tr: "Carbon Flame Kask", en: "Carbon Flame Helmet" },
    description: {
      tr: "Mat karbon hissi, derin kırmızı alevler ve şeffaf kat altında keskin gölge geçişleri.",
      en: "A matte carbon attitude with deep red flame work and sharp shadow transitions under clear coat."
    },
    techniques: ["Candy red", "Carbon texture", "Pinstripe", "High gloss clear"],
    images: [
      "https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "redline-tank-set",
    category: "motorcycles",
    featured: true,
    title: { tr: "Redline Depo Seti", en: "Redline Tank Set" },
    description: {
      tr: "Depo ve çamurluklarda agresif siyah zemin, metalik kırmızı katman ve el çekimi çizgiler.",
      en: "Aggressive black base, metallic red layers and hand-pulled line work across tank and fenders."
    },
    techniques: ["Metallic base", "Hand masking", "Airbrush shadows", "Ceramic clear"],
    images: [
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1558980394-0a06c463e943?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1524591652733-73fa1ae7b5ee?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "vespa-rosso-corsa",
    category: "vespa",
    featured: true,
    title: { tr: "Vespa Rosso Corsa", en: "Vespa Rosso Corsa" },
    description: {
      tr: "Klasik Vespa formuna yarış kırmızısı, ince gölge oyunları ve modern atölye dokusu.",
      en: "Race red energy, subtle shadow work and a modern workshop finish on classic Vespa curves."
    },
    techniques: ["Color match", "Fine flake", "Panel repair", "Wet sand polish"],
    images: [
      "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1580310614651-d7e25a95b6b4?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "track-bike-ghost-graphics",
    category: "bicycles",
    featured: true,
    title: { tr: "Ghost Graphic Kadro", en: "Ghost Graphic Frame" },
    description: {
      tr: "Bisiklet kadrosunda düşük kontrast grafikler, kırmızı detaylar ve hafif yarış karakteri.",
      en: "Low-contrast frame graphics, red detailing and a lightweight race character."
    },
    techniques: ["Frame stripping", "Ghost graphics", "2K clear", "Logo masking"],
    images: [
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "automotive-panel-art",
    category: "automotive",
    featured: true,
    title: { tr: "Automotive Panel Art", en: "Automotive Panel Art" },
    description: {
      tr: "Kaput ve panel yüzeylerinde derinlikli airbrush, parlak kat ve galeri seviyesinde bitiş.",
      en: "Dimensional airbrush artwork, gloss depth and gallery-grade finish across automotive panels."
    },
    techniques: ["Panel prep", "Freehand airbrush", "Pearl layers", "Mirror polish"],
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "one-off-skull-piece",
    category: "special-projects",
    featured: true,
    title: { tr: "Tek Parça Skull Art", en: "One-Off Skull Art" },
    description: {
      tr: "Show parçası için serbest el airbrush, smoke katmanları ve kırmızı ışık vurguları.",
      en: "Freehand airbrush, smoke layers and red light accents for a one-off show piece."
    },
    techniques: ["Freehand sketch", "Monochrome shading", "Candy highlights", "Show clear"],
    images: [
      "https://images.unsplash.com/photo-1515923256482-1c04580b477c?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "racing-helmet-numbered",
    category: "helmets",
    featured: true,
    title: { tr: "Numaralı Yarış Kaskı", en: "Numbered Racing Helmet" },
    description: {
      tr: "Pist kullanımı için hızlı okunan numara, agresif kontrast ve dayanıklı vernik.",
      en: "Fast-read racing numbers, aggressive contrast and durable clear coat for track use."
    },
    techniques: ["Number masking", "Race stripes", "UV stable clear", "Wet sanding"],
    images: [
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    slug: "classic-fairing-restomod",
    category: "motorcycles",
    featured: true,
    title: { tr: "Classic Fairing Restomod", en: "Classic Fairing Restomod" },
    description: {
      tr: "Eski grenaj setine çağdaş siyah-kırmızı grafikler ve derin parlaklık kazandırıldı.",
      en: "A vintage fairing set rebuilt with modern black-red graphics and deep gloss."
    },
    techniques: ["Fairing repair", "Primer blocking", "Graphic layout", "Deep clear"],
    images: [
      "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1517846693594-1567da72af75?auto=format&fit=crop&w=1600&q=85"
    ],
    before: "https://images.unsplash.com/photo-1508357941501-0924cf312bbd?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?auto=format&fit=crop&w=1200&q=80"
  }
] as const satisfies Array<{
  slug: string;
  category: Category;
  featured: boolean;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  techniques: string[];
  images: string[];
  before: string;
  after: string;
}>;

export const services = [
  {
    title: { tr: "Kask Boyama", en: "Helmet Painting" },
    text: {
      tr: "Yarış, touring veya koleksiyon kaskları için tamamen kişisel grafikler.",
      en: "Fully personal graphics for racing, touring or collector helmets."
    }
  },
  {
    title: { tr: "Motosiklet Boyama", en: "Motorcycle Painting" },
    text: {
      tr: "Depo, grenaj, çamurluk ve özel parçalarda premium boya işleri.",
      en: "Premium paintwork for tanks, fairings, fenders and custom parts."
    }
  },
  {
    title: { tr: "Vespa Custom Paint", en: "Vespa Custom Paint" },
    text: {
      tr: "Klasik scooter formlarına butik renk, grafik ve vernik uygulamaları.",
      en: "Boutique color, graphic and clear coat applications for classic scooter forms."
    }
  },
  {
    title: { tr: "Bisiklet Boyama", en: "Bicycle Painting" },
    text: {
      tr: "Kadro, maşa ve marka detaylarında hafif, net ve dayanıklı bitişler.",
      en: "Lightweight, precise and durable finishes for frames, forks and brand details."
    }
  },
  {
    title: { tr: "Otomotiv Custom Paint", en: "Automotive Custom Paint" },
    text: {
      tr: "Panel, kaput ve iç trim parçalarında otomotiv seviyesinde yüzey kalitesi.",
      en: "Automotive-grade surface quality across panels, hoods and interior trim."
    }
  },
  {
    title: { tr: "Full Airbrush Artwork", en: "Full Airbrush Artwork" },
    text: {
      tr: "Serbest el illüstrasyon, portre, smoke, flame ve tek parça sanat işleri.",
      en: "Freehand illustration, portrait, smoke, flame and one-off art pieces."
    }
  }
];

export const processSteps = [
  { tr: "Danışma", en: "Consultation" },
  { tr: "Konsept Tasarım", en: "Concept Design" },
  { tr: "Yüzey Hazırlığı", en: "Surface Preparation" },
  { tr: "Boyama", en: "Painting" },
  { tr: "Airbrush Artwork", en: "Airbrush Artwork" },
  { tr: "Clear Coat", en: "Clear Coat" },
  { tr: "Teslim", en: "Delivery" }
] as const;

export const posts = [
  {
    slug: "custom-helmet-painting-guide",
    title: { tr: "Custom Kask Boyama Rehberi", en: "Custom Helmet Painting Guide" },
    excerpt: {
      tr: "Kask projesi planlarken tasarım, güvenlik ve yüzey hazırlığında bilinmesi gerekenler.",
      en: "What to know about design, safety and surface preparation before planning a helmet project."
    }
  },
  {
    slug: "vespa-custom-paint-ideas",
    title: { tr: "Vespa Custom Paint Fikirleri", en: "Vespa Custom Paint Ideas" },
    excerpt: {
      tr: "Klasik Vespa ruhunu bozmadan daha kişisel bir görsel kimlik yaratma yolları.",
      en: "Ways to create a more personal visual identity without losing the classic Vespa spirit."
    }
  },
  {
    slug: "airbrush-art-explained",
    title: { tr: "Airbrush Sanatı Nedir?", en: "Airbrush Art Explained" },
    excerpt: {
      tr: "Katman, gölge, transparan boya ve vernik derinliği airbrush işini nasıl özel kılar?",
      en: "How layers, shadows, transparent paint and clear coat depth define custom airbrush work."
    }
  },
  {
    slug: "motorcycle-paint-process",
    title: { tr: "Motosiklet Boya Süreci", en: "Motorcycle Paint Process" },
    excerpt: {
      tr: "Sökümden son polisaja kadar profesyonel motosiklet boya projesinin aşamaları.",
      en: "The stages of a professional motorcycle paint project from disassembly to final polish."
    }
  },
  {
    slug: "custom-paint-trends",
    title: { tr: "Custom Paint Trendleri", en: "Custom Paint Trends" },
    excerpt: {
      tr: "Candy renkler, ghost grafikler, retro yarış çizgileri ve koleksiyon işleri.",
      en: "Candy colors, ghost graphics, retro race stripes and collector-grade paintwork."
    }
  }
];
