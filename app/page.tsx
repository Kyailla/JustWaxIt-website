import { BlogPreview, ContactBlock, FAQ, Gallery, Hero, Reviews, ServiceCards, TrustSections, WhatToExpect } from '@/components/sections';
import { allServicesSchema, faqSchema, localBusinessSchema } from '@/lib/schema';

export default function Home() {
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema(), faqSchema(), ...allServicesSchema]) }} /><Hero /><ServiceCards /><TrustSections /><WhatToExpect /><Gallery /><Reviews /><BlogPreview /><FAQ /><ContactBlock /></main>;
}
