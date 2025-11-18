'use client';

import { useEffect } from 'react';
import { analyticsEvents, event } from '@/lib/analytics';

export const useAnalytics = () => {
  // Track recipe view
  const trackRecipeView = (recipeName: string) => {
    event({
      action: analyticsEvents.RECIPE_VIEW,
      category: 'Recipe',
      label: recipeName,
    });
  };

  // Track search
  const trackSearch = (searchTerm: string) => {
    event({
      action: analyticsEvents.RECIPE_SEARCH,
      category: 'Search',
      label: searchTerm,
    });
  };

  // Track navigation clicks
  const trackNavigation = (destination: string) => {
    event({
      action: analyticsEvents.NAV_CLICK,
      category: 'Navigation',
      label: destination,
    });
  };

  // Track filter usage
  const trackFilter = (filterType: string, filterValue: string) => {
    event({
      action: analyticsEvents.RECIPE_FILTER,
      category: 'Filter',
      label: `${filterType}: ${filterValue}`,
    });
  };

  // Track button clicks
  const trackButtonClick = (buttonName: string, location: string) => {
    event({
      action: analyticsEvents.BUTTON_CLICK,
      category: 'Button',
      label: `${buttonName} - ${location}`,
    });
  };

  // Track content sharing
  const trackShare = (contentType: string, method: string) => {
    event({
      action: analyticsEvents.CONTENT_SHARE,
      category: 'Social',
      label: `${contentType} via ${method}`,
    });
  };

  // Track external link clicks
  const trackExternalLink = (url: string, context: string) => {
    event({
      action: analyticsEvents.EXTERNAL_LINK,
      category: 'External',
      label: `${url} from ${context}`,
    });
  };

  return {
    trackRecipeView,
    trackSearch,
    trackNavigation,
    trackFilter,
    trackButtonClick,
    trackShare,
    trackExternalLink,
  };
};