/*
 * Home: Pre-launch landing page for Handyswap.com — i18n enabled (DE/EN/NL)
 * Lead capture form (name + email) in hero and final CTA sections
 */
import CountdownTimer from "@/components/CountdownTimer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SectionReveal from "@/components/SectionReveal";
import TrustBar from "@/components/TrustBar";
import { useLocale } from "@/contexts/LocaleContext";
import {
  Percent,
  Shield,
  Truck,
  Headphones,
  RotateCcw,
  ArrowLeftRight,
  Mail,
  MessageCircle,
} from "lucide-react";

// CDN assets
const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/hero-bg-MfDQe9NUjbvEGfDy5ZzQMD.webp";
const LOGO =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/handyswap-logo_8e24ea7d.png";
const SAMSUNG_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/samsung-s26-ultra_3aee0944.png";
const IPHONE_IMG =
  "/iphone17_pro.png";

const featureIcons = [Percent, Shield, Truck, Headphones, RotateCcw, ArrowLeftRight];

export default function Home() {
  const { t, locale } = useLocale();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">

      {/* ========== HEADER / LANGUAGE SWITCHER ========== */}
      <header className="fixed top-0 left-0 right-0 z-40 py-3 px-4 sm:px-6 bg-[#0a1628]/80 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={LOGO}
              alt="Handyswap"
              className="h-7 sm:h-8 w-auto"
            />
          </div>
          <LanguageSwitcher />
        </div>
      </header>

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background — deep blue gradient for maximum text contrast */}
        <div className="absolute inset-0 bg-[#0a1628]" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0f2035]/80 to-[#0a1628]" />

        {/* Content — two-column on desktop, stacked on mobile */}
        <div className="relative z-10 container pt-24 pb-16 lg:pt-28 lg:pb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 gap-4">

            {/* ── LEFT COLUMN: Text content ── */}
            <div className="lg:w-[45%] lg:flex-shrink-0 flex flex-col gap-5 text-center lg:text-left">
              {/* Discount pill */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-400/30 rounded-full px-5 py-2">
                  <span className="text-amber-300 text-sm sm:text-base font-bold">
                    {t.hero.discountBanner}
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                {t.hero.headline1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400">{t.hero.headline2}</span>
              </h1>

              <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.hero.subheadline}
              </p>

              {/* Guarantee */}
              <p className="text-sm sm:text-base font-semibold text-emerald-300 tracking-wide text-center lg:text-left">
                <svg className="w-4 h-4 inline-block align-text-bottom mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.hero.tradeInGuarantee}
              </p>

              {/* Validity note */}
              <p className="text-xs sm:text-sm text-blue-200/50">
                {t.hero.discountValidity}
              </p>
            </div>

            {/* ── RIGHT COLUMN: Phones + Form ── */}
            <div className="flex-1 flex flex-col items-center lg:items-end">
              {/* Product Images */}
              <div className="relative flex items-center justify-center gap-4 sm:gap-8 mb-[-2rem] lg:mb-[-2rem] px-6 sm:px-0 -mt-4 lg:mt-0">
                <div className="w-36 sm:w-64 lg:w-72 transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img
                    src={SAMSUNG_IMG}
                    alt="Samsung Galaxy S26 Ultra"
                    className="w-full h-auto rounded-2xl"
                    loading="eager"
                  />
                </div>
                <div className="w-32 sm:w-56 lg:w-64 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                  <img
                    src={IPHONE_IMG}
                    alt="iPhone 17 Pro Max"
                    className="w-full h-auto rounded-2xl"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Lead Capture Form */}
              <div className="w-full px-4 sm:px-0 mt-2 lg:-mt-4 relative z-10">
                <LeadCaptureForm variant="compact" />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-sky-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* ========== TRUST BAR ========== */}
      <TrustBar />

      {/* ========== COUNTDOWN SECTION ========== */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-hs-blue-light/40 to-white" />
        <div className="relative z-10 container">
          <SectionReveal>
            <CountdownTimer />
          </SectionReveal>
        </div>
      </section>

      {/* ========== TRADE-IN EXAMPLES ========== */}
      <section className="py-20 sm:py-28 relative">
        <div className="container">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-[0.2em] text-hs-blue font-medium mb-3">
                {t.products.sectionLabel}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t.products.sectionTitle}
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                {t.products.sectionDesc}
              </p>
            </div>
          </SectionReveal>

          {/* Two Trade-In Example Cards */}
          <SectionReveal delay={0.2}>
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {t.products.examples.map((ex, i) => {
                const img = i === 0 ? IPHONE_IMG : SAMSUNG_IMG;
                return (
                  <div
                    key={ex.name}
                    className="group bg-white border border-border rounded-2xl overflow-hidden hover:border-hs-blue/40 hover:shadow-lg transition-all duration-500"
                  >
                    {/* Product Image + Name */}
                    <div className="relative bg-gradient-to-b from-hs-blue-light/60 to-white px-6 pt-6 pb-4 flex flex-col items-center">
                      <div className="w-36 h-36 sm:w-44 sm:h-44 mb-4 flex items-center justify-center">
                        <img
                          src={img}
                          alt={ex.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                        {ex.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{ex.storage}</p>
                    </div>

                    {/* Price Breakdown */}
                    <div className="px-6 py-5 space-y-3">
                      {/* Retail Price */}
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">{t.products.retailPrice}</span>
                        <span className="text-foreground font-semibold line-through opacity-50">{ex.retail}</span>
                      </div>

                      {/* Trade-In */}
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <div className="flex flex-col">
                          <span className="text-sm text-hs-blue font-medium">{t.products.tradeInWith}</span>
                          <span className="text-xs text-muted-foreground">{ex.tradeDevice}</span>
                        </div>
                        <span className="text-emerald-600 font-bold">−{ex.tradeValue}</span>
                      </div>

                      {/* After Trade */}
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-muted-foreground text-sm">
                          {t.products.retailPrice} − {t.products.tradeInWith}
                        </span>
                        <span className="text-foreground font-semibold">{ex.afterTrade}</span>
                      </div>

                      {/* 10% Discount */}
                      <div className="flex justify-between items-center py-2 border-b border-border">
                        <span className="text-sm text-hs-gold font-medium">{t.products.launchDiscount}</span>
                        <span className="text-hs-gold font-bold">−{ex.discountAmount}</span>
                      </div>

                      {/* Final Price — hero */}
                      <div className="mt-2 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 flex justify-between items-center">
                        <div>
                          <p className="text-xs text-emerald-600/80 uppercase tracking-wider font-medium">{t.products.youPay}</p>
                          <p className="font-display text-3xl sm:text-4xl font-bold text-emerald-600">{ex.finalPrice}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground">{t.products.youSave}</p>
                          <p className="text-lg font-bold text-emerald-600">{ex.savings}</p>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="w-full mt-3 py-3.5 rounded-xl font-display font-semibold text-sm sm:text-base bg-hs-blue-light border border-hs-blue/20 text-hs-blue text-center flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {t.products.preOrderCta}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.4}>
            <p className="text-center text-xs text-muted-foreground/60 mt-8 max-w-lg mx-auto">
              {t.products.priceDisclaimer}
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ========== TRADE-IN COMPARISON ========== */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-muted/50 to-white" />
        <div className="relative z-10 container">
          <SectionReveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t.tradeIn.sectionTitle}
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                {t.tradeIn.sectionDesc}
              </p>
            </div>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {t.tradeIn.devices.map((device) => (
              <SectionReveal key={device.name}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm">
                  {/* Device header */}
                  <div className="px-6 py-4 bg-muted/50 border-b border-border">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {device.name}
                    </h3>
                  </div>

                  {/* Competitor rows */}
                  <div className="divide-y divide-border">
                    {device.competitors.map((comp) => (
                      <div
                        key={comp.name}
                        className="flex items-center justify-between px-6 py-3.5"
                      >
                        <span className="text-muted-foreground text-sm sm:text-base">
                          {comp.name}
                        </span>
                        <span className={`text-sm sm:text-base font-medium ${
                          comp.value === "N/A"
                            ? "text-muted-foreground/50 italic"
                            : "text-foreground"
                        }`}>
                          {comp.value}
                        </span>
                      </div>
                    ))}

                    {/* Handyswap row — highlighted */}
                    <div className="flex items-center justify-between px-6 py-4 bg-emerald-50 border-t-2 border-emerald-300">
                      <span className="text-foreground font-bold text-sm sm:text-base flex items-center gap-2">
                        <img
                          src={LOGO}
                          alt="Handyswap"
                          className="h-5 w-auto"
                        />
                        Handyswap
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-bold text-lg sm:text-xl">
                          {device.handyswapValue}
                        </span>
                        <span className="text-emerald-700 font-bold text-sm sm:text-base bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          {device.bonusAmount}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY HANDYSWAP ========== */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-hs-blue-light/30 to-white" />
        <div className="relative z-10 container">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t.why.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                {t.why.subtitle}
              </p>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {t.why.features.map((feature, i) => {
              const Icon = featureIcons[i];
              const isSupport = i === 3;
              return (
                <SectionReveal key={feature.title} delay={i * 0.1}>
                  <div className={`bg-white border rounded-xl p-6 sm:p-7 hover:shadow-md transition-all duration-300 group h-full ${isSupport ? "border-hs-blue/40 hover:border-hs-blue/60" : "border-border hover:border-hs-blue/30"}`}>
                    <div className="w-11 h-11 rounded-lg bg-hs-blue-light flex items-center justify-center mb-4 group-hover:bg-hs-blue/10 transition-colors">
                      <Icon className="w-5 h-5 text-hs-blue" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base sm:text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                    {isSupport && (
                      <div className="mt-4 flex flex-col gap-2">
                        <a
                          href="mailto:support@handyswap.com"
                          className="inline-flex items-center gap-1.5 text-sm text-hs-blue font-medium hover:underline"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          support@handyswap.com
                        </a>
                        <button
                          type="button"
                          onClick={() => window.Intercom?.("show" as never)}
                          className="inline-flex items-center justify-center gap-1.5 bg-hs-blue text-white text-sm font-semibold rounded-lg px-4 py-2 hover:bg-hs-blue/90 transition-colors w-fit cursor-pointer"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          {t.contact.chatButton}
                        </button>
                      </div>
                    )}
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FINAL INFO SECTION — 10% Discount with Scarcity ========== */}
      <section className="py-20 sm:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-hs-gold-light/40 to-white" />
        <div className="relative z-10 container">
          <SectionReveal>
            <div className="max-w-2xl mx-auto">
              {/* Card wrapper */}
              <div className="bg-white border border-hs-gold/20 rounded-2xl p-8 sm:p-12 text-center shadow-sm">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-hs-gold-light border border-hs-gold/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="text-hs-gold text-sm font-semibold">
                    {t.finalCta.badge}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {t.finalCta.badgeSuffix}
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  {t.finalCta.title}
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
                  {t.finalCta.desc}
                </p>

                {/* Checklist with scarcity */}
                <div className="flex flex-col gap-3 max-w-md mx-auto mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{t.finalCta.checkValid}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground text-sm sm:text-base font-semibold">
                      {t.finalCta.checkLimited}
                      <span className="ml-2 inline-flex items-center bg-red-100 text-red-500 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                        !
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-foreground text-sm sm:text-base">{t.finalCta.checkAutoApplied}</span>
                  </div>
                </div>

                {/* Lead Capture Form — Final CTA */}
                <LeadCaptureForm variant="full" />

              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              {t.faq.title}
            </h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {t.faq.items.map((item, i) => (
                <details
                  key={i}
                  className="group bg-white border border-border rounded-xl overflow-hidden transition-all hover:border-hs-blue/30 hover:shadow-sm"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <span className="font-semibold text-foreground text-base sm:text-lg pr-4">
                      {item.q}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-hs-blue-light flex items-center justify-center transition-transform group-open:rotate-45">
                      <svg className="w-4 h-4 text-hs-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== CONTACT / STILL HAVE QUESTIONS ========== */}
      <section className="py-16 sm:py-20">
        <div className="container">
          <SectionReveal>
            <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2d4a] rounded-2xl px-6 py-12 sm:px-12 sm:py-16 text-center">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                {t.contact.title}
              </h2>
              <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto mb-8">
                {t.contact.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => window.Intercom?.("show" as never)}
                  className="inline-flex items-center justify-center gap-2 bg-hs-blue text-white font-semibold rounded-xl px-6 py-3 text-base hover:bg-hs-blue/90 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.contact.chatButton}
                </button>
                <a
                  href="mailto:support@handyswap.com"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold rounded-xl px-6 py-3 text-base border border-white/20 hover:border-white/40 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  support@handyswap.com
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-[#0a1628] pt-12 pb-8 sm:pb-10">
        <div className="container">
          {/* Trust & Partner Badges Row */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {/* Trustpilot */}
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00B67A]" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <span className="text-sm font-semibold text-white">Trustpilot</span>
              </div>

              {/* Trusted Shops */}
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FFDC0F]" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                <span className="text-sm font-semibold text-white">Trusted Shops</span>
              </div>

              {/* SSL Secure */}
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span className="text-sm font-semibold text-white">SSL Secure</span>
              </div>

              {/* German Customer Support - Chat & Email */}
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  <path d="M8 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M16 10h.01" />
                </svg>
                <span className="text-sm font-semibold text-white">{locale === "de" ? "24/7 Chat & E-Mail Support" : locale === "nl" ? "24/7 Chat & E-Mail Support" : "24/7 Chat & Email Support"}</span>
              </div>

              {/* DHL Partner */}
              <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                <div className="bg-[#FFCC00] rounded-md px-2 py-1 flex items-center">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/dhl-express-logo_32737de2.png"
                    alt="DHL Express"
                    className="h-5 w-auto"
                  />
                </div>
                <span className="text-sm font-semibold text-white">Partner</span>
              </div>
            </div>
          </div>

          {/* Payment Methods Row */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <p className="text-xs text-white/30 text-center mb-4 uppercase tracking-widest">
              {locale === "de" ? "Zahlungsmethoden" : locale === "nl" ? "Betaalmethoden" : "Payment Methods"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
              {/* Visa */}
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center justify-center hover:bg-white/15 transition-colors">
                <span className="text-sm font-bold text-white">VISA</span>
              </div>
              {/* Mastercard */}
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center justify-center hover:bg-white/15 transition-colors">
                <div className="flex items-center gap-0">
                  <div className="w-5 h-5 rounded-full bg-[#EB001B] -mr-1.5" />
                  <div className="w-5 h-5 rounded-full bg-[#F79E1B] opacity-80" />
                </div>
              </div>
              {/* PayPal */}
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center justify-center hover:bg-white/15 transition-colors">
                <span className="text-sm font-bold"><span className="text-[#4da6ff]">Pay</span><span className="text-[#5cc5ff]">Pal</span></span>
              </div>
              {/* Klarna */}
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center justify-center hover:bg-white/15 transition-colors">
                <span className="text-sm font-bold text-[#FFB3C7]">Klarna.</span>
              </div>
              {/* Apple Pay */}
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center justify-center hover:bg-white/15 transition-colors">
                <span className="text-sm font-bold text-white flex items-center gap-0.5"><svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>Pay</span>
              </div>
              {/* Google Pay */}
              <div className="bg-white/10 rounded-lg px-4 py-2 flex items-center justify-center hover:bg-white/15 transition-colors">
                <span className="text-sm font-bold"><span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span> <span className="text-white">Pay</span></span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
            <div className="flex flex-col items-center sm:items-start gap-5">
              <img
                src={LOGO}
                alt="Handyswap"
                className="h-8 w-auto brightness-0 invert"
              />
              {/* Social Media */}
              <div className="flex items-center gap-2.5">
                <a href="https://web.facebook.com/Handyswap" target="_blank" rel="noopener noreferrer" className="group w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2]/15 hover:border-[#1877F2]/40 transition-all duration-300" aria-label="Facebook">
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#1877F2] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/handyswap/" target="_blank" rel="noopener noreferrer" className="group w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F]/15 hover:border-[#E4405F]/40 transition-all duration-300" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#E4405F] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.youtube.com/@Handyswap" target="_blank" rel="noopener noreferrer" className="group w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000]/15 hover:border-[#FF0000]/40 transition-all duration-300" aria-label="YouTube">
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FF0000] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@handyswap" target="_blank" rel="noopener noreferrer" className="group w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/15 hover:border-white/30 transition-all duration-300" aria-label="TikTok">
                  <svg className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-end gap-4">
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-sm text-white/50">
                <a href={locale === "de" ? "/impressum" : `/${locale}/impressum`} className="hover:text-white transition-colors">
                  {t.footer.imprint}
                </a>
                <a href={locale === "de" ? "/datenschutz" : `/${locale}/privacy`} className="hover:text-white transition-colors">
                  {t.footer.privacy}
                </a>
                <a href={locale === "de" ? "/agb" : locale === "en" ? "/en/terms" : "/nl/voorwaarden"} className="hover:text-white transition-colors">
                  {t.footer.terms}
                </a>
                <a href={locale === "de" ? "/versand" : locale === "en" ? "/en/shipping" : "/nl/verzending"} className="hover:text-white transition-colors">
                  {t.footer.shipping}
                </a>
              </div>
              <p className="text-xs text-white/30">
                {t.footer.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
