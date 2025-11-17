const fs = require('fs');
const path = require('path');

// 读取下载的 HTML 文件
const htmlPath = path.join(__dirname, '..', 'growagarden_home.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// 提取 <head> 内容
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
const headContent = headMatch ? headMatch[1] : '';

// 提取 <body> 内容
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
const bodyContent = bodyMatch ? bodyMatch[1] : '';

// 创建 data 目录
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// 保存提取的内容
fs.writeFileSync(path.join(dataDir, 'home-head.html'), headContent, 'utf8');
fs.writeFileSync(path.join(dataDir, 'home-body.html'), bodyContent, 'utf8');

console.log('✓ HTML fragments extracted to data/ directory');
