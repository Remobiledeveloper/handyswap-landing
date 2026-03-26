import { useEffect, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import {
  CONSENT_CHANGED_EVENT,
  getStoredConsent,
  openConsentSettings,
} from "@/lib/consent";

const labels = {
  de: "Cookie-Einstellungen",
  en: "Cookie Settings",
  nl: "Cookie-instellingen",
} as const;

export default function CookieSettingsButton() {
  const { locale } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const syncVisibility = () => {
      setIsVisible(Boolean(getStoredConsent()));
    };

    syncVisibility();
    window.addEventListener(CONSENT_CHANGED_EVENT, syncVisibility);

    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, syncVisibility);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={openConsentSettings}
      className="fixed bottom-5 left-5 z-50 inline-flex items-center gap-2 rounded-full border border-border bg-white/95 px-4 py-2 text-xs font-semibold text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-colors hover:bg-white"
    >
      <SlidersHorizontal className="h-3.5 w-3.5" />
      {labels[locale]}
    </button>
  );
}
