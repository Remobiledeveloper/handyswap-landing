/**
 * Datenschutz.tsx
 * Privacy Policy / Datenschutzerklärung page for Handyswap.com
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
    title: "Privacy Policy",
    effectiveDate: "Last Updated: 1 November 2025",
    backToHome: "Back to Home",
    intro: 'Remobile 786 SL ("HandySwap," "we," "us") is committed to protecting your personal data and your privacy rights. This policy outlines how we handle the data collected through your use of handyswap.com, and in connection with our 30-day returns and 24-month warranty service.',

    s1Title: "1. Introduction — Scope & Purpose",
    s1Intro: 'Remobile 786 SL ("HandySwap", "we", "us") respects your privacy and is committed to protecting your personal data when you:',
    s1List: [
      "Visit https://handyswap.com/",
      "Place orders",
      "Request returns or warranty service",
      "Contact our support team",
    ],
    s1Explains: "This Privacy Policy explains:",
    s1ExplainsList: [
      "What personal data we collect and why",
      "How we use, share, and protect it",
      "How long we retain it",
      "How you can exercise your privacy rights",
    ],
    s1Applies: "It applies to customers in the EU/EEA and other countries where we operate.",

    s2Title: "2. Personal Data We Collect",
    s2Intro: "We collect personal data depending on your interactions:",
    s2Categories: [
      {
        icon: "👤",
        heading: "Account & Identity",
        items: [
          "Name, billing & delivery addresses, email, phone",
          "Date of birth (for identity verification if required)",
        ],
      },
      {
        icon: "🛒",
        heading: "Order & Transactional Data",
        items: [
          "Order history, purchased product details (IMEI/serial where applicable)",
          "Order numbers, invoices, payment tokens (we do not store full card numbers)",
        ],
      },
      {
        icon: "🛠️",
        heading: "Warranty, Returns & Repairs",
        items: [
          "Repair reports, diagnostics, photos/videos",
          "Service notes, RMA numbers, shipping tracking for returns",
        ],
      },
      {
        icon: "💬",
        heading: "Customer Support & Communication",
        items: [
          "Support tickets, chat transcripts, emails, call logs (for quality & training where lawful)",
        ],
      },
      {
        icon: "🖥️",
        heading: "Device & Technical Data",
        items: [
          "IP address, device/browser fingerprint, cookies, analytics data, crash logs",
        ],
      },
      {
        icon: "📧",
        heading: "Marketing & Preferences",
        items: [
          "Newsletter subscription, marketing consents, responses to promotions",
        ],
      },
      {
        icon: "🌐",
        heading: "Third-Party/Public Sources",
        items: [
          "Data from payment providers, carriers, identity verification services, or publicly available sources",
        ],
      },
    ],

    s3Title: "3. Legal Basis for Processing",
    s3Intro: "Under the GDPR, we process data based on:",
    s3List: [
      "Contract performance — to process orders, payments, returns, and 24-month warranty claims",
      "Legal obligation — invoices, tax records, fiscal and consumer law compliance",
      "Legitimate interests — fraud prevention, dispute handling, network & information security",
      "Consent — non-essential cookies, marketing emails, optional features",
      "Vital interests / public interest — strictly necessary cases only",
    ],
    s3Note: "We will inform you which legal basis applies when we collect specific data.",

    s4Title: "4. How We Use Your Data",
    s4List: [
      "Order fulfilment & delivery — process orders, provide tracking, communicate delivery updates",
      "Payment processing — handled by PCI-DSS-validated PSPs; HandySwap never stores CVV",
      "Returns & warranty handling — manage 30-day returns and 24-month warranty claims",
      "Customer support — investigate issues, maintain support records for quality and disputes",
      "Fraud prevention & security — detect and prevent fraud or abuse",
      "Marketing & personalization — send promotional emails and offers (with consent)",
      "Analytics & product improvement — anonymous/aggregated data for service improvement",
      "Legal & regulatory compliance — tax, accounting, consumer rights, legal claims",
    ],
    s4Note: "Key point: warranty claims and returns require storing diagnostic & service records to perform repairs or resolve disputes.",

    s5Title: "5. Who We Share Data With",
    s5Intro: "We share data only with trusted processors:",
    s5List: [
      "Payment service providers (payments & refunds)",
      "Carriers & couriers (deliveries & returns)",
      "Repair centres & service partners",
      "IT & hosting providers (cloud, backups, email)",
      "Fraud prevention & analytics providers",
      "Legal & regulatory authorities when required",
    ],
    s5Transfer: "Transfers outside the EEA are only done with:",
    s5TransferList: [
      "Adequacy decisions by the European Commission",
      "Standard Contractual Clauses (SCCs) or other lawful mechanisms",
    ],

    s6Title: "6. Data Retention",
    s6List: [
      "Warranty & repair records: 24 months + up to 4 additional years if needed (max 6 years in exceptional cases)",
      "Returns & refunds: until case closure + relevant legal/tax period",
      "Support tickets: 24 months after case closure",
      "Cookies & analytics: session cookies expire at session end; analytics identifiers up to 24 months",
      "Marketing consents: until withdrawn or activity ends",
    ],
    s6Note: "Retention aligns with GDPR principles and legal obligations.",

    s7Title: "7. Automated Decisions & Profiling",
    s7List: [
      "Automated tools may be used for fraud detection and risk scoring",
      "You are not subject to solely automated decisions producing legal effects without human review",
      "Right to request human intervention and challenge decisions",
    ],

    s8Title: "8. Your Rights under GDPR",
    s8Intro: "You can:",
    s8List: [
      "Access your personal data",
      "Request correction (rectification)",
      "Request deletion (erasure)",
      "Request restriction of processing",
      "Object to processing based on legitimate interests",
      "Request data portability",
      "Withdraw consent at any time",
    ],
    s8Exercise: "To exercise your rights: support@handyswap.com with proof of identity.",

    s9Title: "9. Security Measures",
    s9Intro: "We protect your data with:",
    s9List: [
      "HTTPS/TLS encryption",
      "Restricted access & role-based permissions",
      "Encrypted backups and secure hosting",
      "Security monitoring and vulnerability testing",
      "PCI-DSS-compliant payment processors",
    ],
    s9Note: "High-risk breaches will be reported to authorities and affected individuals as required.",

    s10Title: "10. Children & Special Categories",
    s10List: [
      "Services intended for adults only (16+)",
      "We do not knowingly process sensitive personal data unless explicitly provided and lawful",
    ],

    s11Title: "11. Changes to This Policy",
    s11Intro: "We may update this Privacy Policy due to:",
    s11List: [
      "New services or processors",
      "Legal or regulatory changes",
    ],
    s11Note: 'Updated policies are posted on handyswap.com with "Last updated" date. Material changes may be emailed.',

    s12Title: "12. Practical Notes for Returns & Warranty",
    s12List: [
      "Returns & warranty claims: we collect minimal data (order number, IMEI, photos/videos)",
      "Records retained for 24-month warranty and legal/tax obligations",
      "DOA or transit damage photos retained until claim resolution",
    ],

    s13Title: "13. Contact & Supervisory Authority",
    s13Company: "Remobile 786 SL",
    s13Phone: "Phone: +49 1522 5686186",
    s13Email: "Email: support@handyswap.com",
  },

  /* ======================== GERMAN ======================== */
  de: {
    title: "Datenschutzerklärung",
    effectiveDate: "Zuletzt aktualisiert: 1. November 2025",
    backToHome: "Zurück zur Startseite",
    intro: 'Remobile 786 SL („HandySwap", „wir", „uns") verpflichtet sich zum Schutz Ihrer personenbezogenen Daten und Ihrer Datenschutzrechte. Diese Richtlinie beschreibt, wie wir die Daten verarbeiten, die durch Ihre Nutzung von handyswap.com und im Zusammenhang mit unserem 30-Tage-Rückgaberecht und 24-Monats-Garantieservice erhoben werden.',

    s1Title: "1. Einleitung — Geltungsbereich & Zweck",
    s1Intro: 'Remobile 786 SL („HandySwap", „wir", „uns") respektiert Ihre Privatsphäre und verpflichtet sich zum Schutz Ihrer personenbezogenen Daten, wenn Sie:',
    s1List: [
      "https://handyswap.com/ besuchen",
      "Bestellungen aufgeben",
      "Rücksendungen oder Garantieleistungen anfordern",
      "Unser Support-Team kontaktieren",
    ],
    s1Explains: "Diese Datenschutzerklärung erläutert:",
    s1ExplainsList: [
      "Welche personenbezogenen Daten wir erheben und warum",
      "Wie wir sie verwenden, weitergeben und schützen",
      "Wie lange wir sie aufbewahren",
      "Wie Sie Ihre Datenschutzrechte ausüben können",
    ],
    s1Applies: "Sie gilt für Kunden in der EU/im EWR und in anderen Ländern, in denen wir tätig sind.",

    s2Title: "2. Personenbezogene Daten, die wir erheben",
    s2Intro: "Wir erheben personenbezogene Daten je nach Ihren Interaktionen:",
    s2Categories: [
      {
        icon: "👤",
        heading: "Konto & Identität",
        items: [
          "Name, Rechnungs- & Lieferadressen, E-Mail, Telefon",
          "Geburtsdatum (zur Identitätsprüfung, falls erforderlich)",
        ],
      },
      {
        icon: "🛒",
        heading: "Bestell- & Transaktionsdaten",
        items: [
          "Bestellverlauf, gekaufte Produktdetails (IMEI/Seriennummer, falls zutreffend)",
          "Bestellnummern, Rechnungen, Zahlungstoken (wir speichern keine vollständigen Kartennummern)",
        ],
      },
      {
        icon: "🛠️",
        heading: "Garantie, Rücksendungen & Reparaturen",
        items: [
          "Reparaturberichte, Diagnosen, Fotos/Videos",
          "Servicenotizen, RMA-Nummern, Sendungsverfolgung für Rücksendungen",
        ],
      },
      {
        icon: "💬",
        heading: "Kundensupport & Kommunikation",
        items: [
          "Support-Tickets, Chat-Protokolle, E-Mails, Anrufprotokolle (für Qualität & Schulung, soweit gesetzlich zulässig)",
        ],
      },
      {
        icon: "🖥️",
        heading: "Geräte- & technische Daten",
        items: [
          "IP-Adresse, Geräte-/Browser-Fingerabdruck, Cookies, Analysedaten, Absturzprotokolle",
        ],
      },
      {
        icon: "📧",
        heading: "Marketing & Präferenzen",
        items: [
          "Newsletter-Abonnement, Marketing-Einwilligungen, Reaktionen auf Werbeaktionen",
        ],
      },
      {
        icon: "🌐",
        heading: "Drittanbieter-/Öffentliche Quellen",
        items: [
          "Daten von Zahlungsanbietern, Speditionen, Identitätsprüfungsdiensten oder öffentlich zugänglichen Quellen",
        ],
      },
    ],

    s3Title: "3. Rechtsgrundlage für die Verarbeitung",
    s3Intro: "Gemäß der DSGVO verarbeiten wir Daten auf folgender Grundlage:",
    s3List: [
      "Vertragserfüllung — zur Bearbeitung von Bestellungen, Zahlungen, Rücksendungen und 24-Monats-Garantieansprüchen",
      "Gesetzliche Verpflichtung — Rechnungen, Steuerunterlagen, Einhaltung von Steuer- und Verbraucherrecht",
      "Berechtigte Interessen — Betrugsprävention, Streitbeilegung, Netzwerk- und Informationssicherheit",
      "Einwilligung — nicht-essenzielle Cookies, Marketing-E-Mails, optionale Funktionen",
      "Lebenswichtige Interessen / öffentliches Interesse — nur in streng notwendigen Fällen",
    ],
    s3Note: "Wir informieren Sie darüber, welche Rechtsgrundlage gilt, wenn wir bestimmte Daten erheben.",

    s4Title: "4. Wie wir Ihre Daten verwenden",
    s4List: [
      "Bestellabwicklung & Lieferung — Bestellungen bearbeiten, Sendungsverfolgung bereitstellen, Lieferupdates kommunizieren",
      "Zahlungsabwicklung — durch PCI-DSS-validierte Zahlungsdienstleister; HandySwap speichert niemals CVV",
      "Rücksendungen & Garantieabwicklung — 30-Tage-Rücksendungen und 24-Monats-Garantieansprüche verwalten",
      "Kundensupport — Probleme untersuchen, Support-Aufzeichnungen für Qualität und Streitfälle führen",
      "Betrugsprävention & Sicherheit — Betrug oder Missbrauch erkennen und verhindern",
      "Marketing & Personalisierung — Werbe-E-Mails und Angebote senden (mit Einwilligung)",
      "Analysen & Produktverbesserung — anonyme/aggregierte Daten zur Serviceverbesserung",
      "Rechtliche & regulatorische Compliance — Steuern, Buchhaltung, Verbraucherrechte, Rechtsansprüche",
    ],
    s4Note: "Wichtiger Hinweis: Garantieansprüche und Rücksendungen erfordern die Speicherung von Diagnose- und Serviceaufzeichnungen zur Durchführung von Reparaturen oder Beilegung von Streitigkeiten.",

    s5Title: "5. Mit wem wir Daten teilen",
    s5Intro: "Wir teilen Daten nur mit vertrauenswürdigen Auftragsverarbeitern:",
    s5List: [
      "Zahlungsdienstleister (Zahlungen & Erstattungen)",
      "Spediteure & Kuriere (Lieferungen & Rücksendungen)",
      "Reparaturzentren & Servicepartner",
      "IT- & Hosting-Anbieter (Cloud, Backups, E-Mail)",
      "Betrugspräventions- & Analyseanbieter",
      "Rechts- & Aufsichtsbehörden, wenn gesetzlich erforderlich",
    ],
    s5Transfer: "Übermittlungen außerhalb des EWR erfolgen nur mit:",
    s5TransferList: [
      "Angemessenheitsbeschlüssen der Europäischen Kommission",
      "Standardvertragsklauseln (SCCs) oder anderen rechtmäßigen Mechanismen",
    ],

    s6Title: "6. Datenspeicherung",
    s6List: [
      "Garantie- & Reparaturaufzeichnungen: 24 Monate + bis zu 4 weitere Jahre bei Bedarf (max. 6 Jahre in Ausnahmefällen)",
      "Rücksendungen & Erstattungen: bis zum Fallabschluss + relevante gesetzliche/steuerliche Frist",
      "Support-Tickets: 24 Monate nach Fallabschluss",
      "Cookies & Analysen: Sitzungscookies verfallen am Sitzungsende; Analyse-Identifikatoren bis zu 24 Monate",
      "Marketing-Einwilligungen: bis zum Widerruf oder Ende der Aktivität",
    ],
    s6Note: "Die Aufbewahrung entspricht den DSGVO-Grundsätzen und gesetzlichen Verpflichtungen.",

    s7Title: "7. Automatisierte Entscheidungen & Profiling",
    s7List: [
      "Automatisierte Tools können zur Betrugserkennung und Risikobewertung eingesetzt werden",
      "Sie unterliegen keinen ausschließlich automatisierten Entscheidungen mit rechtlicher Wirkung ohne menschliche Überprüfung",
      "Recht auf menschliches Eingreifen und Anfechtung von Entscheidungen",
    ],

    s8Title: "8. Ihre Rechte gemäß DSGVO",
    s8Intro: "Sie können:",
    s8List: [
      "Auskunft über Ihre personenbezogenen Daten verlangen",
      "Berichtigung (Korrektur) verlangen",
      "Löschung verlangen",
      "Einschränkung der Verarbeitung verlangen",
      "Der Verarbeitung auf Grundlage berechtigter Interessen widersprechen",
      "Datenübertragbarkeit verlangen",
      "Ihre Einwilligung jederzeit widerrufen",
    ],
    s8Exercise: "Zur Ausübung Ihrer Rechte: support@handyswap.com mit Identitätsnachweis.",

    s9Title: "9. Sicherheitsmaßnahmen",
    s9Intro: "Wir schützen Ihre Daten mit:",
    s9List: [
      "HTTPS/TLS-Verschlüsselung",
      "Eingeschränkter Zugang & rollenbasierte Berechtigungen",
      "Verschlüsselte Backups und sicheres Hosting",
      "Sicherheitsüberwachung und Schwachstellentests",
      "PCI-DSS-konforme Zahlungsabwickler",
    ],
    s9Note: "Hochriskante Datenschutzverletzungen werden den Behörden und betroffenen Personen wie gesetzlich vorgeschrieben gemeldet.",

    s10Title: "10. Kinder & besondere Kategorien",
    s10List: [
      "Dienste nur für Erwachsene (16+) bestimmt",
      "Wir verarbeiten wissentlich keine sensiblen personenbezogenen Daten, es sei denn, sie werden ausdrücklich bereitgestellt und sind rechtmäßig",
    ],

    s11Title: "11. Änderungen dieser Richtlinie",
    s11Intro: "Wir können diese Datenschutzerklärung aktualisieren aufgrund von:",
    s11List: [
      "Neuen Diensten oder Auftragsverarbeitern",
      "Gesetzlichen oder regulatorischen Änderungen",
    ],
    s11Note: 'Aktualisierte Richtlinien werden auf handyswap.com mit dem Datum „Zuletzt aktualisiert" veröffentlicht. Wesentliche Änderungen können per E-Mail mitgeteilt werden.',

    s12Title: "12. Praktische Hinweise für Rücksendungen & Garantie",
    s12List: [
      "Rücksendungen & Garantieansprüche: Wir erheben nur minimale Daten (Bestellnummer, IMEI, Fotos/Videos)",
      "Aufzeichnungen werden für die 24-Monats-Garantie und gesetzliche/steuerliche Verpflichtungen aufbewahrt",
      "Fotos von DOA- oder Transportschäden werden bis zur Klärung des Anspruchs aufbewahrt",
    ],

    s13Title: "13. Kontakt & Aufsichtsbehörde",
    s13Company: "Remobile 786 SL",
    s13Phone: "Telefon: +49 1522 5686186",
    s13Email: "E-Mail: support@handyswap.com",
  },

  /* ======================== DUTCH ======================== */
  nl: {
    title: "Privacybeleid",
    effectiveDate: "Laatst bijgewerkt: 1 november 2025",
    backToHome: "Terug naar Home",
    intro: 'Remobile 786 SL ("HandySwap", "wij", "ons") zet zich in voor de bescherming van uw persoonsgegevens en uw privacyrechten. Dit beleid beschrijft hoe wij omgaan met de gegevens die worden verzameld via uw gebruik van handyswap.com, en in verband met onze 30-dagen retourservice en 24-maanden garantieservice.',

    s1Title: "1. Inleiding — Reikwijdte & Doel",
    s1Intro: 'Remobile 786 SL ("HandySwap", "wij", "ons") respecteert uw privacy en zet zich in voor de bescherming van uw persoonsgegevens wanneer u:',
    s1List: [
      "https://handyswap.com/ bezoekt",
      "Bestellingen plaatst",
      "Retourzendingen of garantieservice aanvraagt",
      "Contact opneemt met ons supportteam",
    ],
    s1Explains: "Dit Privacybeleid legt uit:",
    s1ExplainsList: [
      "Welke persoonsgegevens wij verzamelen en waarom",
      "Hoe wij deze gebruiken, delen en beschermen",
      "Hoe lang wij deze bewaren",
      "Hoe u uw privacyrechten kunt uitoefenen",
    ],
    s1Applies: "Het is van toepassing op klanten in de EU/EER en andere landen waar wij actief zijn.",

    s2Title: "2. Persoonsgegevens die wij verzamelen",
    s2Intro: "Wij verzamelen persoonsgegevens afhankelijk van uw interacties:",
    s2Categories: [
      {
        icon: "👤",
        heading: "Account & Identiteit",
        items: [
          "Naam, factuur- & bezorgadressen, e-mail, telefoon",
          "Geboortedatum (voor identiteitsverificatie indien vereist)",
        ],
      },
      {
        icon: "🛒",
        heading: "Bestelling- & Transactiegegevens",
        items: [
          "Bestelgeschiedenis, gekochte productdetails (IMEI/serienummer indien van toepassing)",
          "Bestelnummers, facturen, betalingstokens (wij slaan geen volledige kaartnummers op)",
        ],
      },
      {
        icon: "🛠️",
        heading: "Garantie, Retourzendingen & Reparaties",
        items: [
          "Reparatierapporten, diagnoses, foto's/video's",
          "Servicenotities, RMA-nummers, verzendtracking voor retourzendingen",
        ],
      },
      {
        icon: "💬",
        heading: "Klantenservice & Communicatie",
        items: [
          "Supporttickets, chattranscripties, e-mails, gesprekslogboeken (voor kwaliteit & training waar wettelijk toegestaan)",
        ],
      },
      {
        icon: "🖥️",
        heading: "Apparaat- & Technische Gegevens",
        items: [
          "IP-adres, apparaat-/browserfingerprint, cookies, analysegegevens, crashlogboeken",
        ],
      },
      {
        icon: "📧",
        heading: "Marketing & Voorkeuren",
        items: [
          "Nieuwsbriefabonnement, marketingtoestemmingen, reacties op promoties",
        ],
      },
      {
        icon: "🌐",
        heading: "Derden/Openbare Bronnen",
        items: [
          "Gegevens van betalingsproviders, vervoerders, identiteitsverificatiediensten of openbaar beschikbare bronnen",
        ],
      },
    ],

    s3Title: "3. Rechtsgrondslag voor Verwerking",
    s3Intro: "Op grond van de AVG verwerken wij gegevens op basis van:",
    s3List: [
      "Uitvoering van overeenkomst — om bestellingen, betalingen, retourzendingen en 24-maanden garantieclaims te verwerken",
      "Wettelijke verplichting — facturen, belastingdocumenten, naleving van fiscaal en consumentenrecht",
      "Gerechtvaardigde belangen — fraudepreventie, geschillenbeslechting, netwerk- en informatiebeveiliging",
      "Toestemming — niet-essentiële cookies, marketing-e-mails, optionele functies",
      "Vitale belangen / algemeen belang — alleen in strikt noodzakelijke gevallen",
    ],
    s3Note: "Wij informeren u welke rechtsgrondslag van toepassing is wanneer wij specifieke gegevens verzamelen.",

    s4Title: "4. Hoe wij uw gegevens gebruiken",
    s4List: [
      "Orderafhandeling & levering — bestellingen verwerken, tracking bieden, leveringsupdates communiceren",
      "Betalingsverwerking — afgehandeld door PCI-DSS-gevalideerde PSP's; HandySwap slaat nooit CVV op",
      "Retourzendingen & garantieafhandeling — 30-dagen retourzendingen en 24-maanden garantieclaims beheren",
      "Klantenservice — problemen onderzoeken, supportrecords bijhouden voor kwaliteit en geschillen",
      "Fraudepreventie & beveiliging — fraude of misbruik detecteren en voorkomen",
      "Marketing & personalisatie — promotionele e-mails en aanbiedingen versturen (met toestemming)",
      "Analyse & productverbetering — anonieme/geaggregeerde gegevens voor serviceverbetering",
      "Juridische & regelgevende naleving — belastingen, boekhouding, consumentenrechten, rechtsvorderingen",
    ],
    s4Note: "Belangrijk: garantieclaims en retourzendingen vereisen het opslaan van diagnose- en servicerecords om reparaties uit te voeren of geschillen op te lossen.",

    s5Title: "5. Met wie wij gegevens delen",
    s5Intro: "Wij delen gegevens alleen met vertrouwde verwerkers:",
    s5List: [
      "Betalingsdienstverleners (betalingen & terugbetalingen)",
      "Vervoerders & koeriers (leveringen & retourzendingen)",
      "Reparatiecentra & servicepartners",
      "IT- & hostingproviders (cloud, back-ups, e-mail)",
      "Fraudepreventie- & analyseproviders",
      "Juridische & toezichthoudende autoriteiten wanneer wettelijk vereist",
    ],
    s5Transfer: "Overdrachten buiten de EER vinden alleen plaats met:",
    s5TransferList: [
      "Adequaatheidsbesluiten van de Europese Commissie",
      "Standaard contractuele clausules (SCC's) of andere rechtmatige mechanismen",
    ],

    s6Title: "6. Gegevensbewaring",
    s6List: [
      "Garantie- & reparatierecords: 24 maanden + tot 4 extra jaren indien nodig (max. 6 jaar in uitzonderlijke gevallen)",
      "Retourzendingen & terugbetalingen: tot sluiting van het dossier + relevante wettelijke/fiscale periode",
      "Supporttickets: 24 maanden na sluiting van het dossier",
      "Cookies & analyse: sessiecookies vervallen aan het einde van de sessie; analyse-identificatoren tot 24 maanden",
      "Marketingtoestemmingen: tot intrekking of einde van activiteit",
    ],
    s6Note: "Bewaring is in overeenstemming met AVG-principes en wettelijke verplichtingen.",

    s7Title: "7. Geautomatiseerde Beslissingen & Profilering",
    s7List: [
      "Geautomatiseerde tools kunnen worden gebruikt voor fraudedetectie en risicobeoordeling",
      "U bent niet onderworpen aan uitsluitend geautomatiseerde beslissingen met rechtsgevolgen zonder menselijke beoordeling",
      "Recht om menselijke tussenkomst te verzoeken en beslissingen aan te vechten",
    ],

    s8Title: "8. Uw Rechten onder de AVG",
    s8Intro: "U kunt:",
    s8List: [
      "Inzage in uw persoonsgegevens verzoeken",
      "Correctie (rectificatie) verzoeken",
      "Verwijdering (wissing) verzoeken",
      "Beperking van verwerking verzoeken",
      "Bezwaar maken tegen verwerking op basis van gerechtvaardigde belangen",
      "Gegevensoverdraagbaarheid verzoeken",
      "Uw toestemming op elk moment intrekken",
    ],
    s8Exercise: "Om uw rechten uit te oefenen: support@handyswap.com met identiteitsbewijs.",

    s9Title: "9. Beveiligingsmaatregelen",
    s9Intro: "Wij beschermen uw gegevens met:",
    s9List: [
      "HTTPS/TLS-versleuteling",
      "Beperkte toegang & rolgebaseerde machtigingen",
      "Versleutelde back-ups en veilige hosting",
      "Beveiligingsmonitoring en kwetsbaarheidstesten",
      "PCI-DSS-conforme betalingsverwerkers",
    ],
    s9Note: "Hoog-risico inbreuken worden gemeld aan autoriteiten en betrokken personen zoals wettelijk vereist.",

    s10Title: "10. Kinderen & Bijzondere Categorieën",
    s10List: [
      "Diensten alleen bedoeld voor volwassenen (16+)",
      "Wij verwerken bewust geen gevoelige persoonsgegevens tenzij uitdrukkelijk verstrekt en rechtmatig",
    ],

    s11Title: "11. Wijzigingen in dit Beleid",
    s11Intro: "Wij kunnen dit Privacybeleid bijwerken vanwege:",
    s11List: [
      "Nieuwe diensten of verwerkers",
      "Wettelijke of regelgevende wijzigingen",
    ],
    s11Note: 'Bijgewerkt beleid wordt gepubliceerd op handyswap.com met de datum "Laatst bijgewerkt". Materiële wijzigingen kunnen per e-mail worden meegedeeld.',

    s12Title: "12. Praktische Opmerkingen voor Retourzendingen & Garantie",
    s12List: [
      "Retourzendingen & garantieclaims: wij verzamelen minimale gegevens (bestelnummer, IMEI, foto's/video's)",
      "Records worden bewaard voor de 24-maanden garantie en wettelijke/fiscale verplichtingen",
      "Foto's van DOA- of transportschade worden bewaard tot de claim is opgelost",
    ],

    s13Title: "13. Contact & Toezichthoudende Autoriteit",
    s13Company: "Remobile 786 SL",
    s13Phone: "Telefoon: +49 1522 5686186",
    s13Email: "E-mail: support@handyswap.com",
  },
};

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                            */
/* ------------------------------------------------------------------ */

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-muted border border-border rounded-xl p-6">
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
          <span className="text-hs-blue mt-1 flex-shrink-0">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NoteBox({ text }: { text: string }) {
  return (
    <div className="border-l-2 border-amber-500/40 pl-4 mt-4">
      <p className="text-amber-400/80 text-sm">{text}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function Datenschutz() {
  const { locale } = useLocale();
  const t = translations[locale];
  const homeLink = locale === "de" ? "/" : `/${locale}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href={homeLink} className="flex items-center gap-2 text-muted-foreground hover:text-hs-blue transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">{t.backToHome}</span>
          </a>
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663337882967/2Sz8JEY8PPAs458tHGBkme/handyswap-logo_8e24ea7d.png"
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
          <p className="text-muted-foreground text-xs mb-6">{t.effectiveDate}</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-10">{t.intro}</p>

          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s1Title}</h2>
            <SectionCard>
              <p className="text-muted-foreground text-sm mb-3">{t.s1Intro}</p>
              <BulletList items={t.s1List} />
              <p className="text-muted-foreground text-sm mt-4 mb-3">{t.s1Explains}</p>
              <BulletList items={t.s1ExplainsList} />
              <p className="text-muted-foreground text-sm mt-4">{t.s1Applies}</p>
            </SectionCard>
          </section>

          {/* 2. Personal Data We Collect */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s2Title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{t.s2Intro}</p>
            <div className="space-y-4">
              {t.s2Categories.map((cat, i) => (
                <SectionCard key={i}>
                  <h3 className="text-foreground font-semibold text-base mb-3">
                    <span className="mr-2">{cat.icon}</span>{cat.heading}
                  </h3>
                  <BulletList items={cat.items} />
                </SectionCard>
              ))}
            </div>
          </section>

          {/* 3. Legal Basis */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s3Title}</h2>
            <SectionCard>
              <p className="text-muted-foreground text-sm mb-3">{t.s3Intro}</p>
              <BulletList items={t.s3List} />
              <p className="text-muted-foreground text-sm mt-4">{t.s3Note}</p>
            </SectionCard>
          </section>

          {/* 4. How We Use Your Data */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s4Title}</h2>
            <SectionCard>
              <BulletList items={t.s4List} />
              <NoteBox text={t.s4Note} />
            </SectionCard>
          </section>

          {/* 5. Who We Share Data With */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s5Title}</h2>
            <SectionCard>
              <p className="text-muted-foreground text-sm mb-3">{t.s5Intro}</p>
              <BulletList items={t.s5List} />
              <p className="text-foreground font-medium text-sm mt-5 mb-3">{t.s5Transfer}</p>
              <BulletList items={t.s5TransferList} />
            </SectionCard>
          </section>

          {/* 6. Data Retention */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s6Title}</h2>
            <SectionCard>
              <BulletList items={t.s6List} />
              <NoteBox text={t.s6Note} />
            </SectionCard>
          </section>

          {/* 7. Automated Decisions */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s7Title}</h2>
            <SectionCard>
              <BulletList items={t.s7List} />
            </SectionCard>
          </section>

          {/* 8. Your Rights */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s8Title}</h2>
            <SectionCard>
              <p className="text-muted-foreground text-sm mb-3">{t.s8Intro}</p>
              <BulletList items={t.s8List} />
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  {t.s8Exercise.split("support@handyswap.com")[0]}
                  <a href="mailto:support@handyswap.com" className="text-hs-blue hover:underline">support@handyswap.com</a>
                  {t.s8Exercise.split("support@handyswap.com")[1]}
                </p>
              </div>
            </SectionCard>
          </section>

          {/* 9. Security Measures */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s9Title}</h2>
            <SectionCard>
              <p className="text-muted-foreground text-sm mb-3">{t.s9Intro}</p>
              <BulletList items={t.s9List} />
              <p className="text-muted-foreground text-sm mt-4">{t.s9Note}</p>
            </SectionCard>
          </section>

          {/* 10. Children & Special Categories */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s10Title}</h2>
            <SectionCard>
              <BulletList items={t.s10List} />
            </SectionCard>
          </section>

          {/* 11. Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s11Title}</h2>
            <SectionCard>
              <p className="text-muted-foreground text-sm mb-3">{t.s11Intro}</p>
              <BulletList items={t.s11List} />
              <p className="text-muted-foreground text-sm mt-4">{t.s11Note}</p>
            </SectionCard>
          </section>

          {/* 12. Practical Notes */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s12Title}</h2>
            <SectionCard>
              <BulletList items={t.s12List} />
            </SectionCard>
          </section>

          {/* 13. Contact */}
          <section className="mb-10">
            <h2 className="text-xl font-bold font-display text-hs-blue mb-4">{t.s13Title}</h2>
            <div className="bg-gradient-to-br from-hs-blue/10 to-white/5 border border-hs-blue/20 rounded-xl p-6">
              <div className="space-y-1 text-sm">
                <p className="text-foreground font-medium">{t.s13Company}</p>
                <p className="text-muted-foreground">{t.s13Phone}</p>
                <p className="text-muted-foreground">
                  {t.s13Email.split("support@handyswap.com")[0]}
                  <a href="mailto:support@handyswap.com" className="text-hs-blue hover:underline">support@handyswap.com</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Handyswap.com — Remobile 786 SL. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
