export type Locale = "de" | "en" | "nl";

export interface Translations {
  // Meta
  meta: {
    title: string;
    description: string;
    lang: string;
  };
  // Hero
  hero: {
    headline1: string;
    headline2: string;
    subheadline: string;
    tradeInGuarantee: string;
    discountBanner: string;
    discountValidity: string;
  };
  // Email form
  form: {
    namePlaceholder: string;
    placeholder: string;
    modelPlaceholder: string;
    appleModelsLabel: string;
    samsungModelsLabel: string;
    notSureYet: string;
    cta: string;
    privacy: string;
    privacyLink: string;
    successTitle: string;
    successMessage: string;
    successCode: string;
    successDate: string;
    successConfirm: string;
    errorName: string;
    errorEmail: string;
    errorInterestedModel: string;
    errorDuplicate: string;
    submitting: string;
  };
  // Subscriber counter
  counter: {
    prefix: string;
    suffix: string;
  };
  // Trust bar
  trust: {
    discount: string;
    warranty: string;
    shipping: string;
    support: string;
    returns: string;
    tradein: string;
  };
  // Countdown
  countdown: {
    label: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    expired: string;
  };
  // Products — Trade-In Examples
  products: {
    sectionLabel: string;
    sectionTitle: string;
    sectionDesc: string;
    discountNote: string;
    priceDisclaimer: string;
    pricePrefix: string;
    retailPrice: string;
    tradeInLabel: string;
    tradeInWith: string;
    launchDiscount: string;
    youPay: string;
    youSave: string;
    preOrderCta: string;
    examples: {
      name: string;
      storage: string;
      retail: string;
      tradeDevice: string;
      tradeValue: string;
      afterTrade: string;
      discountAmount: string;
      finalPrice: string;
      savings: string;
    }[];
  };
  // Trade-in comparison
  tradeIn: {
    sectionTitle: string;
    sectionDesc: string;
    yourDevice: string;
    competitor: string;
    value: string;
    bonus: string;
    devices: {
      name: string;
      competitors: { name: string; value: string }[];
      handyswapValue: string;
      bonusAmount: string;
    }[];
  };
  // Why Handyswap
  why: {
    title: string;
    subtitle: string;
    features: {
      title: string;
      desc: string;
    }[];
  };
  // Final CTA
  finalCta: {
    badge: string;
    badgeSuffix: string;
    title: string;
    desc: string;
    checkValid: string;
    checkLimited: string;
    checkAutoApplied: string;
    ctaButton: string;
  };
  // FAQ
  faq: {
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  // Footer
  footer: {
    imprint: string;
    privacy: string;
    terms: string;
    shipping: string;
    copyright: string;
  };
  // Contact section (post-FAQ)
  contact: {
    title: string;
    subtitle: string;
    chatButton: string;
    emailLabel: string;
    countdownHint: string;
    countdownChat: string;
    countdownOr: string;
  };
  // Floating CTA
  floatingCta: string;
  // Scroll
  scroll: string;
}

const de: Translations = {
  meta: {
    title: "Handyswap — Dein nächstes Flagship-Smartphone. Smarter Preis.",
    description:
      "Ab 1. Mai 2026: Alle neuesten Apple und Samsung Smartphones — vom budgetfreundlichen Einstieg bis zu den Flaggschiff-Modellen Samsung Galaxy S26 & iPhone 17 — nagelneu, versiegelt, mit 24 Monaten Garantie. Zum Pre-Launch: 10% Rabatt auf deine erste Bestellung!",
    lang: "de",
  },
  hero: {
    headline1: "Die neuesten Handys.",
    headline2: "Der smartere Weg sie zu bekommen.",
    subheadline:
      "Tausche dein altes Gerät ein. Hol dir ein nagelneues. Zahle weniger.",
    tradeInGuarantee:
      "Garantiert höherer Trade-in Wert als MediaMarkt, Apple und Samsung.",
    discountBanner: "Zum Pre-Launch: 10% Rabatt auf deine erste Bestellung!",
    discountValidity: "Gültig vom 1.–14. Mai 2026 auf alle Produkte.",
  },
  form: {
    namePlaceholder: "Dein Name",
    placeholder: "Deine E-Mail-Adresse",
    modelPlaceholder: "Für welches Modell interessierst du dich?",
    appleModelsLabel: "Apple",
    samsungModelsLabel: "Samsung",
    notSureYet: "Noch nicht sicher",
    cta: "10% Rabatt sichern",
    privacy: "Mit der Anmeldung stimmst du unserer",
    privacyLink: "Datenschutzerklärung zu.",
    successTitle: "Du bist dabei!",
    successMessage: "Dein persönlicher",
    successCode: "10%-Rabattcode",
    successDate: "wird dir am 1. Mai per E-Mail zugesendet.",
    successConfirm:
      "Bitte bestätige deine Anmeldung in der Bestätigungs-E-Mail.",
    errorName: "Bitte gib deinen Namen ein.",
    errorEmail: "Bitte gib eine gültige E-Mail-Adresse ein.",
    errorInterestedModel: "Bitte wähle ein Modell aus.",
    errorDuplicate: "Diese E-Mail-Adresse ist bereits registriert.",
    submitting: "Wird gesendet…",
  },
  counter: {
    prefix: "Bereits",
    suffix: "haben sich angemeldet",
  },
  trust: {
    discount: "10% Rabatt zum Launch",
    warranty: "24 Monate Herstellergarantie",
    shipping: "DHL Express Versand",
    support: "24/7 Kundenservice",
    returns: "30 Tage Widerrufsrecht",
    tradein: "Beste Trade-In Preise",
  },
  countdown: {
    label: "Launch am 1. Mai 2026",
    days: "Tage",
    hours: "Std",
    minutes: "Min",
    seconds: "Sek",
    expired: "Handyswap ist live!",
  },
  products: {
    sectionLabel: "Ab 1. Mai 2026",
    sectionTitle: "Die neuesten Flaggschiffe",
    sectionDesc:
      "Nagelneu, originalverpackt und versiegelt — direkt zu dir nach Hause.",
    discountNote: "mit 10% Code noch günstiger",
    priceDisclaimer:
      "* Voraussichtliche Preise. Endgültige Preise werden am 22. April 2026 bekannt gegeben.",
    pricePrefix: "ab",
    retailPrice: "UVP",
    tradeInLabel: "Trade-In Wert",
    tradeInWith: "Trade-In",
    launchDiscount: "10% Launch-Rabatt",
    youPay: "Du zahlst nur",
    youSave: "Du sparst",
    preOrderCta: "Ab 1. April: E-Mail eintragen & 10% sichern",
    examples: [
      {
        name: "iPhone 17 Pro Max",
        storage: "256GB",
        retail: "\u20ac1.299",
        tradeDevice: "iPhone 15 Pro Max 256GB",
        tradeValue: "\u20ac529",
        afterTrade: "\u20ac770",
        discountAmount: "\u20ac130",
        finalPrice: "\u20ac640",
        savings: "\u20ac659",
      },
      {
        name: "Samsung S26 Ultra",
        storage: "256GB",
        retail: "\u20ac1.449",
        tradeDevice: "iPhone 15 Pro Max 256GB",
        tradeValue: "\u20ac529",
        afterTrade: "\u20ac920",
        discountAmount: "\u20ac145",
        finalPrice: "\u20ac775",
        savings: "\u20ac674",
      },
    ],
  },
  tradeIn: {
    sectionTitle: "Dein altes Handy ist mehr wert als du denkst",
    sectionDesc: "Vergleiche unsere Trade-in Preise mit den größten Anbietern.",
    yourDevice: "Dein Gerät",
    competitor: "Anbieter",
    value: "Trade-in Wert",
    bonus: "Mehr bei Handyswap",
    devices: [
      {
        name: "iPhone 15 Pro (128GB, Guter Zustand)",
        competitors: [
          { name: "MediaMarkt", value: "€450" },
          { name: "Apple.de", value: "€480" },
          { name: "Samsung.de", value: "€470" },
        ],
        handyswapValue: "€625",
        bonusAmount: "+€145 mehr",
      },
      {
        name: "Samsung Galaxy S24 Ultra",
        competitors: [
          { name: "MediaMarkt", value: "€520" },
          { name: "Apple.de", value: "N/A" },
          { name: "Samsung.de", value: "€580" },
        ],
        handyswapValue: "€685",
        bonusAmount: "+€105 mehr",
      },
    ],
  },
  why: {
    title: "Warum Handyswap?",
    subtitle:
      "Wir machen den Smartphone-Kauf einfacher, günstiger und sicherer.",
    features: [
      {
        title: "10% Rabatt zum Launch",
        desc: "Zum Launch am 1. Mai 2026 erhältst du 10% Rabatt auf alle Smartphones. Gültig vom 1. bis 14. Mai.",
      },
      {
        title: "24 Monate Herstellergarantie",
        desc: "Volle Herstellergarantie auf alle Geräte — direkt vom Hersteller. Dein Kauf ist vollständig geschützt.",
      },
      {
        title: "DHL Express Versand",
        desc: "Schnelle Lieferung mit DHL Express nach Deutschland, Niederlande und Belgien — direkt zu dir nach Hause.",
      },
      {
        title: "24/7 Kundenservice",
        desc: "Unser Support-Team ist rund um die Uhr für dich da — per Chat, E-Mail oder Telefon.",
      },
      {
        title: "30 Tage Widerrufsrecht",
        desc: "Nicht zufrieden? Sende dein Gerät innerhalb von 30 Tagen zurück — ohne Wenn und Aber.",
      },
      {
        title: "Beste Trade-In Preise",
        desc: "Immer höhere Trade-In Werte als bei MediaMarkt.de, Apple.de und Samsung.de. Tausche dein altes Handy und spare mehr.",
      },
    ],
  },
  finalCta: {
    badge: "10% Rabatt",
    badgeSuffix: "zum Pre-Launch",
    title: "10% Rabatt auf deine erste Bestellung",
    desc: "Zum Launch am 1. Mai erhältst du bei Anmeldung 10% Rabatt auf alle Produkte. Gültig 14 Tage lang — vom 1. bis 14. Mai 2026.",
    checkValid: "Gültig vom 1.–14. Mai 2026",
    checkLimited: "Limitiert auf die ersten 1.000 Bestellungen",
    checkAutoApplied: "Wird automatisch an der Kasse angewendet",
    ctaButton: "Ab 1. April kannst du dich f\u00fcr die Warteliste anmelden!",
  },
  faq: {
    title: "Häufig gestellte Fragen (FAQ)",
    items: [
      {
        q: "Wie könnt ihr höhere Trade-in Werte garantieren?",
        a: "Wir haben keine teuren Filialen und niedrigere Betriebskosten. Diese Ersparnis geben wir direkt an dich weiter.",
      },
      {
        q: "Was ist der Haken?",
        a: "Es gibt keinen. 24 Monate Garantie, 30 Tage Rückgabe, DHL Express Versand. Alles inkludiert.",
      },
      {
        q: "Wie funktioniert der Trade-in Prozess?",
        a: "1) Bewerte dein altes Handy in 30 Sekunden. 2) Bestelle dein neues Handy. 3) DHL holt dein altes Handy kostenlos ab. 4) Du bekommst sofort Gutschrift.",
      },
      {
        q: "Was wenn mein Handy Kratzer hat?",
        a: "Unser Calculator berücksichtigt den Zustand. Dein Preis ist für 14 Tage garantiert — keine Überraschungen.",
      },
      {
        q: "Sind die Handys wirklich neu?",
        a: "Ja. Werksversiegelt mit voller Herstellergarantie.",
      },
      {
        q: "Kann ich dem vertrauen?",
        a: "30 Tage Rückgabe ohne Fragen. Wenn es dir nicht gefällt, schick es zurück. Null Risiko.",
      },
    ],
  },
  footer: {
    imprint: "Impressum",
    privacy: "Datenschutz",
    terms: "AGB",
    shipping: "Versand & Lieferung",
    copyright: "© 2026 Handyswap. Ein Unternehmen der Remobile Group.",
  },
  contact: {
    title: "Noch Fragen? Wir sind für dich da!",
    subtitle:
      "Unser Team beantwortet deine Fragen gerne — schreib uns im Live-Chat oder per E-Mail.",
    chatButton: "Live-Chat starten",
    emailLabel: "E-Mail senden",
    countdownHint: "Fragen vor dem Launch?",
    countdownChat: "Chatte mit uns",
    countdownOr: "oder schreib an",
  },
  floatingCta: "10% Rabatt sichern",
  scroll: "Scroll",
};

const en: Translations = {
  meta: {
    title: "Handyswap — Your Next Flagship Smartphone. Smarter Price.",
    description:
      "From May 1, 2026: All the latest Apple and Samsung Smartphones — from budget friendly to Flagship models Samsung Galaxy S26 & iPhone 17 — brand new, sealed, with 24-month warranty. Pre-launch offer: 10% off your first order!",
    lang: "en",
  },
  hero: {
    headline1: "The Latest Phones.",
    headline2: "The Smarter Way to Get Them.",
    subheadline: "Trade in your old device. Get a brand-new one. Pay less.",
    tradeInGuarantee:
      "Guaranteed higher trade-in value than MediaMarkt, Apple and Samsung.",
    discountBanner: "Pre-Launch Offer: 10% Off Your First Order!",
    discountValidity: "Valid May 1–14, 2026 on all products.",
  },
  form: {
    namePlaceholder: "Your name",
    placeholder: "Your email address",
    modelPlaceholder: "Which model are you interested in?",
    appleModelsLabel: "Apple",
    samsungModelsLabel: "Samsung",
    notSureYet: "Not sure yet",
    cta: "Claim 10% Discount",
    privacy: "By signing up, you agree to our",
    privacyLink: "Privacy Policy.",
    successTitle: "You're in!",
    successMessage: "Your personal",
    successCode: "10% discount code",
    successDate: "will be sent to you by email on May 1st.",
    successConfirm:
      "Please confirm your registration in the confirmation email.",
    errorName: "Please enter your name.",
    errorEmail: "Please enter a valid email address.",
    errorInterestedModel: "Please choose a model.",
    errorDuplicate: "This email address is already registered.",
    submitting: "Submitting…",
  },
  counter: {
    prefix: "Already",
    suffix: "have signed up",
  },
  trust: {
    discount: "10% Off at Launch",
    warranty: "24-Month Manufacturer Warranty",
    shipping: "DHL Express Shipping",
    support: "24/7 Customer Service",
    returns: "30-Day Cancellation Policy",
    tradein: "Best Trade-In Prices",
  },
  countdown: {
    label: "Launch on May 1, 2026",
    days: "Days",
    hours: "Hrs",
    minutes: "Min",
    seconds: "Sec",
    expired: "Handyswap is live!",
  },
  products: {
    sectionLabel: "From May 1, 2026",
    sectionTitle: "The Latest Flagships",
    sectionDesc: "Brand new, factory sealed — delivered straight to your door.",
    discountNote: "even cheaper with 10% code",
    priceDisclaimer:
      "* Estimated prices. Final prices will be announced on April 22, 2026.",
    pricePrefix: "from",
    retailPrice: "Retail Price",
    tradeInLabel: "Trade-In Value",
    tradeInWith: "Trade-In",
    launchDiscount: "10% Launch Discount",
    youPay: "You pay only",
    youSave: "You save",
    preOrderCta: "From April 1st: Sign up & secure your 10%",
    examples: [
      {
        name: "iPhone 17 Pro Max",
        storage: "256GB",
        retail: "\u20ac1,299",
        tradeDevice: "iPhone 15 Pro Max 256GB",
        tradeValue: "\u20ac529",
        afterTrade: "\u20ac770",
        discountAmount: "\u20ac130",
        finalPrice: "\u20ac640",
        savings: "\u20ac659",
      },
      {
        name: "Samsung S26 Ultra",
        storage: "256GB",
        retail: "\u20ac1,449",
        tradeDevice: "iPhone 15 Pro Max 256GB",
        tradeValue: "\u20ac529",
        afterTrade: "\u20ac920",
        discountAmount: "\u20ac145",
        finalPrice: "\u20ac775",
        savings: "\u20ac674",
      },
    ],
  },
  tradeIn: {
    sectionTitle: "Your old phone is worth more than you think",
    sectionDesc: "Compare our trade-in prices with the biggest providers.",
    yourDevice: "Your Device",
    competitor: "Provider",
    value: "Trade-in Value",
    bonus: "More at Handyswap",
    devices: [
      {
        name: "iPhone 15 Pro (128GB, Good Condition)",
        competitors: [
          { name: "MediaMarkt", value: "€450" },
          { name: "Apple.de", value: "€480" },
          { name: "Samsung.de", value: "€470" },
        ],
        handyswapValue: "€625",
        bonusAmount: "+€145 more",
      },
      {
        name: "Samsung Galaxy S24 Ultra",
        competitors: [
          { name: "MediaMarkt", value: "€520" },
          { name: "Apple.de", value: "N/A" },
          { name: "Samsung.de", value: "€580" },
        ],
        handyswapValue: "€685",
        bonusAmount: "+€105 more",
      },
    ],
  },
  why: {
    title: "Why Handyswap?",
    subtitle: "We make buying smartphones easier, cheaper, and safer.",
    features: [
      {
        title: "10% Off at Launch",
        desc: "Get 10% off all smartphones at our launch on May 1, 2026. Valid from May 1 to 14.",
      },
      {
        title: "24-Month Manufacturer Warranty",
        desc: "Full manufacturer warranty on all devices — directly from the manufacturer. Your purchase is fully protected.",
      },
      {
        title: "DHL Express Shipping",
        desc: "Fast delivery via DHL Express to Germany, Netherlands, and Belgium — straight to your door.",
      },
      {
        title: "24/7 Customer Service",
        desc: "Our support team is available around the clock — via chat, email, or phone.",
      },
      {
        title: "30-Day Cancellation Policy",
        desc: "Not satisfied? Return your device within 30 days — no questions asked.",
      },
      {
        title: "Best Trade-In Prices",
        desc: "Always higher trade-in values than MediaMarkt.de, Apple.de, and Samsung.de. Trade in your old phone and save more.",
      },
    ],
  },
  finalCta: {
    badge: "10% Discount",
    badgeSuffix: "at pre-launch",
    title: "10% Off Your First Order",
    desc: "At launch on May 1st, sign up and get 10% off all products. Valid for 14 days — from May 1 to 14, 2026.",
    checkValid: "Valid May 1–14, 2026",
    checkLimited: "Limited to first 1,000 orders",
    checkAutoApplied: "Automatically applied at checkout",
    ctaButton: "Waitlist sign-up opens April 1st — stay tuned!",
  },
  faq: {
    title: "Frequently Asked Questions (FAQ)",
    items: [
      {
        q: "How can you guarantee higher trade-in values?",
        a: "We have no expensive retail stores and lower operating costs. We pass these savings directly to you.",
      },
      {
        q: "What's the catch?",
        a: "There is none. 24-month warranty, 30-day returns, DHL Express shipping. Everything included.",
      },
      {
        q: "How does the trade-in process work?",
        a: "1) Rate your old phone in 30 seconds. 2) Order your new phone. 3) DHL picks up your old phone for free. 4) You receive instant credit.",
      },
      {
        q: "What if my phone has scratches?",
        a: "Our calculator takes the condition into account. Your price is guaranteed for 14 days — no surprises.",
      },
      {
        q: "Are the phones really new?",
        a: "Yes. Factory sealed with full manufacturer warranty.",
      },
      {
        q: "Can I trust this?",
        a: "30-day returns, no questions asked. If you don't like it, send it back. Zero risk.",
      },
    ],
  },
  footer: {
    imprint: "Imprint",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
    shipping: "Shipping & Delivery",
    copyright: "© 2026 Handyswap. A Remobile Group company.",
  },
  contact: {
    title: "Still have questions? We're here for you!",
    subtitle:
      "Our team is happy to answer your questions — reach out via live chat or email.",
    chatButton: "Start Live Chat",
    emailLabel: "Send Email",
    countdownHint: "Questions before launch?",
    countdownChat: "Chat with us",
    countdownOr: "or email",
  },
  floatingCta: "Claim 10% Discount",
  scroll: "Scroll",
};

const nl: Translations = {
  meta: {
    title: "Handyswap — Jouw Volgende Flagship-Smartphone. Slimmere Prijs.",
    description:
      "Vanaf 1 mei 2026: Alle nieuwste Apple en Samsung Smartphones — van budgetvriendelijk tot de Flagship-modellen Samsung Galaxy S26 & iPhone 17 — gloednieuw, verzegeld, met 24 maanden garantie. Pre-launch aanbieding: 10% korting op je eerste bestelling!",
    lang: "nl",
  },
  hero: {
    headline1: "De nieuwste telefoons.",
    headline2: "De slimmere manier om ze te krijgen.",
    subheadline:
      "Ruil je oude toestel in. Krijg een gloednieuw exemplaar. Betaal minder.",
    tradeInGuarantee:
      "Gegarandeerd hogere inruilwaarde dan MediaMarkt, Apple en Samsung.",
    discountBanner:
      "Pre-Launch Aanbieding: 10% Korting op Je Eerste Bestelling!",
    discountValidity: "Geldig van 1–14 mei 2026 op alle producten.",
  },
  form: {
    namePlaceholder: "Je naam",
    placeholder: "Je e-mailadres",
    modelPlaceholder: "Voor welk model heb je interesse?",
    appleModelsLabel: "Apple",
    samsungModelsLabel: "Samsung",
    notSureYet: "Nog niet zeker",
    cta: "10% Korting Claimen",
    privacy: "Door je aan te melden ga je akkoord met ons",
    privacyLink: "Privacybeleid.",
    successTitle: "Je bent erbij!",
    successMessage: "Je persoonlijke",
    successCode: "10%-kortingscode",
    successDate: "wordt je op 1 mei per e-mail toegestuurd.",
    successConfirm: "Bevestig je aanmelding via de bevestigingsmail.",
    errorName: "Vul je naam in.",
    errorEmail: "Vul een geldig e-mailadres in.",
    errorInterestedModel: "Kies een model.",
    errorDuplicate: "Dit e-mailadres is al geregistreerd.",
    submitting: "Wordt verzonden…",
  },
  counter: {
    prefix: "Al",
    suffix: "hebben zich aangemeld",
  },
  trust: {
    discount: "10% Korting bij Launch",
    warranty: "24 Maanden Fabrieksgarantie",
    shipping: "DHL Express Verzending",
    support: "24/7 Klantenservice",
    returns: "30 Dagen Herroepingsrecht",
    tradein: "Beste Inruilprijzen",
  },
  countdown: {
    label: "Launch op 1 mei 2026",
    days: "Dagen",
    hours: "Uur",
    minutes: "Min",
    seconds: "Sec",
    expired: "Handyswap is live!",
  },
  products: {
    sectionLabel: "Vanaf 1 mei 2026",
    sectionTitle: "De Nieuwste Flagships",
    sectionDesc:
      "Gloednieuw, origineel verpakt en verzegeld — rechtstreeks bij jou thuis bezorgd.",
    discountNote: "nog goedkoper met 10% code",
    priceDisclaimer:
      "* Verwachte prijzen. Definitieve prijzen worden op 22 april 2026 bekendgemaakt.",
    pricePrefix: "vanaf",
    retailPrice: "Adviesprijs",
    tradeInLabel: "Inruilwaarde",
    tradeInWith: "Inruil",
    launchDiscount: "10% Lanceringskorting",
    youPay: "Je betaalt slechts",
    youSave: "Je bespaart",
    preOrderCta: "Vanaf 1 april: Schrijf je in & verzeker je 10%",
    examples: [
      {
        name: "iPhone 17 Pro Max",
        storage: "256GB",
        retail: "\u20ac1.299",
        tradeDevice: "iPhone 15 Pro Max 256GB",
        tradeValue: "\u20ac529",
        afterTrade: "\u20ac770",
        discountAmount: "\u20ac130",
        finalPrice: "\u20ac640",
        savings: "\u20ac659",
      },
      {
        name: "Samsung S26 Ultra",
        storage: "256GB",
        retail: "\u20ac1.449",
        tradeDevice: "iPhone 15 Pro Max 256GB",
        tradeValue: "\u20ac529",
        afterTrade: "\u20ac920",
        discountAmount: "\u20ac145",
        finalPrice: "\u20ac775",
        savings: "\u20ac674",
      },
    ],
  },
  tradeIn: {
    sectionTitle: "Je oude telefoon is meer waard dan je denkt",
    sectionDesc: "Vergelijk onze inruilprijzen met de grootste aanbieders.",
    yourDevice: "Jouw Toestel",
    competitor: "Aanbieder",
    value: "Inruilwaarde",
    bonus: "Meer bij Handyswap",
    devices: [
      {
        name: "iPhone 15 Pro (128GB, Goede Staat)",
        competitors: [
          { name: "MediaMarkt", value: "€450" },
          { name: "Apple.de", value: "€480" },
          { name: "Samsung.de", value: "€470" },
        ],
        handyswapValue: "€625",
        bonusAmount: "+€145 meer",
      },
      {
        name: "Samsung Galaxy S24 Ultra",
        competitors: [
          { name: "MediaMarkt", value: "€520" },
          { name: "Apple.de", value: "N/A" },
          { name: "Samsung.de", value: "€580" },
        ],
        handyswapValue: "€685",
        bonusAmount: "+€105 meer",
      },
    ],
  },
  why: {
    title: "Waarom Handyswap?",
    subtitle:
      "Wij maken het kopen van smartphones makkelijker, goedkoper en veiliger.",
    features: [
      {
        title: "10% Korting bij Launch",
        desc: "Ontvang 10% korting op alle smartphones bij onze launch op 1 mei 2026. Geldig van 1 tot 14 mei.",
      },
      {
        title: "24 Maanden Fabrieksgarantie",
        desc: "Volledige fabrieksgarantie op alle apparaten — rechtstreeks van de fabrikant. Je aankoop is volledig beschermd.",
      },
      {
        title: "DHL Express Verzending",
        desc: "Snelle levering via DHL Express naar Duitsland, Nederland en België — rechtstreeks bij jou thuis.",
      },
      {
        title: "24/7 Klantenservice",
        desc: "Ons supportteam staat dag en nacht voor je klaar — via chat, e-mail of telefoon.",
      },
      {
        title: "30 Dagen Herroepingsrecht",
        desc: "Niet tevreden? Stuur je apparaat binnen 30 dagen terug — zonder vragen.",
      },
      {
        title: "Beste Inruilprijzen",
        desc: "Altijd hogere inruilwaarden dan MediaMarkt.de, Apple.de en Samsung.de. Ruil je oude telefoon in en bespaar meer.",
      },
    ],
  },
  finalCta: {
    badge: "10% Korting",
    badgeSuffix: "bij pre-launch",
    title: "10% Korting op Je Eerste Bestelling",
    desc: "Bij de launch op 1 mei ontvang je bij aanmelding 10% korting op alle producten. Geldig 14 dagen — van 1 tot 14 mei 2026.",
    checkValid: "Geldig van 1–14 mei 2026",
    checkLimited: "Beperkt tot de eerste 1.000 bestellingen",
    checkAutoApplied: "Wordt automatisch toegepast bij het afrekenen",
    ctaButton: "Wachtlijst inschrijving opent 1 april — blijf op de hoogte!",
  },
  faq: {
    title: "Veelgestelde Vragen (FAQ)",
    items: [
      {
        q: "Hoe kunnen jullie hogere inruilwaarden garanderen?",
        a: "We hebben geen dure winkels en lagere bedrijfskosten. Deze besparing geven we direct aan jou door.",
      },
      {
        q: "Wat is het addertje onder het gras?",
        a: "Er is er geen. 24 maanden garantie, 30 dagen retour, DHL Express verzending. Alles inbegrepen.",
      },
      {
        q: "Hoe werkt het inruilproces?",
        a: "1) Beoordeel je oude telefoon in 30 seconden. 2) Bestel je nieuwe telefoon. 3) DHL haalt je oude telefoon gratis op. 4) Je ontvangt direct tegoed.",
      },
      {
        q: "Wat als mijn telefoon krassen heeft?",
        a: "Onze calculator houdt rekening met de staat. Je prijs is 14 dagen gegarandeerd — geen verrassingen.",
      },
      {
        q: "Zijn de telefoons echt nieuw?",
        a: "Ja. Fabrieksverzegeld met volledige fabrieksgarantie.",
      },
      {
        q: "Kan ik dit vertrouwen?",
        a: "30 dagen retour zonder vragen. Als het je niet bevalt, stuur het terug. Nul risico.",
      },
    ],
  },
  footer: {
    imprint: "Impressum",
    privacy: "Privacybeleid",
    terms: "Algemene Voorwaarden",
    shipping: "Verzending & Levering",
    copyright: "© 2026 Handyswap. Een bedrijf van de Remobile Group.",
  },
  contact: {
    title: "Nog vragen? Wij staan voor je klaar!",
    subtitle:
      "Ons team beantwoordt je vragen graag — neem contact op via live chat of e-mail.",
    chatButton: "Live Chat starten",
    emailLabel: "E-mail sturen",
    countdownHint: "Vragen voor de launch?",
    countdownChat: "Chat met ons",
    countdownOr: "of mail naar",
  },
  floatingCta: "10% Korting Claimen",
  scroll: "Scroll",
};

export const translations: Record<Locale, Translations> = { de, en, nl };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.de;
}
