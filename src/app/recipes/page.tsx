import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const recipes = [
  {
    id: 1,
    title: "Garden Fresh Caprese Salad",
    description: "Simple and delicious salad with fresh tomatoes, basil, and mozzarella",
    ingredients: ["Fresh tomatoes", "Basil leaves", "Fresh mozzarella", "Olive oil", "Balsamic vinegar"],
    time: "15 mins",
    difficulty: "Easy",
    emoji: "🍅"
  },
  {
    id: 2,
    title: "Hearty Vegetable Soup",
    description: "A warming soup perfect for using up your garden vegetables",
    ingredients: ["Carrots", "Potatoes", "Onions", "Celery", "Garden herbs"],
    time: "45 mins",
    difficulty: "Medium",
    emoji: "🥕"
  },
  {
    id: 3,
    title: "Basil Pesto Pasta",
    description: "Fresh homemade pesto with garden basil and garlic",
    ingredients: ["Fresh basil", "Garlic", "Pine nuts", "Parmesan", "Olive oil"],
    time: "20 mins",
    difficulty: "Easy",
    emoji: "🌿"
  },
  {
    id: 4,
    title: "Grilled Vegetable Platter",
    description: "Colorful grilled vegetables perfect for summer dining",
    ingredients: ["Zucchini", "Bell peppers", "Eggplant", "Onions", "Olive oil"],
    time: "30 mins",
    difficulty: "Easy",
    emoji: "🫑"
  },
  {
    id: 5,
    title: "Fresh Herb Salad",
    description: "A light and refreshing salad with mixed garden herbs",
    ingredients: ["Mixed greens", "Fresh herbs", "Lemon", "Olive oil", "Nuts"],
    time: "10 mins",
    difficulty: "Easy",
    emoji: "🥗"
  },
  {
    id: 6,
    title: "Garden Salsa",
    description: "Fresh salsa made with homegrown tomatoes and peppers",
    ingredients: ["Tomatoes", "Peppers", "Onions", "Cilantro", "Lime"],
    time: "20 mins",
    difficulty: "Easy",
    emoji: "🌶️"
  }
];

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-green-800 mb-4 text-center">
        🥗 Garden Fresh Recipes
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto">
        Discover delicious recipes that make the most of your garden harvest. Each recipe is designed to showcase fresh, seasonal ingredients.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <Card key={recipe.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <span className="text-3xl">{recipe.emoji}</span>
                <div className="flex-1">
                  <CardTitle className="text-green-700">{recipe.title}</CardTitle>
                  <div className="flex gap-2 text-sm text-gray-500 mt-1">
                    <span>⏱️ {recipe.time}</span>
                    <span>📊 {recipe.difficulty}</span>
                  </div>
                </div>
              </div>
              <CardDescription>{recipe.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-semibold mb-2">Key Ingredients:</h4>
                <div className="flex flex-wrap gap-1">
                  {recipe.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}