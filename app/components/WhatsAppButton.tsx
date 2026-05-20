"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useLanguage } from "./LanguageContext";
import { translations } from "../lib/i18n";

const PHONE = "573012167170";
const AVATAR =
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1247842176905111069/original/7c17961f-e494-42e3-aa66-498690faf5f8.jpeg?im_w=240";

export function WhatsAppButton() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <FloatingWhatsApp
      key={language}
      phoneNumber={PHONE}
      accountName={t.whatsappAccountName}
      statusMessage={t.whatsappStatus}
      chatMessage={t.whatsappGreeting}
      placeholder={t.whatsappPlaceholder}
      avatar={AVATAR}
      allowClickAway
      allowEsc
      notification={false}
    />
  );
}
