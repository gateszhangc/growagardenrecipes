'use client';

import Link from 'next/link';
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
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerContent}>
            <Link href="/" className={styles.logoGroup}>
              <div className={styles.logoMark}>GG</div>
              <span className={styles.logoTitle}>Grow a Garden Recipes</span>
            </Link>

            <nav className={styles.nav}>
              <Link href="/">Home</Link>
              <Link href="/recipes">Recipes</Link>
              <Link href="/ingredients">Ingredients</Link>
              <Link href="/rarity">Rarity</Link>
              <Link href="/rewards">Rewards</Link>
            </nav>

            <Link href="/cooking" className={styles.ctaButton}>
              Cooking Guide
            </Link>
          </div>
        </div>
      </header>

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
                <article key={recipe.name} className={styles.recipeCard}>
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
                </article>
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

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h3>Grow a Garden Recipes</h3>
              <p>
                Your complete guide to cooking in Roblox Grow a Garden. Find recipes, ingredients,
                and maximize your rewards.
              </p>
            </div>

            <div className={styles.footerSection}>
              <h3>Recipes</h3>
              <ul>
                <li>
                  <Link href="/recipes">All Recipes</Link>
                </li>
                <li>
                  <Link href="/recipes/fast">Fast Recipes</Link>
                </li>
                <li>
                  <Link href="/recipes/high-reward">High-Reward</Link>
                </li>
                <li>
                  <Link href="/recipes/beginners">Beginner-Friendly</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Game Info</h3>
              <ul>
                <li>
                  <Link href="/cooking">Cooking Guide</Link>
                </li>
                <li>
                  <Link href="/ingredients">Ingredients</Link>
                </li>
                <li>
                  <Link href="/rarity">Rarity Tiers</Link>
                </li>
                <li>
                  <Link href="/rewards">Rewards</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>Community</h3>
              <ul>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/submit-correction">Submit Correction</Link>
                </li>
                <li>
                  <Link href="/changelog">Changelog</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2024 Grow a Garden Recipes. Community-driven recipe database.</p>
            <div className={styles.footerLinks}>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/cookies">Cookies</Link>
              <Link href="/dmca">DMCA</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
