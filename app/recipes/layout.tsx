import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = getPageMetadata('recipes');

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}