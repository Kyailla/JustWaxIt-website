import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { posts } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return posts.map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return { title: post?.title, description: post?.excerpt };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const currentPost = post;
  return <main className="px-4 py-20"><article className="card mx-auto max-w-3xl rounded-3xl p-8"><p className="gold">{new Date(currentPost.date).toLocaleDateString()}</p><h1 className="mt-3 font-display text-5xl gold">{currentPost.title}</h1><p className="mt-6 text-lg text-white/75">{currentPost.excerpt}</p><h2 className="font-display mt-8 text-3xl gold">What this guide will cover</h2><p className="mt-5 text-white/70">This launch-ready blog preview is structured for Twin Falls, Idaho searches and can be expanded with your exact studio policies, photos, booking instructions, and client education. It supports internal links to waxing services, brow services, lash services, and JustWaxIt Academy.</p><Link href="/contact" className="mt-8 inline-block rounded-full bg-gold px-7 py-3 font-bold text-black">Book Now</Link></article></main>;
}
