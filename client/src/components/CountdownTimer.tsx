/*
 * CountdownTimer: Mechanical flip-style countdown to May 1, 2026 launch — i18n enabled
 */
import { useCountdown } from "@/hooks/useCountdown";
import { useLocale } from "@/contexts/LocaleContext";

const LAUNCH_DATE = new Date("2026-05-01T00:00:00+02:00");

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative bg-white border border-border rounded-xl w-[72px] h-[80px] sm:w-[88px] sm:h-[96px] flex items-center justify-center overflow-hidden shadow-sm">
        <span
          key={value}
          className="font-display text-3xl sm:text-4xl font-bold text-foreground count-tick tabular-nums"
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest font-medium">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex items-center h-[80px] sm:h-[96px]">
      <span className="text-2xl sm:text-3xl font-bold text-hs-blue">:</span>
    </div>
  );
}

export default function CountdownTimer() {
  const { t } = useLocale();
  const { days, hours, minutes, seconds, isExpired } = useCountdown(LAUNCH_DATE);

  if (isExpired) {
    return (
      <div className="text-center">
        <p className="font-display text-2xl font-bold text-hs-blue">
          {t.countdown.expired}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-sm sm:text-base text-muted-foreground uppercase tracking-[0.2em] font-medium">
        {t.countdown.label}
      </p>
      <div className="flex items-start gap-2 sm:gap-3">
        <CountdownUnit value={days} label={t.countdown.days} />
        <Separator />
        <CountdownUnit value={hours} label={t.countdown.hours} />
        <Separator />
        <CountdownUnit value={minutes} label={t.countdown.minutes} />
        <Separator />
        <CountdownUnit value={seconds} label={t.countdown.seconds} />
      </div>
    </div>
  );
}
