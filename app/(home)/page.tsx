'use client';

import type { FormEvent } from 'react';
import styles from './page.module.css';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Recipes', href: '#categories' },
  { label: 'Ingredients', href: '#finder' },
  { label: 'Rarity', href: '#popular' },
  { label: 'Rewards', href: '#howto' },
];

const heroStats = [
  { value: '214', label: 'Recipes' },
  { value: '92%', label: 'Verification rate' },
  { value: '28', label: 'Pot colors' },
  { value: '12h', label: 'Update cycle' },
];

const filters = [
  { label: 'Legendary', active: true },
  { label: 'Epic', active: false },
  { label: 'Common', active: false },
  { label: 'Red Pot', active: true },
  { label: 'Blue Pot', active: false },
  { label: 'Pet Egg Drop', active: true },
  { label: 'XP Burst', active: false },
];

const categories = [
  {
    label: 'Fast Recipes',
    description: '15 recipes ready in under 4 minutes, perfect for grinding.',
    tone: 'highlight' as const,
  },
  {
    label: 'High Reward Chains',
    description: '12 legendary combos optimized for pet eggs with rarity and pot color.',
    tone: 'accent' as const,
  },
  {
    label: 'Beginner Garden',
    description: '8 zero-rarity recipes with farm layout diagrams included.',
  },
  {
    label: 'Complete Collection',
    description: '214 recipes + 28 pot water colors, filter anytime.',
  },
];

const popularRecipes = [
  {
    name: 'Pizza (Red Pot)',
    rarity: 'Legendary',
    duration: '04:30',
    description: 'Wheat × Tomato × Cheese · Pet Egg + XP',
    tone: 'legendary' as const,
  },
  {
    name: 'Mushroom Soup (Purple Pot)',
    rarity: 'Epic',
    duration: '25:00',
    description: 'Mushroom × Water × Spice · High XP burst chance',
    tone: 'epic' as const,
  },
  {
    name: 'Golden Drink (Gold Pot)',
    rarity: 'Epic',
    duration: '30:00',
    description: 'Fruit Mix × Energy Herb · Rare material drops',
    tone: 'epic' as const,
  },
  {
    name: 'Apple Pie (Red Pot)',
    rarity: 'Legendary',
    duration: '45:00',
    description: 'Apple × Sugar × Dough · Perfect for leaderboards',
    tone: 'legendary' as const,
  },
];

const steps = [
  {
    title: 'Plan Your Garden',
    description: 'Reserve land based on target recipes, ensure rare crop rotation.',
  },
  {
    title: 'Master Timing',
    description: 'Use the "Plant → Harvest → Cook" timeline to avoid ingredient shortages.',
  },
  {
    title: 'Chain Progression',
    description: 'Trade common dishes for rare materials, then push for legendary rewards.',
  },
];

const proTips = [
  {
    icon: '⏰',
    title: 'Time Your Harvests',
    description: 'Plant ingredients based on cooking schedules to maximize efficiency and reduce waiting time.',
  },
  {
    icon: '⭐',
    title: 'Mix Rarity Levels',
    description: 'Combine common and rare ingredients strategically to increase your chances of bonus rewards.',
  },
  {
    icon: '🎨',
    title: 'Master the Pot Colors',
    description: 'Different pot water colors indicate specific recipe types - learn the patterns for faster cooking.',
  },
  {
    icon: '🔗',
    title: 'Plan Recipe Chains',
    description: 'Some recipes unlock ingredients for others - plan your cooking sequence for maximum progression.',
  },
];

const featuredCategories = [
  {
    icon: '🥧',
    name: 'Pie Recipes',
    description: 'Sweet and savory pies',
    count: 3,
    tone: 'highlight' as const,
  },
  {
    icon: '🍔',
    name: 'Burger Recipes',
    description: 'Hearty and filling burgers',
    count: 3,
    tone: 'accent' as const,
  },
  {
    icon: '🍲',
    name: 'Soup Recipes',
    description: 'Warm and comforting soups',
    count: 3,
  },
  {
    icon: '🥤',
    name: 'Drink Recipes',
    description: 'Refreshing beverages',
    count: 3,
  },
];

const exploreCategories = [
  {
    icon: '⏱',
    name: 'Fast Recipes',
    count: 15,
    description: 'Speed-focused dishes ready in under 5 minutes.',
    color: 'green' as const,
  },
  {
    icon: '🏆',
    name: 'High Rewards',
    count: 12,
    description: 'Legendary combos optimized for pet eggs and XP bursts.',
    color: 'yellow' as const,
  },
  {
    icon: '🎯',
    name: 'Beginner Friendly',
    count: 8,
    description: 'Low-ingredient meals with guaranteed success.',
    color: 'blue' as const,
  },
  {
    icon: '👨‍🍳',
    name: 'All Recipes',
    count: 38,
    description: 'The full verified database with filters by rarity, pot color and reward.',
    color: 'purple' as const,
  },
];

