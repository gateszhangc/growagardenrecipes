import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = getPageMetadata('home');

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}