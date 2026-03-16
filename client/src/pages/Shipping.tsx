/**
 * Shipping.tsx
 * Shipping & Delivery page for Handyswap.com
 * Dark luxury editorial style matching the landing page
 * Adapted from Remobile shipping policy — all references changed to HandySwap
 */

import { useLocale } from "@/contexts/LocaleContext";
import { ArrowLeft, Package, Truck, Clock, MapPin, Shield, AlertTriangle, Heart } from "lucide-react";

const translations = {
  de: {
    title: "Versand & Lieferung",
    subtitle: "Informationen zu Versand, Lieferzeiten und Verpackung",
    effectiveDate: "Zuletzt aktualisiert: 1. März 2026",
    backToHome: "Zurück zur Startseite",

    intro: "Bei HandySwap wissen wir, dass Sie es kaum erwarten können, Ihr neues Gerät zu erhalten. Wir bemühen uns, alle Bestellungen schnell, sicher und effizient zu bearbeiten und zu versenden. Diese Richtlinie beschreibt unsere Versandverfahren, Lieferzeiten und was Sie bei einer Bestellung bei uns in Deutschland erwarten können.",

    companyTitle: "Unternehmensangaben",
    companyName: "Remobile 786 SL",
    companyPhone: "+49 1522 5686186",
    companyEmail: "support@handyswap.com",

    s1Title: "1. Bearbeitungszeit",
    s1Items: [
      { label: "Bearbeitungszeit", value: "1 Werktag" },
    ],
    s1Text: [
      "Alle Bestellungen werden Montag bis Freitag bearbeitet, ausgenommen Feiertage.",
      "Bestellungen, die nach 12:00 Uhr MEZ oder an Wochenenden/Feiertagen aufgegeben werden, werden am nächsten Werktag bearbeitet.",
      "Während dieser Zeit führen wir abschließende Qualitätsprüfungen durch, verpacken Ihre Bestellung sicher und bereiten die Übergabe an unsere Versandpartner vor.",
    ],

    s2Title: "2. Versanddienstleister & Sendungsverfolgung",
    s2Items: [
      { label: "Versanddienstleister", value: "DHL, UPS und andere zuverlässige nationale Spediteure" },
      { label: "Sendungsverfolgung", value: "Alle Sendungen enthalten eine Sendungsnummer, die per E-Mail nach dem Versand zugestellt wird." },
    ],
    s2Extra: "Sie können Ihre Sendung in Echtzeit über den bereitgestellten Tracking-Link verfolgen.",

    s3Title: "3. Lieferzeiten",
    s3Items: [
      { label: "Deutschland (Inlandslieferung)", value: "3–4 Werktage" },
      { label: "EU- & EWR-Länder", value: "2–5 Werktage (typisch, je nach Zielort)" },
    ],
    s3Note: "Hinweis: Lieferzeiten können während Stoßzeiten oder aufgrund unvorhergesehener Verzögerungen beim Versanddienstleister leicht abweichen.",

    s4Title: "4. Versandkosten",
    s4Items: [
      { label: "Kostenloser Versand", value: "Alle Bestellungen innerhalb Deutschlands genießen kostenlosen Standardversand." },
      { label: "Andere EU-Ziele", value: "Die Versandkosten werden an der Kasse basierend auf Zielort, Paketgewicht, Servicelevel und Versanddienstleister berechnet." },
    ],

    s5Title: "5. Verpackungsstandards",
    s5Text: [
      "Jedes Gerät wird in einer Schutzverpackung versendet, die Schäden während des Transports verhindert.",
      "Die Verpackung umfasst Polsterung, eine sichere Box und ein manipulationssicheres Siegel.",
      "Für Rücksendungen verwenden Sie bitte die Originalverpackung oder eine gleichwertig stabile Verpackung mit ausreichender Polsterung.",
    ],

    s6Title: "6. Zeitrahmen & Erwartungen",
    s6Items: [
      { label: "Bestellbestätigung", value: "Sofort per E-Mail" },
      { label: "Bearbeitung & Versand", value: "1 Werktag" },
      { label: "Versand & Lieferung (Deutschland)", value: "3–4 Werktage" },
      { label: "Sendungsverfolgung", value: "Innerhalb von 24 Stunden nach Versand" },
      { label: "DOA / Transportschaden melden", value: "Innerhalb von 24–48 Stunden für schnellste Lösung" },
      { label: "Untersuchung durch Versanddienstleister", value: "Bestätigung innerhalb von ca. 30 Tagen; Lösung kann bei komplexen Fällen länger dauern" },
    ],

    s7Title: "7. DOA oder Transportschäden",
    s7Text: [
      "Wenn Ihr Paket beschädigt ankommt oder das Gerät nicht funktionsfähig ist, melden Sie dies bitte innerhalb von 24–48 Stunden.",
      "Eine frühzeitige Meldung gewährleistet eine bevorzugte Bearbeitung, einschließlich Ersatz oder Rückerstattung nach Überprüfung.",
    ],

    commitTitle: "Unser Versprechen",
    commitText: "Bei HandySwap streben wir danach, den Versand schnell, sicher und transparent zu gestalten. Mit 1-Tag-Bearbeitung, kostenlosem Versand in Deutschland und zuverlässigen Versanddienstleistern können Sie darauf vertrauen, dass Ihr neues Gerät sicher und pünktlich ankommt.",
  },

  en: {
    title: "Shipping & Delivery",
    subtitle: "Information about shipping, delivery times, and packaging",
    effectiveDate: "Last Updated: 1 March 2026",
    backToHome: "Back to Home",

    intro: "At HandySwap, we know you're excited to receive your new device. We aim to process and dispatch all orders quickly, safely, and efficiently. This policy outlines our shipping procedures, delivery timelines, and what you can expect when ordering from us in Germany.",

    companyTitle: "Company Details",
    companyName: "Remobile 786 SL",
    companyPhone: "+49 1522 5686186",
    companyEmail: "support@handyswap.com",

    s1Title: "1. Order Processing Time",
    s1Items: [
      { label: "Handling Time", value: "1 business day" },
    ],
    s1Text: [
      "All orders are processed Monday to Friday, excluding public holidays.",
      "Orders placed after 12:00 PM CET, or on weekends/public holidays, are processed the next business day.",
      "During this time, we perform final quality checks, secure packaging, and prepare handover to our courier partners.",
    ],

    s2Title: "2. Shipping Carriers & Tracking",
    s2Items: [
      { label: "Carriers we use", value: "DHL, UPS, and other reliable national carriers" },
      { label: "Tracking", value: "All shipments include a tracking number, sent via email once your order is dispatched." },
    ],
    s2Extra: "You can monitor your shipment in real-time using the provided tracking link.",

    s3Title: "3. Delivery Timeframes",
    s3Items: [
      { label: "Germany (domestic delivery)", value: "3–4 business days" },
      { label: "EU & EEA countries", value: "2–5 business days (typical, depending on destination)" },
    ],
    s3Note: "Note: Delivery times may vary slightly during peak seasons or due to unforeseen courier delays.",

    s4Title: "4. Shipping Costs",
    s4Items: [
      { label: "Free shipping", value: "All orders within Germany enjoy free standard shipping." },
      { label: "Other EU destinations", value: "Shipping costs are calculated at checkout based on destination, package weight, service level, and carrier." },
    ],

    s5Title: "5. Packaging Standards",
    s5Text: [
      "Each device is shipped in protective packaging designed to prevent damage during transit.",
      "Packaging includes cushioning, a secure box, and a tamper-evident seal.",
      "For returns, please use the original box, or equivalent sturdy packaging with adequate cushioning.",
    ],

    s6Title: "6. Timeframes & Expectations",
    s6Items: [
      { label: "Order acknowledgement", value: "Immediately via email" },
      { label: "Handling & dispatch", value: "1 business day" },
      { label: "Shipping & delivery (Germany)", value: "3–4 business days" },
      { label: "Tracking notification", value: "Sent within 24 hours of dispatch" },
      { label: "Report DOA / transit damage", value: "Within 24–48 hours for fastest resolution" },
      { label: "Carrier investigation (if needed)", value: "Acknowledged within ~30 days; resolution may take longer for complex cases" },
    ],

    s7Title: "7. DOA or Transit Damage",
    s7Text: [
      "If your parcel arrives damaged or the device is non-functional, please report it within 24–48 hours.",
      "Early reporting ensures priority handling, including replacement or refund after verification.",
    ],

    commitTitle: "Our Commitment",
    commitText: "At HandySwap, we strive to make shipping fast, secure, and transparent. With 1-day handling, free shipping in Germany, and reliable carriers, you can trust that your new device will arrive safely and on time.",
  },

  nl: {
    title: "Verzending & Levering",
    subtitle: "Informatie over verzending, levertijden en verpakking",
    effectiveDate: "Laatst bijgewerkt: 1 maart 2026",
    backToHome: "Terug naar Home",

    intro: "Bij HandySwap weten we dat u enthousiast bent om uw nieuwe apparaat te ontvangen. Wij streven ernaar alle bestellingen snel, veilig en efficiënt te verwerken en te verzenden. Dit beleid beschrijft onze verzendprocedures, levertijden en wat u kunt verwachten bij het bestellen bij ons in Duitsland.",

    companyTitle: "Bedrijfsgegevens",
    companyName: "Remobile 786 SL",
    companyPhone: "+49 1522 5686186",
    companyEmail: "support@handyswap.com",

    s1Title: "1. Verwerkingstijd",
    s1Items: [
      { label: "Verwerkingstijd", value: "1 werkdag" },
    ],
    s1Text: [
      "Alle bestellingen worden van maandag tot en met vrijdag verwerkt, exclusief feestdagen.",
      "Bestellingen die na 12:00 uur CET of in het weekend/op feestdagen worden geplaatst, worden de volgende werkdag verwerkt.",
      "Gedurende deze tijd voeren wij laatste kwaliteitscontroles uit, verpakken wij uw bestelling veilig en bereiden wij de overdracht aan onze koerierspartners voor.",
    ],

    s2Title: "2. Vervoerders & Tracking",
    s2Items: [
      { label: "Vervoerders die wij gebruiken", value: "DHL, UPS en andere betrouwbare nationale vervoerders" },
      { label: "Tracking", value: "Alle zendingen bevatten een trackingnummer dat per e-mail wordt verzonden zodra uw bestelling is verzonden." },
    ],
    s2Extra: "U kunt uw zending in realtime volgen via de meegeleverde trackinglink.",

    s3Title: "3. Levertijden",
    s3Items: [
      { label: "Duitsland (binnenlandse levering)", value: "3–4 werkdagen" },
      { label: "EU- & EER-landen", value: "2–5 werkdagen (typisch, afhankelijk van bestemming)" },
    ],
    s3Note: "Opmerking: Levertijden kunnen enigszins variëren tijdens piekperiodes of door onvoorziene vertragingen bij de vervoerder.",

    s4Title: "4. Verzendkosten",
    s4Items: [
      { label: "Gratis verzending", value: "Alle bestellingen binnen Duitsland genieten gratis standaardverzending." },
      { label: "Andere EU-bestemmingen", value: "Verzendkosten worden bij het afrekenen berekend op basis van bestemming, pakketgewicht, serviceniveau en vervoerder." },
    ],

    s5Title: "5. Verpakkingsnormen",
    s5Text: [
      "Elk apparaat wordt verzonden in beschermende verpakking die is ontworpen om schade tijdens het transport te voorkomen.",
      "De verpakking omvat demping, een stevige doos en een verzegeling tegen manipulatie.",
      "Voor retourzendingen gebruikt u bij voorkeur de originele doos, of een gelijkwaardig stevige verpakking met voldoende demping.",
    ],

    s6Title: "6. Tijdlijnen & Verwachtingen",
    s6Items: [
      { label: "Orderbevestiging", value: "Direct per e-mail" },
      { label: "Verwerking & verzending", value: "1 werkdag" },
      { label: "Verzending & levering (Duitsland)", value: "3–4 werkdagen" },
      { label: "Trackingmelding", value: "Binnen 24 uur na verzending" },
      { label: "DOA / transportschade melden", value: "Binnen 24–48 uur voor snelste oplossing" },
      { label: "Onderzoek door vervoerder (indien nodig)", value: "Bevestiging binnen ca. 30 dagen; oplossing kan langer duren bij complexe gevallen" },
    ],

    s7Title: "7. DOA of Transportschade",
    s7Text: [
      "Als uw pakket beschadigd aankomt of het apparaat niet functioneert, meld dit dan binnen 24–48 uur.",
      "Vroegtijdige melding zorgt voor prioriteitsbehandeling, inclusief vervanging of terugbetaling na verificatie.",
    ],

    commitTitle: "Onze Belofte",
    commitText: "Bij HandySwap streven wij ernaar om verzending snel, veilig en transparant te maken. Met verwerking binnen 1 dag, gratis verzending in Duitsland en betrouwbare vervoerders kunt u erop vertrouwen dat uw nieuwe apparaat veilig en op tijd aankomt.",
  },
};

