import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { useLocation } from "wouter";
import { type Locale, type Translations, getTranslations } from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getInitialLocale(): Locale {
  // Check URL path first
  const path = window.location.pathname;
  if (path.startsWith("/en")) return "en";
  if (path.startsWith("/nl")) return "nl";
  // Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("nl")) return "nl";
  if (browserLang.startsWith("en")) return "en";
  return "de";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const [, setLocation] = useLocation();

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    // Update URL using wouter instead of direct history manipulation
    const basePath = newLocale === "de" ? "/" : `/${newLocale}`;
    setLocation(basePath);
  }, [setLocation]);

  // Update HTML lang attribute in effect to avoid render-phase side effects
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = getTranslations(locale);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
}
