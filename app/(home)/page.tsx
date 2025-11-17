import { HeadInjector } from '@/components/HeadInjector';
import { loadHtmlFragment } from '@/lib/loadHtmlFragment';

export default function Home() {
  const headContent = loadHtmlFragment('home-head.html');

  let bodyContent = loadHtmlFragment('home-body.html');
  if (!bodyContent) {
    bodyContent = '<div>Error loading content</div>';
  }

  return (
    <>
      {headContent && <HeadInjector html={headContent} />}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