const sectionIcons: Record<string, React.ReactNode> = {
  s1: <Clock className="w-5 h-5 text-hs-blue" />,
  s2: <Truck className="w-5 h-5 text-hs-blue" />,
  s3: <MapPin className="w-5 h-5 text-hs-blue" />,
  s4: <Package className="w-5 h-5 text-hs-blue" />,
  s5: <Shield className="w-5 h-5 text-hs-blue" />,
  s6: <Clock className="w-5 h-5 text-hs-blue" />,
  s7: <AlertTriangle className="w-5 h-5 text-hs-blue" />,
  commit: <Heart className="w-5 h-5 text-hs-blue" />,
};

export default function Shipping() {
  const { locale } = useLocale();
  const t = translations[locale];

  const homeLink = locale === "de" ? "/" : `/${locale}`;

  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/90 backdrop-blur-md border-b border-white/5">
        <div className="container flex items-center justify-between h-16">
          <a href={homeLink} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t.backToHome}</span>
          </a>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/logo-primary-1-_9f4f4e4c.png"
            alt="Handyswap"
            className="h-8 w-auto"
          />
        </div>
      </header>

      {/* Content */}
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold font-display mb-2">{t.title}</h1>
          <p className="text-gray-400 text-sm mb-1">{t.subtitle}</p>
          <p className="text-gray-500 text-xs mb-8">{t.effectiveDate}</p>

          {/* Intro */}
          <p className="text-gray-300 text-sm leading-relaxed mb-8">{t.intro}</p>

          {/* Company Details */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-10">
            <h3 className="text-white font-semibold text-base mb-3">{t.companyTitle}</h3>
            <div className="space-y-1 text-sm">
              <p className="text-white font-medium">{t.companyName}</p>
              <p className="text-gray-300">📞 {t.companyPhone}</p>
              <p className="text-gray-300">📧 <a href="mailto:support@handyswap.com" className="text-hs-blue hover:underline">{t.companyEmail}</a></p>
            </div>
          </div>

          {/* Section 1 - Order Processing Time */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s1}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s1Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              {t.s1Items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-2 mb-3">
                  <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{item.label}:</span>
                  <span className="text-white text-sm font-semibold">{item.value}</span>
                </div>
              ))}
              <div className="space-y-2 mt-3 pt-3 border-t border-white/5">
                {t.s1Text.map((text, i) => (
                  <p key={i} className="text-gray-300 text-sm">{text}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2 - Shipping Carriers & Tracking */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s2}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s2Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              {t.s2Items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{item.label}:</span>
                  <span className="text-white text-sm">{item.value}</span>
                </div>
              ))}
              <p className="text-gray-300 text-sm pt-2">{t.s2Extra}</p>
            </div>
          </section>

          {/* Section 3 - Delivery Timeframes */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s3}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s3Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="space-y-3 mb-4">
                {t.s3Items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="text-gray-400 text-sm font-medium sm:w-56 flex-shrink-0">{item.label}:</span>
                    <span className="text-white text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="border-l-2 border-amber-500/40 pl-4 mt-4">
                <p className="text-amber-400/80 text-sm italic">{t.s3Note}</p>
              </div>
            </div>
          </section>

          {/* Section 4 - Shipping Costs */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s4}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s4Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              {t.s4Items.map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:gap-2">
                  <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{item.label}:</span>
                  <span className="text-white text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 - Packaging Standards */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s5}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s5Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              {t.s5Text.map((text, i) => (
                <p key={i} className="text-gray-300 text-sm">{text}</p>
              ))}
            </div>
          </section>

          {/* Section 6 - Timeframes & Expectations */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s6}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s6Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="space-y-3">
                {t.s6Items.map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:gap-2">
                    <span className="text-gray-400 text-sm font-medium sm:w-64 flex-shrink-0">{item.label}:</span>
                    <span className="text-white text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7 - DOA or Transit Damage */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.s7}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.s7Title}</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              {t.s7Text.map((text, i) => (
                <p key={i} className="text-gray-300 text-sm">{text}</p>
              ))}
            </div>
          </section>

          {/* Our Commitment */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              {sectionIcons.commit}
              <h2 className="text-xl font-bold font-display text-hs-blue">{t.commitTitle}</h2>
            </div>
            <div className="bg-gradient-to-br from-hs-blue/10 to-white/5 border border-hs-blue/20 rounded-xl p-6">
              <p className="text-gray-200 text-sm leading-relaxed">{t.commitText}</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="container text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Handyswap.com — Remobile 786 SL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
