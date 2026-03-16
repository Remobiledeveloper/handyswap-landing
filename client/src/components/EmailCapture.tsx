/*
 * Design: Midnight Tech — Dark Luxury Editorial
 * EmailCapture: High-converting email form with 10% discount CTA
 * Glowing blue focus state, amber discount badge, animated success
 * Connected to the backend via tRPC to store emails in the database
 */
import { useState, useEffect, useRef } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";
import { trpc } from "@/lib/trpc";

export default function EmailCapture() {
  const { t, locale } = useLocale();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const mountedRef = useRef(true);

  // Track component mount state to prevent setState after unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const subscribeMutation = trpc.subscriber.subscribe.useMutation({
    onSuccess: () => {
      if (mountedRef.current) {
        setIsSubmitted(true);
      }
    },
    onError: (err) => {
      if (mountedRef.current) {
        setError(err.message || "Something went wrong. Please try again.");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(t.form.errorEmail);
      return;
    }

    subscribeMutation.mutate({
      email: email.toLowerCase().trim(),
      locale,
      source: "landing",
    });
  };

  const privacyLink = locale === "de" ? "/datenschutz" : `/${locale}/privacy`;

  if (isSubmitted) {
    return (
      <div className="w-full max-w-lg mx-auto">
        <div className="text-center py-6 px-4 bg-hs-navy-light border border-hs-blue/30 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-500">
          <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
          <h3 className="font-display text-xl font-bold text-white mb-2">
            {t.form.successTitle}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
            {t.form.successMessage}{" "}
            <span className="text-hs-amber font-semibold">{t.form.successCode}</span>{" "}
            <span className="text-white font-semibold">{t.form.successDate}</span>
            {" "}{t.form.successConfirm}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder={t.form.placeholder}
            className="w-full pl-12 pr-4 py-4 bg-hs-navy-light border border-border/60 rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/30 transition-all duration-300 text-base"
            disabled={subscribeMutation.isPending}
          />
        </div>
        {error && (
          <p className="text-sm text-red-400 pl-1">{error}</p>
        )}
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          {t.form.privacy}{" "}
          <a href={privacyLink} className="underline hover:text-white transition-colors">
            {t.form.privacyLink}
          </a>{" "}
          {t.form.doubleOptIn}
        </p>
      </form>
    </div>
  );
}
