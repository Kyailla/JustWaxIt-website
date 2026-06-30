export const site = {
  name: 'JustWaxIt',
  tagline: 'Luxury waxing studio in Twin Falls, Idaho',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://justwaxit.com',
  phone: '(208) 555-0198',
  email: 'hello@justwaxit.com',
  address: 'Twin Falls, ID',
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || '/contact',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=JustWaxIt%20Twin%20Falls%20Idaho',
};
export const services = [
  { slug: 'brazilian-waxing', title: 'Brazilian Waxing', price: '$65+', duration: '30 min', description: 'Expert, discreet Brazilian waxing with premium hard wax for smooth, confident results.' },
  { slug: 'brow-waxing-tint', title: 'Brow Waxing + Tint', price: '$38+', duration: '35 min', description: 'Shape, sculpt, and tint brows for polished definition tailored to your face.' },
  { slug: 'lash-lift-tint', title: 'Lash Lift + Tint', price: '$85+', duration: '60 min', description: 'Low-maintenance lifted lashes with rich tint for an effortless mascara look.' },
  { slug: 'justwaxit-academy', title: 'JustWaxIt Academy', price: 'Inquire', duration: 'Custom', description: 'Hands-on luxury waxing education for future beauty professionals.' },
];
export const faqs = [
  ['Where is JustWaxIt located?', 'JustWaxIt serves clients in Twin Falls, Idaho and the Magic Valley area.'],
  ['How should I prepare for a wax?', 'Let hair grow to about one-quarter inch, gently exfoliate 24 hours before, and avoid lotions on appointment day.'],
  ['Do you offer Brazilian waxing for first-time clients?', 'Yes. Appointments are private, professional, and paced with comfort-first technique.'],
  ['How often should I book?', 'Most waxing clients return every 4–6 weeks; brows and lashes vary based on your goals.'],
];
export const reviews = [
  { name: 'Madison R.', text: 'The most beautiful studio in Twin Falls. My Brazilian wax was quick, comfortable, and flawless.', rating: 5 },
  { name: 'Kelsey T.', text: 'My brows have never looked better. Luxe experience from start to finish.', rating: 5 },
  { name: 'Alyssa M.', text: 'The lash lift lasted weeks and saved me so much time every morning.', rating: 5 },
];
export const posts = [
  { slug: 'first-brazilian-wax-twin-falls', title: 'What to Expect at Your First Brazilian Wax in Twin Falls', excerpt: 'A calm guide to prep, comfort, aftercare, and when to rebook.', date: '2026-06-01' },
  { slug: 'brow-waxing-tint-aftercare', title: 'Brow Waxing + Tint Aftercare Tips', excerpt: 'How to keep your fresh brows polished and longer-lasting.', date: '2026-05-15' },
  { slug: 'lash-lift-vs-extensions', title: 'Lash Lift vs. Extensions: Which Is Right for You?', excerpt: 'Compare maintenance, results, and appointment timing.', date: '2026-04-20' },
];
