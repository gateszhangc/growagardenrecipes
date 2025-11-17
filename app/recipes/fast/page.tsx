'use client';

import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './page.module.css';

const fastRecipes = [
  {
    name: 'Soup',
    cookTime: '02:40',
    potColor: 'Green',
    rarity: 'Quick',
  },
  {
    name: 'Sandwich',
    cookTime: '03:00',
    potColor: 'Green',
    rarity: 'Quick',
  },
  {
    name: 'Salad',
    cookTime: '02:10',
    potColor: 'Green',
    rarity: 'Quick',
  },
  {
    name: 'Ice Cream',
    cookTime: '03:20',
    potColor: 'Blue',
    rarity: 'Quick',
  },
  {
    name: 'Hot Dog',
    cookTime: '03:30',
    potColor: 'Green',
    rarity: 'Quick',
  },
];

const benefits = [
  {
    title: 'Quick Rewards',
    description: 'Get rewards faster with shorter cooking times, perfect for active gameplay sessions.',
  },
  {
    title: 'Efficient Progression',
    description: 'Maximize your hourly reward rate with these time-efficient cooking options.',
  },
  {
    title: 'Easy Ingredients',
    description: 'Most fast recipes use common ingredients that are easy to obtain.',
  },
  {
    title: 'Perfect for Beginners',
    description: 'Great starting point for new players learning the cooking mechanics.',
  },
];

export default function FastRecipePage() {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <h1>Fast Recipes</h1>
            <p className={styles.subtitle}>Quick dishes ready in under 5 minutes</p>
            <p className={styles.description}>
              Perfect for fast rewards and efficient gameplay progression
            </p>
          </div>

          <section className={styles.recipesSection}>
            <div className={styles.recipeGrid}>
              {fastRecipes.map((recipe) => (
                <Link
                  key={recipe.name}
                  href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`}
                  className={styles.recipeCard}
                >
                  <div className={styles.recipeHeader}>
                    <h3>{recipe.name}</h3>
                    <span className={styles.rarityBadge}>{recipe.rarity}</span>
                  </div>
                  <div className={styles.recipeDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>Cook</span>
                      <span className={styles.value}>{recipe.cookTime}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.label}>Pot:</span>
                      <span className={`${styles.potColor} ${styles[`pot${recipe.potColor}`]}`}>
                        {recipe.potColor}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className={styles.benefitsSection}>
            <h2>Why Choose Fast Recipes?</h2>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit) => (
                <article key={benefit.title} className={styles.benefitCard}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
