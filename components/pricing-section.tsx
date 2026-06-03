'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const pricingPlans = [
  {
    name: 'Silver',
    price: '1,999',
    period: 'starting at',
    description: 'Ideal for small intimate gatherings',
    features: [
      'Up to 30 guests',
      'Basic event consultation',
      'Venue selection assistance',
      'Day-of coordination',
      'Standard decoration package',
    ],
    highlight: false,
  },
  {
    name: 'Gold',
    price: '4,999',
    period: 'starting at',
    description: 'Perfect for mid-size celebrations',
    features: [
      'Up to 100 guests',
      'Full event planning',
      'Custom theme design',
      'Vendor negotiations',
      'Premium decoration package',
      'Photography coordination',
      'RSVP management',
    ],
    highlight: true,
  },
  {
    name: 'Platinum',
    price: '9,999',
    period: 'starting at',
    description: 'For grand and luxurious events',
    features: [
      'Unlimited guests',
      'Bespoke event design',
      'Full vendor management',
      'Luxury decoration setup',
      'Entertainment booking',
      'Catering management',
      'Video & photography',
      'Post-event cleanup',
      'VIP concierge service',
    ],
    highlight: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
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
            PRICING
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            Transparent <span className="text-gold">Pricing</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Choose a plan that suits your event needs. All prices are customizable 
            based on your specific requirements.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card 
                className={`relative h-full p-8 border-2 transition-all duration-300 ${
                  plan.highlight 
                    ? 'bg-charcoal text-cream border-gold shadow-2xl scale-105' 
                    : 'bg-card text-foreground border-border hover:border-gold/30 hover:shadow-lg'
                }`}
              >
                {/* Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 bg-gold text-charcoal text-xs font-body font-semibold tracking-wider rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8 pb-8 border-b border-current/10">
                  <h3 className="text-2xl font-serif mb-2">{plan.name}</h3>
                  <p className={`text-sm font-body mb-4 ${
                    plan.highlight ? 'text-cream/70' : 'text-muted-foreground'
                  }`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-sm ${plan.highlight ? 'text-cream/60' : 'text-muted-foreground'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-lg ${plan.highlight ? 'text-cream/60' : 'text-muted-foreground'}`}>₹</span>
                    <span className={`text-5xl font-serif ${plan.highlight ? 'text-gold' : 'text-gold'}`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-gold' : 'text-gold'
                      }`} />
                      <span className={`text-sm font-body ${
                        plan.highlight ? 'text-cream/80' : 'text-muted-foreground'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full group ${
                    plan.highlight 
                      ? 'bg-gold text-charcoal hover:bg-gold-light' 
                      : 'bg-charcoal text-cream hover:bg-gold hover:text-charcoal'
                  } font-body tracking-wide transition-all duration-300`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm font-body text-muted-foreground">
            Need a custom package?{' '}
            <a href="#contact" className="text-gold hover:underline underline-offset-4">
              Contact us
            </a>{' '}
            for a personalized quote tailored to your unique event.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
