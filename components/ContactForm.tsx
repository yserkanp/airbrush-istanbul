"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { dictionary, type Lang } from "@/lib/i18n";

export function ContactForm({ lang }: { lang: Lang }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const t = dictionary[lang];

  async function submit(formData: FormData) {
    setStatus("sending");
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    });
    setStatus(response.ok ? "sent" : "error");
  }

  return (
    <form action={submit} className="border border-white/10 bg-graphite p-6">
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-white/68">
          {t.common.formName}
          <input
            name="name"
            required
            autoComplete="name"
            className="border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-blood"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          {t.common.formEmail}
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-blood"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          {t.common.formProject}
          <textarea
            name="project"
            required
            rows={8}
            className="resize-none border border-white/10 bg-black px-4 py-4 text-white outline-none focus:border-blood"
          />
        </label>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-3 bg-blood px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-black disabled:cursor-wait disabled:opacity-60"
        >
          <Send className="h-4 w-4" />
          {status === "sending" ? (lang === "tr" ? "Gönderiliyor" : "Sending") : t.common.send}
        </button>
        {status === "sent" && (
          <p className="border border-blood/40 bg-blood/10 p-3 text-sm text-white">
            {lang === "tr" ? "Mesaj alindi. Size e-posta veya telefon ile donus yapilacak." : "Message received. The studio will reply by email or phone."}
          </p>
        )}
        {status === "error" && (
          <p className="border border-white/15 bg-black p-3 text-sm text-white/70">
            {lang === "tr" ? "Mesaj gonderilemedi. Lutfen e-posta ile ulasin." : "The message could not be sent. Please contact the studio by email."}
          </p>
        )}
      </div>
    </form>
  );
}
