'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Fuel, Settings2, ArrowRight } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';
import { motion } from 'framer-motion';

export default function FleetSection() {
  return (
    <section id="fleet" className="py-24 container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Fleet</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose from our selection of well-maintained cars and adventure bikes for your journey through the hills of Assam.
        </p>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-primary rounded-full"></span>
          Luxury Cars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.cars.map((car, index) => (
            <VehicleCard key={car.id} vehicle={car} index={index} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-primary rounded-full"></span>
          Adventure Bikes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.bikes.map((bike, index) => (
            <VehicleCard key={bike.id} vehicle={bike} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VehicleCard({ vehicle, index }: { vehicle: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-secondary/50 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/30 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={vehicle.url}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          data-ai-hint={vehicle.category + " rental vehicle"}
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary/90 text-primary-foreground font-bold text-sm px-3 py-1">
            ₹{vehicle.price}/day
          </Badge>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{vehicle.name}</h4>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">{vehicle.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-white/10 mb-6">
          {vehicle.capacity && (
            <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
              <Users className="w-4 h-4 text-primary/80" />
              <span>{vehicle.capacity} Seats</span>
            </div>
          )}
          <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <Fuel className="w-4 h-4 text-primary/80" />
            <span>{vehicle.fuel}</span>
          </div>
          <div className="flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <Settings2 className="w-4 h-4 text-primary/80" />
            <span>{vehicle.transmission}</span>
          </div>
        </div>

        <Button 
          className="w-full group/btn font-bold h-11"
          onClick={() => {
            document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Rent Now
          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </div>
    </motion.div>
  );
}