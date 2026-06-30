import type { ReactNode } from 'react';
import Link from 'next/link';
import { faqs, posts, reviews, services, site } from '@/lib/site';

const bookingLabel = 'Book Now';

export function CtaButton({ href = site.bookingUrl, children = bookingLabel }: { href?: string; children?: ReactNode }) {
  return <Link href={href} className="focus-ring inline-flex rounded-full bg-gold px-7 py-3 font-bold text-black shadow-[0_12px_40px_rgba(216,177,95,.22)]">{children}</Link>;
}

export function Hero() {
  return <section className="relative overflow-hidden px-4 py-24 md:py-36">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(216,177,95,.22),transparent_28%),radial-gradient(circle_at_82%_8%,rgba(246,219,139,.16),transparent_30%)]" />
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d8b15f88] to-transparent" />
    <div className="reveal relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
      <div>
        <p className="gold tracking-[.35em] uppercase">Twin Falls, Idaho luxury waxing studio</p>
        <h1 className="font-display mt-5 text-5xl leading-tight md:text-7xl">Smooth skin, sculpted brows, and quiet confidence.</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/78">JustWaxIt is a black-and-gold beauty studio for Brazilian waxing in Twin Falls, brow waxing, lash lifts, and advanced waxing education. You will be talked through the service, treated with respect, and sent home with aftercare that actually makes sense.</p>
        <div className="mt-8 flex flex-wrap gap-4"><CtaButton /> <Link href="/services" className="rounded-full border border-[#d8b15f66] px-7 py-3 font-bold">View Services + Pricing</Link></div>
        <p className="mt-5 text-sm text-white/55">Vagaro booking link placeholder ready • Google Business Profile placeholder ready</p>
      </div>
      <div className="card rounded-[2rem] p-6">
        <p className="gold text-sm uppercase tracking-[.25em]">Launch offer placeholder</p>
        <h2 className="font-display mt-3 text-3xl">A polished waxing experience from consultation to aftercare.</h2>
        <div className="mt-6 grid gap-3 text-white/75">
          {['Brazilian wax Twin Falls Idaho', 'Waxing Twin Falls', 'Brow waxing Twin Falls', 'Lash lift Twin Falls', 'Esthetician Twin Falls Idaho'].map((item) => <div key={item} className="rounded-2xl border border-[#d8b15f22] bg-black/20 p-4">{item}</div>)}
        </div>
      </div>
    </div>
  </section>;
}

export function ServiceCards() {
  return <section className="px-4 py-16"><div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="gold uppercase tracking-[.25em]">Services</p><h2 className="font-display mt-2 text-4xl gold">Signature services with clear starting prices</h2></div><CtaButton /></div>
    <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((s) => <Link href={`/${s.slug}`} key={s.slug} className="card reveal rounded-3xl p-6 transition hover:-translate-y-1">
      <p className="text-sm gold">{s.eyebrowTitle}</p><h3 className="mt-3 font-display text-2xl">{s.title}</h3><p className="mt-3 text-white/70">{s.description}</p><p className="mt-5 text-sm text-white/55">{s.duration}</p><p className="mt-2 text-2xl font-bold gold">{s.price}</p>
    </Link>)}</div>
  </div></section>;
}

export function TrustSections() {
  return <section className="px-4 py-16"><div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
    {[['First-time waxing is welcome', 'Nervous is normal. Your appointment is private, professional, and paced with clear communication so you know what is happening before it happens.'], ['Why clients choose JustWaxIt', 'Clients book for the clean studio feel, detailed brow and body waxing technique, warm communication, and results that look refined—not rushed.'], ['Sanitation standards', 'Fresh linens, disinfected surfaces, professional implements, no double-dipping, and clean hand hygiene are non-negotiable parts of every service.']].map(([title, copy]) => <article key={title} className="card rounded-3xl p-7"><h2 className="font-display text-3xl gold">{title}</h2><p className="mt-4 text-white/72">{copy}</p></article>)}
  </div></section>;
}

export function WhatToExpect() {
  return <section className="px-4 py-16"><div className="mx-auto max-w-7xl"><h2 className="font-display text-4xl gold">What to expect at JustWaxIt</h2><div className="mt-8 grid gap-5 md:grid-cols-4">{['Consultation', 'Clean prep', 'Efficient service', 'Aftercare plan'].map((step, i) => <div key={step} className="card rounded-3xl p-6"><p className="gold">0{i + 1}</p><h3 className="mt-3 font-display text-2xl">{step}</h3><p className="mt-3 text-white/70">{['We talk goals, sensitivities, medications, and previous waxing experiences.', 'Skin is prepared with professional products and a clean setup.', 'Technique is confident and comfort-aware with check-ins as needed.', 'You leave knowing what to avoid, when to exfoliate, and when to rebook.'][i]}</p></div>)}</div></div></section>;
}

