/*
 * TrustBar: Horizontal trust signals bar with 6 key selling points — i18n enabled
 */
import { Percent, Shield, Truck, Headphones, RotateCcw, ArrowLeftRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

export default function TrustBar() {
  const { t } = useLocale();

  const trustItems = [
    { icon: Percent, text: t.trust.discount },
    { icon: Shield, text: t.trust.warranty },
    { icon: Truck, text: t.trust.shipping },
    { icon: Headphones, text: t.trust.support },
    { icon: RotateCcw, text: t.trust.returns },
    { icon: ArrowLeftRight, text: t.trust.tradein },
  ];

  return (
    <div className="w-full border-y border-border bg-muted/50">
      <div className="container py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {trustItems.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <item.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-hs-blue shrink-0" />
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
