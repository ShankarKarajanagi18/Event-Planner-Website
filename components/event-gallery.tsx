'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
    alt: 'Elegant wedding reception',
    category: 'Wedding',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200',
    alt: 'Corporate gala event',
    category: 'Corporate',
  },
  {
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200',
    alt: 'Birthday celebration setup',
    category: 'Birthday',
  },
  {
    src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=1200',
    alt: 'Luxury dinner table',
    category: 'Dinner',
  },
  {
    src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200',
    alt: 'Garden party celebration',
    category: 'Garden Party',
  },
  {
    src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200',
    alt: 'Concert event setup',
    category: 'Concert',
  },
  {
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200',
    alt: 'Engagement ceremony',
    category: 'Engagement',
  },
  {
    src: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?q=80&w=1200',
    alt: 'Ballroom decoration',
    category: 'Ballroom',
  },
]

export function EventGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 bg-gold/20 text-gold text-sm font-body tracking-wider rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-cream mb-4">
            Our Event <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-cream/70 font-body max-w-2xl mx-auto leading-relaxed">
            A glimpse into the magical moments we&apos;ve created. Each event tells a 
            unique story of elegance, creativity, and unforgettable memories.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <div 
                className="aspect-square w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${image.src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="px-3 py-1 bg-gold/90 text-charcoal text-xs font-body font-medium rounded-full">
                  {image.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 p-2 text-cream hover:text-gold transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-xl"
              />
              <div className="mt-4 text-center">
                <span className="px-4 py-2 bg-gold/20 text-gold text-sm font-body rounded-full">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
