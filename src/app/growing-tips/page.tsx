import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const growingTips = [
  {
    id: 1,
    title: "Tomato Growing Guide",
    description: "Everything you need to know about growing juicy, flavorful tomatoes",
    tips: [
      "Start seeds indoors 6-8 weeks before last frost",
      "Choose a sunny spot with at least 6-8 hours of direct sunlight",
      "Provide support with cages or stakes",
      "Water consistently and mulch to retain moisture",
      "Harvest when fully colored and slightly firm"
    ],
    season: "Spring/Summer",
    difficulty: "Medium",
    emoji: "🍅"
  },
  {
    id: 2,
    title: "Basil Cultivation",
    description: "Grow fragrant basil for your kitchen garden",
    tips: [
      "Plant after all danger of frost has passed",
      "Pinch flower buds to encourage leafy growth",
      "Harvest frequently to promote bushier plants",
      "Provide plenty of sun and well-draining soil",
      "Water at the base to avoid leaf diseases"
    ],
    season: "Summer",
    difficulty: "Easy",
    emoji: "🌿"
  },
  {
    id: 3,
    title: "Cucumber Growing Tips",
    description: "Fresh, crisp cucumbers from your garden",
    tips: [
      "Provide trellis support for vining varieties",
      "Keep soil consistently moist",
      "Mulch to retain moisture and suppress weeds",
      "Harvest regularly to encourage continued production",
      "Watch for cucumber beetles and powdery mildew"
    ],
    season: "Summer",
    difficulty: "Easy",
    emoji: "🥒"
  },
  {
    id: 4,
    title: "Pepper Plant Care",
    description: "Grow sweet and hot peppers for your recipes",
    tips: [
      "Start seeds 8-10 weeks before last frost",
      "Warm soil is essential for good growth",
      "Provide consistent moisture but avoid waterlogging",
      "Support plants as they grow and produce fruit",
      "Harvest at desired ripeness for best flavor"
    ],
    season: "Summer",
    difficulty: "Medium",
    emoji: "🫑"
  },
  {
    id: 5,
    title: "Salad Greens Success",
    description: "Continuous harvest of fresh salad greens",
    tips: [
      "Plant in cool weather (spring/fall)",
      "Use cut-and-come-again harvesting method",
      "Provide partial shade in hot weather",
      "Keep soil consistently moist",
      "Succession plant every 2-3 weeks"
    ],
    season: "Spring/Fall",
    difficulty: "Easy",
    emoji: "🥬"
  },
  {
    id: 6,
    title: "Herb Garden Basics",
    description: "Essential herbs for your cooking garden",
    tips: [
      "Choose herbs based on your cooking preferences",
      "Most herbs need full sun and good drainage",
      "Harvest herbs in the morning for best flavor",
      "Prune regularly to encourage bushy growth",
      "Many herbs can be grown in containers"
    ],
    season: "Year-round",
    difficulty: "Easy",
    emoji: "🌱"
  }
];

export default function GrowingTipsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">
        🌿 Growing Tips & Guides
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
        Learn how to grow your own vegetables, herbs, and fruits with our comprehensive growing guides and expert tips.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {growingTips.map((guide) => (
          <Card key={guide.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <span className="text-4xl">{guide.emoji}</span>
                <div className="flex-1">
                  <CardTitle className="text-green-700">{guide.title}</CardTitle>
                  <div className="flex gap-2 text-sm text-gray-500 mt-1">
                    <span>🌱 {guide.season}</span>
                    <span>📊 {guide.difficulty}</span>
                  </div>
                </div>
              </div>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold mb-3">Key Tips:</h4>
                <ul className="space-y-2">
                  {guide.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
          💡 General Gardening Tips
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Soil Health</h3>
            <p className="text-gray-700">Start with good quality soil and amend with compost annually. Test your soil pH and nutrients.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Water Management</h3>
            <p className="text-gray-700">Water deeply but infrequently. Morning watering helps prevent fungal diseases.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Companion Planting</h3>
            <p className="text-gray-700">Plant complementary species together to deter pests and improve growth.</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Pest Control</h3>
            <p className="text-gray-700">Monitor plants regularly and use organic pest control methods when possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
}