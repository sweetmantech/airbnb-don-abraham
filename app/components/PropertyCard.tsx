"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { translations } from "../lib/i18n";
import type { Property } from "../lib/properties";

export function PropertyCard({ property }: { property: Property }) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[color:var(--clay)]/10 transition-shadow hover:shadow-lg">
      <a
        href={property.airbnbUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={property.photos[0]}
          alt={property.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[color:var(--clay-dark)] shadow-sm">
          ★ {property.rating.toFixed(2)}
        </span>
      </a>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div>
          <h3 className="font-serif text-lg font-semibold leading-snug text-[color:var(--clay-dark)]">
            {property.name}
          </h3>
          <p className="mt-1 text-sm text-[color:var(--clay)]">
            {property.neighborhood}
          </p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-zinc-700">
          {property.description[language]}
        </p>
        <p className="text-xs uppercase tracking-wide text-zinc-500">
          {property.bedrooms} {t.bedroomsLabel} · {property.beds} {t.bedsLabel} ·{" "}
          {property.baths} {t.bathsLabel}
        </p>
        <a
          href={property.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--clay)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--clay-dark)]"
        >
          {t.viewOnAirbnb}
        </a>
      </div>
    </article>
  );
}
