const { PNG } = require('pngjs');
const fs = require('fs');
const path = require('path');

const screenshotsDir = path.join(__dirname, '..', 'screenshots');
const diffPath = path.join(screenshotsDir, 'diff.png');

const diff = PNG.sync.read(fs.readFileSync(diffPath));
const { width, height } = diff;

let minX = width, minY = height, maxX = 0, maxY = 0;
let hasDiff = false;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (width * y + x) << 2;
    const r = diff.data[idx];
    const g = diff.data[idx + 1];
    const b = diff.data[idx + 2];
    
    // 检查是否为差异像素（红色标记）
    if (r > 200 && g < 100 && b < 100) {
      hasDiff = true;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
}

if (hasDiff) {
  console.log(`Difference bounding box:`);
  console.log(`  Top-left: (${minX}, ${minY})`);
  console.log(`  Bottom-right: (${maxX}, ${maxY})`);
  console.log(`  Width: ${maxX - minX}px`);
  console.log(`  Height: ${maxY - minY}px`);
} else {
  console.log('No differences detected');
}
