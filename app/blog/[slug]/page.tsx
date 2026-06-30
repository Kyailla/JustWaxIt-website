import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/lib/site';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const post = posts.find((p) => p.slug === slug); return { title: post?.title, description: post?.excerpt }; }
export default async function Page({ params }: Props) { const { slug } = await params; const post = posts.find((p) => p.slug === slug); if (!post) notFound(); return <main className="px-4 py-20"><article className="card mx-auto max-w-3xl rounded-3xl p-8"><p className="gold">{new Date(post.date).toLocaleDateString()}</p><h1 className="mt-3 font-display text-5xl gold">{post.title}</h1><p className="mt-6 text-lg text-white/75">{post.excerpt}</p><p className="mt-5 text-white/70">This production blog template is ready for educational content targeting Twin Falls, Idaho searches. Add appointment prep tips, aftercare guidance, seasonal beauty advice, and service-specific answers to help local clients book confidently.</p></article></main>; }
