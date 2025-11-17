import { readFileSync } from 'fs';
import { join } from 'path';

export default function Home() {
  // 读取原始网站的 body 内容
  let bodyContent = '';
  try {
    const bodyPath = join(process.cwd(), 'data', 'home-body.html');
    bodyContent = readFileSync(bodyPath, 'utf8');
  } catch (err) {
    console.error('Failed to load body content:', err);
    bodyContent = '<div>Error loading content</div>';
  }

  return <div dangerouslySetInnerHTML={{ __html: bodyContent }} />;
}
