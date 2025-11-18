import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = getPageMetadata('comingSoon');

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}