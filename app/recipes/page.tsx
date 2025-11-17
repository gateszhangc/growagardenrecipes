import { HeadInjector } from '@/components/HeadInjector';
import { loadHtmlFragment } from '@/lib/loadHtmlFragment';

export default function RecipesPage() {
  const headContent = loadHtmlFragment('recipes-head.html');

  let bodyContent = loadHtmlFragment('recipes-body.html');
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
