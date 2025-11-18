'use client';

import {
  trackRecipeEvent,
  trackSearchEvent,
  trackFilterEvent,
  trackButtonClick,
  trackNavigation,
  trackFormSubmit,
  trackNewsletterSubscription,
  setClarityTag,
  setClarityUserId,
  clarityEvents
} from '@/lib/clarity';

export const useClarity = () => {
  // Recipe tracking
  const trackRecipeView = (recipeName: string) => {
    trackRecipeEvent(recipeName, 'view');
  };

  const trackRecipeSearch = (searchTerm: string, resultCount?: number) => {
    trackSearchEvent(searchTerm, resultCount);
  };

  const trackRecipeFilter = (filterType: string, filterValue: string) => {
    trackFilterEvent(filterType, filterValue);
  };

  // User engagement tracking
  const trackUserButton = (buttonName: string, page: string) => {
    trackButtonClick(buttonName, page);
  };

  const trackUserNavigation = (destination: string, source: string) => {
    trackNavigation(destination, source);
  };

  // Form tracking
  const trackContactForm = (success: boolean) => {
    trackFormSubmit('contact_form', success);
  };

  const trackSubscriptionForm = (email?: string) => {
    trackNewsletterSubscription(email);
  };

  // Custom tagging
  const setUserTags = (userType: string, page: string) => {
    setClarityTag('userType', userType);
    setClarityTag('currentPage', page);
  };

  const identifyUser = (userId: string) => {
    setClarityUserId(userId);
  };

  return {
    // Recipe events
    trackRecipeView,
    trackRecipeSearch,
    trackRecipeFilter,

    // User events
    trackUserButton,
    trackUserNavigation,

    // Form events
    trackContactForm,
    trackSubscriptionForm,

    // User identification
    setUserTags,
    identifyUser,

    // Event constants
    events: clarityEvents,
  };
};