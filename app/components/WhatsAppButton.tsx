"use client";

import { useLanguage } from "./LanguageContext";
import { translations } from "../lib/i18n";

const PHONE = "573012167170";

export function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language];
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappAria}
      className="fixed bottom-5 right-5 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/5 transition-transform hover:scale-105 hover:bg-[#1ebe57] sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 sm:h-8 sm:w-8"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.377 4 15.001c0 2.379.692 4.595 1.886 6.466L4 29l7.71-1.842A12.94 12.94 0 0 0 16.004 27C22.628 27 28 21.625 28 15S22.628 3 16.004 3Zm0 21.825c-1.99 0-3.92-.55-5.595-1.59l-.4-.245-4.578 1.094 1.115-4.467-.26-.41a9.823 9.823 0 0 1-1.57-5.206c0-5.422 4.41-9.831 9.832-9.831 5.42 0 9.83 4.41 9.83 9.83 0 5.422-4.41 9.825-9.83 9.825Zm5.49-7.34c-.3-.15-1.78-.88-2.054-.98-.276-.1-.477-.15-.677.151-.2.3-.776.98-.951 1.18-.175.2-.35.226-.65.075-.3-.15-1.27-.467-2.42-1.488-.895-.798-1.5-1.785-1.674-2.085-.175-.3-.018-.46.131-.61.135-.135.3-.351.45-.526.151-.176.2-.3.3-.501.1-.2.05-.376-.024-.526-.075-.151-.677-1.632-.927-2.234-.245-.587-.494-.507-.677-.515l-.577-.011a1.1 1.1 0 0 0-.802.376c-.276.301-1.052 1.028-1.052 2.508 0 1.479 1.078 2.909 1.227 3.11.15.2 2.122 3.24 5.144 4.546.719.31 1.279.495 1.716.633.72.229 1.375.196 1.893.119.578-.086 1.78-.727 2.03-1.43.25-.701.25-1.302.176-1.43-.075-.125-.275-.2-.575-.35Z" />
      </svg>
    </a>
  );
}
