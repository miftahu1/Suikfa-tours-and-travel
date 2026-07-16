'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Trophy, 
  Settings, 
  PhoneCall, 
  Mail, 
  Instagram, 
  Facebook, 
  ChevronRight,
  Star
} from 'lucide-react';
import BookingForm from '@/components/BookingForm';
import FleetSection from '@/components/FleetSection';
import images from '@/app/lib/placeholder-images.json';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="text-2xl font-black text-primary tracking-tighter">
            SIUKFA<span className="text-white">TOURS</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#fleet" className="hover:text-primary transition-colors">Fleet</a>
            <a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a>
            <a href="#booking" className="hover:text-primary transition-colors">Booking</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button 
            className="hidden md:flex font-bold px-8 shadow-lg shadow-primary/20"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={images.hero.url}
            alt={images.hero.alt}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-primary" />
              #1 Rental Service in Assam
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
              Explore Assam <br />
              <span className="text-primary italic">Without Limits</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Premium Cars & Bikes for Rent. Reliable vehicles, affordable pricing, and unforgettable journeys across Northeast India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="h-16 px-10 text-lg font-bold shadow-2xl shadow-primary/30"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your Ride
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-10 text-lg font-bold border-white/20 hover:bg-white/10"
                onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Fleet
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, title: "Premium Vehicles", desc: "Top-tier well-maintained fleet" },
              { icon: ShieldCheck, title: "Trusted Service", desc: "Safe and secure rentals" },
              { icon: Clock, title: "24/7 Support", desc: "Always here to help you" },
              { icon: Settings, title: "Regular Maintenance", desc: "Clean and peak performance" }
            ].map((feature, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <FleetSection />

      {/* Why Choose Us */}
      <section id="why-us" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/travel/800/800"
                  alt="Adventure in Assam"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-dark p-8 rounded-2xl border border-white/10 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="text-4xl font-black text-primary">5.0</div>
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                </div>
                <p className="font-bold text-sm">Customer Satisfaction</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Your Journey, Our Priority</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We provide more than just rentals; we provide the freedom to explore the breathtaking landscapes of Northeast India at your own pace.
              </p>
              <div className="space-y-4">
                {[
                  "Immaculately clean interiors",
                  "Verified and background-checked drivers",
                  "Transparent pricing with no hidden costs",
                  "Quick and paperless booking process",
                  "Local expertise and travel tips",
                  "Doorstep delivery and pickup"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-12 h-14 px-8 font-bold" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                Experience the Difference
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <BookingForm />

      {/* Testimonials */}
      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-16">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Rahul Sharma", role: "Solo Traveler", text: "The Himalayan 450 was in top condition. Made my trip to Tawang unforgettable!" },
            { name: "Ananya Das", role: "Business Traveler", text: "Prompt service and the Innova was sparkling clean. Best rental in Guwahati." },
            { name: "Priya Singh", role: "Family Trip", text: "The booking process was so smooth through WhatsApp. Highly recommended!" }
          ].map((t, i) => (
            <div key={i} className="glass-dark p-8 rounded-3xl border border-white/5 relative">
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="italic text-muted-foreground mb-8">"{t.text}"</p>
              <h5 className="font-bold">{t.name}</h5>
              <p className="text-xs text-primary uppercase tracking-widest">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-secondary pt-24 pb-12 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="text-3xl font-black text-primary">SIUKFA</div>
              <p className="text-muted-foreground">
                Providing premium car and bike rental services across Northeast India since 2018. Your adventure starts here.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#fleet" className="hover:text-primary transition-colors">Fleet Gallery</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors">Rental Policies</a></li>
                <li><a href="#booking" className="hover:text-primary transition-colors">Make a Booking</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-primary" />
                  <span>+91 97077 68537</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@siukfa.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Guwahati, Assam, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Newsletter</h4>
              <p className="text-muted-foreground mb-4">Get travel tips and exclusive rental discounts.</p>
              <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-background/50 border-white/10 rounded-lg px-4 flex-grow outline-none focus:border-primary" />
                <Button size="icon" className="shrink-0"><ChevronRight /></Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Siukfa Tours & Travel. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Booking CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <Button 
          className="w-full h-14 shadow-2xl shadow-primary/40 font-bold text-lg"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}