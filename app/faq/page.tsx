import type { Metadata } from 'next';
import { FAQ } from '@/components/sections';
import { faqSchema } from '@/lib/schema';

export const metadata: Metadata = { title: 'Waxing FAQ Twin Falls | Brazilian Wax, Brows + Lashes', description: 'Answers to common Brazilian wax, brow waxing, lash lift, aftercare, sanitation, and waxing classes questions for Twin Falls clients.' };
export default function Page() { return <main className="pt-10"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }} /><section className="px-4 pt-12"><div className="mx-auto max-w-4xl"><h1 className="font-display text-5xl gold">Waxing FAQ for Twin Falls clients</h1><p className="mt-4 text-white/70">Straight answers before you book with JustWaxIt.</p></div></section><FAQ /></main>; }
