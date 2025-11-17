'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const recipeData = {
  icon: '🍲',
  name: 'Soup',
  cookTime: '3:00',
  potColor: 'Light Blue',
  difficulty: 'Easy',
  rewards: 2,
  rarity: 'Common',
  tags: ['fast', 'beginner-friendly', 'common'],
};

const ingredients = [
  { name: 'Tomato', icon: '🍅', rarity: 'Common' },
  { name: 'Potato', icon: '🥔', rarity: 'Common' },
  { name: 'Spice', icon: '🌶️', rarity: 'Common' },
];

const steps = [
  'Add Tomato, Potato, and Spice to your cooking pot',
  'Start cooking and wait for 3 minutes',
  'Watch for the pot water to turn Light Blue',
  'Collect your rewards when cooking is complete',
];

const rewards = [
  { name: 'XP Boost', icon: '⭐', rarity: 'Common' },
  { name: 'Coin Pack', icon: '💰', rarity: 'Common' },
];

const relatedRecipes = [
  { icon: '🥪', name: 'Sandwich', desc: 'Another quick and easy recipe', time: '03:00' },
  { icon: '🥗', name: 'Salad', desc: 'Fresh and fast to prepare', time: '02:10' },
  { icon: '🌭', name: 'Hot Dog', desc: 'Classic comfort food', time: '03:30' },
];

export default function SoupPage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumb */}
          <Link href="/recipes" className={styles.backLink}>
            ← Back to Recipes
          </Link>

          {/* Hero Section */}
          <div className={styles.hero}>
            <div className={styles.recipeIcon}>{recipeData.icon}</div>
            <h1>{recipeData.name}</h1>
            <div className={styles.tags}>
              {recipeData.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <section className={styles.statsSection}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>Cook Time</div>
              <div className={styles.statValue}>{recipeData.cookTime} <span>min</span></div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>Pot Color</div>
              <div className={styles.statValue}>{recipeData.potColor}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>Difficulty</div>
              <div className={styles.statValue}>{recipeData.difficulty}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>Rewards</div>
              <div className={styles.statValue}>{recipeData.rewards}</div>
            </div>
          </section>

          {/* How to Make */}
          <section className={styles.stepsSection}>
            <h2>How to Make {recipeData.name}</h2>
            <div className={styles.stepsList}>
              {steps.map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ingredients */}
          <section className={styles.ingredientsSection}>
            <h2>Ingredients Required</h2>
            <div className={styles.ingredientsGrid}>
              {ingredients.map((ingredient) => (
                <div key={ingredient.name} className={styles.ingredientCard}>
                  <span className={styles.ingredientIcon}>{ingredient.icon}</span>
                  <h3>{ingredient.name}</h3>
                  <span className={styles.ingredientRarity}>{ingredient.rarity}</span>
                  <Link href={`/ingredients/${ingredient.name.toLowerCase()}`} className={styles.ingredientLink}>
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Rewards */}
          <section className={styles.rewardsSection}>
            <h2>Possible Rewards</h2>
            <div className={styles.rewardsGrid}>
              {rewards.map((reward) => (
                <div key={reward.name} className={styles.rewardCard}>
                  <span className={styles.rewardIcon}>{reward.icon}</span>
                  <h3>{reward.name}</h3>
                  <span className={styles.rewardRarity}>{reward.rarity}</span>
                  <Link href={`/rewards/${reward.name.toLowerCase().replace(/ /g, '-')}`} className={styles.rewardLink}>
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Recipe Info */}
          <section className={styles.infoSection}>
            <h2>Recipe Info</h2>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Verified:</span>
                <span className={styles.infoValue}>2024-12-01</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Version:</span>
                <span className={styles.infoValue}>v1.2.0</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Rarity:</span>
                <span className={styles.infoValue}>{recipeData.rarity}</span>
              </div>
            </div>
          </section>

          {/* Related Recipes */}
          <section className={styles.relatedSection}>
            <h2>Related Recipes</h2>
            <div className={styles.relatedGrid}>
              {relatedRecipes.map((recipe) => (
                <Link
                  key={recipe.name}
                  href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`}
                  className={styles.relatedCard}
                >
                  <span className={styles.relatedIcon}>{recipe.icon}</span>
                  <h3>{recipe.name}</h3>
                  <p>{recipe.desc}</p>
                  <span className={styles.relatedTime}>Cook: {recipe.time}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
