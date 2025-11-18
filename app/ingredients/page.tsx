import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';
import { redirect } from 'next/navigation';

export const metadata: Metadata = getPageMetadata('ingredients');

export default function IngredientsPage() {
  redirect('/coming-soon');
}
