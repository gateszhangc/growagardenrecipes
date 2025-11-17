const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    javaScriptEnabled: true
  });

  console.log('Testing recipes page...\n');

  // Test original site
  const originalPage = await context.newPage();
  console.log('Loading original site: https://growagarden-recipes.com/recipes');
  await originalPage.goto('https://growagarden-recipes.com/recipes', { waitUntil: 'networkidle' });
  await originalPage.waitForTimeout(2000);
  await originalPage.screenshot({ path: 'screenshots/recipes-original.png', fullPage: true });
  console.log('✓ Original screenshot saved\n');

  // Test local clone
  const clonePage = await context.newPage();
  console.log('Loading local clone: http://localhost:3001/recipes');
  await clonePage.goto('http://localhost:3001/recipes', { waitUntil: 'networkidle' });
  await clonePage.waitForTimeout(2000);
  await clonePage.screenshot({ path: 'screenshots/recipes-clone.png', fullPage: true });
  console.log('✓ Clone screenshot saved\n');

  // Get page titles
  const originalTitle = await originalPage.title();
  const cloneTitle = await clonePage.title();
  console.log(`Original title: ${originalTitle}`);
  console.log(`Clone title: ${cloneTitle}`);
  console.log(`Titles match: ${originalTitle === cloneTitle}\n`);

  await browser.close();
  console.log('Screenshots saved to screenshots/ directory');
  console.log('Run "node scripts/compareRecipesScreenshots.js" to see the diff');
})();
