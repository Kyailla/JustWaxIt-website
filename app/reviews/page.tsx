import type { Metadata } from 'next';
import { Reviews, FAQ } from '@/components/sections';
import { localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Google Reviews Twin Falls Waxing | JustWaxIt', description: 'Read Google review placeholders and client testimonials for JustWaxIt, a luxury waxing and esthetician studio in Twin Falls, Idaho.' };
export default function Page() { return <main className="pt-10"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} /><section className="px-4 pt-12"><div className="mx-auto max-w-4xl"><h1 className="font-display text-5xl gold">JustWaxIt reviews</h1><p className="mt-4 text-white/70">Trust-building testimonials and the Google Business Profile placeholder for launch.</p></div></section><Reviews /><FAQ /></main>; }
