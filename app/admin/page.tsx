'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  CreditCard, 
  Settings, 
  LogOut,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  DollarSign,
  UserCheck,
  Clock,
  ChevronRight,
  MoreHorizontal,
  Eye
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin', active: true },
  { icon: Calendar, label: 'Bookings', href: '/admin/bookings' },
  { icon: Users, label: 'Clients', href: '/admin/clients' },
  { icon: CreditCard, label: 'Payments', href: '/admin/payments' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

const stats = [
  { label: 'Total Bookings', value: '247', change: '+12%', icon: Calendar, color: 'bg-gold/20 text-gold' },
  { label: 'Revenue', value: '$128,430', change: '+8%', icon: DollarSign, color: 'bg-green-500/20 text-green-600' },
  { label: 'New Clients', value: '54', change: '+23%', icon: UserCheck, color: 'bg-blue-500/20 text-blue-600' },
  { label: 'Pending', value: '12', change: '-5%', icon: Clock, color: 'bg-orange-500/20 text-orange-600' },
]

const recentBookings = [
  { 
    id: 'EE-2024-001', 
    client: 'Sarah Thompson', 
    event: 'Wedding Reception', 
    date: 'Dec 15, 2024', 
    status: 'Confirmed',
    amount: '$12,500'
  },
  { 
    id: 'EE-2024-002', 
    client: 'James Rodriguez', 
    event: 'Corporate Gala', 
    date: 'Dec 20, 2024', 
    status: 'Pending',
    amount: '$8,000'
  },
  { 
    id: 'EE-2024-003', 
    client: 'Emily Chen', 
    event: 'Birthday Celebration', 
    date: 'Dec 22, 2024', 
    status: 'Confirmed',
    amount: '$3,500'
  },
  { 
    id: 'EE-2024-004', 
    client: 'Michael Brown', 
    event: 'Anniversary Dinner', 
    date: 'Dec 28, 2024', 
    status: 'In Progress',
    amount: '$5,000'
  },
  { 
    id: 'EE-2024-005', 
    client: 'Lisa Anderson', 
    event: 'Engagement Party', 
    date: 'Jan 5, 2025', 
    status: 'Pending',
    amount: '$4,200'
  },
]

const upcomingEvents = [
  { name: 'Thompson Wedding', date: 'Dec 15', time: '4:00 PM', venue: 'Grand Ballroom' },
  { name: 'Rodriguez Gala', date: 'Dec 20', time: '7:00 PM', venue: 'Skyline Terrace' },
  { name: 'Chen Birthday', date: 'Dec 22', time: '6:00 PM', venue: 'Garden Pavilion' },
]

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-charcoal transform transition-transform lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-serif text-cream">Elegance</span>
              <span className="text-xl font-serif text-gold ml-1">Events</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-cream hover:text-gold"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg font-body transition-colors ${
                    link.active
                      ? 'bg-gold/20 text-gold'
                      : 'text-cream/70 hover:text-cream hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-serif">A</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-body text-cream">Admin User</p>
                <p className="text-xs font-body text-cream/60">admin@elegance.com</p>
              </div>
              <button className="text-cream/60 hover:text-cream">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-charcoal/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-background border-b border-border">
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-foreground"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search bookings, clients..."
                  className="w-64 pl-10 bg-muted border-0 font-body"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-muted-foreground hover:text-foreground">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gold rounded-full" />
              </button>
              <Link href="/">
                <Button variant="outline" size="sm" className="font-body border-border">
                  View Site
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-serif text-foreground mb-1">Dashboard</h1>
            <p className="text-muted-foreground font-body">Welcome back! Here&apos;s what&apos;s happening.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="p-6 border-border">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-body text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-serif text-foreground">{stat.value}</p>
                      </div>
                      <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-3">
                      <TrendingUp className={`w-4 h-4 ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`} />
                      <span className={`text-sm font-body ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.change}
                      </span>
                      <span className="text-sm font-body text-muted-foreground">vs last month</span>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Bookings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="border-border">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-lg font-serif text-foreground">Recent Bookings</h2>
                  <Link href="/admin/bookings" className="text-sm font-body text-gold hover:text-gold-dark flex items-center gap-1">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left text-xs font-body font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                          Booking ID
                        </th>
                        <th className="text-left text-xs font-body font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                          Client
                        </th>
                        <th className="text-left text-xs font-body font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                          Event
                        </th>
                        <th className="text-left text-xs font-body font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                          Date
                        </th>
                        <th className="text-left text-xs font-body font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                          Status
                        </th>
                        <th className="text-left text-xs font-body font-medium text-muted-foreground uppercase tracking-wider px-6 py-3">
                          Amount
                        </th>
                        <th className="px-6 py-3"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-muted/30">
                          <td className="px-6 py-4 text-sm font-body text-gold">{booking.id}</td>
                          <td className="px-6 py-4 text-sm font-body text-foreground">{booking.client}</td>
                          <td className="px-6 py-4 text-sm font-body text-muted-foreground">{booking.event}</td>
                          <td className="px-6 py-4 text-sm font-body text-muted-foreground">{booking.date}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-body rounded-full ${
                              booking.status === 'Confirmed' 
                                ? 'bg-green-500/20 text-green-600'
                                : booking.status === 'Pending'
                                ? 'bg-orange-500/20 text-orange-600'
                                : 'bg-blue-500/20 text-blue-600'
                            }`}>
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm font-body font-medium text-foreground">{booking.amount}</td>
                          <td className="px-6 py-4">
                            <button className="text-muted-foreground hover:text-foreground">
                              <MoreHorizontal className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Card className="border-border">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="text-lg font-serif text-foreground">Upcoming Events</h2>
                  <Calendar className="w-5 h-5 text-gold" />
                </div>
                <div className="p-6 space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
                    >
                      <div className="text-center min-w-[48px]">
                        <p className="text-xs font-body text-muted-foreground uppercase">{event.date.split(' ')[0]}</p>
                        <p className="text-lg font-serif text-gold">{event.date.split(' ')[1]}</p>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-body font-medium text-foreground">{event.name}</p>
                        <p className="text-xs font-body text-muted-foreground">{event.time} • {event.venue}</p>
                      </div>
                      <button className="text-muted-foreground hover:text-gold">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <Button variant="outline" className="w-full font-body border-border hover:border-gold">
                    View Calendar
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  )
}
