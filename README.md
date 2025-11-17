# Grow a Garden Recipes - 网站复刻项目

这是一个用于学习研究目的的 https://growagarden-recipes.com/ 网站复刻项目。

## 快速开始

### 1. 安装依赖
```bash
npm install
npx playwright install chromium
```

### 2. 同步最新网站内容
```powershell
# 下载原始 HTML
(Invoke-WebRequest -Uri https://growagarden-recipes.com/ -UseBasicParsing).Content | Out-File growagarden_home.html -Encoding utf8

# 提取 head 和 body 片段
node scripts/extractHtml.js

# 生成静态快照
node scripts/updateOriginalHtml.js

# 更新 SEO 资源
node scripts/updateSeoAssets.js
```

### 3. 运行开发服务器
```bash
npm run dev
```

访问 http://localhost:3000 查看复刻的网站。

### 4. 构建生产版本
```bash
npm run build
npm run start
```

## 视觉对比测试

### 捕获截图
确保开发服务器正在运行（`npm run start`），然后：
```bash
node scripts/captureScreenshots.js
```

这会生成：
- `screenshots/original.png` - 原始网站截图
- `screenshots/clone.png` - 本地复刻截图

### 对比差异
```bash
node scripts/compareScreenshots.js
```

生成差异图像并显示像素差异百分比。

### 分析差异区域
```bash
node scripts/analyzeRawDiff.js
```

显示差异像素的边界框位置。

## 项目结构

```
├── app/
│   ├── layout.tsx      # 注入原始 <head> 内容
│   ├── page.tsx        # 渲染原始 <body> 内容
│   └── globals.css     # 全局样式
├── data/
│   ├── home-head.html  # 提取的 head 内容
│   └── home-body.html  # 提取的 body 内容
├── public/
│   ├── original.html   # 完整的原始 HTML 快照
│   ├── robots.txt      # SEO 资源
│   └── sitemap.xml     # SEO 资源
├── scripts/
│   ├── extractHtml.js           # 提取 HTML 片段
│   ├── updateOriginalHtml.js    # 生成完整快照
│   ├── updateSeoAssets.js       # 更新 SEO 文件
│   ├── captureScreenshots.js    # 捕获截图
│   ├── compareScreenshots.js    # 对比截图
│   └── analyzeRawDiff.js        # 分析差异
└── REPLICATION.md      # 详细的复刻流程文档
```

## 注意事项

- 原始网站可能包含动态内容（广告、分析等），因此即使禁用 JavaScript，也可能存在 2-3% 的视觉差异
- 本项目仅用于学习研究目的
- 定期运行同步脚本以保持内容最新

## 详细文档

查看 [REPLICATION.md](./REPLICATION.md) 了解完整的复刻工作流程和技术细节。
