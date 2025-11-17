const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

const img1 = PNG.sync.read(fs.readFileSync('screenshots/recipes-original.png'));
const img2 = PNG.sync.read(fs.readFileSync('screenshots/recipes-clone.png'));

const { width, height } = img1;
const diff = new PNG({ width, height });

const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, {
  threshold: 0.1
});

fs.writeFileSync('screenshots/recipes-diff.png', PNG.sync.write(diff));

const totalPixels = width * height;
const diffPercentage = ((numDiffPixels / totalPixels) * 100).toFixed(2);

console.log(`\nRecipes Page Comparison:`);
console.log(`Total pixels: ${totalPixels.toLocaleString()}`);
console.log(`Different pixels: ${numDiffPixels.toLocaleString()}`);
console.log(`Difference: ${diffPercentage}%`);
console.log(`\nDiff image saved to screenshots/recipes-diff.png`);

if (diffPercentage < 5) {
  console.log('\n✓ Pages are very similar (< 5% difference)');
} else {
  console.log('\n⚠ Pages have significant differences (>= 5%)');
}
