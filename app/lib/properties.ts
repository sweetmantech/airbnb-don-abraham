export type Property = {
  id: string;
  name: string;
  neighborhood: string;
  bedrooms: number;
  beds: number;
  baths: number;
  rating: number;
  airbnbUrl: string;
  photos: string[];
  description: {
    en: string;
    es: string;
  };
};

export const properties: Property[] = [
  {
    id: "terraza-360",
    name: "Casa en San Antonio con mágica Terraza 360 y brisa",
    neighborhood: "San Antonio, Cali",
    bedrooms: 4,
    beds: 6,
    baths: 2,
    rating: 5.0,
    airbnbUrl:
      "https://www.airbnb.com.co/rooms/1247842176905111069?unique_share_id=3acba457-cedf-4fc1-8b8e-8c0dcb6d8bfa",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1247842176905111069/original/7c17961f-e494-42e3-aa66-498690faf5f8.jpeg?im_w=1200",
    ],
    description: {
      en: "A San Antonio home with a magical 360° rooftop terrace and gentle breeze — perfect for families and groups wanting space, views, and a true Cali atmosphere.",
      es: "Una casa en San Antonio con mágica terraza 360° y brisa — perfecta para familias y grupos que buscan espacio, vistas y la verdadera atmósfera caleña.",
    },
  },
  {
    id: "joyita-colonial",
    name: "Joyita Colonial en San Antonio · Terraza con encanto",
    neighborhood: "San Antonio, Cali",
    bedrooms: 4,
    beds: 4,
    baths: 3,
    rating: 4.86,
    airbnbUrl:
      "https://www.airbnb.com.co/rooms/1262755179099617421?unique_share_id=08624a17-083f-470c-83c7-51036af5bbab",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI2Mjc1NTE3OTA5OTYxNzQyMQ==/original/a2352ef4-49e0-41be-9da4-612cee131bf0.png?im_w=1200",
    ],
    description: {
      en: "A colonial gem in the historic San Antonio neighborhood, with a charming terrace and classic Caleño character throughout.",
      es: "Una joyita colonial en el histórico barrio de San Antonio, con terraza encantadora y carácter caleño clásico en cada rincón.",
    },
  },
  {
    id: "casa-colonial-ubicacion",
    name: "Casa colonial en San Antonio · Excelente ubicación",
    neighborhood: "San Antonio, Cali",
    bedrooms: 1,
    beds: 1,
    baths: 1,
    rating: 5.0,
    airbnbUrl:
      "https://www.airbnb.com.co/rooms/1108680829206860134?unique_share_id=fd10abd5-0971-4198-bc86-18ebe2e57bbe",
    photos: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1108680829206860134/original/521f1a73-04e7-40df-a0f3-649f3240ef93.jpeg?im_w=1200",
    ],
    description: {
      en: "A cozy colonial home for couples or solo travelers, with an unbeatable location in the heart of San Antonio.",
      es: "Una acogedora casa colonial para parejas o viajeros solos, con una ubicación inmejorable en el corazón de San Antonio.",
    },
  },
];
