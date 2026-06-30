import type { Metadata } from 'next';
import Link from 'next/link';
import { FAQ } from '@/components/sections';
import { services } from '@/lib/site';
import { serviceSchema } from '@/lib/schema';

const slug = 'brow-waxing-tint';
const service = services.find((item) => item.slug === slug)!;

export const metadata: Metadata = {
  title: 'Brow Waxing Twin Falls | Brow Wax + Tint',
  description: 'Book brow waxing Twin Falls clients trust for soft shaping, custom tint, natural definition, aftercare, FAQs, and luxury service.',
};

const faqs = [
  ['Is this service right for first-time clients?', 'Yes. Your appointment starts with a quick consultation, clear expectations, and honest guidance from a Twin Falls esthetician.'],
  ['How do I book?', 'Use the Book Now button to request an appointment. A Vagaro booking link placeholder is ready to connect before launch.'],
  ['How often should I return?', 'Most clients maintain best results on a consistent schedule. Waxing is usually 4–6 weeks, brows 3–5 weeks, and lash lifts 6–8 weeks.'],
];

export default function Page() {
  return <main className="px-4 py-20"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service.title, service.description)) }} /><article className="mx-auto max-w-5xl"><p className="gold uppercase tracking-[.25em]">Brow waxing Twin Falls</p><h1 className="font-display mt-3 text-5xl gold">Custom brow waxing and tint for polished definition</h1><p className="mt-6 max-w-3xl text-lg text-white/75">Your brows should look like you—just cleaner, softer, and more intentional. Mapping, waxing, trimming, and tint are tailored to your features.</p><div className="mt-8 flex flex-wrap gap-4"><Link href="/contact" className="rounded-full bg-gold px-7 py-3 font-bold text-black">Book Now</Link><Link href="/services" className="rounded-full border border-[#d8b15f66] px-7 py-3 font-bold">Compare services</Link></div><section className="mt-12 grid gap-5 md:grid-cols-3">{service.benefits.map((benefit) => <div key={benefit} className="card rounded-3xl p-6"><h2 className="font-display text-2xl gold">{benefit}</h2><p className="mt-3 text-white/70">Luxury service should feel calm, clean, and specific to your skin, hair growth, and goals.</p></div>)}</section><section className="card mt-8 rounded-3xl p-8"><h2 className="font-display text-3xl gold">What to expect</h2><p className="mt-4 text-white/72">We begin with consultation, prep the skin or lashes carefully, perform the service with professional timing, and finish with simple home care instructions. If something is sensitive, say so—good beauty work includes communication.</p><h2 className="font-display mt-8 text-3xl gold">Aftercare tips</h2><p className="mt-4 text-white/72">Aftercare: avoid steam, exfoliants, retinoids, and heavy makeup around the brows for 24 hours so skin and tint can settle.</p></section><section className="mt-8 grid gap-5 md:grid-cols-2"><Link href="/brazilian-waxing" className="card rounded-3xl p-6">Brazilian waxing Twin Falls</Link><Link href="/brow-waxing-tint" className="card rounded-3xl p-6">Brow waxing Twin Falls</Link><Link href="/lash-lift-tint" className="card rounded-3xl p-6">Lash lift Twin Falls</Link><Link href="/justwaxit-academy" className="card rounded-3xl p-6">Waxing classes Idaho</Link></section></article><FAQ items={faqs} /></main>;
}
