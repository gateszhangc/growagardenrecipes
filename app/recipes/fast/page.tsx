'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const fastRecipes = [
  { icon: '🍲', name: 'Soup', cookTime: '02:40', potColor: 'Light Blue', rarity: 'Common', reward: 'Low', ingredients: 3 },
  { icon: '🥪', name: 'Sandwich', cookTime: '03:00', potColor: 'Green', rarity: 'Common', reward: 'Low', ingredients: 4 },
  { icon: '🥗', name: 'Salad', cookTime: '02:10', potColor: 'Green', rarity: 'Common', reward: 'Low', ingredients: 3 },
  { icon: '🍦', name: 'Ice Cream', cookTime: '03:20', potColor: 'Blue', rarity: 'Common', reward: 'Medium', ingredients: 4 },
  { icon: '🌭', name: 'Hot Dog', cookTime: '03:30', potColor: 'Green', rarity: 'Common', reward: 'Medium', ingredients: 4 },
  { icon: '🍕', name: 'Pizza', cookTime: '04:30', potColor: 'Red', rarity: 'Legendary', reward: 'Very High', ingredients: 6 },
];

const benefits = [
  { icon: '⚡', title: 'Quick Rewards', desc: 'Get rewards faster with shorter cooking times, perfect for active gameplay sessions.' },
  { icon: '📈', title: 'Efficient Progression', desc: 'Maximize your hourly reward rate with these time-efficient cooking options.' },
  { icon: '🌱', title: 'Easy Ingredients', desc: 'Most fast recipes use common ingredients that are easy to obtain.' },
  { icon: '🎓', title: 'Perfect for Beginners', desc: 'Great starting point for new players learning the cooking mechanics.' },
];

const tips = [
  'Cook multiple fast recipes in sequence to maintain a steady reward flow',
  'Prepare ingredients in advance to minimize downtime between recipes',
  'Fast recipes are ideal for completing daily cooking challenges quickly',
  'Combine fast recipes with ingredient farming for maximum efficiency',
];

export default function FastRecipePage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <Link href="/recipes" className={styles.backLink}>
              ← Back to All Recipes
            </Link>
            <div className={styles.badge}>⚡ SPEED COOKING</div>
            <h1>Fast Recipes</h1>
            <p className={styles.subtitle}>Quick dishes ready in under 5 minutes</p>
            <p className={styles.description}>
              Perfect for fast rewards and efficient gameplay progression. These recipes are optimized 
              for players who want to maximize their cooking output in minimal time.
            </p>
          </div>

          {/* Stats */}
          <section className={styles.statsSection}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{fastRecipes.length}</div>
              <div className={styles.statLabel}>Fast Recipes</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>≤5 min</div>
              <div className={styles.statLabel}>Max Cook Time</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>3-6</div>
              <div className={styles.statLabel}>Ingredients</div>
            </div>
          </section>

          {/* Recipes Grid */}
          <section className={styles.recipesSection}>
            <h2>All Fast Recipes</h2>
            <div className={styles.recipeGrid}>
              {fastRecipes.map((recipe) => (
                <Link
                  key={recipe.name}
                  href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`}
                  className={styles.recipeCard}
                >
                  <div className={styles.recipeIcon}>{recipe.icon}</div>
                  <h3>{recipe.name}</h3>
                  <div className={styles.recipeRarity}>{recipe.rarity}</div>
                  <div className={styles.recipeInfo}>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Cook Time</span>
                      <span className={styles.infoValue}>{recipe.cookTime}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Pot Color</span>
                      <span className={styles.infoValue}>{recipe.potColor}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Reward</span>
                      <span className={styles.infoValue}>{recipe.reward}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <span className={styles.infoLabel}>Ingredients</span>
                      <span className={styles.infoValue}>{recipe.ingredients}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className={styles.benefitsSection}>
            <h2>Why Choose Fast Recipes?</h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <div key={benefit.title} className={styles.benefitCard}>
                  <span className={styles.benefitIcon}>{benefit.icon}</span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips Section */}
          <section className={styles.tipsSection}>
            <h2>Pro Tips for Fast Cooking</h2>
            <div className={styles.tipsList}>
              {tips.map((tip, index) => (
                <div key={index} className={styles.tipItem}>
                  <span className={styles.tipNumber}>{index + 1}</span>
                  <p>{tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Ready to Start Fast Cooking?</h2>
            <p>Browse all recipes or check out other categories</p>
            <div className={styles.ctaButtons}>
              <Link href="/recipes">View All Recipes</Link>
              <Link href="/recipes/high-reward">High-Reward Recipes</Link>
              <Link href="/cooking">Cooking Guide</Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
