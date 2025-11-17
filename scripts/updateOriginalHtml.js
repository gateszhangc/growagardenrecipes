const fs = require('fs');
const path = require('path');

// 读取 head 和 body 片段
const dataDir = path.join(__dirname, '..', 'data');
const headContent = fs.readFileSync(path.join(dataDir, 'home-head.html'), 'utf8');
const bodyContent = fs.readFileSync(path.join(dataDir, 'home-body.html'), 'utf8');

// 组合完整的 HTML
const fullHtml = `<!DOCTYPE html>
<html>
<head>
${headContent}
</head>
<body>
${bodyContent}
</body>
</html>`;

// 创建 public 目录
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 保存到 public/original.html
fs.writeFileSync(path.join(publicDir, 'original.html'), fullHtml, 'utf8');

console.log('✓ Original HTML snapshot saved to public/original.html');
