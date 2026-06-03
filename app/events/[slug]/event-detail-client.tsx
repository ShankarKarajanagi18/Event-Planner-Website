'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Check, ArrowRight, Calendar, Users, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

type EventData = {
  title: string
  subtitle: string
  description: string
  heroImage: string
  features: string[]
  gallery: string[]
  packages: { name: string; guests: string; price: string }[]
}

export function EventDetailClient({ event, slug }: { event: EventData; slug: string }) {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${event.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/#events" 
              className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-6 font-body transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-cream mb-4">
              {event.title}
            </h1>
            <p className="text-xl md:text-2xl font-serif text-gold mb-6">
              {event.subtitle}
            </p>
            <p className="text-cream/80 font-body max-w-2xl leading-relaxed">
              {event.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              What&apos;s <span className="text-gold">Included</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {event.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="font-body text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
              Event <span className="text-gold-dark">Gallery</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {event.gallery.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={`${event.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Choose Your <span className="text-gold">Package</span>
            </h2>
          </motion.div>

          <div className={`grid gap-8 ${event.packages.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-3'}`}>
            {event.packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 border-2 border-border hover:border-gold/50 transition-colors h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif text-foreground mb-2">{pkg.name}</h3>
                    <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
                      <Users className="w-4 h-4" />
                      <span>{pkg.guests}</span>
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    {pkg.price === 'Contact Us' ? (
                      <span className="text-2xl font-serif text-gold">{pkg.price}</span>
                    ) : (
                      <div className="flex items-baseline justify-center">
                        <span className="text-lg text-muted-foreground">$</span>
                        <span className="text-4xl font-serif text-gold">{pkg.price}</span>
                      </div>
                    )}
                  </div>

                  <Link href={`/booking?event=${slug}&package=${pkg.name.toLowerCase()}`} className="mt-auto">
                    <Button className="w-full bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body group transition-all duration-300">
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-cream mb-4">
              Ready to Start Planning?
            </h2>
            <p className="text-cream/70 font-body mb-8 max-w-xl mx-auto">
              Let&apos;s create something extraordinary together. Book a consultation 
              and take the first step towards your perfect event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/booking?event=${slug}`}>
                <Button size="lg" className="bg-gold text-charcoal hover:bg-gold-light font-body group">
                  <Calendar className="mr-2 w-4 h-4" />
                  Book Consultation
                </Button>
              </Link>
              <Link href="/#contact">
                <Button size="lg" variant="outline" className="border-cream/30 text-cream hover:bg-cream/10 font-body">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
