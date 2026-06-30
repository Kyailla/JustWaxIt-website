import type { Metadata } from 'next';
import { ContactBlock, FAQ } from '@/components/sections';

export const metadata: Metadata = {
  title: 'Book Waxing in Twin Falls | Contact JustWaxIt',
  description: 'Book Brazilian waxing, brow waxing, lash lift, or waxing classes in Twin Falls, Idaho. Vagaro booking and Google Business placeholders included.',
};

export default function Page() { return <main className="pt-10"><section className="px-4 pt-12"><div className="mx-auto max-w-4xl"><h1 className="font-display text-5xl gold">Book JustWaxIt in Twin Falls</h1><p className="mt-4 text-white/70">Ready for smoother skin, sculpted brows, or lash lift confidence? Send a request and we will confirm your appointment details.</p></div></section><ContactBlock /><FAQ /></main>; }
