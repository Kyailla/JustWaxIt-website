import type { Metadata } from 'next';
import { FAQ, Gallery, ServiceCards, TrustSections, WhatToExpect } from '@/components/sections';
import { allServicesSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Waxing Twin Falls | Brazilian Wax, Brows, Lashes + Pricing',
  description: 'Explore JustWaxIt services: Brazilian wax Twin Falls Idaho, brow waxing Twin Falls, lash lift Twin Falls, and luxury waxing care with clear starting prices.',
};

export default function Page() {
  return <main className="pt-10"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allServicesSchema) }} /><section className="px-4"><div className="mx-auto max-w-4xl"><p className="gold uppercase tracking-[.25em]">Waxing Twin Falls</p><h1 className="font-display mt-2 text-5xl gold">Luxury waxing services in Twin Falls, Idaho</h1><p className="mt-4 text-white/70">Transparent pricing, refined technique, and comfort-first care for Brazilian waxing, brows, lashes, and professional beauty education.</p></div></section><ServiceCards /><TrustSections /><WhatToExpect /><Gallery /><FAQ /></main>;
}
