'use client';

import parse from 'html-react-parser';
import { useServerInsertedHTML } from 'next/navigation';

type HeadInjectorProps = {
  html: string;
};

export function HeadInjector({ html }: HeadInjectorProps) {
  useServerInsertedHTML(() => <>{parse(html)}</>);
  return null;
}

