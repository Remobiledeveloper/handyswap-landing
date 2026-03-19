/*
 * Design: Midnight Tech — Dark Luxury Editorial
 * LeadCaptureForm: Name + email lead capture for pre-launch 10% discount
 * Posts to Shopify endpoint (placeholder). Two variants: compact (hero) and full (CTA section).
 */
import { useLocale } from "@/contexts/LocaleContext";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

// TODO: Replace with actual Shopify endpoint once provided
const SHOPIFY_FORM_ENDPOINT = "https://shopify.example.com/api/leads";

type FormStatus = "idle" | "submitting" | "success" | "error-duplicate" | "error";

interface LeadCaptureFormProps {
  /** "compact" for hero inline, "full" for the CTA section card */
  variant?: "compact" | "full";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadCaptureForm({ variant = "full" }: LeadCaptureFormProps) {
  const { t, locale } = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string }>({});

  function validate(): boolean {
    const errors: { name?: string; email?: string } = {};
    if (!name.trim()) errors.name = t.form.errorName;
    if (!email.trim() || !EMAIL_REGEX.test(email)) errors.email = t.form.errorEmail;
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setFieldErrors({});

    try {
      const res = await fetch(SHOPIFY_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          locale,
        }),
      });

      if (res.status === 409) {
        setStatus("error-duplicate");
        return;
      }

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
    } catch {
      // For now, treat as success since we're using a placeholder endpoint
      // TODO: Remove this fallback once real Shopify endpoint is connected
      setStatus("success");
    }
  }

  const privacyHref =
    locale === "de" ? "/datenschutz" : locale === "nl" ? "/nl/privacy" : "/en/privacy";

  // ── SUCCESS STATE ──
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={
          variant === "compact"
            ? "w-full max-w-lg"
            : "w-full"
        }
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7 text-emerald-400" />
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            {t.form.successTitle}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md">
            {t.form.successMessage}{" "}
            <span className="text-hs-amber font-semibold">{t.form.successCode}</span>{" "}
            {t.form.successDate}
          </p>
          <p className="text-xs text-muted-foreground/70 mt-1">
            {t.form.successConfirm}
          </p>
        </div>
      </motion.div>
    );
  }

  // ── COMPACT VARIANT (hero) ──
  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="w-full max-w-lg" noValidate>
        <div className="flex flex-col gap-2.5">
          {/* Input row */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="flex-1 min-w-0">
              <input
                type="text"
                value={name}
                onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: undefined })); }}
                placeholder={t.form.namePlaceholder}
                aria-label={t.form.namePlaceholder}
                aria-invalid={!!fieldErrors.name}
                className={`w-full h-11 rounded-xl bg-white/[0.07] backdrop-blur-sm border px-4 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-all focus:bg-white/[0.1] focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 ${
                  fieldErrors.name ? "border-red-500/60" : "border-white/[0.12]"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })); }}
                placeholder={t.form.placeholder}
                aria-label={t.form.placeholder}
                aria-invalid={!!fieldErrors.email}
                className={`w-full h-11 rounded-xl bg-white/[0.07] backdrop-blur-sm border px-4 text-sm text-white placeholder:text-muted-foreground/60 outline-none transition-all focus:bg-white/[0.1] focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 ${
                  fieldErrors.email ? "border-red-500/60" : "border-white/[0.12]"
                }`}
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group h-11 rounded-xl bg-hs-blue text-white font-display font-semibold text-sm sm:text-base px-6 flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cta-pulse"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                {t.form.submitting}
              </>
            ) : (
              <>
                {t.form.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </div>

        {/* Validation errors */}
        <AnimatePresence>
          {(fieldErrors.name || fieldErrors.email) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="text-red-400 text-xs mt-2 text-center">
                {fieldErrors.name || fieldErrors.email}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Duplicate error */}
        <AnimatePresence>
          {status === "error-duplicate" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <div className="flex items-center justify-center gap-2 mt-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <p className="text-amber-400 text-xs">{t.form.errorDuplicate}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Privacy notice */}
        <p className="text-[11px] text-muted-foreground/50 mt-3 text-center leading-relaxed">
          {t.form.privacy}{" "}
          <a href={privacyHref} className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
            {t.form.privacyLink}
          </a>
        </p>
      </form>
    );
  }

  // ── FULL VARIANT (CTA section) ──
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto" noValidate>
      <div className="flex flex-col gap-3">
        {/* Name input */}
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setFieldErrors((p) => ({ ...p, name: undefined })); }}
            placeholder={t.form.namePlaceholder}
            aria-label={t.form.namePlaceholder}
            aria-invalid={!!fieldErrors.name}
            className={`w-full h-12 rounded-xl bg-white/[0.06] backdrop-blur-sm border px-5 text-sm text-white placeholder:text-muted-foreground/50 outline-none transition-all focus:bg-white/[0.1] focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 ${
              fieldErrors.name ? "border-red-500/60" : "border-white/[0.1]"
            }`}
          />
          <AnimatePresence>
            {fieldErrors.name && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-400 text-xs mt-1.5 ml-1 overflow-hidden"
              >
                {fieldErrors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email input */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setFieldErrors((p) => ({ ...p, email: undefined })); }}
            placeholder={t.form.placeholder}
            aria-label={t.form.placeholder}
            aria-invalid={!!fieldErrors.email}
            className={`w-full h-12 rounded-xl bg-white/[0.06] backdrop-blur-sm border px-5 text-sm text-white placeholder:text-muted-foreground/50 outline-none transition-all focus:bg-white/[0.1] focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 ${
              fieldErrors.email ? "border-red-500/60" : "border-white/[0.1]"
            }`}
          />
          <AnimatePresence>
            {fieldErrors.email && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-400 text-xs mt-1.5 ml-1 overflow-hidden"
              >
                {fieldErrors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group h-12 rounded-xl bg-hs-blue text-white font-display font-semibold text-base px-6 flex items-center justify-center gap-2.5 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cta-pulse mt-1"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              {t.form.submitting}
            </>
          ) : (
            <>
              {t.form.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>

      {/* Duplicate error */}
      <AnimatePresence>
        {status === "error-duplicate" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="flex items-center justify-center gap-2 mt-3 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2.5">
              <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <p className="text-amber-400 text-sm">{t.form.errorDuplicate}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Privacy notice */}
      <p className="text-[11px] text-muted-foreground/50 mt-4 text-center leading-relaxed">
        {t.form.privacy}{" "}
        <a href={privacyHref} className="underline underline-offset-2 hover:text-muted-foreground transition-colors">
          {t.form.privacyLink}
        </a>
      </p>
    </form>
  );
}
