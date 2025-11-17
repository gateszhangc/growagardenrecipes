const structuredDataWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Grow a Garden Recipes',
  alternateName: 'Grow a Garden Cooking Guide',
  url: 'https://growagarden-recipes.com/',
  description:
    'Complete Grow a Garden cooking guide 2025 with 50+ verified recipes, cook times, pot colors, and reward strategies.',
  publisher: {
    '@type': 'Organization',
    name: 'Grow a Garden Recipes Team',
    url: 'https://growagarden-recipes.com/',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Pizza Recipe',
        url: 'https://growagarden-recipes.com/recipes/pizza',
        description:
          '4:30 cook time using Wheat, Tomato, Cheese in Red pot',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Soup Recipe',
        url: 'https://growagarden-recipes.com/recipes/soup',
        description: '25-45 minute cook times with various ingredients',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Burger Recipe',
        url: 'https://growagarden-recipes.com/recipes/burger',
        description: 'Premium cooking with beef and cheese combinations',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Sushi Recipe',
        url: 'https://growagarden-recipes.com/recipes/sushi',
        description: 'Advanced recipe with rare ingredients and high rewards',
      },
    ],
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://growagarden-recipes.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Recipes',
        item: 'https://growagarden-recipes.com/recipes',
      },
    ],
  },
};

const structuredDataCollection = {
  '@context': 'https://schema.org',
  '@type': 'RecipeCollection',
  name: 'Grow a Garden Recipes Collection',
  description:
    'Complete collection of Grow a Garden recipes with cooking times, ingredients, and rewards',
  recipe: [
    {
      '@type': 'Recipe',
      name: 'Pizza',
      description: 'Premium pizza recipe with guaranteed Pet Egg rewards',
      cookTime: 'PT4M30S',
      recipeIngredient: ['Wheat', 'Tomato', 'Cheese'],
      recipeInstructions: [
        'Combine ingredients in red pot',
        'Cook for 4 minutes 30 seconds',
      ],
      recipeYield: '1 Pet Egg + XP',
    },
    {
      '@type': 'Recipe',
      name: 'Soup',
      description: 'Hearty soup with common ingredients',
      cookTime: 'PT25M',
      recipeIngredient: ['Water', 'Vegetables', 'Spices'],
      recipeInstructions: ['Add ingredients to pot', 'Cook for 25 minutes'],
      recipeYield: 'XP + Coins',
    },
    {
      '@type': 'Recipe',
      name: 'Mushroom Soup',
      description: 'Quick mushroom soup for XP farming',
      cookTime: 'PT25M',
      recipeIngredient: ['Mushrooms', 'Water', 'Spices'],
      recipeInstructions: ['Add mushrooms and water', 'Cook for 25 minutes'],
      recipeYield: '250-400 XP + Pet Egg Chance',
    },
    {
      '@type': 'Recipe',
      name: 'Beef Soup',
      description: 'Premium beef soup with rare rewards',
      cookTime: 'PT45M',
      recipeIngredient: ['Beef', 'Water', 'Spices', 'Potato'],
      recipeInstructions: ['Combine ingredients', 'Cook for 45 minutes'],
      recipeYield: '400-650 XP + 12% Pet Egg Chance',
    },
  ],
};

export default function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>
        Grow a Garden Recipes Guide 2025 - Master Cooking &amp; Get Pet Eggs
        Fast
      </title>
      <meta
        name="robots"
        content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
      />
      <meta name="googlebot" content="index,follow" />
      <meta name="bingbot" content="index,follow" />
      <meta name="fragment" content="!" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataWebsite),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDataCollection),
        }}
      />

      <script
        defer
        data-domain="growagarden-recipes.com"
        src="https://gshqeklb.sealosbja.site/js/script.js"
      />
      <script
        type="module"
        crossOrigin=""
        src="/assets/index-Cn6auGPT.js"
      />
      <link
        rel="stylesheet"
        crossOrigin=""
        href="/assets/index-pK5ccsLp.css"
      />
    </>
  );
}
