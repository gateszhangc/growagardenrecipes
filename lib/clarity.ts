// Microsoft Clarity tracking utilities

// Type declarations for Clarity
declare global {
  interface Window {
    clarity?: (command: string, ...args: any[]) => void;
  }
}

// Initialize Clarity event tracking
export const trackClarityEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && window.clarity) {
    if (data) {
      window.clarity('event', eventName, data);
    } else {
      window.clarity('event', eventName);
    }
  }
};

// Set user identification
export const setClarityUserId = (userId: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('identify', userId);
  }
};

// Set custom tags
export const setClarityTag = (key: string, value: string) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', key, value);
  }
};

// Common Clarity events
export const clarityEvents = {
  // Recipe events
  RECIPE_VIEW: 'recipe_view',
  RECIPE_SEARCH: 'recipe_search',
  RECIPE_FILTER: 'recipe_filter',

  // User engagement
  SEARCH_SUBMIT: 'search_submit',
  BUTTON_CLICK: 'button_click',
  NAVIGATION_CLICK: 'navigation_click',

  // Content events
  CONTENT_SHARE: 'content_share',
  EXTERNAL_LINK: 'external_link',
  FORM_SUBMIT: 'form_submit',

  // Conversion events
  SUBSCRIBE_NEWSLETTER: 'subscribe_newsletter',
  DOWNLOAD_GUIDE: 'download_guide',
};

// Recipe tracking
export const trackRecipeEvent = (recipeName: string, action: 'view' | 'search' | 'filter') => {
  const eventName = action === 'view' ? clarityEvents.RECIPE_VIEW :
                   action === 'search' ? clarityEvents.RECIPE_SEARCH :
                   clarityEvents.RECIPE_FILTER;

  trackClarityEvent(eventName, { recipe: recipeName });
};

// Search tracking
export const trackSearchEvent = (searchTerm: string, resultCount?: number) => {
  trackClarityEvent(clarityEvents.RECIPE_SEARCH, {
    term: searchTerm,
    resultCount: resultCount
  });
};

// Filter tracking
export const trackFilterEvent = (filterType: string, filterValue: string) => {
  trackClarityEvent(clarityEvents.RECIPE_FILTER, {
    type: filterType,
    value: filterValue
  });
};

// Button click tracking
export const trackButtonClick = (buttonName: string, page: string) => {
  trackClarityEvent(clarityEvents.BUTTON_CLICK, {
    button: buttonName,
    page: page
  });
};

// Navigation tracking
export const trackNavigation = (destination: string, source: string) => {
  trackClarityEvent(clarityEvents.NAVIGATION_CLICK, {
    destination: destination,
    source: source
  });
};

// Form submission tracking
export const trackFormSubmit = (formName: string, success: boolean) => {
  trackClarityEvent(clarityEvents.FORM_SUBMIT, {
    form: formName,
    success: success
  });
};

// Newsletter subscription tracking
export const trackNewsletterSubscription = (email?: string) => {
  trackClarityEvent(clarityEvents.SUBSCRIBE_NEWSLETTER, {
    hasEmail: !!email
  });
};