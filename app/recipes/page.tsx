'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

const allRecipes = [
  { id: 'soup', icon: '🍲', name: 'Soup', cookTime: '02:40', badge: 'Quick', potColor: 'Green', rarity: 'Common', tags: ['fast', 'beginner'] },
  { id: 'sandwich', icon: '🥪', name: 'Sandwich', cookTime: '03:00', badge: 'Quick', potColor: 'Green', rarity: 'Common', tags: ['fast', 'beginner'] },
  { id: 'pie', icon: '🥧', name: 'Pie', cookTime: '06:00', badge: '', potColor: 'Orange', rarity: 'Common', tags: [] },
  { id: 'burger', icon: '🍔', name: 'Burger', cookTime: '05:10', badge: '', potColor: 'Green', rarity: 'Common', tags: [] },
  { id: 'hot-dog', icon: '🌭', name: 'Hot Dog', cookTime: '03:30', badge: 'Quick', potColor: 'Green', rarity: 'Common', tags: ['fast'] },
  { id: 'waffle', icon: '🧇', name: 'Waffle', cookTime: '04:00', badge: '', potColor: 'Orange', rarity: 'Common', tags: [] },
  { id: 'salad', icon: '🥗', name: 'Salad', cookTime: '02:10', badge: 'Quick', potColor: 'Green', rarity: 'Common', tags: ['fast', 'beginner'] },
  { id: 'sushi', icon: '🍣', name: 'Sushi', cookTime: '05:40', badge: '', potColor: 'Blue', rarity: 'Uncommon', tags: [] },
  { id: 'ice-cream', icon: '🍦', name: 'Ice Cream', cookTime: '03:20', badge: 'Quick', potColor: 'Blue', rarity: 'Common', tags: ['fast'] },
  { id: 'donut', icon: '🍩', name: 'Donut', cookTime: '04:20', badge: '', potColor: 'Blue', rarity: 'Common', tags: [] },
  { id: 'pizza', icon: '🍕', name: 'Pizza', cookTime: '04:30', badge: 'High-Reward', potColor: 'Red', rarity: 'Legendary', tags: ['high-reward'] },
  { id: 'cake', icon: '🎂', name: 'Cake', cookTime: '06:30', badge: '', potColor: 'Orange', rarity: 'Uncommon', tags: [] },
  { id: 'apple-pie', icon: '🍎', name: 'Apple Pie', cookTime: '45:00', badge: 'Epic', potColor: 'Orange', rarity: 'Epic', tags: ['high-reward'] },
  { id: 'cheese-burger', icon: '🧀', name: 'Cheese Burger', cookTime: '15:00', badge: '', potColor: 'Green', rarity: 'Common', tags: [] },
  { id: 'watermelon-juice', icon: '🍉', name: 'Watermelon Juice', cookTime: '08:00', badge: 'Refreshing', potColor: 'Blue', rarity: 'Common', tags: [] },
];

const categories = [
  { id: 'fast', icon: '⚡', name: 'Fast Recipes', desc: '≤5–10 min cooking time', badge: 'Quick', link: '/recipes/fast' },
  { id: 'high-reward', icon: '💰', name: 'High-Reward Recipes', desc: 'Best rewards & drops', badge: 'Premium', link: '/recipes/high-reward' },
  { id: 'beginner', icon: '🌱', name: 'Beginner-Friendly', desc: 'Easy with common ingredients', badge: 'Starter', link: '/recipes/beginners' },
  { id: 'pie', icon: '🥧', name: 'Pie Recipes', desc: 'Sweet & savory pies', badge: '3 recipes', link: '/recipes/pies' },
  { id: 'burger', icon: '🍔', name: 'Burger Recipes', desc: 'Hearty & filling burgers', badge: '3 recipes', link: '/recipes/burgers' },
  { id: 'soup', icon: '🍲', name: 'Soup Recipes', desc: 'Warm & comforting soups', badge: '3 recipes', link: '/recipes/soups' },
  { id: 'drink', icon: '🧃', name: 'Drink Recipes', desc: 'Refreshing beverages', badge: '3 recipes', link: '/recipes/drinks' },
];

const quickFilters = ['Tomato', 'Milk', 'Cheese', 'Legendary', 'Mythical', '≤ 5 min', '≤ 10 min'];

export default function RecipesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredRecipes = allRecipes.filter(recipe => {
    if (searchTerm && !recipe.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    if (selectedCategory !== 'all' && !recipe.tags.includes(selectedCategory)) {
      return false;
    }
    return true;
  });

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          {/* Hero Section */}
          <div className={styles.hero}>
            <h1>All Cooking Recipes</h1>
            <p>Browse through all available cooking recipes in Grow a Garden. Use filters to find exactly what you're looking for.</p>
          </div>

          {/* Search Bar */}
          <div className={styles.searchSection}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Categories */}
          <section className={styles.categoriesSection}>
            <div className={styles.categoryGrid}>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.link}
                  className={styles.categoryCard}
                >
                  <span className={styles.catIcon}>{cat.icon}</span>
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <span className={styles.catBadge}>{cat.badge}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Filters */}
          <section className={styles.filtersSection}>
            <h2>Quick Filters</h2>
            <div className={styles.filterChips}>
              {quickFilters.map((filter) => (
                <button key={filter} className={styles.filterChip}>
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Recipes Grid */}
          <section className={styles.recipesSection}>
            <div className={styles.sectionHeader}>
              <h2>All Recipes</h2>
              <p>Showing {filteredRecipes.length} of {allRecipes.length} recipes</p>
            </div>
            
            <div className={styles.recipeGrid}>
              {filteredRecipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  href={`/recipes/${recipe.id}`}
                  className={styles.recipeCard}
                >
                  <div className={styles.recipeIcon}>{recipe.icon}</div>
                  <h3>{recipe.name}</h3>
                  <div className={styles.recipeInfo}>
                    <span className={styles.cookTime}>Cook {recipe.cookTime}</span>
                    {recipe.badge && <span className={styles.recipeBadge}>{recipe.badge}</span>}
                  </div>
                  <div className={styles.potInfo}>
                    <span>Pot: {recipe.potColor}</span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredRecipes.length === 0 && (
              <div className={styles.noResults}>
                <p>No recipes found. Try adjusting your search or filters.</p>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className={styles.ctaSection}>
            <p>Can't find what you're looking for?</p>
            <div className={styles.ctaButtons}>
              <Link href="/recipes/fast">⚡ Show Fast Recipes</Link>
              <Link href="/recipes/high-reward">💰 Show High-Reward Recipes</Link>
              <Link href="/cooking">📖 Cooking Guide</Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
