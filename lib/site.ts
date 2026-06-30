export const site = {
  name: 'JustWaxIt',
  tagline: 'Luxury waxing, brows, lashes, and advanced beauty education in Twin Falls, Idaho',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://justwaxit.com',
  phone: '(208) 555-0198',
  email: 'hello@justwaxit.com',
  address: 'Twin Falls, ID',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '/contact',
  vagaroUrl: process.env.NEXT_PUBLIC_VAGARO_URL || '/contact',
  googleBusinessUrl: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || 'https://www.google.com/search?q=JustWaxIt+Twin+Falls+Idaho',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=JustWaxIt%20Twin%20Falls%20Idaho',
};

export const services = [
  {
    slug: 'brazilian-waxing',
    title: 'Brazilian Waxing',
    eyebrowTitle: 'Brazilian wax Twin Falls Idaho',
    price: '$65+',
    duration: '30–45 min',
    description: 'A discreet Brazilian wax in Twin Falls, Idaho using premium hard wax, steady technique, and calm guidance for smooth, confident results.',
    benefits: ['Private, judgment-free care', 'Hard wax selected for sensitive areas', 'Cleaner grow-out with consistent appointments'],
  },
  {
    slug: 'brow-waxing-tint',
    title: 'Brow Waxing + Tint',
    eyebrowTitle: 'Brow waxing Twin Falls',
    price: '$38+',
    duration: '30–40 min',
    description: 'Custom brow waxing, shaping, and tint in Twin Falls to frame your face with soft definition—not overdone, never rushed.',
    benefits: ['Measured brow mapping', 'Natural-looking tint options', 'Polished shape that fits your features'],
  },
  {
    slug: 'lash-lift-tint',
    title: 'Lash Lift + Tint',
    eyebrowTitle: 'Lash lift Twin Falls',
    price: '$85+',
    duration: '60 min',
    description: 'A low-maintenance lash lift and tint for Twin Falls clients who want lifted, darker-looking lashes without daily curling.',
    benefits: ['Beautiful curl without extensions', 'Great for low-maintenance routines', 'Aftercare explained before you leave'],
  },
  {
    slug: 'justwaxit-academy',
    title: 'JustWaxIt Academy',
    eyebrowTitle: 'Waxing classes Idaho',
    price: 'Inquire',
    duration: 'Private + small group',
    description: 'Advanced waxing classes in Idaho for licensed beauty professionals ready to improve speed, client care, sanitation, and confidence.',
    benefits: ['Hands-on technique coaching', 'Business-minded client experience', 'Designed for licensed professionals'],
  },
];

export const faqs = [
  ['Where is JustWaxIt located?', 'JustWaxIt serves clients in Twin Falls, Idaho and the Magic Valley area. Full studio details and Google Business Profile information will be added before launch.'],
  ['How should I prepare for a wax?', 'Let hair grow to about one-quarter inch, gently exfoliate 24 hours before, skip heavy lotion on appointment day, and wear breathable clothing.'],
  ['Do you offer Brazilian waxing for first-time clients?', 'Yes. First-time Brazilian wax clients are welcome. Your esthetician will explain each step, check in often, and keep the appointment professional and private.'],
  ['How often should I book waxing in Twin Falls?', 'Most body waxing clients return every 4–6 weeks. Brows are commonly maintained every 3–5 weeks, and lash lifts are usually refreshed every 6–8 weeks.'],
  ['Do you teach waxing classes in Idaho?', 'Yes. JustWaxIt Academy is being created for licensed beauty professionals who want more confidence with waxing technique, sanitation, consultation, and client retention.'],
];

export const reviews = [
  { name: 'Madison R.', text: 'The most beautiful studio in Twin Falls. My Brazilian wax was quick, comfortable, and flawless.', rating: 5 },
  { name: 'Kelsey T.', text: 'My brows have never looked better. Luxe experience from start to finish.', rating: 5 },
  { name: 'Alyssa M.', text: 'The lash lift lasted weeks and saved me so much time every morning.', rating: 5 },
];

export const posts = [
  { slug: 'first-brazilian-wax-twin-falls', title: 'What to Expect at Your First Brazilian Wax in Twin Falls', excerpt: 'A calm, real-world guide to prep, comfort, aftercare, and when to rebook your next Brazilian wax.', date: '2026-06-01' },
  { slug: 'brazilian-wax-aftercare-idaho', title: 'Brazilian Wax Aftercare for Idaho Clients', excerpt: 'How to protect fresh skin after waxing, avoid irritation, and keep your results smoother between visits.', date: '2026-05-24' },
  { slug: 'brow-waxing-tint-aftercare', title: 'Brow Waxing + Tint Aftercare Tips', excerpt: 'The simple things that keep freshly waxed and tinted brows polished, soft, and longer-lasting.', date: '2026-05-15' },
  { slug: 'lash-lift-vs-extensions', title: 'Lash Lift vs. Extensions: Which Is Right for You?', excerpt: 'Compare maintenance, softness, appointment time, and the look of a lash lift in Twin Falls.', date: '2026-04-20' },
  { slug: 'how-often-should-you-wax', title: 'How Often Should You Wax?', excerpt: 'A practical schedule for Brazilian waxing, brows, underarms, and facial waxing.', date: '2026-04-08' },
  { slug: 'waxing-before-vacation', title: 'When to Wax Before Vacation or a Special Event', excerpt: 'Timing tips for smooth skin before weddings, lake weekends, vacations, and photo days.', date: '2026-03-26' },
  { slug: 'brow-shaping-for-face-shape', title: 'Brow Shaping for Your Natural Face Shape', excerpt: 'Why brow waxing should enhance your features instead of chasing a one-size-fits-all trend.', date: '2026-03-12' },
  { slug: 'hard-wax-vs-soft-wax', title: 'Hard Wax vs. Soft Wax: What Clients Should Know', excerpt: 'A simple explanation of wax types and why product choice matters for sensitive skin.', date: '2026-02-28' },
  { slug: 'esthetician-twin-falls-guide', title: 'How to Choose an Esthetician in Twin Falls, Idaho', excerpt: 'What to look for in training, sanitation, communication, and a studio experience you can trust.', date: '2026-02-14' },
  { slug: 'waxing-classes-idaho-career', title: 'Are Advanced Waxing Classes Worth It for Idaho Beauty Pros?', excerpt: 'How continuing education can strengthen technique, speed, client comfort, and retention.', date: '2026-02-01' },
];
