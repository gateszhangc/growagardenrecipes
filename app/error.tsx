'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="text-6xl mb-4">🔥</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-6">
          We encountered an error while loading your garden recipes.
        </p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            🔄 Try Again
          </button>
          <a
            href="/"
            className="block text-blue-600 hover:underline"
          >
            🏠 Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}