'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

const stats = [
  { value: '214', label: 'Recipes' },
  { value: '92%', label: 'Verification rate' },
  { value: '28', label: 'Pot colors' },
  { value: '12h', label: 'Update cycle' },
];

const categories = [
  { icon: '⚡', title: 'Fast Recipes', desc: '15 recipes ready in under 4 minutes', link: '/recipes/fast' },
  { icon: '💰', title: 'High Reward Chains', desc: '12 legendary combos optimized for pet eggs', link: '/recipes/high-reward' },
  { icon: '🌱', title: 'Beginner Garden', desc: '8 zero-rarity recipes with farm layout', link: '/recipes/beginners' },
  { icon: '📖', title: 'Complete Collection', desc: '214 recipes + 28 pot water colors', link: '/recipes' },
];

const popularRecipes = [
  { icon: '🍎', name: 'Apple Pie', time: '45:00', rarity: 'Epic', reward: 'High', ingredients: 5 },
  { icon: '🧀', name: 'Cheese Burger', time: '15:00', rarity: 'Common', reward: 'Medium', ingredients: 5 },
  { icon: '🍕', name: 'Pizza', time: '04:30', rarity: 'Legendary', reward: 'Very High', ingredients: 6 },
  { icon: '🍉', name: 'Watermelon Juice', time: '08:00', rarity: 'Common', reward: 'Medium', ingredients: 3 },
];

const tips = [
  { icon: '⏰', title: 'Time Your Harvests', desc: 'Plant ingredients based on cooking schedules to maximize efficiency.' },
  { icon: '⭐', title: 'Mix Rarity Levels', desc: 'Combine common and rare ingredients strategically for bonus rewards.' },
  { icon: '🎨', title: 'Master the Pot Colors', desc: 'Different pot water colors indicate specific recipe types.' },
  { icon: '🔗', title: 'Plan Recipe Chains', desc: 'Some recipes unlock ingredients for others - plan your sequence.' },
];

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div className={styles.badge}>2025 UPDATE</div>
            <h1>Master Every <span className={styles.highlight}>Grow a Garden Recipe</span></h1>
            <p className={styles.heroDesc}>
              Your ultimate guide to cooking success in Grow a Garden! Discover comprehensive recipes, 
              expert cooking strategies, and unlock every delicious possibility in your virtual kitchen.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/recipes" className={styles.primaryBtn}>Browse All Recipes</Link>
              <Link href="/submit-correction" className={styles.secondaryBtn}>Submit Correction</Link>
            </div>
          </section>

          {/* Stats Section */}
          <section className={styles.statsSection}>
            <div className={styles.statsHeader}>
              <span className={styles.statsBadge}>LIVE TRACKER</span>
              <h3>Today's Highlights</h3>
              <p>57 new patch recipes verified. Pot colors calibrated by 50k+ players.</p>
            </div>
            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Search Section */}
          <section className={styles.searchSection}>
            <h2>Quick Recipe Search</h2>
            <p>Enter keywords to instantly get recommended dishes and reward estimates.</p>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
              <button className={styles.searchBtn}>Start Search</button>
            </div>
          </section>

          {/* Categories Section */}
          <section className={styles.categoriesSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>GARDEN COLLECTION</span>
              <h2>Recipe Categories</h2>
            </div>
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <Link key={cat.title} href={cat.link} className={styles.categoryCard}>
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Tips Section */}
          <section className={styles.tipsSection}>
            <h2>Pro Tips for Better Rewards</h2>
            <div className={styles.tipsGrid}>
              {tips.map((tip) => (
                <div key={tip.title} className={styles.tipCard}>
                  <span className={styles.tipIcon}>{tip.icon}</span>
                  <h3>{tip.title}</h3>
                  <p>{tip.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Popular Recipes */}
          <section className={styles.popularSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionBadge}>POPULAR PICKS</span>
              <h2>Popular Recipes</h2>
            </div>
            <div className={styles.popularGrid}>
              {popularRecipes.map((recipe) => (
                <Link key={recipe.name} href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className={styles.popularCard}>
                  <div className={styles.recipeIcon}>{recipe.icon}</div>
                  <div className={styles.recipeRarity}>{recipe.rarity}</div>
                  <h3>{recipe.name}</h3>
                  <div className={styles.recipeTime}>{recipe.time}</div>
                  <div className={styles.recipeStats}>
                    <span>Reward: {recipe.reward}</span>
                    <span>Ingredients: {recipe.ingredients}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <h2>Start Your Recipe Journey Today</h2>
            <p>Join thousands of players who have mastered grow a garden recipes using our comprehensive guides.</p>
            <div className={styles.ctaButtons}>
              <Link href="/recipes">View All Recipes</Link>
              <Link href="/ingredients">Browse Ingredients</Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
