"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "../lib/i18n";

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="sticky top-0 z-10 border-b border-[color:var(--clay)]/20 bg-[color:var(--sand)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="font-serif text-xl font-semibold tracking-tight text-[color:var(--clay-dark)]">
          Don Abraham
        </span>
        <div
          role="group"
          aria-label={t.languageLabel}
          className="flex items-center gap-1 rounded-full border border-[color:var(--clay)]/30 p-1"
        >
          <button
            type="button"
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              language === "en"
                ? "bg-[color:var(--clay)] text-white"
                : "text-[color:var(--clay-dark)] hover:bg-[color:var(--clay)]/10"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLanguage("es")}
            aria-pressed={language === "es"}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              language === "es"
                ? "bg-[color:var(--clay)] text-white"
                : "text-[color:var(--clay-dark)] hover:bg-[color:var(--clay)]/10"
            }`}
          >
            ES
          </button>
        </div>
      </div>
    </header>
  );
}
