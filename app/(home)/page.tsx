'use client';

import type { FormEvent } from 'react';
import styles from './page.module.css';

const navLinks = [
  { label: '食谱搜索', href: '#finder' },
  { label: '分类', href: '#categories' },
  { label: '热门', href: '#popular' },
  { label: '进阶指南', href: '#howto' },
  { label: '社区', href: '#community' },
];

const heroStats = [
  { value: '214', label: '收录配方' },
  { value: '92%', label: '社区验证率' },
  { value: '28', label: '锅水颜色' },
  { value: '12 小时', label: '更新频率' },
];

const filters = [
  { label: '传奇', active: true },
  { label: '史诗', active: false },
  { label: '常见', active: false },
  { label: '红锅水', active: true },
  { label: '蓝锅水', active: false },
  { label: '宠蛋掉落', active: true },
  { label: '经验爆发', active: false },
];

const categories = [
  {
    label: '极速菜谱',
    description: '15 道 4 分钟内即可完成的料理，适合刷任务。',
    tone: 'highlight' as const,
  },
  {
    label: '高奖励链路',
    description: '12 道传奇组合，配好稀有度和锅色即可保证宠蛋。',
    tone: 'accent' as const,
  },
  {
    label: '新手花园',
    description: '8 道零稀有配方，附赠农田布局示意图。',
  },
  {
    label: '完整图鉴',
    description: '214 道配方 + 28 种锅水颜色，随时筛选。',
  },
];

const popularRecipes = [
  {
    name: '比萨（红锅水）',
    rarity: '传奇',
    duration: '04:30',
    description: '小麦 × 番茄 × 奶酪 · 宠蛋 + 经验',
    tone: 'legendary' as const,
  },
  {
    name: '蘑菇浓汤（紫锅水）',
    rarity: '史诗',
    duration: '25:00',
    description: '蘑菇 × 水 × 香料 · 高概率爆经验',
    tone: 'epic' as const,
  },
  {
    name: '黄金饮料（金锅水）',
    rarity: '史诗',
    duration: '30:00',
    description: '水果拼盘 × 能量草 · 掉落稀有材料',
    tone: 'epic' as const,
  },
  {
    name: '苹果派（红锅水）',
    rarity: '传奇',
    duration: '45:00',
    description: '苹果 × 糖 × 面团 · 适合冲榜',
    tone: 'legendary' as const,
  },
];

const steps = [
  {
    title: '规划花园',
    description: '根据目标菜谱预留土地，确保稀有作物轮换。',
  },
  {
    title: '把握时间',
    description: '利用“种植 → 收获 → 烹饪”时间轴，避免断料。',
  },
  {
    title: '链式推进',
    description: '用常见菜换稀有材料，再冲击传奇奖励。',
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
              <p className={styles.logoTitle}>Grow a Garden 花园全食谱</p>
              <p className={styles.logoMeta}>社区数据枢纽</p>
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
            <p className={styles.heroEyebrow}>2025 新版本</p>
            <h1>
              掌握 <span>Grow a Garden</span> 全部料理
            </h1>
            <p className={styles.heroBody}>
              以花园灵感打造的新 UI，在一个页面内完成检索、筛选、学习。通过实时统计与过滤器，助力核心玩家在 15
              秒内找到下一道大厨级菜式。
            </p>
            <div className={styles.heroCtas}>
              <button type="button" className={styles.primaryButton}>
                打开食谱查找器
              </button>
              <button type="button" className={styles.ghostButton}>
                查看更新日志
              </button>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroBadge}>数据实时更新</div>
            <h3>今日亮点</h3>
            <p>57 道新补丁配方加入，锅水颜色与稀有度已校验。</p>
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

        <section className={styles.section} id="finder">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>食谱查找器</p>
              <h2>快速查找食谱</h2>
            </div>
            <p className={styles.sectionBody}>
              输入关键字或组合过滤条件，即时获得推荐料理与奖励预估。
            </p>
          </div>
          <form className={styles.finderForm} onSubmit={handleSearch}>
            <input type="search" placeholder="搜索菜名、食材或奖励…" aria-label="搜索食谱" />
            <select aria-label="筛选烹饪时长">
              <option>烹饪时长 · 全部</option>
              <option>0 - 10 分钟</option>
              <option>10 - 30 分钟</option>
              <option>30 分钟以上</option>
            </select>
            <button type="submit" className={styles.primaryButton}>
              开始搜索
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
              <p className={styles.eyebrow}>花园合集</p>
              <h2>花园主题分类</h2>
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

        <section className={styles.section} id="popular">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>热门精选</p>
              <h2>热门推荐</h2>
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

        <section className={styles.section} id="howto">
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>进阶路线</p>
              <h2>三步完成所有料理</h2>
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
          <h3>社区驱动的可信数据</h3>
          <p>
            50,000+ 名玩家在 Discord 分享截图与锅水验证，后台每 12 小时刷新配方。提交更新后 6 小时内可见，确保攻略永不过时。
          </p>
        </section>
      </main>

      <footer className={styles.footer}>
        Grow a Garden 花园料理指南 · 2025 © 社区驱动的 Roblox 花园攻略
      </footer>
    </div>
  );
}
