const fs = require('fs');
const path = require('path');

const pages = [
  {
    name: 'home',
    source: 'growagarden_home.html',
    headOutput: 'home-head.html',
    bodyOutput: 'home-body.html',
  },
  {
    name: 'recipes',
    source: 'growagarden_recipes.html',
    headOutput: 'recipes-head.html',
    bodyOutput: 'recipes-body.html',
  },
];

const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const headRegex = /<head[^>]*>([\s\S]*?)<\/head>/i;
const bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/i;

pages.forEach((page) => {
  const htmlPath = path.join(__dirname, '..', page.source);

  if (!fs.existsSync(htmlPath)) {
    console.warn(`Skipped ${page.name}: ${page.source} not found. Download it before running this script.`);
    return;
  }

  const html = fs.readFileSync(htmlPath, 'utf8');
  const headMatch = html.match(headRegex);
  const bodyMatch = html.match(bodyRegex);

  fs.writeFileSync(
    path.join(dataDir, page.headOutput),
    headMatch ? headMatch[1] : '',
    'utf8'
  );
  fs.writeFileSync(
    path.join(dataDir, page.bodyOutput),
    bodyMatch ? bodyMatch[1] : '',
    'utf8'
  );

  console.log(`[${page.name}] HTML fragments extracted to data/${page.headOutput} & data/${page.bodyOutput}`);
});
