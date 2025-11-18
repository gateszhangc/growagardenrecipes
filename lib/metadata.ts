import { Metadata } from 'next';

// Base metadata configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://growagarden-recipes.com'),
  title: {
    template: '%s | Grow a Garden Recipes',
    default: 'Grow a Garden Recipes - Complete Cooking Guide & Tips',
  },
  description: 'Master every Grow a Garden recipe! Discover 200+ verified recipes, cooking strategies, ingredient guides, and reward optimization tips for your virtual garden.',
  keywords: [
    'grow a garden recipes',
    'garden game cooking',
    'virtual garden recipes',
    'cooking simulator guide',
    'grow a garden ingredients',
    'garden game tips',
    'cooking strategies',
    'recipe optimization',
    'garden game rewards',
    'virtual cooking guide'
  ],
  authors: [{ name: 'Grow a Garden Recipes Team' }],
  creator: 'Grow a Garden Recipes',
  publisher: 'Grow a Garden Recipes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growagarden-recipes.com',
    siteName: 'Grow a Garden Recipes',
    title: 'Grow a Garden Recipes - Complete Cooking Guide',
    description: 'Master every Grow a Garden recipe! Discover 200+ verified recipes, cooking strategies, and ingredient guides.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Recipes - Complete Cooking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Recipes - Complete Cooking Guide',
    description: 'Master every Grow a Garden recipe! Discover 200+ verified recipes and cooking strategies.',
    images: ['/twitter-image.jpg'],
    creator: '@GrowAGardenRec',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
};

// Page-specific metadata functions
export const getPageMetadata = (page: string, additionalData?: any): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    home: {
      title: 'Grow a Garden Recipes - Complete Cooking Guide & Tips',
      description: 'Your ultimate guide to cooking success in Grow a Garden! Discover comprehensive recipes, expert cooking strategies, and unlock every delicious possibility in your virtual kitchen.',
    },
    recipes: {
      title: 'All Grow a Garden Recipes (200+) - Complete Collection',
      description: 'Browse our complete collection of 200+ verified Grow a Garden recipes. Filter by cooking time, rarity, rewards, and ingredients to find the perfect dish.',
    },
    'recipes/fast': {
      title: 'Fast Grow a Garden Recipes - Quick Meals Under 4 Minutes',
      description: 'Discover 15+ fast Grow a Garden recipes ready in under 4 minutes. Perfect for quick rewards and efficient cooking strategies.',
    },
    ingredients: {
      title: 'Grow a Garden Ingredients Guide - Complete Ingredient List',
      description: 'Complete guide to all Grow a Garden ingredients. Learn growing times, uses, recipes, and optimization strategies for maximum rewards.',
    },
    cooking: {
      title: 'Grow a Garden Cooking Tips & Strategies - Master Guide',
      description: 'Master Grow a Garden cooking with expert tips, strategies, and techniques. Learn timing, ingredient combinations, and reward optimization.',
    },
    rewards: {
      title: 'Grow a Garden Rewards Guide - Maximize Your Earnings',
      description: 'Complete guide to Grow a Garden rewards system. Learn how to maximize earnings, unlock rare items, and optimize your cooking strategy.',
    },
    rarity: {
      title: 'Grow a Garden Rarity Guide - Understanding Recipe Tiers',
      description: 'Understanding Grow a Garden recipe rarity system. Learn about Common, Uncommon, Rare, Epic, and Legendary recipes and their rewards.',
    },
    comingSoon: {
      title: 'Coming Soon - New Grow a Garden Recipes & Features',
      description: 'New Grow a Garden recipes and features coming soon. Stay updated with the latest cooking strategies and reward optimization tips.',
    },
  };

  return {
    ...baseMetadata,
    ...pageMetadata[page],
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageMetadata[page]?.title as string,
      description: pageMetadata[page]?.description as string,
      url: `https://growagarden-recipes.com/${page === 'home' ? '' : page}`,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageMetadata[page]?.title as string,
      description: pageMetadata[page]?.description as string,
    },
  };
};

// Structured data functions
export const getWebsiteStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Grow a Garden Recipes',
  description: 'Your ultimate guide to cooking success in Grow a Garden! Discover comprehensive recipes, expert cooking strategies, and unlock every delicious possibility.',
  url: 'https://growagarden-recipes.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://growagarden-recipes.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
});

export const getRecipeStructuredData = (recipeData: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Recipe',
  name: recipeData.name,
  description: recipeData.description,
  image: recipeData.image,
  cookTime: recipeData.cookTime,
  recipeCategory: recipeData.category,
  recipeIngredient: recipeData.ingredients,
  aggregateRating: recipeData.rating,
  nutrition: recipeData.nutrition,
});