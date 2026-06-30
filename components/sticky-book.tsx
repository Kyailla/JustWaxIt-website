import Link from 'next/link';
import { site } from '@/lib/site';

export function StickyBook() {
  return <Link href={site.bookingUrl} className="fixed inset-x-4 bottom-4 z-50 rounded-full bg-gold py-4 text-center font-bold text-black shadow-2xl md:hidden">Book Now</Link>;
}
