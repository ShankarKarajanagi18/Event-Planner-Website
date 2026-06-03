'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Calendar, Users, MapPin, Clock, CreditCard, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const eventTypes = [
  { value: 'weddings', label: 'Wedding' },
  { value: 'birthdays', label: 'Birthday' },
  { value: 'anniversaries', label: 'Anniversary' },
  { value: 'engagements', label: 'Engagement' },
  { value: 'baby-showers', label: 'Baby Shower' },
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'housewarming', label: 'Housewarming' },
  { value: 'graduations', label: 'Graduation' },
  { value: 'festive', label: 'Festive Event' },
  { value: 'custom', label: 'Custom Event' },
]

const packageOptions = [
  { value: 'essential', label: 'Essential', price: '$2,500' },
  { value: 'premium', label: 'Premium', price: '$5,500' },
  { value: 'luxury', label: 'Luxury', price: '$12,000' },
]

function BookingContent() {
  const searchParams = useSearchParams()
  const eventFromUrl = searchParams.get('event') || ''
  const packageFromUrl = searchParams.get('package') || ''

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Step 1: Event Details
    eventType: eventFromUrl,
    eventDate: '',
    guestCount: '',
    venue: '',
    
    // Step 2: Package Selection
    package: packageFromUrl,
    addOns: [] as string[],
    
    // Step 3: Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  useEffect(() => {
    if (eventFromUrl) setFormData(prev => ({ ...prev, eventType: eventFromUrl }))
    if (packageFromUrl) setFormData(prev => ({ ...prev, package: packageFromUrl }))
  }, [eventFromUrl, packageFromUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const addOns = [
    { id: 'photography', label: 'Professional Photography', price: '+$800' },
    { id: 'videography', label: 'Videography', price: '+$1,200' },
    { id: 'florist', label: 'Premium Florist', price: '+$600' },
    { id: 'entertainment', label: 'Live Entertainment', price: '+$1,500' },
    { id: 'catering', label: 'Gourmet Catering Upgrade', price: '+$2,000' },
  ]

  const toggleAddOn = (id: string) => {
    setFormData(prev => ({
      ...prev,
      addOns: prev.addOns.includes(id)
        ? prev.addOns.filter(a => a !== id)
        : [...prev.addOns, id]
    }))
  }

  if (isSubmitted) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="py-32 bg-background">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-10 h-10 text-gold" />
              </div>
              <h1 className="text-4xl font-serif text-foreground mb-4">
                Booking Request Received!
              </h1>
              <p className="text-muted-foreground font-body mb-8 leading-relaxed">
                Thank you for choosing Elegance Events. Our team will review your 
                booking request and contact you within 24-48 hours to discuss the 
                details and confirm your reservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body">
                    Return Home
                  </Button>
                </Link>
                <Link href="/#events">
                  <Button variant="outline" className="border-border hover:border-gold font-body">
                    Explore More Events
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light mb-6 font-body transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif text-cream mb-4">
            Book Your <span className="text-gold">Event</span>
          </h1>
          <p className="text-cream/70 font-body max-w-xl">
            Complete the form below to start planning your perfect event. 
            Our team will be in touch to finalize the details.
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-background border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {[
              { num: 1, label: 'Event Details', icon: Calendar },
              { num: 2, label: 'Package', icon: CreditCard },
              { num: 3, label: 'Your Info', icon: Users },
            ].map((s, i) => {
              const Icon = s.icon
              return (
                <div key={s.num} className="flex items-center">
                  <div className={`flex items-center gap-3 ${step >= s.num ? 'text-gold' : 'text-muted-foreground'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step > s.num ? 'bg-gold text-charcoal' : 
                      step === s.num ? 'bg-gold/20 text-gold border-2 border-gold' : 
                      'bg-muted text-muted-foreground'
                    }`}>
                      {step > s.num ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span className="hidden sm:block font-body text-sm">{s.label}</span>
                  </div>
                  {i < 2 && (
                    <div className={`w-12 sm:w-24 h-px mx-4 ${step > s.num ? 'bg-gold' : 'bg-border'}`} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Event Details */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-serif text-foreground mb-6">Event Details</h2>
                
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card font-body text-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                    required
                  >
                    <option value="">Select event type</option>
                    {eventTypes.map((type) => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Event Date *
                    </label>
                    <Input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Expected Guests *
                    </label>
                    <Input
                      type="number"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                      placeholder="e.g., 100"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Preferred Venue (Optional)
                  </label>
                  <Input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                    className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                    placeholder="Venue name or 'Need recommendations'"
                  />
                </div>

                <div className="flex justify-end pt-6">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body"
                  >
                    Continue to Package
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Package Selection */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-serif text-foreground mb-6">Select Package</h2>
                
                <div className="grid sm:grid-cols-3 gap-4">
                  {packageOptions.map((pkg) => (
                    <Card
                      key={pkg.value}
                      className={`p-6 cursor-pointer transition-all ${
                        formData.package === pkg.value
                          ? 'border-2 border-gold bg-gold/5'
                          : 'border-2 border-border hover:border-gold/50'
                      }`}
                      onClick={() => setFormData({ ...formData, package: pkg.value })}
                    >
                      <div className="text-center">
                        <h3 className="font-serif text-xl text-foreground mb-2">{pkg.label}</h3>
                        <p className="text-gold font-body font-semibold">{pkg.price}</p>
                      </div>
                      {formData.package === pkg.value && (
                        <div className="absolute top-3 right-3">
                          <Check className="w-5 h-5 text-gold" />
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-serif text-foreground mb-4">Add-Ons (Optional)</h3>
                  <div className="space-y-3">
                    {addOns.map((addon) => (
                      <div
                        key={addon.id}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          formData.addOns.includes(addon.id)
                            ? 'border-gold bg-gold/5'
                            : 'border-border hover:border-gold/50'
                        }`}
                        onClick={() => toggleAddOn(addon.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${
                              formData.addOns.includes(addon.id)
                                ? 'bg-gold border-gold'
                                : 'border-border'
                            }`}>
                              {formData.addOns.includes(addon.id) && (
                                <Check className="w-3 h-3 text-charcoal" />
                              )}
                            </div>
                            <span className="font-body text-foreground">{addon.label}</span>
                          </div>
                          <span className="font-body text-muted-foreground">{addon.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-border hover:border-gold font-body"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-charcoal text-cream hover:bg-gold hover:text-charcoal font-body"
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-serif text-foreground mb-6">Your Information</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      First Name *
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
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      Last Name *
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

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body text-muted-foreground mb-2">
                      Phone *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-card border-border focus:border-gold focus:ring-gold font-body"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Additional Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-card border-border focus:border-gold focus:ring-gold font-body resize-none"
                    rows={4}
                    placeholder="Tell us more about your vision for the event..."
                  />
                </div>

                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-border hover:border-gold font-body"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gold text-charcoal hover:bg-gold-light font-body disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Complete Booking'}
                  </Button>
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground font-body">Loading...</p>
        </div>
      </main>
    }>
      <BookingContent />
    </Suspense>
  )
}
