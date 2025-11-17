const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://growagarden-recipes.com';

function downloadFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;

    protocol
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
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
      })
      .on('error', reject);
  });
}

async function downloadAssets() {
  const dataDir = path.join(__dirname, '..', 'data');
  const headFiles = ['home-head.html', 'recipes-head.html'];
  const assetRegex = /(?:src|href)=["']([^"']+)["']/g;
  const assets = new Set();

  for (const file of headFiles) {
    const headPath = path.join(dataDir, file);

    if (!fs.existsSync(headPath)) {
      console.warn(`Skipped asset scan for ${file}: file not found.`);
      continue;
    }

    const headContent = fs.readFileSync(headPath, 'utf8');
    for (const match of headContent.matchAll(assetRegex)) {
      assets.add(match[1]);
    }
  }

  if (!assets.size) {
    console.log('No head fragments found. Run scripts/extractHtml.js first.');
    return;
  }

  const publicDir = path.join(__dirname, '..', 'public');

  for (const assetPath of assets) {
    if (assetPath.startsWith('http') || assetPath.startsWith('data:') || assetPath.startsWith('//')) {
      continue;
    }

    if (assetPath.startsWith('/')) {
      const fullUrl = baseUrl + assetPath;
      const localPath = path.join(publicDir, assetPath);

      try {
        console.log(`Downloading ${assetPath}...`);
        await downloadFile(fullUrl, localPath);
        console.log(`✓ Downloaded ${assetPath}`);
      } catch (err) {
        console.log(`✗ Failed to download ${assetPath}: ${err.message}`);
      }
    }
  }

  console.log('\nAsset download complete');
}

downloadAssets().catch(console.error);
