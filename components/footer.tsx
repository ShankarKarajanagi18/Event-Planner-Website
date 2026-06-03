'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Linkedin, Heart } from 'lucide-react'

const footerLinks = {
  services: [
    { label: 'Weddings', href: '/events/weddings' },
    { label: 'Corporate Events', href: '/events/corporate' },
    { label: 'Birthday Parties', href: '/events/birthdays' },
    { label: 'Anniversaries', href: '/events/anniversaries' },
    { label: 'Custom Events', href: '/events/custom' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Careers', href: '/careers' },
  ],
  support: [
    { label: 'Contact Us', href: '#contact' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-serif text-foreground">Elegance</span>
              <span className="text-2xl font-serif text-gold ml-1">Events</span>
            </Link>
            <p className="text-muted-foreground font-body leading-relaxed mb-6 max-w-sm">
              Creating unforgettable moments and extraordinary celebrations since 2010. 
              Let us bring your vision to life with elegance and sophistication.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-gold hover:text-charcoal transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-foreground font-serif text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground font-body hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-body text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Elegance Events. All rights reserved.
            </p>
            <p className="text-sm font-body text-muted-foreground flex items-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-gold fill-gold" /> for unforgettable moments
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
