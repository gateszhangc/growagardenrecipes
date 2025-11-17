import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>🌱</span>
            <span className={styles.logoText}>Grow a Garden Recipes</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/">🏠 Home</Link>
            <Link href="/recipes">📖 Recipes</Link>
            <Link href="/ingredients">🥕 Ingredients</Link>
            <Link href="/rarity">⭐ Rarity</Link>
            <Link href="/rewards">🎁 Rewards</Link>
          </nav>

          <Link href="/cooking" className={styles.ctaBtn}>
            Cooking Guide
          </Link>
        </div>
      </div>
    </header>
  );
}
