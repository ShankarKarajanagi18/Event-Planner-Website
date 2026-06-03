'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Priya & Arjun Sharma',
    event: 'Wedding Reception',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200',
    rating: 5,
    quote: 'Elegance Events transformed our wedding day into an absolute fairytale. Every detail was perfect, from the stunning floral arrangements to the seamless coordination. They truly made our dreams come true.',
  },
  {
    id: 2,
    name: 'Rajesh Krishnamurthy',
    event: 'Corporate Gala',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200',
    rating: 5,
    quote: 'Our annual corporate gala was elevated to new heights thanks to the incredible team. The attention to detail and professionalism exceeded all expectations. Our clients are still talking about it!',
  },
  {
    id: 3,
    name: 'Ananya Patel',
    event: '50th Birthday Celebration',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200',
    rating: 5,
    quote: 'Planning my mother&apos;s milestone birthday seemed daunting until we found Elegance Events. They handled everything with grace and creativity. The surprise party was absolutely magical!',
  },
  {
    id: 4,
    name: 'Vikram & Meera Reddy',
    event: 'Anniversary Dinner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200',
    rating: 5,
    quote: 'For our 25th anniversary, we wanted something truly special. The intimate dinner they organized was beyond our wildest imagination. Pure elegance and romance in every detail.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIsAutoPlaying(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative Quote */}
      <div className="absolute top-12 left-12 opacity-5">
        <Quote className="w-48 h-48 text-charcoal" />
      </div>
      <div className="absolute bottom-12 right-12 opacity-5 rotate-180">
        <Quote className="w-48 h-48 text-charcoal" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-charcoal/10 text-charcoal text-sm font-body tracking-wider rounded-full mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">
            What Our Clients <span className="text-gold-dark">Say</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold to-gold-dark p-1">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed mb-8 max-w-3xl mx-auto">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div>
                <p className="text-lg font-serif text-charcoal">
                  {testimonials[current].name}
                </p>
                <p className="text-sm font-body text-charcoal/60">
                  {testimonials[current].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-charcoal/20 hover:border-gold hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrent(index)
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current 
                      ? 'w-8 bg-gold' 
                      : 'bg-charcoal/20 hover:bg-charcoal/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-charcoal/20 hover:border-gold hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
