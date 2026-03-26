/**
 * CookieConsent.tsx
 * Consent banner for non-essential tracking services on Handyswap.com
 * Opens automatically until a choice is made and can be reopened later
 */

import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  CONSENT_OPEN_EVENT,
  getStoredConsent,
  setConsent,
} from "@/lib/consent";

const translations = {
  de: {
    title: "Cookie-Einstellungen",
    message:
      "Wir verwenden nur notwendige Technologien standardmäßig. Google Tag Manager und Umami werden erst nach deiner Einwilligung geladen, um Reichweite und Kampagnen datenschutzkonform zu messen.",
    essential: "Notwendige Cookies",
    essentialDesc: "Erforderlich für die grundlegende Funktionalität der Website.",
    tracking: "Analyse- & Marketingdienste",
    trackingDesc: "Google Tag Manager und Umami helfen uns, Besuche, Kampagnen und Formular-Performance zu verstehen.",
    accept: "Tracking erlauben",
    decline: "Nur notwendige",
    close: "Schließen",
    privacy: "Datenschutzerklärung",
  },
  en: {
    title: "Cookie Settings",
    message:
      "We only use necessary technologies by default. Google Tag Manager and Umami load only after your consent so we can measure traffic and campaigns in a privacy-conscious way.",
    essential: "Essential Cookies",
    essentialDesc: "Required for basic website functionality.",
    tracking: "Analytics & Marketing Services",
    trackingDesc: "Google Tag Manager and Umami help us understand visits, campaigns, and form performance.",
    accept: "Allow Tracking",
    decline: "Essential Only",
    close: "Close",
    privacy: "Privacy Policy",
  },
  nl: {
    title: "Cookie-instellingen",
    message:
      "We gebruiken standaard alleen noodzakelijke technologieen. Google Tag Manager en Umami laden pas na jouw toestemming zodat we verkeer en campagnes privacyvriendelijk kunnen meten.",
    essential: "Noodzakelijke cookies",
    essentialDesc: "Vereist voor de basisfunctionaliteit van de website.",
    tracking: "Analyse- en marketingdiensten",
    trackingDesc: "Google Tag Manager en Umami helpen ons bezoeken, campagnes en formulierprestaties te begrijpen.",
    accept: "Tracking toestaan",
    decline: "Alleen noodzakelijke",
    close: "Sluiten",
    privacy: "Privacybeleid",
  },
};

export default function CookieConsent() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [visible, setVisible] = useState(false);
  const [hasSavedConsent, setHasSavedConsent] = useState(false);

  useEffect(() => {
    const consent = getStoredConsent();
    setHasSavedConsent(Boolean(consent));

    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenSettings = () => {
      setHasSavedConsent(Boolean(getStoredConsent()));
      setVisible(true);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, handleOpenSettings);

    return () => {
      window.removeEventListener(CONSENT_OPEN_EVENT, handleOpenSettings);
    };
  }, []);

  const handleAccept = () => {
    setConsent("all");
    setHasSavedConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    setConsent("essential");
    setHasSavedConsent(true);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          role="dialog"
          aria-modal="true"
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-xl border border-border rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/10">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-hs-blue flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="8" cy="9" r="1" fill="currentColor" />
                <circle cx="15" cy="8" r="1.5" fill="currentColor" />
                <circle cx="10" cy="14" r="1" fill="currentColor" />
                <circle cx="16" cy="13" r="1" fill="currentColor" />
                <circle cx="13" cy="17" r="0.8" fill="currentColor" />
              </svg>
              <h3 className="text-lg font-bold text-foreground font-display">
                {t.title}
              </h3>
            </div>

            {/* Message */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              {t.message}
            </p>

            {/* Cookie types */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 rounded border border-emerald-500 bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-emerald-600">
                    <path
                      d="M2 6l3 3 5-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    {t.essential}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2">
                    ({locale === "de" ? "immer aktiv" : locale === "nl" ? "altijd actief" : "always active"})
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">{t.essentialDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 rounded border border-hs-blue/50 bg-hs-blue-light flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground">
                    {t.tracking}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {t.trackingDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-hs-blue hover:bg-hs-blue/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-hs-blue/15"
              >
                {t.accept}
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-6 py-3 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground font-semibold text-sm rounded-lg border border-border hover:border-border transition-all duration-200"
              >
                {t.decline}
              </button>
              {hasSavedConsent && (
                <button
                  onClick={() => setVisible(false)}
                  className="px-6 py-3 text-muted-foreground hover:text-foreground font-semibold text-sm rounded-lg transition-colors"
                >
                  {t.close}
                </button>
              )}
            </div>

            {/* Privacy link */}
            <div className="mt-4 text-center">
              <a
                href={locale === "de" ? "/datenschutz" : `/${locale}/privacy`}
                className="text-xs text-muted-foreground hover:text-hs-blue transition-colors underline underline-offset-2"
              >
                {t.privacy}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
