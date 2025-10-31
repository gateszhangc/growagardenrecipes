import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          🌱 Grow a Garden Recipes
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Fresh, healthy recipes using ingredients from your own garden. Learn to grow, cook, and enjoy the bounty of your home garden.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/recipes">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Explore Recipes
            </Button>
          </Link>
          <Link href="/growing-tips">
            <Button size="lg" variant="outline">
              Growing Tips
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Content */}
      <section className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🥗 Fresh Garden Recipes
            </CardTitle>
            <CardDescription>
              Discover delicious recipes that make the most of your garden harvest
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              From crisp salads to hearty soups, our recipes are designed to celebrate seasonal, garden-fresh ingredients.
            </p>
            <Link href="/recipes">
              <Button>Browse Recipes</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🌿 Growing Tips & Guides
            </CardTitle>
            <CardDescription>
              Learn how to grow your own vegetables, herbs, and fruits
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Expert advice on planting, maintaining, and harvesting your home garden for maximum flavor and nutrition.
            </p>
            <Link href="/growing-tips">
              <Button variant="outline">Learn More</Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Seasonal Highlights */}
      <section className="bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          🌻 What's in Season Now
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Tomatoes', 'Basil', 'Cucumbers', 'Peppers'].map((item) => (
            <div key={item} className="text-center p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl mb-2">
                {item === 'Tomatoes' && '🍅'}
                {item === 'Basil' && '🌿'}
                {item === 'Cucumbers' && '🥒'}
                {item === 'Peppers' && '🫑'}
              </div>
              <h3 className="font-semibold text-green-700">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
