/**
 * AGB.tsx
 * Terms & Conditions / AGB page for Handyswap.com
 * Dark luxury editorial style matching the landing page
 * Content provided by Hassib — adapted for HandySwap branding
 */

import { useLocale } from "@/contexts/LocaleContext";
import { ArrowLeft } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Translation data for DE / EN / NL                                  */
/* ------------------------------------------------------------------ */

const translations = {
  /* ======================== ENGLISH ======================== */
  en: {
    title: "Terms & Conditions",
    effectiveDate: "Effective Date: 1 March 2026",
    backToHome: "Back to Home",
    intro: 'Welcome to HandySwap. These Terms of Service ("Terms") govern your purchase of products and use of services from HandySwap.com. By placing an order or using our Services, you accept and agree to be bound by these Terms.',

    s1Title: "1. Introduction / Scope",
    s1Text: "These Terms apply to both consumers (private buyers) and business customers, unless stated otherwise.",
    s1Note: "Note for EU consumers: Mandatory consumer protection laws apply and take precedence over conflicting clauses in these Terms.",

    s2Title: "2. Definitions",
    s2List: [
      "Seller / We / Us / HandySwap — Remobile 786 SL",
      "Buyer / You / Customer — Person or entity purchasing from handyswap.com",
      "Goods / Products — Physical devices and accessories, including new phones",
    ],

    s3Title: "3. Orders, Acceptance & Contract Formation",
    s3List: [
      "Placing an order on handyswap.com is an offer to buy.",
      "We confirm orders via email confirmation; the contract is formed upon dispatch/delivery confirmation.",
      "Orders may be cancelled due to pricing errors, stock issues, or suspected fraud. Refunds are issued promptly if cancelled.",
    ],

    s4Title: "4. Prices, Payment & Tax",
    s4List: [
      "Prices include VAT, unless stated otherwise.",
      "Accepted payment methods are displayed at checkout. Payment must be received before dispatch.",
      "Discounts, promotions, or voucher codes may be applied and can be withdrawn at any time.",
    ],

    s5Title: "5. Delivery & Risk",
    s5List: [
      "Delivery times are estimated from dispatch and communicated at checkout.",
      "Risk passes to you on delivery. Notify us immediately if goods arrive damaged and retain packaging.",
    ],

    s6Title: "6. Right of Withdrawal & 30-Day Returns",
    s6aSub: "A. Statutory Right (EU Consumers)",
    s6aList: [
      "EU consumers can withdraw within 14 days of receiving goods. Refunds include the price and certain delivery costs.",
    ],
    s6bSub: "B. HandySwap 30-Day Change-of-Mind Returns",
    s6bList: [
      "Notify us via support@handyswap.com within 30 days.",
      "Return the product with all accessories and packaging.",
      "Back up data, perform a factory reset, remove SIM/memory cards, and disable activation locks.",
    ],
    s6bNote: "Handling beyond necessary inspection may result in deductions for diminished value.",
    s6cSub: "C. Non-Eligible Returns",
    s6cList: [
      "Customised products, consumables, unsealed software, or items marked non-returnable.",
    ],

    s7Title: "7. Refunds & Timing",
    s7List: [
      "Refunds are issued to the original payment method unless agreed otherwise.",
      "Refunds are processed without undue delay, typically within 14 days of receiving the returned goods.",
      "Damaged goods may result in a deduction to reflect diminished value; itemized and explained.",
    ],

    s8Title: "8. Warranty, Coverage & Claims",
    s8aSub: "A. Statutory Guarantee",
    s8aList: ["EU consumers are entitled to a minimum 2-year legal guarantee for non-conforming goods."],
    s8bSub: "B. HandySwap Commercial Warranty — 24 Months",
    s8bList: ["Covers qualifying devices, including new battery defects."],
    s8cSub: "C. What's Covered",
    s8cList: [
      "Manufacturing defects",
      "Internal component failures, including battery defects",
    ],
    s8dSub: "D. Exclusions",
    s8dList: [
      "Accidental, liquid, or misuse damage",
      "Cosmetic damage that doesn't affect operation",
      "Unauthorized repairs or non-compliant accessories",
      "Theft, loss, or abuse",
      "Normal battery decline (unless premature failure occurs)",
    ],
    s8eSub: "E. Remedies",
    s8eList: ["Repair, replacement, or refund if repair/replacement is impossible."],
    s8fSub: "F. Claim Procedure",
    s8fSteps: [
      "Contact support@handyswap.com",
      "Provide order number, device model, IMEI/serial, description, and photos/videos",
      "Receive RMA and prepaid return label (if applicable)",
      "Return the device after backup and factory reset",
      "Evaluation and next steps communicated promptly",
    ],

    s9Title: "9. Limitations of Liability",
    s9List: [
      "Liability limited to the purchase price of the product.",
      "No exclusion of liability for death, personal injury, or fraud.",
      "Indirect or consequential losses excluded where legally permitted.",
    ],

    s10Title: "10. Product Condition & Descriptions",
    s10List: [
      "All goods are brand-new and factory-sealed.",
      "Product pages display specifications, accessories included, and warranty information.",
    ],

    s11Title: "11. Returns, Refunds & Warranty — Practical Notes",
    s11List: [
      "Back up data and remove personal accounts before returns.",
      "Diagnostic or non-warranty repairs require consent.",
      "Refunds or price reductions apply if repairs are not possible within reasonable time.",
    ],

    s12Title: "12. Intellectual Property",
    s12List: [
      "All content on HandySwap is owned or licensed by HandySwap.com.",
      "No reproduction without written permission.",
    ],

    s13Title: "13. Privacy & Cookies",
    s13List: [
      "Personal data is processed under our Privacy Policy and GDPR.",
      "By using our Services, you consent to data collection and storage.",
    ],

    s14Title: "14. Termination & Suspension",
    s14List: [
      "Services may be suspended for fraud, misuse, or breach of Terms.",
      "Users must not attempt to access restricted areas after termination.",
    ],

    s15Title: "15. Store Rules & Dispute Handling",
    s15Text: "All customers are expected to use our Services responsibly and comply with store policies, including fair communication, proper handling of returns, and honest reviews. If a dispute arises, both parties agree to attempt resolution in good faith within 7 calendar days of receipt.",

    s16Title: "16. Changes to Terms",
    s16List: [
      "Terms may be updated due to law or service changes.",
      "Continued use after updates constitutes acceptance.",
    ],

    contactTitle: "Contact & Customer Support",
    contactCompany: "Remobile 786 SL",
    contactPhone: "Phone: +49 1522 5686186",
    contactEmail: "Returns Portal: support@handyswap.com",
  },

  /* ======================== GERMAN ======================== */
  de: {
    title: "Allgemeine Geschäftsbedingungen (AGB)",
    effectiveDate: "Gültig ab: 1. März 2026",
    backToHome: "Zurück zur Startseite",
    intro: 'Willkommen bei HandySwap. Diese Allgemeinen Geschäftsbedingungen („AGB") regeln Ihren Kauf von Produkten und die Nutzung von Dienstleistungen auf HandySwap.com. Mit der Aufgabe einer Bestellung oder der Nutzung unserer Dienste akzeptieren Sie diese AGB und erklären sich damit einverstanden, an sie gebunden zu sein.',

    s1Title: "1. Einleitung / Geltungsbereich",
    s1Text: "Diese AGB gelten sowohl für Verbraucher (Privatkäufer) als auch für Geschäftskunden, sofern nicht anders angegeben.",
    s1Note: "Hinweis für EU-Verbraucher: Zwingende Verbraucherschutzgesetze gelten und haben Vorrang vor widersprüchlichen Klauseln in diesen AGB.",

    s2Title: "2. Definitionen",
    s2List: [
      "Verkäufer / Wir / Uns / HandySwap — Remobile 786 SL",
      "Käufer / Sie / Kunde — Person oder Unternehmen, das auf handyswap.com einkauft",
      "Waren / Produkte — Physische Geräte und Zubehör, einschließlich neuer Smartphones",
    ],

    s3Title: "3. Bestellungen, Annahme & Vertragsschluss",
    s3List: [
      "Eine Bestellung auf handyswap.com stellt ein Kaufangebot dar.",
      "Wir bestätigen Bestellungen per E-Mail; der Vertrag kommt mit der Versand-/Lieferbestätigung zustande.",
      "Bestellungen können aufgrund von Preisfehlern, Lagerproblemen oder Betrugsverdacht storniert werden. Rückerstattungen erfolgen umgehend bei Stornierung.",
    ],

    s4Title: "4. Preise, Zahlung & Steuern",
    s4List: [
      "Preise verstehen sich inklusive MwSt., sofern nicht anders angegeben.",
      "Akzeptierte Zahlungsmethoden werden an der Kasse angezeigt. Die Zahlung muss vor dem Versand eingehen.",
      "Rabatte, Aktionen oder Gutscheincodes können angewendet und jederzeit zurückgezogen werden.",
    ],

    s5Title: "5. Lieferung & Gefahrübergang",
    s5List: [
      "Lieferzeiten werden ab Versand geschätzt und an der Kasse mitgeteilt.",
      "Die Gefahr geht bei Lieferung auf Sie über. Benachrichtigen Sie uns sofort, wenn Waren beschädigt ankommen, und bewahren Sie die Verpackung auf.",
    ],

    s6Title: "6. Widerrufsrecht & 30-Tage-Rückgabe",
    s6aSub: "A. Gesetzliches Recht (EU-Verbraucher)",
    s6aList: [
      "EU-Verbraucher können innerhalb von 14 Tagen nach Erhalt der Ware widerrufen. Rückerstattungen umfassen den Preis und bestimmte Lieferkosten.",
    ],
    s6bSub: "B. HandySwap 30-Tage-Rückgabe bei Meinungsänderung",
    s6bList: [
      "Benachrichtigen Sie uns innerhalb von 30 Tagen per support@handyswap.com.",
      "Senden Sie das Produkt mit allem Zubehör und der Verpackung zurück.",
      "Sichern Sie Ihre Daten, führen Sie einen Werksreset durch, entfernen Sie SIM-/Speicherkarten und deaktivieren Sie Aktivierungssperren.",
    ],
    s6bNote: "Eine über die notwendige Prüfung hinausgehende Handhabung kann zu Abzügen wegen Wertminderung führen.",
    s6cSub: "C. Nicht rückgabeberechtigte Artikel",
    s6cList: [
      "Individualisierte Produkte, Verbrauchsmaterialien, entsiegelte Software oder als nicht rückgabefähig gekennzeichnete Artikel.",
    ],

    s7Title: "7. Rückerstattungen & Fristen",
    s7List: [
      "Rückerstattungen erfolgen auf die ursprüngliche Zahlungsmethode, sofern nicht anders vereinbart.",
      "Rückerstattungen werden unverzüglich bearbeitet, in der Regel innerhalb von 14 Tagen nach Erhalt der zurückgesendeten Ware.",
      "Beschädigte Waren können zu einem Abzug zur Berücksichtigung der Wertminderung führen; aufgeschlüsselt und erklärt.",
    ],

    s8Title: "8. Garantie, Abdeckung & Ansprüche",
    s8aSub: "A. Gesetzliche Gewährleistung",
    s8aList: ["EU-Verbraucher haben Anspruch auf eine mindestens 2-jährige gesetzliche Gewährleistung für nicht konforme Waren."],
    s8bSub: "B. HandySwap Kommerzielle Garantie — 24 Monate",
    s8bList: ["Deckt qualifizierende Geräte ab, einschließlich neuer Batteriedefekte."],
    s8cSub: "C. Was ist abgedeckt",
    s8cList: [
      "Herstellungsfehler",
      "Interne Komponentenausfälle, einschließlich Batteriedefekte",
    ],
    s8dSub: "D. Ausschlüsse",
    s8dList: [
      "Unfall-, Flüssigkeits- oder Missbrauchsschäden",
      "Kosmetische Schäden, die die Funktion nicht beeinträchtigen",
      "Nicht autorisierte Reparaturen oder nicht konforme Zubehörteile",
      "Diebstahl, Verlust oder Missbrauch",
      "Normaler Batterieverschleiß (es sei denn, vorzeitiger Ausfall tritt auf)",
    ],
    s8eSub: "E. Abhilfemaßnahmen",
    s8eList: ["Reparatur, Ersatz oder Rückerstattung, wenn Reparatur/Ersatz nicht möglich ist."],
    s8fSub: "F. Reklamationsverfahren",
    s8fSteps: [
      "Kontaktieren Sie support@handyswap.com",
      "Geben Sie Bestellnummer, Gerätemodell, IMEI/Seriennummer, Beschreibung und Fotos/Videos an",
      "Erhalten Sie RMA und vorfrankiertes Rücksendeetikett (falls zutreffend)",
      "Senden Sie das Gerät nach Datensicherung und Werksreset zurück",
      "Bewertung und nächste Schritte werden umgehend mitgeteilt",
    ],

    s9Title: "9. Haftungsbeschränkung",
    s9List: [
      "Die Haftung ist auf den Kaufpreis des Produkts beschränkt.",
      "Keine Haftungsausschlüsse für Tod, Körperverletzung oder Betrug.",
      "Indirekte oder Folgeschäden sind ausgeschlossen, soweit gesetzlich zulässig.",
    ],

    s10Title: "10. Produktzustand & Beschreibungen",
    s10List: [
      "Alle Waren sind brandneu und werksversiegelt.",
      "Produktseiten zeigen Spezifikationen, enthaltenes Zubehör und Garantieinformationen an.",
    ],

    s11Title: "11. Rücksendungen, Rückerstattungen & Garantie — Praktische Hinweise",
    s11List: [
      "Sichern Sie Ihre Daten und entfernen Sie persönliche Konten vor der Rücksendung.",
      "Diagnose- oder Nicht-Garantie-Reparaturen erfordern Ihre Zustimmung.",
      "Rückerstattungen oder Preisminderungen gelten, wenn Reparaturen nicht innerhalb angemessener Zeit möglich sind.",
    ],

    s12Title: "12. Geistiges Eigentum",
    s12List: [
      "Alle Inhalte auf HandySwap sind Eigentum von oder lizenziert an HandySwap.com.",
      "Keine Vervielfältigung ohne schriftliche Genehmigung.",
    ],

    s13Title: "13. Datenschutz & Cookies",
    s13List: [
      "Personenbezogene Daten werden gemäß unserer Datenschutzerklärung und der DSGVO verarbeitet.",
      "Durch die Nutzung unserer Dienste stimmen Sie der Datenerhebung und -speicherung zu.",
    ],

    s14Title: "14. Kündigung & Sperrung",
    s14List: [
      "Dienste können bei Betrug, Missbrauch oder Verstoß gegen die AGB gesperrt werden.",
      "Benutzer dürfen nach der Kündigung nicht versuchen, auf eingeschränkte Bereiche zuzugreifen.",
    ],

    s15Title: "15. Shop-Regeln & Streitbeilegung",
    s15Text: "Alle Kunden sind verpflichtet, unsere Dienste verantwortungsvoll zu nutzen und die Shop-Richtlinien einzuhalten, einschließlich fairer Kommunikation, ordnungsgemäßer Abwicklung von Rücksendungen und ehrlicher Bewertungen. Bei Streitigkeiten verpflichten sich beide Parteien, innerhalb von 7 Kalendertagen nach Erhalt eine gütliche Einigung anzustreben.",

    s16Title: "16. Änderungen der AGB",
    s16List: [
      "Die AGB können aufgrund von Gesetzes- oder Dienstleistungsänderungen aktualisiert werden.",
      "Die fortgesetzte Nutzung nach Aktualisierungen gilt als Zustimmung.",
    ],

    contactTitle: "Kontakt & Kundensupport",
    contactCompany: "Remobile 786 SL",
    contactPhone: "Telefon: +49 1522 5686186",
    contactEmail: "Rücksendeportal: support@handyswap.com",
  },

  /* ======================== DUTCH ======================== */
  nl: {
    title: "Algemene Voorwaarden",
    effectiveDate: "Ingangsdatum: 1 maart 2026",
    backToHome: "Terug naar Home",
    intro: 'Welkom bij HandySwap. Deze Algemene Voorwaarden ("Voorwaarden") regelen uw aankoop van producten en gebruik van diensten op HandySwap.com. Door een bestelling te plaatsen of onze Diensten te gebruiken, accepteert u deze Voorwaarden en stemt u ermee in hieraan gebonden te zijn.',

    s1Title: "1. Inleiding / Toepassingsgebied",
    s1Text: "Deze Voorwaarden zijn van toepassing op zowel consumenten (particuliere kopers) als zakelijke klanten, tenzij anders vermeld.",
    s1Note: "Opmerking voor EU-consumenten: Dwingende consumentenbeschermingswetten zijn van toepassing en hebben voorrang op tegenstrijdige clausules in deze Voorwaarden.",

    s2Title: "2. Definities",
    s2List: [
      "Verkoper / Wij / Ons / HandySwap — Remobile 786 SL",
      "Koper / U / Klant — Persoon of entiteit die koopt op handyswap.com",
      "Goederen / Producten — Fysieke apparaten en accessoires, inclusief nieuwe telefoons",
    ],

    s3Title: "3. Bestellingen, Acceptatie & Contractvorming",
    s3List: [
      "Het plaatsen van een bestelling op handyswap.com is een aanbod tot koop.",
      "Wij bevestigen bestellingen per e-mail; het contract komt tot stand bij verzend-/leveringsbevestiging.",
      "Bestellingen kunnen worden geannuleerd vanwege prijsfouten, voorraadproblemen of vermoeden van fraude. Terugbetalingen worden onmiddellijk verwerkt bij annulering.",
    ],

    s4Title: "4. Prijzen, Betaling & Belasting",
    s4List: [
      "Prijzen zijn inclusief BTW, tenzij anders vermeld.",
      "Geaccepteerde betaalmethoden worden bij het afrekenen weergegeven. Betaling moet vóór verzending worden ontvangen.",
      "Kortingen, promoties of vouchercodes kunnen worden toegepast en op elk moment worden ingetrokken.",
    ],

    s5Title: "5. Levering & Risico",
    s5List: [
      "Levertijden worden geschat vanaf verzending en bij het afrekenen meegedeeld.",
      "Het risico gaat bij levering op u over. Meld onmiddellijk als goederen beschadigd aankomen en bewaar de verpakking.",
    ],

    s6Title: "6. Herroepingsrecht & 30-Dagen Retour",
    s6aSub: "A. Wettelijk Recht (EU-consumenten)",
    s6aList: [
      "EU-consumenten kunnen binnen 14 dagen na ontvangst van de goederen herroepen. Terugbetalingen omvatten de prijs en bepaalde leveringskosten.",
    ],
    s6bSub: "B. HandySwap 30-Dagen Retour bij Bedenking",
    s6bList: [
      "Meld dit binnen 30 dagen via support@handyswap.com.",
      "Retourneer het product met alle accessoires en verpakking.",
      "Maak een back-up van uw gegevens, voer een fabrieksreset uit, verwijder SIM-/geheugenkaarten en schakel activeringssloten uit.",
    ],
    s6bNote: "Gebruik dat verder gaat dan noodzakelijke inspectie kan leiden tot aftrek wegens waardevermindering.",
    s6cSub: "C. Niet-retourneerbare Artikelen",
    s6cList: [
      "Op maat gemaakte producten, verbruiksartikelen, geopende software of artikelen die als niet-retourneerbaar zijn gemarkeerd.",
    ],

    s7Title: "7. Terugbetalingen & Termijnen",
    s7List: [
      "Terugbetalingen worden gedaan via de oorspronkelijke betaalmethode, tenzij anders overeengekomen.",
      "Terugbetalingen worden zonder onnodige vertraging verwerkt, doorgaans binnen 14 dagen na ontvangst van de geretourneerde goederen.",
      "Beschadigde goederen kunnen leiden tot een aftrek ter weerspiegeling van waardevermindering; gespecificeerd en uitgelegd.",
    ],

    s8Title: "8. Garantie, Dekking & Claims",
    s8aSub: "A. Wettelijke Garantie",
    s8aList: ["EU-consumenten hebben recht op een minimale wettelijke garantie van 2 jaar voor niet-conforme goederen."],
    s8bSub: "B. HandySwap Commerciële Garantie — 24 Maanden",
    s8bList: ["Dekt in aanmerking komende apparaten, inclusief nieuwe batterijdefecten."],
    s8cSub: "C. Wat is Gedekt",
    s8cList: [
      "Fabricagefouten",
      "Interne componentfouten, inclusief batterijdefecten",
    ],
    s8dSub: "D. Uitsluitingen",
    s8dList: [
      "Ongeluk-, vloeistof- of misbruikschade",
      "Cosmetische schade die de werking niet beïnvloedt",
      "Ongeautoriseerde reparaties of niet-conforme accessoires",
      "Diefstal, verlies of misbruik",
      "Normale batterijslijtage (tenzij voortijdig falen optreedt)",
    ],
    s8eSub: "E. Remedies",
    s8eList: ["Reparatie, vervanging of terugbetaling als reparatie/vervanging niet mogelijk is."],
    s8fSub: "F. Claimprocedure",
    s8fSteps: [
      "Neem contact op met support@handyswap.com",
      "Verstrek bestelnummer, apparaatmodel, IMEI/serienummer, beschrijving en foto's/video's",
      "Ontvang RMA en vooraf betaald retourlabel (indien van toepassing)",
      "Retourneer het apparaat na back-up en fabrieksreset",
      "Evaluatie en volgende stappen worden snel gecommuniceerd",
    ],

    s9Title: "9. Beperking van Aansprakelijkheid",
    s9List: [
      "Aansprakelijkheid beperkt tot de aankoopprijs van het product.",
      "Geen uitsluiting van aansprakelijkheid voor overlijden, persoonlijk letsel of fraude.",
      "Indirecte of gevolgschade uitgesloten waar wettelijk toegestaan.",
    ],

    s10Title: "10. Productconditie & Beschrijvingen",
    s10List: [
      "Alle goederen zijn gloednieuw en fabrieksmatig verzegeld.",
      "Productpagina's tonen specificaties, meegeleverde accessoires en garantie-informatie.",
    ],

    s11Title: "11. Retourzendingen, Terugbetalingen & Garantie — Praktische Opmerkingen",
    s11List: [
      "Maak een back-up van uw gegevens en verwijder persoonlijke accounts vóór retourzending.",
      "Diagnostische of niet-garantiereparaties vereisen uw toestemming.",
      "Terugbetalingen of prijsverlagingen zijn van toepassing als reparaties niet binnen redelijke tijd mogelijk zijn.",
    ],

    s12Title: "12. Intellectueel Eigendom",
    s12List: [
      "Alle inhoud op HandySwap is eigendom van of in licentie gegeven aan HandySwap.com.",
      "Geen reproductie zonder schriftelijke toestemming.",
    ],

    s13Title: "13. Privacy & Cookies",
    s13List: [
      "Persoonsgegevens worden verwerkt onder ons Privacybeleid en de AVG.",
      "Door gebruik te maken van onze Diensten stemt u in met gegevensverzameling en -opslag.",
    ],

    s14Title: "14. Beëindiging & Opschorting",
    s14List: [
      "Diensten kunnen worden opgeschort bij fraude, misbruik of schending van de Voorwaarden.",
      "Gebruikers mogen na beëindiging niet proberen toegang te krijgen tot beperkte gebieden.",
    ],

    s15Title: "15. Winkelregels & Geschillenbeslechting",
    s15Text: "Alle klanten worden verwacht onze Diensten verantwoordelijk te gebruiken en zich te houden aan het winkelbeleid, inclusief eerlijke communicatie, correcte afhandeling van retourzendingen en eerlijke beoordelingen. Bij een geschil komen beide partijen overeen om binnen 7 kalenderdagen na ontvangst te goeder trouw een oplossing te zoeken.",

    s16Title: "16. Wijzigingen in de Voorwaarden",
    s16List: [
      "Voorwaarden kunnen worden bijgewerkt vanwege wettelijke of dienstwijzigingen.",
      "Voortgezet gebruik na updates geldt als acceptatie.",
    ],

    contactTitle: "Contact & Klantenservice",
    contactCompany: "Remobile 786 SL",
    contactPhone: "Telefoon: +49 1522 5686186",
    contactEmail: "Retourportaal: support@handyswap.com",
  },
};

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                            */
/* ------------------------------------------------------------------ */

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
          <span className="text-hs-blue mt-1 flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
          <span className="text-hs-blue font-semibold mt-0 flex-shrink-0 w-5 text-right">{i + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function NoteBox({ text }: { text: string }) {
  return (
    <div className="border-l-2 border-amber-500/40 pl-4 mt-4">
      <p className="text-amber-400/80 text-sm">{text}</p>
    </div>
  );
}

function SubHeading({ text }: { text: string }) {
  return <h3 className="text-white font-semibold text-base mb-3 mt-5 first:mt-0">{text}</h3>;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function AGB() {
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
          <p className="text-gray-500 text-xs mb-6">{t.effectiveDate}</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-10">{t.intro}</p>

          {/* 1. Introduction / Scope */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s1Title}</h2>
            <SectionCard>
              <p className="text-gray-300 text-sm mb-3">{t.s1Text}</p>
              <NoteBox text={t.s1Note} />
            </SectionCard>
          </section>

          {/* 2. Definitions */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s2Title}</h2>
            <SectionCard>
              <BulletList items={t.s2List} />
            </SectionCard>
          </section>

          {/* 3. Orders */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s3Title}</h2>
            <SectionCard>
              <BulletList items={t.s3List} />
            </SectionCard>
          </section>

          {/* 4. Prices */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s4Title}</h2>
            <SectionCard>
              <BulletList items={t.s4List} />
            </SectionCard>
          </section>

          {/* 5. Delivery */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s5Title}</h2>
            <SectionCard>
              <BulletList items={t.s5List} />
            </SectionCard>
          </section>

          {/* 6. Right of Withdrawal */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s6Title}</h2>
            <SectionCard>
              <SubHeading text={t.s6aSub} />
              <BulletList items={t.s6aList} />

              <SubHeading text={t.s6bSub} />
              <BulletList items={t.s6bList} />
              <NoteBox text={t.s6bNote} />

              <SubHeading text={t.s6cSub} />
              <BulletList items={t.s6cList} />
            </SectionCard>
          </section>

          {/* 7. Refunds */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s7Title}</h2>
            <SectionCard>
              <BulletList items={t.s7List} />
            </SectionCard>
          </section>

          {/* 8. Warranty */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s8Title}</h2>
            <SectionCard>
              <SubHeading text={t.s8aSub} />
              <BulletList items={t.s8aList} />

              <SubHeading text={t.s8bSub} />
              <BulletList items={t.s8bList} />

              <SubHeading text={t.s8cSub} />
              <BulletList items={t.s8cList} />

              <SubHeading text={t.s8dSub} />
              <BulletList items={t.s8dList} />

              <SubHeading text={t.s8eSub} />
              <BulletList items={t.s8eList} />

              <SubHeading text={t.s8fSub} />
              <NumberedList items={t.s8fSteps} />
            </SectionCard>
          </section>

          {/* 9. Limitations of Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s9Title}</h2>
            <SectionCard>
              <BulletList items={t.s9List} />
            </SectionCard>
          </section>

          {/* 10. Product Condition */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s10Title}</h2>
            <SectionCard>
              <BulletList items={t.s10List} />
            </SectionCard>
          </section>

          {/* 11. Returns Practical Notes */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s11Title}</h2>
            <SectionCard>
              <BulletList items={t.s11List} />
            </SectionCard>
          </section>

          {/* 12. Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s12Title}</h2>
            <SectionCard>
              <BulletList items={t.s12List} />
            </SectionCard>
          </section>

          {/* 13. Privacy & Cookies */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s13Title}</h2>
            <SectionCard>
              <BulletList items={t.s13List} />
            </SectionCard>
          </section>

          {/* 14. Termination */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s14Title}</h2>
            <SectionCard>
              <BulletList items={t.s14List} />
            </SectionCard>
          </section>

          {/* 15. Store Rules */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s15Title}</h2>
            <SectionCard>
              <p className="text-gray-300 text-sm leading-relaxed">{t.s15Text}</p>
            </SectionCard>
          </section>

          {/* 16. Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s16Title}</h2>
            <SectionCard>
              <BulletList items={t.s16List} />
            </SectionCard>
          </section>

          {/* Contact */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.contactTitle}</h2>
            <div className="bg-gradient-to-br from-hs-blue/10 to-white/5 border border-hs-blue/20 rounded-xl p-6">
              <div className="space-y-1 text-sm">
                <p className="text-white font-medium">{t.contactCompany}</p>
                <p className="text-gray-300">{t.contactPhone}</p>
                <p className="text-gray-300">
                  {t.contactEmail.split("support@handyswap.com")[0]}
                  <a href="mailto:support@handyswap.com" className="text-hs-blue hover:underline">support@handyswap.com</a>
                </p>
              </div>
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
