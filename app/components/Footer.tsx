import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h3>🌱 Grow a Garden Recipes</h3>
            <p>Your complete guide to cooking in Roblox Grow a Garden. Find recipes, ingredients, and maximize your rewards.</p>
          </div>

          <div className={styles.footerCol}>
            <h3>Recipes</h3>
            <Link href="/recipes">All Recipes</Link>
            <Link href="/recipes/fast">Fast Recipes</Link>
            <Link href="/coming-soon">High-Reward</Link>
            <Link href="/coming-soon">Beginner-Friendly</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Game Info</h3>
            <Link href="/coming-soon">Cooking Guide</Link>
            <Link href="/coming-soon">Ingredients</Link>
            <Link href="/coming-soon">Rarity Tiers</Link>
            <Link href="/coming-soon">Rewards</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Community</h3>
            <Link href="/coming-soon">FAQ</Link>
            <Link href="/coming-soon">Submit Correction</Link>
            <Link href="/coming-soon">Changelog</Link>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2024 Grow a Garden Recipes. Community-driven recipe database.</p>
          <div className={styles.footerLinks}>
            <Link href="/coming-soon">Privacy</Link>
            <Link href="/coming-soon">Terms</Link>
            <Link href="/coming-soon">Cookies</Link>
            <Link href="/coming-soon">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
