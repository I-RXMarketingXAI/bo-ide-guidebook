// Simple shared-password gate for the brand manual.
// Not high security — appropriate for an internal reference site.
// Change PASSWORD here once the client provides the real one.
export const SITE_PASSWORD = "boide2026";

const KEY = "boide-manual-auth";

export function isUnlocked(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

export function unlock(password: string): boolean {
  if (password === SITE_PASSWORD) {
    try {
      window.sessionStorage.setItem(KEY, "1");
    } catch {
      // ignore
    }
    return true;
  }
  return false;
}

export function lock() {
  try {
    window.sessionStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}
