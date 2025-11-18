import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';
import { redirect } from 'next/navigation';

export const metadata: Metadata = getPageMetadata('rarity');

export default function RarityPage() {
  redirect('/coming-soon');
}
