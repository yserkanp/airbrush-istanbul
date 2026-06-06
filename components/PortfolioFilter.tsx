"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { categoryLabels, projects, type Category } from "@/lib/content";
import { dictionary, type Lang } from "@/lib/i18n";
import { ProjectCard } from "./ProjectCard";

const categories: Category[] = ["helmets", "motorcycles", "vespa", "bicycles", "automotive", "special-projects"];

export function PortfolioFilter({ lang }: { lang: Lang }) {
  const [active, setActive] = useState<Category | "all">("all");
  const visible = active === "all" ? projects : projects.filter((project) => project.category === active);
  const t = dictionary[lang];

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("all")}
          className={`border px-4 py-3 text-sm transition ${
            active === "all" ? "border-blood bg-blood text-white" : "border-white/15 bg-white/5 text-white/66"
          }`}
        >
          {t.common.all}
        </button>
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setActive(category)}
            className={`border px-4 py-3 text-sm transition ${
              active === category ? "border-blood bg-blood text-white" : "border-white/15 bg-white/5 text-white/66"
            }`}
          >
            {categoryLabels[category][lang]}
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <motion.div key={project.slug} layout>
            <ProjectCard project={project} lang={lang} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
