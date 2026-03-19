/*
 * LanguageSwitcher: Compact DE/EN/NL toggle in the top-right corner
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
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1">
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${
            locale === l.code
              ? "bg-hs-blue text-white shadow-sm"
              : "text-white/60 hover:text-white"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
