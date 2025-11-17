import { HeadInjector } from '@/components/HeadInjector';
import { loadHtmlFragment } from '@/lib/loadHtmlFragment';

export default function RecipesPage() {
  const headContent = loadHtmlFragment('recipes-head.html');
  const bodyContent = loadHtmlFragment('recipes-body.html');

  return (
    <>
      {headContent && <HeadInjector html={headContent} />}
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </>
  );
}
