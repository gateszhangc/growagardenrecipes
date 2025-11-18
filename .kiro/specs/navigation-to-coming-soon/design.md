# Design Document

## Overview

本设计文档描述了如何将首页和Fast Recipes页面中的多个链接重定向到Coming Soon页面的实现方案。该功能通过修改现有的Next.js Link组件的href属性来实现，无需创建新的组件或修改路由配置。

## Architecture

### 系统架构

```
┌─────────────────┐
│   HomePage      │
│  (page.tsx)     │
└────────┬────────┘
         │
         │ Link href="/coming-soon"
         │
         ▼
┌─────────────────┐      ┌──────────────────┐
│ FastRecipePage  │─────▶│  ComingSoonPage  │
│   (page.tsx)    │      │    (page.tsx)    │
└─────────────────┘      └──────────────────┘
```

### 导航流程

1. 用户在HomePage或FastRecipePage上点击指定的链接/按钮
2. Next.js的Link组件处理导航请求
3. 浏览器路由到 `/coming-soon` 路径
4. ComingSoonPage渲染并显示"功能开发中"的信息

## Components and Interfaces

### 受影响的组件

#### 1. HomePage (`app/(home)/page.tsx`)

需要修改以下链接的href属性：

**Hero Section:**
- Submit Correction按钮：`href="/submit-correction"` → `href="/coming-soon"`

**Categories Section:**
- High Reward Chains卡片：`href="/recipes/high-reward"` → `href="/coming-soon"`
- Beginner Garden卡片：`href="/recipes/beginners"` → `href="/coming-soon"`

**Popular Recipes Section:**
- Apple Pie卡片：`href="/recipes/apple-pie"` → `href="/coming-soon"`
- Cheese Burger卡片：`href="/recipes/cheese-burger"` → `href="/coming-soon"`
- Pizza卡片：`href="/recipes/pizza"` → `href="/coming-soon"`
- Watermelon Juice卡片：`href="/recipes/watermelon-juice"` → `href="/coming-soon"`

#### 2. FastRecipePage (`app/recipes/fast/page.tsx`)

需要修改以下链接的href属性：

**Recipes Grid Section:**
- Sandwich卡片：动态生成的href → `href="/coming-soon"`
- Salad卡片：动态生成的href → `href="/coming-soon"`
- Ice Cream卡片：动态生成的href → `href="/coming-soon"`
- Hot Dog卡片：动态生成的href → `href="/coming-soon"`
- Pizza卡片：动态生成的href → `href="/coming-soon"`

**CTA Section:**
- High-Reward Recipes按钮：`href="/recipes/high-reward"` → `href="/coming-soon"`

#### 3. ComingSoonPage (`app/coming-soon/page.tsx`)

无需修改，该页面已经存在并且功能完整。

### 数据结构修改

#### HomePage - categories数组

```typescript
const categories = [
  { icon: '⚡', title: 'Fast Recipes', desc: '15 recipes ready in under 4 minutes', link: '/recipes/fast' },
  { icon: '💰', title: 'High Reward Chains', desc: '12 legendary combos optimized for pet eggs', link: '/coming-soon' }, // 修改
  { icon: '🌱', title: 'Beginner Garden', desc: '8 zero-rarity recipes with farm layout', link: '/coming-soon' }, // 修改
  { icon: '📖', title: 'Complete Collection', desc: '214 recipes + 28 pot water colors', link: '/recipes' },
];
```

#### HomePage - popularRecipes数组

由于popularRecipes数组中的链接是通过模板字符串动态生成的，我们需要为每个食谱添加一个`link`属性：

```typescript
const popularRecipes = [
  { icon: '🍎', name: 'Apple Pie', time: '45:00', rarity: 'Epic', reward: 'High', ingredients: 5, link: '/coming-soon' },
  { icon: '🧀', name: 'Cheese Burger', time: '15:00', rarity: 'Common', reward: 'Medium', ingredients: 5, link: '/coming-soon' },
  { icon: '🍕', name: 'Pizza', time: '04:30', rarity: 'Legendary', reward: 'Very High', ingredients: 6, link: '/coming-soon' },
  { icon: '🍉', name: 'Watermelon Juice', time: '08:00', rarity: 'Common', reward: 'Medium', ingredients: 3, link: '/coming-soon' },
];
```

#### FastRecipePage - fastRecipes数组

为每个需要重定向的食谱添加`link`属性：

