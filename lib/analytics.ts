// Google Analytics configuration
export const GA_TRACKING_ID = 'G-Q1J48YE4SY';

// Google Analytics page view tracking
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Google Analytics event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Common event types for the website
export const analyticsEvents = {
  // Recipe interactions
  RECIPE_VIEW: 'recipe_view',
  RECIPE_SEARCH: 'recipe_search',
  RECIPE_FILTER: 'recipe_filter',

  // Navigation
  NAV_CLICK: 'nav_click',
  HOME_CLICK: 'home_click',

  // User engagement
  SEARCH_SUBMIT: 'search_submit',
  BUTTON_CLICK: 'button_click',

  // Content interaction
  CONTENT_SHARE: 'content_share',
  EXTERNAL_LINK: 'external_link',
};

// Type declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}