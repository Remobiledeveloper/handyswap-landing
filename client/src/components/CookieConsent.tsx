/**
 * CookieConsent.tsx
 * GDPR-compliant cookie consent banner for Handyswap.com
 * Dark luxury editorial style — slides up from bottom
 * Supports DE/EN/NL via LocaleContext
 */

import { useState, useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  de: {
    title: "Cookie-Einstellungen",
    message:
      "Wir verwenden Cookies, um dein Erlebnis auf unserer Website zu verbessern und anonyme Nutzungsstatistiken zu erheben. Du kannst selbst entscheiden, welche Cookies du zulassen möchtest.",
    essential: "Notwendige Cookies",
    essentialDesc: "Erforderlich für die grundlegende Funktionalität der Website.",
    analytics: "Analyse-Cookies",
    analyticsDesc: "Helfen uns zu verstehen, wie Besucher unsere Website nutzen.",
    accept: "Alle akzeptieren",
    decline: "Nur notwendige",
    privacy: "Datenschutzerklärung",
  },
  en: {
    title: "Cookie Settings",
    message:
      "We use cookies to improve your experience on our website and collect anonymous usage statistics. You can choose which cookies you want to allow.",
    essential: "Essential Cookies",
    essentialDesc: "Required for basic website functionality.",
    analytics: "Analytics Cookies",
    analyticsDesc: "Help us understand how visitors use our website.",
    accept: "Accept All",
    decline: "Essential Only",
    privacy: "Privacy Policy",
  },
  nl: {
    title: "Cookie-instellingen",
    message:
      "We gebruiken cookies om je ervaring op onze website te verbeteren en anonieme gebruiksstatistieken te verzamelen. Je kunt zelf kiezen welke cookies je wilt toestaan.",
    essential: "Noodzakelijke cookies",
    essentialDesc: "Vereist voor de basisfunctionaliteit van de website.",
    analytics: "Analytische cookies",
    analyticsDesc: "Helpen ons te begrijpen hoe bezoekers onze website gebruiken.",
    accept: "Alles accepteren",
    decline: "Alleen noodzakelijke",
    privacy: "Privacybeleid",
  },
};

export default function CookieConsent() {
  const { locale } = useLocale();
  const t = translations[locale];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("hs-cookie-consent");
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hs-cookie-consent", "all");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("hs-cookie-consent", "essential");
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
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="max-w-3xl mx-auto bg-[#0F1D32]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/40">
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
              <h3 className="text-lg font-bold text-white font-display">
                {t.title}
              </h3>
            </div>

            {/* Message */}
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {t.message}
            </p>

            {/* Cookie types */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 rounded border border-emerald-500 bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 12 12" className="w-2.5 h-2.5 text-emerald-400">
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
                  <span className="text-sm font-semibold text-white">
                    {t.essential}
                  </span>
                  <span className="text-xs text-gray-500 ml-2">
                    ({locale === "de" ? "immer aktiv" : locale === "nl" ? "altijd actief" : "always active"})
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">{t.essentialDesc}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-4 h-4 rounded border border-hs-blue/50 bg-hs-blue/10 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-white">
                    {t.analytics}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {t.analyticsDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-hs-blue hover:bg-hs-blue/90 text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-hs-blue/20"
              >
                {t.accept}
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-sm rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                {t.decline}
              </button>
            </div>

            {/* Privacy link */}
            <div className="mt-4 text-center">
              <a
                href={locale === "de" ? "/datenschutz" : `/${locale}/privacy`}
                className="text-xs text-gray-500 hover:text-hs-blue transition-colors underline underline-offset-2"
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
