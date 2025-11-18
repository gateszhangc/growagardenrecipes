import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soup Recipe - Grow a Garden Recipes',
  description: 'Learn how to make Soup in Grow a Garden! Complete guide with ingredients, cooking time, rewards, and tips for this easy beginner recipe.',
  keywords: ['grow a garden soup recipe', 'soup recipe', 'garden game cooking', 'beginner recipes', 'easy cooking'],
  alternates: {
    canonical: 'https://growagarden-recipes.com/recipes/soup',
  },
  openGraph: {
    title: 'Soup Recipe - Grow a Garden Recipes',
    description: 'Learn how to make Soup in Grow a Garden! Complete guide with ingredients and cooking tips.',
    url: 'https://growagarden-recipes.com/recipes/soup',
  },
};

export default function SoupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}