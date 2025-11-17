const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://growagarden-recipes.com';

function fetchFile(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch ${url}: ${res.statusCode}`));
        return;
      }
      
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(outputPath, data, 'utf8');
        resolve();
      });
    }).on('error', reject);
  });
}

async function updateSeoAssets() {
  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  try {
    await fetchFile(`${baseUrl}/robots.txt`, path.join(publicDir, 'robots.txt'));
    console.log('✓ robots.txt updated');
  } catch (err) {
    console.log('⚠ robots.txt not found or failed to fetch');
  }

  try {
    await fetchFile(`${baseUrl}/sitemap.xml`, path.join(publicDir, 'sitemap.xml'));
    console.log('✓ sitemap.xml updated');
  } catch (err) {
    console.log('⚠ sitemap.xml not found or failed to fetch');
  }
}

updateSeoAssets().catch(console.error);
