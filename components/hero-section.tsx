'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-sm font-body text-gold-light tracking-wide">
              Creating Unforgettable Moments Since 2010
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-cream leading-tight mb-6"
          >
            <span className="block">Where Dreams</span>
            <span className="block text-gold">Become Reality</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-body text-cream/80 leading-relaxed mb-10 max-w-xl"
          >
            Transform your special occasions into extraordinary experiences. 
            From intimate gatherings to grand celebrations, we craft bespoke 
            events that reflect your unique vision and style.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-gold text-charcoal hover:bg-gold-light font-body tracking-wide group transition-all duration-300"
              >
                Start Planning Your Event
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#gallery">
              <Button
                size="lg"
                variant="outline"
                className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:border-cream font-body tracking-wide transition-all duration-300"
              >
                View Our Portfolio
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-cream/20"
          >
            {[
              { value: '500+', label: 'Events Hosted' },
              { value: '15+', label: 'Years Experience' },
              { value: '98%', label: 'Happy Clients' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="text-center sm:text-left"
              >
                <div className="text-2xl md:text-4xl font-serif text-gold mb-1">{stat.value}</div>
                <div className="text-sm font-body text-cream/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gold rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
