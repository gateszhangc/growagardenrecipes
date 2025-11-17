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
            <Link href="/recipes/high-reward">High-Reward</Link>
            <Link href="/recipes/beginners">Beginner-Friendly</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Game Info</h3>
            <Link href="/cooking">Cooking Guide</Link>
            <Link href="/ingredients">Ingredients</Link>
            <Link href="/rarity">Rarity Tiers</Link>
            <Link href="/rewards">Rewards</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Community</h3>
            <Link href="/faq">FAQ</Link>
            <Link href="/submit-correction">Submit Correction</Link>
            <Link href="/changelog">Changelog</Link>
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
  );
}