```typescript
const fastRecipes = [
  { icon: '🍲', name: 'Soup', cookTime: '02:40', potColor: 'Light Blue', rarity: 'Common', reward: 'Low', ingredients: 3, link: '/recipes/soup' },
  { icon: '🥪', name: 'Sandwich', cookTime: '03:00', potColor: 'Green', rarity: 'Common', reward: 'Low', ingredients: 4, link: '/coming-soon' },
  { icon: '🥗', name: 'Salad', cookTime: '02:10', potColor: 'Green', rarity: 'Common', reward: 'Low', ingredients: 3, link: '/coming-soon' },
  { icon: '🍦', name: 'Ice Cream', cookTime: '03:20', potColor: 'Blue', rarity: 'Common', reward: 'Medium', ingredients: 4, link: '/coming-soon' },
  { icon: '🌭', name: 'Hot Dog', cookTime: '03:30', potColor: 'Green', rarity: 'Common', reward: 'Medium', ingredients: 4, link: '/coming-soon' },
  { icon: '🍕', name: 'Pizza', cookTime: '04:30', potColor: 'Red', rarity: 'Legendary', reward: 'Very High', ingredients: 6, link: '/coming-soon' },
];
```

## Data Models

### Recipe Interface (可选的类型定义)

```typescript
interface Recipe {
  icon: string;
  name: string;
  time?: string;
  cookTime?: string;
  rarity: string;
  reward: string;
  ingredients: number;
  potColor?: string;
  link: string; // 新增属性
}
```

### Category Interface (可选的类型定义)

```typescript
interface Category {
  icon: string;
  title: string;
  desc: string;
  link: string;
}
```

## Error Handling

### 导航错误处理

由于我们使用的是Next.js的内置Link组件，导航错误会由Next.js框架自动处理：

1. **404错误**: 如果Coming Soon页面不存在，Next.js会显示404页面
2. **客户端导航失败**: Next.js会自动回退到服务器端导航
3. **无效路径**: Next.js会在开发模式下显示警告

### 用户体验保障

- 所有链接保持可点击状态
- 视觉样式保持不变
- 鼠标悬停效果正常工作
- 键盘导航（Tab键）正常工作

## Testing Strategy

### 手动测试清单

#### HomePage测试

1. **Submit Correction按钮**
   - 点击按钮，验证是否跳转到 `/coming-soon`
   - 验证按钮样式是否正常

2. **High Reward Chains类别卡片**
   - 点击卡片，验证是否跳转到 `/coming-soon`
   - 验证卡片样式和悬停效果

3. **Beginner Garden类别卡片**
   - 点击卡片，验证是否跳转到 `/coming-soon`
   - 验证卡片样式和悬停效果

4. **Popular Recipes卡片**
   - 逐个点击Apple Pie、Cheese Burger、Pizza、Watermelon Juice卡片
   - 验证每个都跳转到 `/coming-soon`
   - 验证卡片样式保持一致

#### FastRecipePage测试

1. **Recipe卡片**
   - 逐个点击Sandwich、Salad、Ice Cream、Hot Dog、Pizza卡片
   - 验证每个都跳转到 `/coming-soon`
   - 验证Soup卡片仍然跳转到 `/recipes/soup`

2. **CTA Section**
   - 点击"High-Reward Recipes"按钮
   - 验证跳转到 `/coming-soon`

### 浏览器兼容性测试

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

### 响应式测试

- 桌面端 (1920x1080)
- 平板端 (768x1024)
- 移动端 (375x667)

### 可访问性测试

- 键盘导航：使用Tab键导航到每个链接，按Enter键激活
- 屏幕阅读器：验证链接的可读性
- 焦点指示器：验证焦点状态是否清晰可见

## Implementation Notes

### 实现优先级

1. **高优先级**: HomePage的所有链接修改（用户访问量最大）
2. **中优先级**: FastRecipePage的食谱卡片链接修改
3. **低优先级**: FastRecipePage的CTA按钮修改

### 性能考虑

- 修改仅涉及静态数据和href属性，不会影响页面性能
- Next.js的Link组件会自动进行预加载优化
- Coming Soon页面已经存在，无需额外的路由配置

### 维护性考虑

- 使用数据驱动的方式（在数组中添加link属性）便于未来批量修改
- 当实际页面开发完成后，只需修改数组中的link值即可
- 建议在代码中添加注释标记哪些链接是临时重定向到Coming Soon页面

### 未来扩展

当实际页面开发完成后，可以通过以下方式快速恢复：

1. 修改数据数组中的link属性
2. 或者移除link属性，恢复使用动态生成的URL
3. 无需修改组件结构或样式
