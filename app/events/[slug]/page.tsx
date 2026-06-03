import { notFound } from 'next/navigation'
import { EventDetailClient } from './event-detail-client'

const eventData = {
  weddings: {
    title: 'Weddings',
    subtitle: 'Your Perfect Day Awaits',
    description: 'From intimate ceremonies to grand celebrations, we craft wedding experiences that reflect your unique love story. Our expert team handles every detail, from venue selection to the final toast, ensuring your day is nothing short of magical.',
    heroImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000',
    features: [
      'Complete ceremony and reception planning',
      'Venue selection and coordination',
      'Custom floral and decor design',
      'Catering and cake arrangements',
      'Photography and videography coordination',
      'Guest management and RSVP tracking',
      'Wedding day timeline creation',
      'Vendor negotiations and management',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800',
      'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=800',
    ],
    packages: [
      { name: 'Intimate', guests: 'Up to 50', price: '5,000' },
      { name: 'Classic', guests: '51-150', price: '12,000' },
      { name: 'Grand', guests: '150+', price: '25,000' },
    ],
  },
  birthdays: {
    title: 'Birthday Celebrations',
    subtitle: 'Make Every Year Unforgettable',
    description: 'Whether it\'s a milestone birthday or an intimate gathering, we create personalized celebrations that capture the essence of who you are. From themed parties to elegant soirées, every detail is crafted to perfection.',
    heroImage: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2000',
    features: [
      'Custom theme development',
      'Venue selection and styling',
      'Entertainment booking',
      'Custom cake and dessert arrangements',
      'Party favors and gift coordination',
      'Photography and videography',
      'Guest entertainment activities',
      'Complete event coordination',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800',
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=800',
      'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?q=80&w=800',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800',
    ],
    packages: [
      { name: 'Simple', guests: 'Up to 20', price: '1,500' },
      { name: 'Classic', guests: '21-50', price: '3,500' },
      { name: 'Premium', guests: '50+', price: '7,000' },
    ],
  },
  anniversaries: {
    title: 'Anniversary Celebrations',
    subtitle: 'Celebrate Your Love Story',
    description: 'Honor the milestones of your journey together with celebrations that reflect the depth of your love. From romantic dinners to grand anniversary parties, we create moments that rekindle your story.',
    heroImage: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2000',
    features: [
      'Romantic venue curation',
      'Custom menu planning',
      'Floral and décor styling',
      'Live music or entertainment',
      'Memory displays and photo galleries',
      'Surprise element coordination',
      'Guest coordination',
      'Complete event management',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800',
      'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800',
    ],
    packages: [
      { name: 'Intimate', guests: 'Up to 20', price: '2,000' },
      { name: 'Celebration', guests: '21-75', price: '5,500' },
      { name: 'Grand', guests: '75+', price: '12,000' },
    ],
  },
  engagements: {
    title: 'Engagement Ceremonies',
    subtitle: 'Begin Your Forever',
    description: 'Mark the beginning of your journey to forever with an engagement celebration as unique as your love. We create magical moments that set the tone for the beautiful chapters ahead.',
    heroImage: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2000',
    features: [
      'Proposal planning assistance',
      'Engagement party coordination',
      'Venue and décor styling',
      'Custom invitations',
      'Catering arrangements',
      'Photography coordination',
      'Ring presentation setup',
      'Family coordination',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800',
      'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800',
    ],
    packages: [
      { name: 'Simple', guests: 'Up to 30', price: '2,500' },
      { name: 'Elegant', guests: '31-75', price: '5,000' },
      { name: 'Luxurious', guests: '75+', price: '10,000' },
    ],
  },
  'baby-showers': {
    title: 'Baby Showers',
    subtitle: 'Welcome New Beginnings',
    description: 'Celebrate the joy of new life with a baby shower that\'s as special as the little one on the way. From whimsical themes to elegant gatherings, we create celebrations filled with love and laughter.',
    heroImage: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=2000',
    features: [
      'Theme development and styling',
      'Venue decoration',
      'Games and activities planning',
      'Custom dessert tables',
      'Gift registry coordination',
      'Photography services',
      'Party favors',
      'Complete coordination',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800',
      'https://images.unsplash.com/photo-1557939574-a2d8dd9b5cae?q=80&w=800',
      'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800',
    ],
    packages: [
      { name: 'Sweet', guests: 'Up to 20', price: '1,200' },
      { name: 'Lovely', guests: '21-40', price: '2,800' },
      { name: 'Grand', guests: '40+', price: '5,500' },
    ],
  },
  corporate: {
    title: 'Corporate Events',
    subtitle: 'Professional Excellence',
    description: 'From conferences to galas, product launches to team celebrations, we deliver corporate events that reflect your brand\'s prestige and leave lasting impressions on attendees.',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000',
    features: [
      'Conference and seminar planning',
      'Product launch coordination',
      'Award ceremonies',
      'Team building events',
      'Gala dinner organization',
      'Audio-visual coordination',
      'Catering management',
      'Brand integration',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800',
    ],
    packages: [
      { name: 'Essential', guests: 'Up to 50', price: '4,000' },
      { name: 'Professional', guests: '51-200', price: '12,000' },
      { name: 'Executive', guests: '200+', price: '25,000' },
    ],
  },
  housewarming: {
    title: 'Housewarming Events',
    subtitle: 'Celebrate New Beginnings',
    description: 'Mark the start of a new chapter in your dream home with a housewarming celebration that welcomes friends and family in style. We make your first gathering truly memorable.',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000',
    features: [
      'Home styling consultation',
      'Catering and menu planning',
      'Guest list management',
      'Décor and floral arrangements',
      'Entertainment coordination',
      'Gift registry setup',
      'Photography services',
      'Complete event management',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800',
    ],
    packages: [
      { name: 'Cozy', guests: 'Up to 25', price: '1,500' },
      { name: 'Classic', guests: '26-50', price: '3,000' },
      { name: 'Grand', guests: '50+', price: '6,000' },
    ],
  },
  graduations: {
    title: 'Graduation Parties',
    subtitle: 'Celebrate Achievement',
    description: 'Honor academic milestones with celebrations that match the magnitude of the achievement. From high school to doctoral graduations, we create events that inspire and celebrate.',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000',
    features: [
      'Venue selection and styling',
      'Custom theme development',
      'Catering arrangements',
      'Memory displays and photo walls',
      'Entertainment booking',
      'Guest coordination',
      'Photography services',
      'Day-of management',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800',
      'https://images.unsplash.com/photo-1627556704283-71e61d736ba7?q=80&w=800',
      'https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=800',
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
    ],
    packages: [
      { name: 'Basic', guests: 'Up to 30', price: '1,800' },
      { name: 'Classic', guests: '31-75', price: '4,000' },
      { name: 'Premium', guests: '75+', price: '8,000' },
    ],
  },
  festive: {
    title: 'Festive Celebrations',
    subtitle: 'Seasonal Magic',
    description: 'From holiday parties to New Year\'s galas, we bring the spirit of the season to life with celebrations that sparkle. Let us create festive memories that warm hearts all year long.',
    heroImage: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=2000',
    features: [
      'Seasonal theme design',
      'Holiday décor installation',
      'Festive menu curation',
      'Entertainment booking',
      'Gift exchange coordination',
      'Photography services',
      'Guest management',
      'Complete event coordination',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=800',
      'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?q=80&w=800',
      'https://images.unsplash.com/photo-1512389142860-9c449e58a814?q=80&w=800',
      'https://images.unsplash.com/photo-1481653125770-b78c206c59d4?q=80&w=800',
    ],
    packages: [
      { name: 'Festive', guests: 'Up to 40', price: '2,500' },
      { name: 'Merry', guests: '41-100', price: '6,000' },
      { name: 'Grand', guests: '100+', price: '15,000' },
    ],
  },
  custom: {
    title: 'Custom Events',
    subtitle: 'Your Vision, Our Expertise',
    description: 'Have something unique in mind? Our custom event planning service brings any vision to life. From themed parties to one-of-a-kind celebrations, we create bespoke experiences tailored entirely to you.',
    heroImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000',
    features: [
      'Concept development',
      'Custom theme creation',
      'Venue sourcing',
      'Bespoke décor design',
      'Specialized vendor coordination',
      'Entertainment curation',
      'Full logistics management',
      'Day-of execution',
    ],
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=800',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800',
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800',
    ],
    packages: [
      { name: 'Custom Quote', guests: 'Any size', price: 'Contact Us' },
    ],
  },
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(eventData).map((slug) => ({ slug }))
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = eventData[slug as keyof typeof eventData]

  if (!event) {
    notFound()
  }

  return <EventDetailClient event={event} slug={slug} />
}
