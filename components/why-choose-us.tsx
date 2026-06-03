'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Heart, Palette, Shield, Users } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Award-Winning Service',
    description: 'Recognized by industry leaders for our exceptional event planning and execution excellence.',
  },
  {
    icon: Palette,
    title: 'Bespoke Design',
    description: 'Every detail is meticulously crafted to reflect your unique vision and personal style.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our seasoned professionals bring decades of combined experience to every event.',
  },
  {
    icon: Clock,
    title: 'Timeless Execution',
    description: 'Flawless coordination ensures every moment unfolds exactly as planned.',
  },
  {
    icon: Shield,
    title: 'Trusted Vendors',
    description: 'Access to our curated network of premium vendors and exclusive partnerships.',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Dedicated attention to your needs, making your journey stress-free and enjoyable.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-gold/10 text-gold text-sm font-body tracking-wider rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-6">
              Creating Magic <br />
              <span className="text-gold">Since 2010</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              With over a decade of experience in crafting extraordinary events, 
              we&apos;ve established ourselves as the premier choice for those who 
              demand nothing but the best. Our commitment to excellence and 
              attention to detail sets us apart in the industry.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { number: '500+', label: 'Events' },
                { number: '50+', label: 'Vendors' },
                { number: '15+', label: 'Awards' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-serif text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm font-body text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-gold/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {feature.description}
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
