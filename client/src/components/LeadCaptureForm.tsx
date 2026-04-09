/*
 * LeadCaptureForm: Name + email lead capture for pre-launch 10% discount
 * Two variants: compact (hero) and full (CTA section).
 */
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "@/contexts/LocaleContext";
import {
  APPLE_MODEL_OPTIONS,
  NOT_SURE_YET_MODEL_VALUE,
  SAMSUNG_MODEL_OPTIONS,
} from "@/lib/interested-models";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, AlertTriangle } from "lucide-react";

const FORM_ENDPOINT = "https://handyswap-landing.attractgroup.com/";

type FormStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error-duplicate"
  | "error";
type FieldErrors = { name?: string; email?: string; interestedModel?: string };

interface LeadCaptureFormProps {
  /** "compact" for hero inline, "full" for the CTA section card */
  variant?: "compact" | "full";
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadCaptureForm({
  variant = "full",
}: LeadCaptureFormProps) {
  const { t, locale } = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interestedModel, setInterestedModel] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const shouldRevealInterestedModel =
    Boolean(name.trim()) && Boolean(email.trim());

  function validate(): boolean {
    const errors: FieldErrors = {};
    if (!name.trim()) errors.name = t.form.errorName;
    if (!email.trim() || !EMAIL_REGEX.test(email))
      errors.email = t.form.errorEmail;
    if (shouldRevealInterestedModel && !interestedModel) {
      errors.interestedModel = t.form.errorInterestedModel;
    }
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setFieldErrors({});

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          interestedModel,
        }),
      });

      if (res.status === 429) {
        setStatus("error");
        return;
      }

      const data = await res.json();

      if (data.success) {
        setStatus("success");
      } else if (data.details?.email?.includes("has already been taken")) {
        setStatus("error-duplicate");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const privacyHref =
    locale === "de"
      ? "/datenschutz"
      : locale === "nl"
        ? "/nl/privacy"
        : "/en/privacy";

  function renderInterestedModelField(compact: boolean) {
    if (!shouldRevealInterestedModel) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        <Select
          value={interestedModel}
          onValueChange={value => {
            setInterestedModel(value);
            setFieldErrors(prev => ({ ...prev, interestedModel: undefined }));
          }}
        >
          <SelectTrigger
            aria-label={t.form.modelPlaceholder}
            aria-invalid={!!fieldErrors.interestedModel}
            className={`w-full rounded-xl border bg-white text-left text-sm text-foreground shadow-sm focus:ring-2 focus:ring-hs-blue/20 focus:border-hs-blue ${
              compact ? "h-11 px-4" : "h-12 px-5"
            } ${fieldErrors.interestedModel ? "border-red-400" : "border-border"}`}
          >
            <SelectValue placeholder={t.form.modelPlaceholder} />
          </SelectTrigger>
          <SelectContent
            align="start"
            className="max-h-80 rounded-xl border-border bg-white shadow-xl"
          >
            <SelectGroup>
              <SelectLabel>{t.form.appleModelsLabel}</SelectLabel>
              {APPLE_MODEL_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>{t.form.samsungModelsLabel}</SelectLabel>
              {SAMSUNG_MODEL_OPTIONS.map(option => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
            <SelectSeparator />
            <SelectItem value={NOT_SURE_YET_MODEL_VALUE}>
              {t.form.notSureYet}
            </SelectItem>
          </SelectContent>
        </Select>

        {fieldErrors.interestedModel && (
          <p
            className={
              compact
                ? "text-red-300 text-xs mt-2 text-center"
                : "text-red-500 text-xs mt-1.5 ml-1 overflow-hidden"
            }
          >
            {fieldErrors.interestedModel}
          </p>
        )}
      </motion.div>
    );
  }

  // ── SUCCESS STATE ──
  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        translate="no"
        className={
          variant === "compact"
            ? "notranslate w-full max-w-md ml-auto lg:mr-8 xl:mr-12"
            : "notranslate w-full"
        }
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${variant === "compact" ? "bg-emerald-500/15 border border-emerald-400/30" : "bg-emerald-100 border border-emerald-200"}`}
          >
            <CheckCircle2
              className={`w-7 h-7 ${variant === "compact" ? "text-emerald-400" : "text-emerald-600"}`}
            />
          </div>
          <h3
            className={`font-display text-xl sm:text-2xl font-bold ${variant === "compact" ? "text-white" : "text-foreground"}`}
          >
            {t.form.successTitle}
          </h3>
          <p
            className={`text-sm sm:text-base leading-relaxed max-w-md ${variant === "compact" ? "text-blue-100/70" : "text-muted-foreground"}`}
          >
            {t.form.successMessage}{" "}
            <span
              className={`font-semibold ${variant === "compact" ? "text-amber-300" : "text-hs-gold"}`}
            >
              {t.form.successCode}
            </span>{" "}
            {t.form.successDate}
          </p>
        </div>
      </motion.div>
    );
  }

  // ── COMPACT VARIANT (hero) ──
  if (variant === "compact") {
    return (
      <form
        onSubmit={handleSubmit}
        className="notranslate w-full max-w-md ml-auto lg:mr-8 xl:mr-12"
        noValidate
        translate="no"
      >
        <div className="flex flex-col gap-2.5">
          {/* Input fields — stacked */}
          <div className="flex flex-col gap-2.5">
            <div className="flex-1 min-w-0">
              <input
                type="text"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                  setFieldErrors(p => ({ ...p, name: undefined }));
                }}
                placeholder={t.form.namePlaceholder}
                aria-label={t.form.namePlaceholder}
                aria-invalid={!!fieldErrors.name}
                className={`w-full h-11 rounded-xl bg-white border px-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 shadow-sm ${
                  fieldErrors.name ? "border-red-400" : "border-border"
                }`}
              />
            </div>
            <div className="flex-1 min-w-0">
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setFieldErrors(p => ({ ...p, email: undefined }));
                }}
                placeholder={t.form.placeholder}
                aria-label={t.form.placeholder}
                aria-invalid={!!fieldErrors.email}
                className={`w-full h-11 rounded-xl bg-white border px-4 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 shadow-sm ${
                  fieldErrors.email ? "border-red-400" : "border-border"
                }`}
              />
            </div>

            {renderInterestedModelField(true)}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group h-11 rounded-xl bg-hs-blue text-white font-display font-semibold text-sm sm:text-base px-6 flex items-center justify-center gap-2 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cta-pulse shadow-md"
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
        {(fieldErrors.name || fieldErrors.email) && (
          <div className="overflow-hidden">
            <p className="text-red-300 text-xs mt-2 text-center">
              {fieldErrors.name || fieldErrors.email}
            </p>
          </div>
        )}

        {/* Duplicate error */}
        {status === "error-duplicate" && (
          <div className="overflow-hidden">
            <div className="flex items-center justify-center gap-2 mt-2">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <p className="text-amber-300 text-xs">{t.form.errorDuplicate}</p>
            </div>
          </div>
        )}

        {/* Privacy notice */}
        <p className="text-[11px] text-white/40 mt-3 text-center leading-relaxed">
          {t.form.privacy}{" "}
          <a
            href={privacyHref}
            className="underline underline-offset-2 hover:text-white/70 transition-colors"
          >
            {t.form.privacyLink}
          </a>
        </p>
      </form>
    );
  }

  // ── FULL VARIANT (CTA section) ──
  return (
    <form
      onSubmit={handleSubmit}
      className="notranslate w-full max-w-md mx-auto"
      noValidate
      translate="no"
    >
      <div className="flex flex-col gap-3">
        {/* Name input */}
        <div>
          <input
            type="text"
            value={name}
            onChange={e => {
              setName(e.target.value);
              setFieldErrors(p => ({ ...p, name: undefined }));
            }}
            placeholder={t.form.namePlaceholder}
            aria-label={t.form.namePlaceholder}
            aria-invalid={!!fieldErrors.name}
            className={`w-full h-12 rounded-xl bg-white border px-5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 shadow-sm ${
              fieldErrors.name ? "border-red-400" : "border-border"
            }`}
          />
          {fieldErrors.name && (
            <p className="text-red-500 text-xs mt-1.5 ml-1 overflow-hidden">
              {fieldErrors.name}
            </p>
          )}
        </div>

        {/* Email input */}
        <div>
          <input
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
              setFieldErrors(p => ({ ...p, email: undefined }));
            }}
            placeholder={t.form.placeholder}
            aria-label={t.form.placeholder}
            aria-invalid={!!fieldErrors.email}
            className={`w-full h-12 rounded-xl bg-white border px-5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-hs-blue focus:ring-2 focus:ring-hs-blue/20 shadow-sm ${
              fieldErrors.email ? "border-red-400" : "border-border"
            }`}
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-xs mt-1.5 ml-1 overflow-hidden">
              {fieldErrors.email}
            </p>
          )}
        </div>

        {renderInterestedModelField(false)}

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group h-12 rounded-xl bg-hs-blue text-white font-display font-semibold text-base px-6 flex items-center justify-center gap-2.5 transition-all hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed cta-pulse mt-1 shadow-md"
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
      {status === "error-duplicate" && (
        <div className="overflow-hidden">
          <div className="flex items-center justify-center gap-2 mt-3 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <p className="text-amber-600 text-sm">{t.form.errorDuplicate}</p>
          </div>
        </div>
      )}

      {/* Privacy notice */}
      <p className="text-[11px] text-muted-foreground/60 mt-4 text-center leading-relaxed">
        {t.form.privacy}{" "}
        <a
          href={privacyHref}
          className="underline underline-offset-2 hover:text-foreground transition-colors"
        >
          {t.form.privacyLink}
        </a>
      </p>
    </form>
  );
}
