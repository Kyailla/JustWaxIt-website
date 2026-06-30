import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/lib/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyBook } from '@/components/sticky-book';

export const metadata: Metadata = { metadataBase: new URL(site.url), title: { default: `${site.name} | Luxury Waxing Studio in Twin Falls, Idaho`, template: `%s | ${site.name}` }, description: 'Book luxury Brazilian waxing, brow waxing and tint, lash lift and tint, and waxing education at JustWaxIt in Twin Falls, Idaho.', openGraph: { type: 'website', locale: 'en_US', siteName: site.name, title: site.name, description: site.tagline, url: site.url }, robots: { index: true, follow: true } };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#090706' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /><StickyBook />{process.env.NEXT_PUBLIC_GA_ID ? <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} /> : null}{process.env.NEXT_PUBLIC_GA_ID ? <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}} /> : null}</body></html>;
}
