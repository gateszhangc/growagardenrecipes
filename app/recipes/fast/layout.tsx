import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = getPageMetadata('recipes/fast');

export default function FastRecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}