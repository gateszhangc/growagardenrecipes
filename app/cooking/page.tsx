import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';
import { redirect } from 'next/navigation';

export const metadata: Metadata = getPageMetadata('cooking');

export default function CookingPage() {
  redirect('/coming-soon');
}
