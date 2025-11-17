const { chromium } = require('playwright');
const path = require('path');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    javaScriptEnabled: false
  });

  const screenshotsDir = path.join(__dirname, '..', 'screenshots');
  const fs = require('fs');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // 捕获原始网站
  console.log('Capturing original site...');
  const originalPage = await context.newPage();
  await originalPage.goto('https://growagarden-recipes.com/', { waitUntil: 'networkidle' });
  await originalPage.screenshot({ 
    path: path.join(screenshotsDir, 'original.png'),
    fullPage: true 
  });
  await originalPage.close();

  // 捕获本地克隆
  console.log('Capturing local clone...');
  const clonePage = await context.newPage();
  await clonePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await clonePage.screenshot({ 
    path: path.join(screenshotsDir, 'clone.png'),
    fullPage: true 
  });
  await clonePage.close();

  await browser.close();
  console.log('✓ Screenshots captured');
}

captureScreenshots().catch(console.error);
