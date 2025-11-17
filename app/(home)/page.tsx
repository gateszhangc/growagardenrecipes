'use client';

import type { FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
    name: 'Apple Pie',
    rarity: 'Epic',
    duration: '45:00',
    reward: 'High',
    ingredients: 5,
    tone: 'epic' as const,
  },
  {
    name: 'Cheese Burger',
    rarity: 'Common',
    duration: '15:00',
    reward: 'Medium',
    ingredients: 5,
    tone: 'common' as const,
  },
  {
    name: 'Pizza',
    rarity: 'Legendary',
    duration: '04:30',
    reward: 'Very High',
    ingredients: 6,
    tone: 'legendary' as const,
  },
  {
    name: 'Watermelon Juice',
    rarity: 'Common',
    duration: '08:00',
    reward: 'Medium',
    ingredients: 3,
    tone: 'common' as const,
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

const detailedRecipes = {
  pies: [
    { icon: '🍎', name: 'Apple Pie', description: 'Traditional apple pie with flaky crust', time: '45:00', rarity: 'Epic' },
    { icon: '🥧', name: 'Classic Pie', description: 'Basic pie recipe for beginners', time: '6:00', rarity: 'Common' },
    { icon: '🎃', name: 'Pumpkin Pie', description: 'Seasonal favorite with spices', time: '30:00', rarity: 'Rare' },
    { icon: '🫐', name: 'Berry Pie', description: 'Mixed berry delight', time: '25:00', rarity: 'Rare' },
  ],
  burgers: [
    { icon: '🧀', name: 'Cheese Burger', description: 'Classic burger with melted cheese', time: '15:00', rarity: 'Common' },
    { icon: '🍔', name: 'Classic Burger', description: 'Traditional beef burger', time: '5:10', rarity: 'Common' },
    { icon: '🥬', name: 'Veggie Burger', description: 'Healthy plant-based option', time: '8:00', rarity: 'Uncommon' },
    { icon: '🍔🍔', name: 'Double Burger', description: 'Extra hearty double patty', time: '20:00', rarity: 'Rare' },
  ],
  soups: [
    { icon: '🍲', name: 'Classic Soup', description: 'Warm and comforting soup', time: '2:40', rarity: 'Common' },
    { icon: '🐔', name: 'Chicken Soup', description: 'Hearty chicken and vegetables', time: '12:00', rarity: 'Uncommon' },
    { icon: '🍄', name: 'Mushroom Soup', description: 'Creamy forest mushroom blend', time: '15:00', rarity: 'Rare' },
    { icon: '🥩', name: 'Beef Stew', description: 'Rich and filling beef stew', time: '25:00', rarity: 'Rare' },
  ],
  drinks: [
    { icon: '🍉', name: 'Watermelon Juice', description: 'Refreshing summer drink', time: '8:00', rarity: 'Common' },
    { icon: '🍓', name: 'Fruit Smoothie', description: 'Mixed berry smoothie blend', time: '5:00', rarity: 'Common' },
    { icon: '⚡', name: 'Energy Drink', description: 'Boost your garden energy', time: '10:00', rarity: 'Uncommon' },
    { icon: '✨', name: 'Golden Elixir', description: 'Legendary healing potion', time: '60:00', rarity: 'Legendary' },
  ],
};

const howToSteps = [
  {
    number: 1,
    title: 'Plan Your Garden',
    description: 'Design your garden layout to support the grow a garden recipes you want to master, ensuring optimal ingredient production.',
  },
  {
    number: 2,
    title: 'Master Timing',
    description: 'Learn cooking schedules and ingredient harvest times to maintain fresh supplies for your recipes.',
  },
  {
    number: 3,
    title: 'Progress Systematically',
    description: 'Start with common recipes and gradually work toward legendary grow a garden recipes as you unlock rare ingredients.',
  },
];

export default function HomePage() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.shell}>
        <section className={styles.hero} id="hero">
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>2025 Update</p>
            <h1>
              Master Every <span>Grow a Garden Recipe</span>
            </h1>
            <p className={styles.heroBody}>
              Your ultimate guide to cooking success in Grow a Garden! Discover comprehensive grow a garden recipes, expert cooking strategies, and unlock every delicious possibility in your virtual kitchen. From beginner-friendly dishes to legendary feast creations, we have every grow a garden recipe you need.
            </p>
            <div className={styles.heroCtas}>
              <a href="/recipes" className={styles.primaryButton}>
                Browse All Recipes
              </a>
              <a href="/submit-correction" className={styles.ghostButton}>
                Submit Correction
              </a>
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
              Cooking in Grow a Garden is the heart of your virtual farming adventure, where creativity meets strategy. Unlike traditional farming games, grow a garden recipes require careful planning, timing, and ingredient management. Each recipe represents a unique combination of ingredients that you've grown, harvested, and carefully prepared to create magical dishes that provide substantial rewards and unlock new gameplay possibilities.
            </p>
            <p>
              The cooking system in Grow a Garden features over 200 unique recipes, each with specific ingredient requirements, cooking times, and pot water color indicators. Players must master the art of timing their harvests to ensure fresh ingredients are available when needed. The grow a garden recipes system rewards experimentation and strategic thinking, offering bonus rewards for discovering rare ingredient combinations and perfecting cooking techniques.
            </p>
            <p>
              From simple salads using common vegetables to legendary feasts requiring rare magical ingredients, grow a garden recipes provide endless entertainment and progression opportunities. The cooking mechanic seamlessly integrates with the farming system, creating a rewarding loop where better farming leads to better cooking, which unlocks better rewards and progression opportunities.
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
          <div className={styles.sectionContent} style={{ marginTop: '32px' }}>
            <p>
              Mastering grow a garden recipes requires understanding the intricate relationships between ingredients, timing, and rewards. Professional players focus on efficiency optimization, creating cooking schedules that maximize ingredient usage while minimizing downtime. The key to success lies in planning your garden layout to support your favorite grow a garden recipes, ensuring you always have the necessary ingredients when inspiration strikes.
            </p>
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
              <a
                key={category.label}
                href={`/recipes/${category.label.toLowerCase().replace(/ /g, '-')}`}
                className={`${styles.card} ${styles.clickableCard} ${category.tone ? styles[`card${category.tone}`] : ''}`}
              >
                <h3>{category.label}</h3>
                <p>{category.description}</p>
              </a>
            ))}
          </div>
          <div className={styles.sectionContent} style={{ marginTop: '32px' }}>
            <p>
              Our comprehensive database organizes grow a garden recipes into intuitive categories, making it easy to find exactly what you're looking for. Whether you're seeking quick cooking solutions for immediate rewards or complex legendary recipes for maximum progression, our categorization system helps you navigate the vast world of grow a garden recipes efficiently.
            </p>
          </div>
        </section>

        <section className={styles.section} id="featured-categories">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Featured Selection</p>
              <h2>Featured Recipes by Category</h2>
            </div>
          </div>

          {/* Pie Recipes */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', margin: 0 }}>🥧 Pie Recipes</h3>
              <a href="/recipes/pies" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontSize: '14px' }}>View All Pies</a>
            </div>
            <div className={styles.grid}>
              {detailedRecipes.pies.map((recipe) => (
                <a key={recipe.name} href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className={`${styles.card} ${styles.clickableCard}`}>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {recipe.icon} {recipe.name}
                  </h4>
                  <p style={{ marginBottom: '12px' }}>{recipe.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-gray)' }}>
                    <span>Cook Time: {recipe.time}</span>
                    <span className={styles.badge}>{recipe.rarity}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Burger Recipes */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', margin: 0 }}>🍔 Burger Recipes</h3>
              <a href="/recipes/burgers" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontSize: '14px' }}>View All Burgers</a>
            </div>
            <div className={styles.grid}>
              {detailedRecipes.burgers.map((recipe) => (
                <a key={recipe.name} href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className={`${styles.card} ${styles.clickableCard}`}>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {recipe.icon} {recipe.name}
                  </h4>
                  <p style={{ marginBottom: '12px' }}>{recipe.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-gray)' }}>
                    <span>Cook Time: {recipe.time}</span>
                    <span className={styles.badge}>{recipe.rarity}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Soup Recipes */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', margin: 0 }}>🍲 Soup Recipes</h3>
              <a href="/recipes/soups" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontSize: '14px' }}>View All Soups</a>
            </div>
            <div className={styles.grid}>
              {detailedRecipes.soups.map((recipe) => (
                <a key={recipe.name} href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className={`${styles.card} ${styles.clickableCard}`}>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {recipe.icon} {recipe.name}
                  </h4>
                  <p style={{ marginBottom: '12px' }}>{recipe.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-gray)' }}>
                    <span>Cook Time: {recipe.time}</span>
                    <span className={styles.badge}>{recipe.rarity}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Drink Recipes */}
          <div style={{ marginBottom: '48px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '24px', margin: 0 }}>🧃 Drink Recipes</h3>
              <a href="/recipes/drinks" style={{ color: 'var(--primary-green)', textDecoration: 'none', fontSize: '14px' }}>View All Drinks</a>
            </div>
            <div className={styles.grid}>
              {detailedRecipes.drinks.map((recipe) => (
                <a key={recipe.name} href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className={`${styles.card} ${styles.clickableCard}`}>
                  <h4 style={{ fontSize: '18px', marginBottom: '8px' }}>
                    {recipe.icon} {recipe.name}
                  </h4>
                  <p style={{ marginBottom: '12px' }}>{recipe.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: 'var(--text-gray)' }}>
                    <span>Cook Time: {recipe.time}</span>
                    <span className={styles.badge}>{recipe.rarity}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="popular">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Popular Picks</p>
              <h2>Popular Recipes</h2>
            </div>
          </div>
          <div className={styles.grid}>
            {popularRecipes.map((recipe) => (
              <a key={recipe.name} href={`/recipes/${recipe.name.toLowerCase().replace(/ /g, '-')}`} className={`${styles.card} ${styles.clickableCard}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span className={`${styles.badge} ${styles[recipe.tone]}`}>
                    {recipe.rarity}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-gray)' }}>{recipe.duration}</span>
                </div>
                <h3 style={{ marginBottom: '12px' }}>{recipe.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: 'var(--text-gray)' }}>
                  <span>Reward: <strong>{recipe.reward}</strong></span>
                  <span>Ingredients: <strong>{recipe.ingredients}</strong></span>
                </div>
              </a>
            ))}
          </div>
          <div className={styles.sectionContent} style={{ marginTop: '32px' }}>
            <p>
              These popular grow a garden recipes represent the community's favorites, chosen for their optimal balance of reward potential and accessibility. Each recipe has been tested and verified by thousands of players, ensuring reliable results and maximum satisfaction for cooks of all skill levels.
            </p>
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
              <a
                key={category.name}
                href={`/recipes/${category.name.toLowerCase().replace(/ /g, '-')}`}
                className={`${styles.card} ${styles.clickableCard} ${styles.exploreCard} ${styles[`color${category.color}`]}`}
              >
                <div className={styles.exploreIcon}>{category.icon}</div>
                <div className={styles.exploreContent}>
                  <h3>{category.name}</h3>
                  <span className={styles.count}>{category.count} recipes available</span>
                  <p>{category.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section} id="how-to-make">
          <div className={styles.sectionHeader}>
            <h2>How to Make Every Cooking Recipe in Grow a Garden?</h2>
          </div>
          <div className={styles.sectionContent}>
            <p>
              Creating every grow a garden recipe requires systematic approach and deep understanding of the game's cooking mechanics. Our comprehensive guide breaks down the process into manageable steps, ensuring you can master even the most complex legendary recipes. The journey to completing your recipe collection involves strategic garden planning, efficient resource management, and patience as you unlock rare ingredients through progression.
            </p>
          </div>
          <div className={styles.stepGrid} style={{ marginTop: '32px' }}>
            {howToSteps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className={styles.sectionContent} style={{ marginTop: '32px' }}>
            <p>
              The complete grow a garden recipes collection includes over 200 unique dishes, each offering different rewards and progression opportunities. By following our detailed guides and utilizing our search tools, you'll discover efficient paths to recipe mastery, unlock hidden ingredient combinations, and maximize your cooking potential in Grow a Garden.
            </p>
          </div>
        </section>

        <section className={styles.section} id="cta" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '16px' }}>Start Your Recipe Journey Today</h2>
          <p style={{ fontSize: '16px', color: 'var(--text-gray)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Join thousands of players who have mastered grow a garden recipes using our comprehensive guides. Get instant access to verified recipes, expert strategies, and community insights.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '24px' }}>
            <a href="/changelog" className={styles.primaryButton}>
              View Updates
            </a>
            <a href="/ingredients" className={styles.ghostButton}>
              Browse Ingredients Guide
            </a>
          </div>
          <p style={{ fontSize: '14px', color: 'var(--text-light)' }}>
            Free access to basic recipes • Premium features available • Join 50,000+ active cooks
          </p>
        </section>

        <section className={`${styles.section} ${styles.credibility}`} id="community">
          <h3>Community-Driven Trusted Data</h3>
          <p>
            50,000+ players share screenshots and pot water verification on Discord. Backend refreshes recipes every 12 hours. Updates visible within 6 hours of submission, ensuring guides never go out of date.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
