import { HeadInjector } from '@/components/HeadInjector';
import { loadHtmlFragment } from '@/lib/loadHtmlFragment';

export default function FastRecipePage() {
  const headContent = loadHtmlFragment('recipes-fast-head.html');

  let bodyContent = loadHtmlFragment('recipes-fast-body.html');
  if (!bodyContent) {
    bodyContent = '<div>Error loading Fast recipe content</div>';
  }

  return (
    <>
      {headContent && <HeadInjector html={headContent} />}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
