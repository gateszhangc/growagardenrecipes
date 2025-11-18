import { Metadata } from 'next';

// Base metadata configuration
export const baseMetadata: Metadata = {
  metadataBase: new URL('https://www.growagardenrecipes.space'),
  title: {
    template: '%s – Grow a Garden Recipes',
    default: 'Grow a Garden Recipes – Complete Guide',
  },
  description: 'Complete guide to Grow a Garden recipes: 200+ dishes, cooking strategies, ingredient tips, and reward optimization for your virtual kitchen.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://www.growagardenrecipes.space/',
  },
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
    url: 'https://www.growagardenrecipes.space',
    siteName: 'Grow a Garden Recipes',
    title: 'Grow a Garden Recipes – Complete Guide',
    description: 'Master Grow a Garden recipes with 200+ dishes, strategies, and ingredient tips.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Recipes – Complete Guide',
    description: 'Master Grow a Garden recipes with 200+ dishes, strategies, and ingredient tips.',
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
      title: 'Grow a Garden Recipes – Complete Guide',
      description: 'Complete guide to Grow a Garden recipes: 200+ dishes, cooking strategies, ingredient tips, and reward optimization for your virtual kitchen.',
    },
    recipes: {
      title: 'All Grow a Garden Recipes (200+)',
      description: 'Browse 200+ Grow a Garden recipes. Filter by time, rarity, rewards, and ingredients to find the perfect dish.',
    },
    'recipes/fast': {
      title: 'Fast Grow a Garden Recipes – Under 4 Minutes',
      description: 'Discover quick Grow a Garden recipes ready in under 4 minutes. Perfect for efficient cooking and fast rewards.',
    },
    ingredients: {
      title: 'Grow a Garden Ingredients Guide',
      description: 'Complete ingredient guide for Grow a Garden recipes: growing times, uses, recipe links, and optimization tips.',
    },
    cooking: {
      title: 'Grow a Garden Cooking Strategies',
      description: 'Master cooking in Grow a Garden with expert timing, ingredient combos, and reward optimization.',
    },
    rewards: {
      title: 'Grow a Garden Rewards Guide',
      description: 'Learn how Grow a Garden recipes reward systems work and maximize earnings with optimal cooking strategies.',
    },
    rarity: {
      title: 'Grow a Garden Recipe Rarity Explained',
      description: 'Understand Common, Uncommon, Rare, Epic, and Legendary Grow a Garden recipes and their rewards.',
    },
    comingSoon: {
      title: 'New Grow a Garden Recipes – Coming Soon',
      description: 'New Grow a Garden recipes and features are coming soon. Stay updated with the latest strategies and rewards.',
    },
  };

  const canonicalUrl = `https://www.growagardenrecipes.space/${page === 'home' ? '' : page}`;

  return {
    ...baseMetadata,
    ...pageMetadata[page],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageMetadata[page]?.title as string,
      description: pageMetadata[page]?.description as string,
      url: canonicalUrl,
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
  url: 'https://www.growagardenrecipes.space',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.growagardenrecipes.space/search?q={search_term_string}',
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