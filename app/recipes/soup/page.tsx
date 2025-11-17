'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const recipeData = {
  name: 'Soup',
  tags: ['fast', 'beginner-friendly', 'common'],
  cookTime: '3:00',
  potColor: 'Light Blue',
  difficulty: 'Easy',
  rewardCount: 2,
  ingredients: [
    { name: 'Tomato', link: '/ingredients/tomato' },
    { name: 'Potato', link: '/ingredients/potato' },
    { name: 'Spice', link: '/ingredients/spice' },
  ],
  rewards: [
    { name: 'XP Boost', link: '/rewards/xp-boost' },
    { name: 'Coin Pack', link: '/rewards/coin-pack' },
  ],
  verified: '2024-12-01',
  version: 'v1.2.0',
};

const relatedRecipes = [
  {
    name: 'Sandwich',
    description: 'Another quick and easy recipe',
    link: '/recipes/sandwich',
  },
  {
    name: 'Salad',
    description: 'Fresh and fast to prepare',
    link: '/recipes/salad',
  },
  {
    name: 'Hot Dog',
    description: 'Classic comfort food',
    link: '/recipes/hot-dog',
  },
];

export default function SoupRecipePage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <Link href="/recipes" className={styles.backLink}>
            ← Back to Recipes
          </Link>

          <div className={styles.recipeHeader}>
            <div>
              <h1>{recipeData.name}</h1>
              <div className={styles.tags}>
                {recipeData.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>Cook Time</div>
              <div className={styles.statValue}>
                {recipeData.cookTime.split(':')[0]}
                <span className={styles.statUnit}>:</span>
                {recipeData.cookTime.split(':')[1]}
                <span className={styles.statUnit}> min</span>
              </div>
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
              <div className={styles.statValue}>{recipeData.rewardCount}</div>
            </div>
          </div>

          <section className={styles.section}>
            <h3>How to Make {recipeData.name}</h3>
            <ol className={styles.stepsList}>
              <li>
                Add <strong>Tomato</strong>, <strong>Potato</strong>, and <strong>Spice</strong> to
                your cooking pot
              </li>
              <li>
                Start cooking and wait for <strong>3 minutes</strong>
              </li>
              <li>
                Watch for the pot water to turn <strong>Light Blue</strong>
              </li>
              <li>Collect your rewards when cooking is complete</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h3>Ingredients Required</h3>
            <div className={styles.itemGrid}>
              {recipeData.ingredients.map((ingredient) => (
                <div key={ingredient.name} className={styles.itemCard}>
                  <span className={styles.itemName}>{ingredient.name}</span>
                  <Link href={ingredient.link} className={styles.itemLink}>
                    View Details
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h3>Possible Rewards</h3>
            <div className={styles.itemGrid}>
              {recipeData.rewards.map((reward) => (
                <div key={reward.name} className={styles.itemCard}>
                  <span className={styles.itemName}>{reward.name}</span>
                  <Link href={reward.link} className={styles.itemLink}>
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h3>Recipe Info</h3>
            <div className={styles.infoGrid}>
              <div>
                <strong>Verified:</strong> {recipeData.verified}
              </div>
              <div>
                <strong>Version:</strong> {recipeData.version}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>Related Recipes</h2>
            <div className={styles.relatedGrid}>
              {relatedRecipes.map((recipe) => (
                <div key={recipe.name} className={styles.relatedCard}>
                  <h3>{recipe.name}</h3>
                  <p>{recipe.description}</p>
                  <Link href={recipe.link} className={styles.relatedLink}>
                    View Recipe
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
