export const CONSENT_STORAGE_KEY = "hs-cookie-consent";
export const CONSENT_CHANGED_EVENT = "hs:consent-changed";
export const CONSENT_OPEN_EVENT = "hs:consent-open";

export type ConsentChoice = "all" | "essential";

interface ConsentChangedDetail {
  consent: ConsentChoice;
  previous: ConsentChoice | null;
}

interface ConsentManager {
  getStoredConsent: () => ConsentChoice | null;
  setConsent: (consent: ConsentChoice) => ConsentChoice;
  openSettings: () => void;
}

declare global {
  interface Window {
    hsConsentManager?: ConsentManager;
  }

  interface WindowEventMap {
    "hs:consent-changed": CustomEvent<ConsentChangedDetail>;
    "hs:consent-open": Event;
  }
}

function readStoredConsent(): ConsentChoice | null {
  try {
    const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return consent === "all" || consent === "essential" ? consent : null;
  } catch {
    return null;
  }
}

export function getStoredConsent(): ConsentChoice | null {
  return window.hsConsentManager?.getStoredConsent() ?? readStoredConsent();
}

export function setConsent(consent: ConsentChoice): ConsentChoice {
  if (window.hsConsentManager) {
    return window.hsConsentManager.setConsent(consent);
  }

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    // Ignore storage failures and keep the current page functional.
  }

  return consent;
}

export function openConsentSettings() {
  if (window.hsConsentManager) {
    window.hsConsentManager.openSettings();
    return;
  }

  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