export default function HomePage() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.shell}>
          <div className={styles.logoGroup}>
            <div className={styles.logoMark}>GG</div>
            <div>
              <p className={styles.logoTitle}>Grow a Garden Recipes</p>
              <p className={styles.logoMeta}>Community Data Hub</p>
            </div>
          </div>

          <nav className={styles.navLinks}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className={styles.shell}>
        <section className={styles.hero} id="hero">
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>2025 Update</p>
            <h1>
              Master Every <span>Grow a Garden Recipe</span>
            </h1>
            <p className={styles.heroBody}>
              Your ultimate guide to cooking success in Grow a Garden! Discover every verified recipe, track pot colors, and unlock
              legendary rewards with community-tested strategies.
            </p>
            <div className={styles.heroCtas}>
              <button type="button" className={styles.primaryButton}>
                Browse All Recipes
              </button>
              <button type="button" className={styles.ghostButton}>
                Submit Correction
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroBadge}>Live Tracker</div>
            <h3>Today's Highlights</h3>
            <p>57 new patch recipes verified. Pot colors calibrated by 50k+ players.</p>
            <div className={styles.statGrid}>
              {heroStats.map((stat) => (
                <div key={stat.label} className={styles.statCard}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="what-is-cooking">
          <div className={styles.sectionHeader}>
            <h2>What is Cooking in Grow a Garden?</h2>
          </div>
          <div className={styles.sectionContent}>
            <p>
              Cooking in Grow a Garden is the heart of your virtual farming adventure, where creativity meets strategy. Unlike traditional farming games, grow a garden recipes require careful planning, timing, and ingredient management.
            </p>
            <p>
              Each recipe combines specific ingredients in a cooking pot, with different pot water colors indicating recipe types. Cook times range from quick 4-minute dishes to elaborate 45-minute feasts, each offering unique rewards like Pet Eggs, XP boosts, and rare materials.
            </p>
            <p>
              Master the art of timing your harvests, understanding rarity tiers, and chaining recipes together to maximize your garden's potential and unlock legendary rewards.
            </p>
          </div>
        </section>

        <section className={styles.section} id="pro-tips">
          <div className={styles.sectionHeader}>
            <h2>Pro Tips for Better Rewards</h2>
          </div>
          <div className={styles.grid}>
            {proTips.map((tip) => (
              <article key={tip.title} className={`${styles.card} ${styles.tipCard}`}>
                <div className={styles.tipIcon}>{tip.icon}</div>
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="finder">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Recipe Finder</p>
              <h2>Quick Recipe Search</h2>
            </div>
            <p className={styles.sectionBody}>
              Enter keywords or combine filter conditions to instantly get recommended dishes and reward estimates.
            </p>
          </div>
          <form className={styles.finderForm} onSubmit={handleSearch}>
            <input type="search" placeholder="Search recipe name, ingredients or rewards…" aria-label="Search recipes" />
            <select aria-label="Filter by cooking time">
              <option>Cooking Time · All</option>
              <option>0 - 10 minutes</option>
              <option>10 - 30 minutes</option>
              <option>30+ minutes</option>
            </select>
            <button type="submit" className={styles.primaryButton}>
              Start Search
            </button>
          </form>
          <div className={styles.chipRow}>
            {filters.map((filter) => (
              <button
                key={filter.label}
                type="button"
                className={`${styles.chip} ${filter.active ? styles.chipActive : ''}`}
                aria-pressed={filter.active}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className={styles.section} id="categories">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Garden Collection</p>
              <h2>Recipe Categories</h2>
            </div>
          </div>
          <div className={styles.grid}>
            {categories.map((category) => (
              <article
                key={category.label}
                className={`${styles.card} ${category.tone ? styles[`card${category.tone}`] : ''}`}
              >
                <h3>{category.label}</h3>
                <p>{category.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="featured-categories">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Featured Selection</p>
              <h2>Featured Recipes by Category</h2>
            </div>
          </div>
          <div className={styles.grid}>
            {featuredCategories.map((category) => (
              <article
                key={category.name}
                className={`${styles.card} ${styles.featuredCard} ${category.tone ? styles[`card${category.tone}`] : ''}`}
              >
                <h3>
                  <span className={styles.categoryIcon}>{category.icon}</span>
                  {category.name}
                </h3>
                <p>{category.description}</p>
                <span className={styles.count}>{category.count} recipes available</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="popular">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Popular Picks</p>
              <h2>Popular Recommendations</h2>
            </div>
          </div>
          <div className={styles.grid}>
            {popularRecipes.map((recipe) => (
              <article key={recipe.name} className={styles.card}>
                <span className={`${styles.badge} ${styles[recipe.tone]}`}>
                  {recipe.rarity} · {recipe.duration}
                </span>
                <h3>{recipe.name}</h3>
                <p>{recipe.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="explore-categories">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Explore More</p>
              <h2>Explore More Recipe Categories</h2>
            </div>
          </div>
          <div className={styles.grid}>
            {exploreCategories.map((category) => (
              <article
                key={category.name}
                className={`${styles.card} ${styles.exploreCard} ${styles[`color${category.color}`]}`}
              >
                <div className={styles.exploreIcon}>{category.icon}</div>
                <div className={styles.exploreContent}>
                  <h3>{category.name}</h3>
                  <span className={styles.count}>{category.count} recipes available</span>
                  <p>{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="howto">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Advanced Guide</p>
              <h2>Three Steps to Complete All Recipes</h2>
            </div>
          </div>
          <div className={styles.stepGrid}>
            {steps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.credibility}`} id="community">
          <h3>Community-Driven Trusted Data</h3>
          <p>
            50,000+ players share screenshots and pot water verification on Discord. Backend refreshes recipes every 12 hours. Updates visible within 6 hours of submission, ensuring guides never go out of date.
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        Grow a Garden Recipe Guide · 2025 © Community-Driven Roblox Garden Guide
      </footer>
    </div>
  );
}
