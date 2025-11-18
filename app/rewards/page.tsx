import { Metadata } from 'next';
import { getPageMetadata } from '@/lib/metadata';
import { redirect } from 'next/navigation';

export const metadata: Metadata = getPageMetadata('rewards');

export default function RewardsPage() {
  redirect('/coming-soon');
}