export function Gallery() { return <section className="px-4 py-16"><div className="mx-auto max-w-7xl"><h2 className="font-display text-4xl gold">Before & after gallery placeholder</h2><p className="mt-3 max-w-2xl text-white/70">Professional brow, lash, and waxing results will be added here after launch with client permission.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{['Brow sculpt', 'Lash lift', 'Smooth wax'].map((x, i) => <div key={x} className="card rounded-3xl p-4"><div className="grid grid-cols-2 gap-2"><div className="aspect-[3/4] rounded-2xl bg-white/10 grid place-items-center text-white/50">Before</div><div className="aspect-[3/4] rounded-2xl bg-[#d8b15f22] grid place-items-center gold">After</div></div><p className="mt-4 font-semibold">{x} result {i + 1}</p></div>)}</div></div></section>; }

export function Reviews() { return <section className="px-4 py-16" id="reviews"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="gold uppercase tracking-[.25em]">Social proof</p><h2 className="font-display mt-2 text-4xl gold">Google reviews placeholder</h2></div><Link href={site.googleBusinessUrl} className="rounded-full border border-[#d8b15f66] px-7 py-3 font-bold">View Google Business Profile</Link></div><div className="mt-8 grid gap-5 md:grid-cols-3">{reviews.map((r) => <article key={r.name} className="card rounded-3xl p-6"><p className="gold">★★★★★</p><p className="mt-4 text-white/80">“{r.text}”</p><p className="mt-5 font-bold">{r.name}</p></article>)}</div></div></section>; }

export function FAQ({ items = faqs }: { items?: ReadonlyArray<readonly [string, string]> }) { return <section className="px-4 py-16"><div className="mx-auto max-w-4xl"><h2 className="font-display text-4xl gold">Frequently asked questions</h2><div className="mt-8 space-y-3">{items.map(([q, a]) => <details key={q} className="card rounded-2xl p-5"><summary className="cursor-pointer font-semibold">{q}</summary><p className="mt-3 text-white/70">{a}</p></details>)}</div></div></section>; }

export function BlogPreview() { return <section className="px-4 py-16"><div className="mx-auto max-w-7xl"><h2 className="font-display text-4xl gold">Waxing education from your Twin Falls esthetician</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{posts.slice(0, 3).map((p) => <Link href={`/blog/${p.slug}`} key={p.slug} className="card rounded-3xl p-6"><p className="text-sm gold">{new Date(p.date).toLocaleDateString()}</p><h3 className="mt-3 font-display text-2xl">{p.title}</h3><p className="mt-3 text-white/70">{p.excerpt}</p></Link>)}</div><Link href="/blog" className="mt-8 inline-block underline">Read all blog posts</Link></div></section>; }

export function ContactBlock() { return <section className="px-4 py-16"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2"><form className="card rounded-3xl p-6"><h2 className="font-display text-4xl gold">Book your appointment</h2><p className="mt-3 text-white/70">Use this request form for launch. The Vagaro booking link placeholder can be swapped in anytime.</p>{['Name', 'Email', 'Phone', 'Service'].map((x) => <input key={x} className="mt-4 w-full rounded-xl border border-[#d8b15f44] bg-black/30 p-3" placeholder={x} />)}<textarea className="mt-4 w-full rounded-xl border border-[#d8b15f44] bg-black/30 p-3" placeholder="Tell us your preferred day and time" rows={5} /><button className="mt-4 rounded-full bg-gold px-7 py-3 font-bold text-black">Submit Request</button><Link href={site.vagaroUrl} className="ml-4 inline-block underline">Vagaro placeholder</Link></form><div className="card rounded-3xl p-6"><h3 className="font-display text-3xl gold">Find us in Twin Falls</h3><p className="mt-3 text-white/75">Private luxury waxing studio serving Twin Falls and the Magic Valley. Google Business Profile placeholder is ready for verification.</p><iframe title="Google Maps search for JustWaxIt Twin Falls Idaho" className="mt-6 h-80 w-full rounded-2xl" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`} /></div></div></section>; }
