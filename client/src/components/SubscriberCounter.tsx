/*
 * Design: Midnight Tech — Dark Luxury Editorial
 * SubscriberCounter: Dynamic social proof counter — i18n enabled
 */
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { Users } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const BASE_COUNT = 1247;

export default function SubscriberCounter() {
  const { t, locale } = useLocale();
  const count = useAnimatedCounter(BASE_COUNT, 2500);

  const formattedCount = count.toLocaleString(
    locale === "de" ? "de-DE" : locale === "nl" ? "nl-NL" : "en-US"
  );

  return (
    <div className="flex items-center justify-center gap-2.5 text-muted-foreground">
      <Users className="w-4 h-4 text-hs-blue" />
      <p className="text-sm">
        {t.counter.prefix}{" "}
        <span className="text-white font-semibold tabular-nums">
          {formattedCount}
        </span>{" "}
        {t.counter.suffix}
      </p>
    </div>
  );
}
