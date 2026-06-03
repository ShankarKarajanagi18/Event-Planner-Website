'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Cake, 
  Users, 
  Building2, 
  Baby, 
  Home, 
  PartyPopper, 
  Sparkles,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const eventCategories = [
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Elegant ceremonies and receptions that celebrate your love story',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800',
    href: '/events/weddings',
  },
  {
    icon: Cake,
    title: 'Birthdays',
    description: 'Memorable celebrations for every milestone age',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=800',
    href: '/events/birthdays',
  },
  {
    icon: Heart,
    title: 'Anniversaries',
    description: 'Romantic celebrations honoring years of togetherness',
    image: 'https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=800',
    href: '/events/anniversaries',
  },
  {
    icon: Users,
    title: 'Engagements',
    description: 'Beautiful moments to mark the beginning of forever',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800',
    href: '/events/engagements',
  },
  {
    icon: Baby,
    title: 'Baby Showers',
    description: 'Joyful gatherings welcoming new life',
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=800',
    href: '/events/baby-showers',
  },
  {
    icon: Building2,
    title: 'Corporate Events',
    description: 'Professional gatherings that make an impression',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    href: '/events/corporate',
  },
  {
    icon: Home,
    title: 'Housewarming',
    description: 'Celebrate new beginnings in your new home',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800',
    href: '/events/housewarming',
  },
  {
    icon: PartyPopper,
    title: 'Festive Events',
    description: 'Seasonal celebrations that bring joy',
    image: 'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?q=80&w=800',
    href: '/events/festive',
  },
  {
    icon: Sparkles,
    title: 'Custom Events',
    description: 'Bespoke experiences tailored to your vision',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800',
    href: '/events/custom',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function EventCategories() {
  return (
    <section id="events" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm font-body tracking-wider rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Events We <span className="text-gold">Specialize</span> In
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            From intimate gatherings to grand celebrations, we bring expertise and 
            creativity to every type of event, ensuring each moment is extraordinary.
          </p>
        </motion.div>

        {/* Event Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {eventCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <Link href={category.href}>
                  <div className="relative h-64 rounded-xl overflow-hidden bg-muted">
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${category.image}')` }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-5 flex flex-col justify-end">
                      <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                        <div className="w-10 h-10 rounded-full bg-gold/20 backdrop-blur-sm flex items-center justify-center mb-3 group-hover:bg-gold/30 transition-colors">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <h3 className="text-lg font-serif text-cream mb-1">{category.title}</h3>
                        <p className="text-xs font-body text-cream/70 line-clamp-2 mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-1 text-gold text-sm font-body opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Learn More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
