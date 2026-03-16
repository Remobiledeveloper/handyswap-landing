/**
 * Impressum.tsx
 * Legal Notice / Impressum page for Handyswap.com
 * Dark luxury editorial style matching the landing page
 * Based on Remobile 786 SL company details
 */

import { useLocale } from "@/contexts/LocaleContext";
import { ArrowLeft } from "lucide-react";

const translations = {
  de: {
    title: "Impressum",
    subtitle: "Rechtliche Angaben gemäß § 5 TMG",
    effectiveDate: "Gültig ab: 1. November 2025",
    companyInfo: "Unternehmensangaben",
    companyName: "Firmenname",
    register: "Handelsregister",
    telephone: "Telefon",
    email: "E-Mail",
    website: "Webseite",
    activity: "Geschäftstätigkeit",
    activityText: "Verkauf von neuen Mobiltelefonen, Batterien, Zubehör, Unterhaltungselektronik und verwandten Dienstleistungen in der Europäischen Union.",
    legalTax: "Rechtliche & Steuerliche Angaben",
    taxId: "Steuer-ID (NIF)",
    companyReg: "Handelsregisternummer",
    vatId: "USt-IdNr.",
    managingDirector: "Geschäftsführer",
    germanCompliance: "Deutsche Compliance-Nummern",
    eprNumber: "EPR-Nummer (Erweiterte Herstellerverantwortung)",
    weeeNumber: "WEEE-Nummer (Elektro- und Elektronik-Altgeräte)",
    battgNumber: "BattG-Nummer (Batteriegesetz-Registrierung)",
    complianceNote: "Diese Nummern bestätigen die Einhaltung der deutschen Vorschriften für Elektro-/Elektronikgeräte und Batterien.",
    disclaimer: "Haftungsausschluss / Haftungsbeschränkung",
    disclaimerText: "Soweit gesetzlich zulässig, ist die Haftung aus dem Verkauf von Produkten auf den Kaufpreis des Produkts beschränkt. Nichts in diesem Impressum schließt die Haftung für Tod, Körperverletzung oder Betrug aus, die gesetzlich nicht ausgeschlossen werden kann.",
    accessibility: "Barrierefreiheit & Kontakt",
    accessibilityText: "Für alternative Formate oder bei Problemen mit der Barrierefreiheit kontaktieren Sie uns:",
    updates: "Aktualisierungen",
    updatesText: "Dieses Impressum kann von Zeit zu Zeit aktualisiert werden. Die aktuelle Version und das Gültigkeitsdatum werden immer oben auf dieser Seite angezeigt.",
    backToHome: "Zurück zur Startseite",
  },
  en: {
    title: "Legal Notice / Impressum",
    subtitle: "Legal information pursuant to § 5 TMG",
    effectiveDate: "Effective Date: 1 November 2025",
    companyInfo: "Company Information",
    companyName: "Company Name",
    register: "Register",
    telephone: "Telephone",
    email: "Email",
    website: "Website",
    activity: "Company Activity",
    activityText: "Sale of new mobile phones, batteries, accessories, consumer electronics and related services across the European Union.",
    legalTax: "Legal & Tax Information",
    taxId: "NIF (Tax ID)",
    companyReg: "Company Registration",
    vatId: "VAT ID",
    managingDirector: "Managing Director",
    germanCompliance: "German Compliance Numbers",
    eprNumber: "EPR Number (Extended Producer Responsibility)",
    weeeNumber: "WEEE Number (Waste Electrical & Electronic Equipment)",
    battgNumber: "BattG Number (Battery Act Registration)",
    complianceNote: "These numbers confirm compliance with German regulations on electrical/electronic equipment and batteries.",
    disclaimer: "Disclaimer / Limitation of Liability",
    disclaimerText: "To the extent permitted by law, liability arising from the sale of products is limited to the purchase price of the product. Nothing in this Legal Notice excludes liability for death, personal injury, or fraud, which cannot legally be excluded.",
    accessibility: "Accessibility & Contact",
    accessibilityText: "For alternative formats or accessibility issues, contact:",
    updates: "Updates",
    updatesText: "This Legal Notice / Impressum may be updated from time to time. The current version and effective date are always displayed at the top of this page.",
    backToHome: "Back to Home",
  },
  nl: {
    title: "Juridische kennisgeving / Impressum",
    subtitle: "Juridische informatie conform § 5 TMG",
    effectiveDate: "Ingangsdatum: 1 november 2025",
    companyInfo: "Bedrijfsinformatie",
    companyName: "Bedrijfsnaam",
    register: "Handelsregister",
    telephone: "Telefoon",
    email: "E-mail",
    website: "Website",
    activity: "Bedrijfsactiviteit",
    activityText: "Verkoop van nieuwe mobiele telefoons, batterijen, accessoires, consumentenelektronica en aanverwante diensten in de Europese Unie.",
    legalTax: "Juridische & Fiscale Informatie",
    taxId: "NIF (Belasting-ID)",
    companyReg: "Bedrijfsregistratie",
    vatId: "BTW-nummer",
    managingDirector: "Directeur",
    germanCompliance: "Duitse Compliance-nummers",
    eprNumber: "EPR-nummer (Uitgebreide Producentenverantwoordelijkheid)",
    weeeNumber: "WEEE-nummer (Afgedankte Elektrische en Elektronische Apparatuur)",
    battgNumber: "BattG-nummer (Batterijwet Registratie)",
    complianceNote: "Deze nummers bevestigen de naleving van de Duitse regelgeving voor elektrische/elektronische apparatuur en batterijen.",
    disclaimer: "Disclaimer / Beperking van Aansprakelijkheid",
    disclaimerText: "Voor zover wettelijk toegestaan, is de aansprakelijkheid uit de verkoop van producten beperkt tot de aankoopprijs van het product. Niets in deze juridische kennisgeving sluit aansprakelijkheid uit voor overlijden, persoonlijk letsel of fraude, die wettelijk niet kan worden uitgesloten.",
    accessibility: "Toegankelijkheid & Contact",
    accessibilityText: "Voor alternatieve formaten of toegankelijkheidsproblemen, neem contact op:",
    updates: "Updates",
    updatesText: "Deze juridische kennisgeving kan van tijd tot tijd worden bijgewerkt. De huidige versie en ingangsdatum worden altijd bovenaan deze pagina weergegeven.",
    backToHome: "Terug naar Home",
  },
};

