'use client';

import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    // Only run in the browser
    if (typeof window !== 'undefined') {
      // Google Analytics is already loaded via the script in layout.tsx
      // No need to manually track page views as GA auto-pageview is enabled
    }
  }, []);

  return null;
}

// For manual event tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};