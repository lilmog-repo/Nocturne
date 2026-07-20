/**
 * Setmore booking integration
 * ─────────────────────────────────────────────────────────────
 * 1. Log in to Setmore → Settings → Booking Page
 * 2. Copy the URL shown at the top (e.g. https://yourname.setmore.com)
 * 3. Replace the placeholder below with your URL
 * ─────────────────────────────────────────────────────────────
 */
export const SETMORE_URL = 'https://the-nocturne.setmore.com';

declare global {
  interface Window {
    Setmore_ShowPopupPage?: (url: string) => void;
  }
}

/** Opens the Setmore booking modal. Falls back to a new tab if the widget hasn't loaded. */
export function openBooking() {
  if (typeof window.Setmore_ShowPopupPage === 'function') {
    window.Setmore_ShowPopupPage(SETMORE_URL);
  } else {
    window.open(SETMORE_URL, '_blank', 'noopener,noreferrer');
  }
}
