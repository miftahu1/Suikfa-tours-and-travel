'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Car, Bike, Calculator } from 'lucide-react';
import images from '@/app/lib/placeholder-images.json';

const WHATSAPP_NUMBER = "9707768537";

const VEHICLE_DATA = {
  Cars: images.cars,
  Bikes: images.bikes,
};

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '',
    vehicleType: 'Cars' as keyof typeof VEHICLE_DATA,
    vehicleModel: '',
    requirements: '',
    agreed: false
  });

  const [calc, setCalc] = useState({
    days: 0,
    pricePerDay: 0,
    total: 0
  });

  useEffect(() => {
    if (formData.pickupDate && formData.returnDate) {
      const start = new Date(formData.pickupDate);
      const end = new Date(formData.returnDate);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
      
      const currentList = VEHICLE_DATA[formData.vehicleType];
      const vehicle = currentList.find(v => v.name === formData.vehicleModel);
      const ppd = vehicle ? vehicle.price : 0;
      
      setCalc({
        days: diffDays,
        pricePerDay: ppd,
        total: diffDays * ppd
      });
    }
  }, [formData.pickupDate, formData.returnDate, formData.vehicleType, formData.vehicleModel]);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the rental terms.");
      return;
    }

    const message = `Hello Siukfa Tours & Travel,

I'd like to rent a vehicle.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Vehicle:* ${formData.vehicleModel} (${formData.vehicleType})
*Pickup:* ${formData.pickupDate} at ${formData.pickupTime}
*Return:* ${formData.returnDate}
*Rental Days:* ${calc.days}
*Estimated Price:* ₹${calc.total}
*Special Requests:* ${formData.requirements || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Book Your Journey</h2>
            <p className="text-muted-foreground">Fill in the details below and we'll confirm your rental instantly via WhatsApp.</p>
          </div>

          <Card className="glass-dark border-white/10 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-6 h-6 text-primary" />
                Rental Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBooking} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input 
                      required 
                      placeholder="John Doe" 
                      className="bg-background/50"
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input 
                      required 
                      type="tel" 
                      placeholder="9707768537" 
                      className="bg-background/50"
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input 
                      required 
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-background/50"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Date</Label>
                      <Input 
                        required 
                        type="date" 
                        className="bg-background/50"
                        onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Return Date</Label>
                      <Input 
                        required 
                        type="date" 
                        className="bg-background/50"
                        onChange={(e) => handleInputChange('returnDate', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pickup Time</Label>
                      <Input 
                        required 
                        type="time" 
                        className="bg-background/50"
                        onChange={(e) => handleInputChange('pickupTime', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Vehicle Type</Label>
                      <Select 
                        onValueChange={(v) => {
                          handleInputChange('vehicleType', v);
                          handleInputChange('vehicleModel', '');
                        }}
                        defaultValue="Cars"
                      >
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Cars">Cars</SelectItem>
                          <SelectItem value="Bikes">Bikes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Vehicle Model</Label>
                    <Select 
                      onValueChange={(v) => handleInputChange('vehicleModel', v)}
                      value={formData.vehicleModel}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select model" />
                      </SelectTrigger>
                      <SelectContent>
                        {VEHICLE_DATA[formData.vehicleType].map((v: any) => (
                          <SelectItem key={v.id} value={v.name}>{v.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="md:col-span-2 space-y-4 pt-4">
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary rounded-full">
                        <Calculator className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Estimated Cost</p>
                        <h3 className="text-3xl font-bold">₹{calc.total}</h3>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <p>{calc.days} Day(s) @ ₹{calc.pricePerDay}/day</p>
                      <p className="text-primary font-medium">No hidden charges</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Special Requirements</Label>
                    <Textarea 
                      placeholder="Any specific requests or needs?" 
                      className="bg-background/50 min-h-[100px]"
                      onChange={(e) => handleInputChange('requirements', e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2 py-2">
                    <Checkbox 
                      id="terms" 
                      onCheckedChange={(v) => handleInputChange('agreed', !!v)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the rental terms and conditions
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
                    Book Now via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
