'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // 模拟保存邮箱（实际项目中这里应该调用 API）
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 保存到 localStorage（实际项目中应该保存到数据库）
    const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');
    subscribers.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('subscribers', JSON.stringify(subscribers));

    // 显示成功消息并跳转
    alert('Thank you for subscribing! We will notify you when this page is ready.');
    
    // 跳转到首页
    router.push('/');
  };

  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Icon */}
            <div className={styles.icon}>🚧</div>

            {/* Title */}
            <h1 className={styles.title}>New Grow a Garden Features Coming Soon</h1>
            <p className={styles.subtitle}>Exciting updates and new recipes for your virtual garden cooking adventure</p>
            <p className={styles.description}>
              We're working hard to bring you this feature. Subscribe to get notified when it's ready!
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <span className={styles.inputIcon}>📧</span>
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Notify Me'}
              </button>
            </form>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <Link href="/" className={styles.primaryBtn}>
                🏠 Back to Home
              </Link>
              <Link href="/recipes" className={styles.secondaryBtn}>
                📖 Browse Recipes
              </Link>
            </div>

            {/* Additional Info */}
            <div className={styles.info}>
              <p>In the meantime, check out our available pages:</p>
              <div className={styles.links}>
                <Link href="/">Home</Link>
                <Link href="/recipes">Recipes</Link>
                <Link href="/recipes/fast">Fast Recipes</Link>
                <Link href="/recipes/soup">Soup Recipe</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
