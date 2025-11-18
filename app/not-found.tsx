import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Grow a Garden Recipes',
  description: 'The page you are looking for does not exist. Browse our collection of Grow a Garden recipes and cooking guides.',
  alternates: {
    canonical: 'https://growagarden-recipes.com/404',
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="text-6xl mb-4">🌱</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          The garden recipe you're looking for seems to have sprouted elsewhere!
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            🏠 Back to Home
          </Link>
          <div className="text-sm text-gray-500">
            Or try these popular pages:
            <div className="mt-2 space-y-2">
              <Link href="/recipes" className="block text-blue-600 hover:underline">
                📖 All Recipes
              </Link>
              <Link href="/recipes/fast" className="block text-blue-600 hover:underline">
                ⚡ Fast Recipes
              </Link>
              <Link href="/ingredients" className="block text-blue-600 hover:underline">
                🥬 Ingredients Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}