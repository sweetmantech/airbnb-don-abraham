export type Language = "en" | "es";

export const translations = {
  en: {
    heroEyebrow: "San Antonio · Cali, Colombia",
    heroTitle: "Don Abraham's homes in Cali",
    heroSubtitle:
      "A family of colonial homes hosted with care in San Antonio, the most beloved neighborhood of Cali. Each home is on Airbnb — tap any card to book.",
    propertiesHeading: "Our properties",
    bedroomsLabel: "bedrooms",
    bedsLabel: "beds",
    bathsLabel: "baths",
    viewOnAirbnb: "View on Airbnb",
    footerNote: "Hosted by Don Abraham · San Antonio, Cali, Colombia",
    languageLabel: "Language",
  },
  es: {
    heroEyebrow: "San Antonio · Cali, Colombia",
    heroTitle: "Las casas de Don Abraham en Cali",
    heroSubtitle:
      "Una familia de casas coloniales atendidas con cariño en San Antonio, el barrio más querido de Cali. Cada casa está en Airbnb — toca cualquier tarjeta para reservar.",
    propertiesHeading: "Nuestras propiedades",
    bedroomsLabel: "habitaciones",
    bedsLabel: "camas",
    bathsLabel: "baños",
    viewOnAirbnb: "Ver en Airbnb",
    footerNote: "Anfitrión: Don Abraham · San Antonio, Cali, Colombia",
    languageLabel: "Idioma",
  },
} as const;
