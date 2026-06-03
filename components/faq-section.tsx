'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 6-12 months in advance for weddings and large events, and 2-3 months for smaller celebrations. However, we do accommodate last-minute requests based on availability.',
  },
  {
    question: 'What is included in your event planning packages?',
    answer: 'Our packages include consultation, design concept development, vendor coordination, timeline creation, and day-of management. Each tier offers different levels of service, from basic coordination to full bespoke event design.',
  },
  {
    question: 'Can you work with my budget?',
    answer: 'Absolutely! We pride ourselves on creating stunning events across various budgets. During our initial consultation, we discuss your vision and budget to craft a tailored plan that maximizes value without compromising elegance.',
  },
  {
    question: 'Do you provide services for destination events?',
    answer: 'Yes, we specialize in destination events both domestically and internationally. Our team handles all logistics, including travel arrangements, local vendor coordination, and on-site management.',
  },
  {
    question: 'What happens if I need to reschedule my event?',
    answer: 'We understand that circumstances change. Our flexible policies allow for rescheduling with advance notice. Specific terms vary by package, and we work closely with you to find the best solution.',
  },
  {
    question: 'Do you offer day-of coordination only?',
    answer: 'Yes, our Essential package includes day-of coordination for clients who have planned their event but need professional management on the actual day. This ensures everything runs smoothly while you enjoy your celebration.',
  },
  {
    question: 'How do you handle vendor selection?',
    answer: 'We have an extensive network of vetted, premium vendors across all categories. Based on your style, preferences, and budget, we recommend trusted professionals and can manage all communications and contracts on your behalf.',
  },
  {
    question: 'What makes Elegance Events different from other planners?',
    answer: 'Our combination of award-winning design, meticulous attention to detail, and personalized service sets us apart. We treat every event as unique, bringing creativity and professionalism to create truly memorable experiences.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-charcoal/10 text-charcoal text-sm font-body tracking-wider rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-charcoal mb-4">
            Frequently Asked <span className="text-gold-dark">Questions</span>
          </h2>
          <p className="text-charcoal/70 font-body max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our event planning services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-white rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow border border-charcoal/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-serif text-charcoal pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gold-dark" />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-charcoal/70 font-body leading-relaxed border-t border-charcoal/10 pt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-charcoal/70 font-body">
            Still have questions?{' '}
            <a href="#contact" className="text-gold-dark hover:underline underline-offset-4 font-medium">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