export default function Impressum() {
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
          <p className="text-gray-500 text-xs mb-10">{t.effectiveDate}</p>

          {/* Company Information */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.companyInfo}</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.companyName}:</span>
                <span className="text-white text-sm">Remobile 786 SL</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.register}:</span>
                <span className="text-white text-sm">Avinguda Diagonal, 442, 08037 Barcelona, Spain</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.telephone}:</span>
                <span className="text-white text-sm">+49 1522 5686186</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.email}:</span>
                <a href="mailto:support@handyswap.com" className="text-hs-blue hover:underline text-sm">support@handyswap.com</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.website}:</span>
                <a href="https://handyswap.com" className="text-hs-blue hover:underline text-sm">https://handyswap.com</a>
              </div>
              <div className="pt-2 border-t border-white/5">
                <span className="text-gray-400 text-sm font-medium">{t.activity}:</span>
                <p className="text-white text-sm mt-1">{t.activityText}</p>
              </div>
            </div>
          </section>

          {/* Legal & Tax Information */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.legalTax}</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.taxId}:</span>
                <span className="text-white text-sm">B56409766</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.companyReg}:</span>
                <span className="text-white text-sm">B56409766</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.vatId}:</span>
                <span className="text-white text-sm">DE363848600</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.managingDirector}:</span>
                <span className="text-white text-sm">H.A. Mian</span>
              </div>
            </div>
          </section>

          {/* German Compliance Numbers */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.germanCompliance}</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.eprNumber}:</span>
                <span className="text-white text-sm font-mono">DE2185706986832</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.weeeNumber}:</span>
                <span className="text-white text-sm font-mono">DE83487761</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="text-gray-400 text-sm font-medium sm:w-48 flex-shrink-0">{t.battgNumber}:</span>
                <span className="text-white text-sm font-mono">DE19151962</span>
              </div>
              <p className="text-gray-500 text-xs pt-2 border-t border-white/5">{t.complianceNote}</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.disclaimer}</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 text-sm leading-relaxed">{t.disclaimerText}</p>
            </div>
          </section>

          {/* Accessibility & Contact */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.accessibility}</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 text-sm mb-3">{t.accessibilityText}</p>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="text-gray-400">{t.email}: </span>
                  <a href="mailto:support@handyswap.com" className="text-hs-blue hover:underline">support@handyswap.com</a>
                </p>
                <p className="text-sm">
                  <span className="text-gray-400">{t.telephone}: </span>
                  <span className="text-white">+49 1522 5686186</span>
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.updates}</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 text-sm leading-relaxed">{t.updatesText}</p>
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
