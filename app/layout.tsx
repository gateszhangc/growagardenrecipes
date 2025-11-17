import { readFileSync } from 'fs';
import { join } from 'path';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 读取原始网站的 head 内容
  let headContent = '';
  try {
    const headPath = join(process.cwd(), 'data', 'home-head.html');
    headContent = readFileSync(headPath, 'utf8');
  } catch (err) {
    console.error('Failed to load head content:', err);
  }

  return (
    <html lang="en">
      <head dangerouslySetInnerHTML={{ __html: headContent }} />
      <body>{children}</body>
    </html>
  );
}
