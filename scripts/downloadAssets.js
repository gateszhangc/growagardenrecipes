const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');

const baseUrl = 'https://growagarden-recipes.com';

function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        // 处理重定向
        downloadFile(res.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }
      
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
        return;
      }
      
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      const fileStream = fs.createWriteStream(outputPath);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function downloadAssets() {
  const headPath = path.join(__dirname, '..', 'data', 'home-head.html');
  const headContent = fs.readFileSync(headPath, 'utf8');
  
  // 提取所有资源链接
  const assetRegex = /(?:src|href)=["']([^"']+)["']/g;
  const matches = [...headContent.matchAll(assetRegex)];
  
  const publicDir = path.join(__dirname, '..', 'public');
  
  for (const match of matches) {
    let assetUrl = match[1];
    
    // 跳过外部脚本和数据 URL
    if (assetUrl.startsWith('http') || assetUrl.startsWith('data:') || assetUrl.startsWith('//')) {
      continue;
    }
    
    // 处理相对路径
    if (assetUrl.startsWith('/')) {
      const fullUrl = baseUrl + assetUrl;
      const localPath = path.join(publicDir, assetUrl);
      
      try {
        console.log(`Downloading ${assetUrl}...`);
        await downloadFile(fullUrl, localPath);
        console.log(`✓ Downloaded ${assetUrl}`);
      } catch (err) {
        console.log(`⚠ Failed to download ${assetUrl}: ${err.message}`);
      }
    }
  }
  
  console.log('\n✓ Asset download complete');
}

downloadAssets().catch(console.error);
