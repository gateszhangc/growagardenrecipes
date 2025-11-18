import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soup Recipe - Grow a Garden Recipes',
  description: 'Learn how to make Soup in Grow a Garden! Complete guide with ingredients, cooking time, rewards, and tips for this easy beginner recipe.',
  keywords: ['grow a garden soup recipe', 'soup recipe', 'garden game cooking', 'beginner recipes', 'easy cooking'],
  alternates: {
    canonical: 'https://www.growagardenrecipes.space/recipes/soup',
  },
  openGraph: {
    title: 'Soup Recipe - Grow a Garden Recipes',
    description: 'Learn how to make Soup in Grow a Garden! Complete guide with ingredients and cooking tips.',
    url: 'https://www.growagardenrecipes.space/recipes/soup',
  },
};

export default function SoupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}