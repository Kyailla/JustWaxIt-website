import Link from 'next/link';
import { site } from '@/lib/site';

const nav = [
  ['Services', '/services'],
  ['Brazilian', '/brazilian-waxing'],
  ['Brows', '/brow-waxing-tint'],
  ['Lashes', '/lash-lift-tint'],
  ['Academy', '/justwaxit-academy'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
];

export function Header() {
  return <header className="sticky top-0 z-40 border-b border-[#d8b15f33] bg-[#090706e8] backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4"><Link href="/" className="font-display text-2xl gold">JustWaxIt</Link><nav className="hidden gap-5 text-sm lg:flex">{nav.map(([label, href]) => <Link className="hover:gold" key={href} href={href}>{label}</Link>)}</nav><Link href={site.bookingUrl} className="focus-ring rounded-full bg-gold px-5 py-2 text-sm font-bold text-black">Book Now</Link></div></header>;
}
