import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Waxing Blog Twin Falls | Brazilian Wax, Brows + Lash Tips',
  description: 'Read Twin Falls waxing, brow waxing, lash lift, esthetician, aftercare, and waxing classes Idaho articles from JustWaxIt.',
};

export default function Page() {
  return <main className="px-4 py-20"><div className="mx-auto max-w-7xl"><p className="gold uppercase tracking-[.25em]">Client education</p><h1 className="font-display mt-2 text-5xl gold">The JustWaxIt Blog</h1><p className="mt-4 max-w-3xl text-white/70">Warm, practical beauty guidance from a Twin Falls esthetician—created to help you prep, heal well, and choose services with confidence.</p><div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <Link href={`/blog/${p.slug}`} key={p.slug} className="card rounded-3xl p-6"><p className="text-sm gold">{new Date(p.date).toLocaleDateString()}</p><h2 className="mt-3 font-display text-2xl">{p.title}</h2><p className="mt-3 text-white/70">{p.excerpt}</p><span className="mt-5 inline-block underline">Read preview</span></Link>)}</div></div></main>;
}
