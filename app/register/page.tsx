'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    setIsLoading(true)
    // Simulate registration
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    // Would redirect to verification or login after registration
  }

  return (
    <main className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:flex-1 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200')` }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="text-center">
            <h2 className="text-4xl font-serif text-cream mb-4">
              Join Our Community
            </h2>
            <p className="text-cream/80 font-body max-w-md mb-8">
              Create an account to start planning your perfect event with 
              our expert team by your side.
            </p>
            <ul className="text-left space-y-3 max-w-sm mx-auto">
              {[
                'Access to exclusive event packages',
                'Personal event dashboard',
                'Direct communication with planners',
                'Save and track your favorites',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-cream/80 font-body">
                  <Check className="w-5 h-5 text-gold shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link href="/" className="inline-block mb-8">
            <span className="text-2xl font-serif text-foreground">Elegance</span>
            <span className="text-2xl font-serif text-gold ml-1">Events</span>
          </Link>

          <h1 className="text-3xl font-serif text-foreground mb-2">
            Create Account
          </h1>
          <p className="text-muted-foreground font-body mb-8">
            Join us and start planning your perfect celebration.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-body text-foreground mb-2">
                  First Name
                </label>
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-body text-foreground mb-2">
                  Last Name
                </label>
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-body text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-body text-foreground mb-2">
                Phone Number
              </label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                placeholder="+1 (234) 567-890"
              />
            </div>

            <div>
              <label className="block text-sm font-body text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="bg-card border-border focus:border-gold focus:ring-gold font-body pr-10"
                  placeholder="Create a strong password"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-body text-foreground mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                placeholder="Confirm your password"
                required
                minLength={8}
              />
            </div>

            <div className="flex items-start gap-3">
              <button
                type="button"
                onClick={() => setAgreed(!agreed)}
                className={`w-5 h-5 rounded border shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                  agreed ? 'bg-gold border-gold' : 'border-border'
                }`}
              >
                {agreed && <Check className="w-3 h-3 text-charcoal" />}
              </button>
              <p className="text-sm text-muted-foreground font-body">
                I agree to the{' '}
                <Link href="/terms" className="text-gold hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-gold hover:underline">Privacy Policy</Link>
              </p>
            </div>

            <Button
              type="submit"
              disabled={isLoading || !agreed}
              className="w-full bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body group transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
              {!isLoading && <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground font-body">
              Already have an account?{' '}
              <Link href="/login" className="text-gold hover:text-gold-dark font-medium">
                Sign in
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
