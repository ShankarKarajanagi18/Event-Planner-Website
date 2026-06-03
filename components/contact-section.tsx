'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const eventTypes = [
  'Wedding',
  'Birthday',
  'Anniversary',
  'Corporate Event',
  'Engagement',
  'Baby Shower',
  'Graduation',
  'Other',
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 bg-gold/20 text-gold text-sm font-body tracking-wider rounded-full mb-4">
              CONTACT US
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-cream mb-6">
              Let&apos;s Create <br />
              <span className="text-gold">Magic Together</span>
            </h2>
            <p className="text-cream/70 font-body leading-relaxed mb-10">
              Ready to start planning your dream event? Get in touch with us today. 
              Our team is here to bring your vision to life with elegance and expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, label: 'Address', value: '123 MG Road, Brigade Gateway\nBengaluru, Karnataka 560001' },
                { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
                { icon: Mail, label: 'Email', value: 'hello@eleganceevents.com' },
                { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9AM - 6PM\nSat: 10AM - 4PM' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm font-body text-cream/50 mb-1">{item.label}</p>
                      <p className="font-body text-cream whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cream rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Send className="w-8 h-8 text-gold-dark" />
                  </div>
                  <h3 className="text-2xl font-serif text-charcoal mb-2">Thank You!</h3>
                  <p className="text-charcoal/70 font-body">
                    We&apos;ve received your inquiry and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body"
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-serif text-charcoal mb-6">Book a Consultation</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-body text-charcoal/70 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-white border-charcoal/20 focus:border-gold focus:ring-gold font-body"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-body text-charcoal/70 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white border-charcoal/20 focus:border-gold focus:ring-gold font-body"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-body text-charcoal/70 mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-white border-charcoal/20 focus:border-gold focus:ring-gold font-body"
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                    <div>
                      <label htmlFor="eventDate" className="block text-sm font-body text-charcoal/70 mb-2">
                        Event Date
                      </label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="bg-white border-charcoal/20 focus:border-gold focus:ring-gold font-body"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eventType" className="block text-sm font-body text-charcoal/70 mb-2">
                      Event Type *
                    </label>
                    <select
                      id="eventType"
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-charcoal/20 bg-white font-body text-charcoal focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-body text-charcoal/70 mb-2">
                      Tell Us About Your Event *
                    </label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-white border-charcoal/20 focus:border-gold focus:ring-gold font-body resize-none"
                      placeholder="Share your vision, guest count, budget range, and any special requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body tracking-wide transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </Button>

                  <p className="text-xs font-body text-charcoal/50 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
