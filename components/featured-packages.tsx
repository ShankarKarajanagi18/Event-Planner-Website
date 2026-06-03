'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Star, Gem, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const packages = [
  {
    name: 'Essential',
    icon: Star,
    price: '2,500',
    description: 'Perfect for intimate gatherings and small celebrations',
    features: [
      'Event planning consultation',
      'Venue recommendations',
      'Basic decoration setup',
      'Day-of coordination',
      'Up to 50 guests',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    icon: Crown,
    price: '5,500',
    description: 'Our most popular package for memorable celebrations',
    features: [
      'Everything in Essential',
      'Full event design & styling',
      'Vendor management',
      'Custom invitation design',
      'Up to 150 guests',
      'Photography coordination',
      'Dedicated event manager',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Luxury',
    icon: Gem,
    price: '12,000',
    description: 'Ultimate experience for grand and lavish events',
    features: [
      'Everything in Premium',
      'Bespoke event concept',
      'Premium vendor network',
      'Entertainment booking',
      'Unlimited guests',
      'Full catering management',
      'RSVP management',
      'Post-event coordination',
      '24/7 dedicated support',
    ],
    popular: false,
  },
]

export function FeaturedPackages() {
  return (
    <section id="packages" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-charcoal/10 text-charcoal text-sm font-body tracking-wider rounded-full mb-4">
            PACKAGES
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">
            Featured Event <span className="text-gold-dark">Packages</span>
          </h2>
          <p className="text-charcoal/70 font-body max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully curated packages designed to match different 
            event scales and budgets, all with our signature touch of elegance.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card 
                  className={`relative h-full p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                    pkg.popular 
                      ? 'bg-charcoal text-cream border-gold scale-105 shadow-xl' 
                      : 'bg-white text-charcoal border-charcoal/10 hover:border-gold/50'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-gold text-charcoal text-xs font-body font-medium tracking-wider rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <div className={`w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      pkg.popular ? 'bg-gold/20' : 'bg-gold/10'
                    }`}>
                      <Icon className={`w-7 h-7 ${pkg.popular ? 'text-gold' : 'text-gold-dark'}`} />
                    </div>
                    <h3 className="text-2xl font-serif mb-2">{pkg.name}</h3>
                    <p className={`text-sm font-body mb-4 ${pkg.popular ? 'text-cream/70' : 'text-charcoal/60'}`}>
                      {pkg.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-lg ${pkg.popular ? 'text-cream/60' : 'text-charcoal/50'}`}>$</span>
                      <span className={`text-4xl font-serif ${pkg.popular ? 'text-gold' : 'text-gold-dark'}`}>
                        {pkg.price}
                      </span>
                      <span className={`text-sm font-body ${pkg.popular ? 'text-cream/60' : 'text-charcoal/50'}`}>
                        /event
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                          pkg.popular ? 'text-gold' : 'text-gold-dark'
                        }`} />
                        <span className={`text-sm font-body ${
                          pkg.popular ? 'text-cream/80' : 'text-charcoal/70'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={`w-full group ${
                      pkg.popular 
                        ? 'bg-gold text-charcoal hover:bg-gold-light' 
                        : 'bg-charcoal text-cream hover:bg-gold hover:text-charcoal'
                    } font-body tracking-wide transition-all duration-300`}
                  >
                    Choose {pkg.name}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm font-body text-charcoal/60 mt-12"
        >
          All packages can be customized to fit your specific needs. 
          <a href="#contact" className="text-gold-dark hover:text-gold ml-1 underline underline-offset-4">
            Contact us
          </a> for a personalized quote.
        </motion.p>
      </div>
    </section>
  )
}
