'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Palette, Calendar, PartyPopper } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consultation',
    description: 'Share your vision with us during a personalized consultation. We listen to your dreams, preferences, and requirements.',
  },
  {
    icon: Palette,
    step: '02',
    title: 'Design & Planning',
    description: 'Our creative team crafts a bespoke event concept, including design themes, vendor selection, and detailed timelines.',
  },
  {
    icon: Calendar,
    step: '03',
    title: 'Coordination',
    description: 'We manage every detail, from vendor communications to logistics, ensuring seamless preparation for your big day.',
  },
  {
    icon: PartyPopper,
    step: '04',
    title: 'Celebration',
    description: 'Relax and enjoy your event while we handle everything behind the scenes, creating magical moments to remember.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
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
            PROCESS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Our streamlined process ensures a stress-free journey from initial 
            concept to unforgettable celebration.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative text-center group"
                >
                  {/* Step Number */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-background border-2 border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-gold text-charcoal text-sm font-body font-semibold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
