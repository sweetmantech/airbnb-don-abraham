"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "../lib/i18n";
import { properties } from "../lib/properties";
import { SiteHeader } from "./SiteHeader";
import { PropertyCard } from "./PropertyCard";

export function SitePage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[color:var(--sand)]">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 sm:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--clay)]">
            {t.heroEyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight text-[color:var(--clay-dark)] sm:text-5xl md:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-700">
            {t.heroSubtitle}
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          <h2 className="mb-8 font-serif text-2xl font-semibold text-[color:var(--clay-dark)]">
            {t.propertiesHeading}
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-[color:var(--clay)]/20 bg-[color:var(--sand-deep)] px-6 py-8 text-center text-sm text-[color:var(--clay-dark)]">
        {t.footerNote}
      </footer>
    </div>
  );
}
