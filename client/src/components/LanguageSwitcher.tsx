/*
 * Design: Midnight Tech — Dark Luxury Editorial
 * LanguageSwitcher: Compact DE/EN/NL toggle in the top-right corner
 * Subtle pill-style buttons with active state highlight
 */
import { useLocale } from "@/contexts/LocaleContext";
import type { Locale } from "@/lib/i18n";

const locales: { code: Locale; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "nl", label: "NL" },
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 bg-hs-navy-light/80 backdrop-blur-md border border-border/40 rounded-full p-1">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
            locale === l.code
              ? "bg-hs-blue text-white shadow-sm"
              : "text-muted-foreground hover:text-white"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
