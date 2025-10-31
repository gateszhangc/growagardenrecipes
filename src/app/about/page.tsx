import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">
        🌱 About Grow a Garden Recipes
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-green-700">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              At Grow a Garden Recipes, we believe that the best meals start with fresh, homegrown ingredients.
              Our mission is to inspire and empower home gardeners to create delicious, healthy meals using the
              bounty from their own gardens. We bridge the gap between growing and cooking, helping you make
              the most of every harvest.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">What We Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🥗</span>
                  <span className="text-gray-700">Seasonal recipes featuring garden-fresh ingredients</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🌿</span>
                  <span className="text-gray-700">Growing tips for popular garden vegetables and herbs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">📅</span>
                  <span className="text-gray-700">Seasonal planting and harvesting guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🍳</span>
                  <span className="text-gray-700">Preservation techniques for garden abundance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Why Garden-to-Table?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✨</span>
                  <span className="text-gray-700">Maximum freshness and flavor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">💰</span>
                  <span className="text-gray-700">Save money on groceries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🌍</span>
                  <span className="text-gray-700">Reduce your carbon footprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">🏃</span>
                  <span className="text-gray-700">Healthy outdoor activity</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 text-center">Get Started Today!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 mb-4">
              Whether you have a spacious backyard or a small balcony, there's a garden waiting to grow.
              Start with easy-to-grow herbs and vegetables, and expand your garden as you gain confidence.
            </p>
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🌱</div>
                <h3 className="font-semibold text-green-700">Start Small</h3>
                <p className="text-sm text-gray-600">Begin with herbs or easy vegetables</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <h3 className="font-semibold text-green-700">Learn & Grow</h3>
                <p className="text-sm text-gray-600">Follow our guides and tips</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🍳</div>
                <h3 className="font-semibold text-green-700">Cook & Enjoy</h3>
                <p className="text-sm text-gray-600">Create delicious meals with your harvest</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}