"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, MapPin, Star, Phone, User, CreditCard, ArrowLeft, Shield } from "lucide-react";
import { KYCTrustIndicator } from "@/components/kyc/kyc-components";
import type { KYCStatus } from "@/components/kyc/kyc-components";

// Mock equipment data for demo
const selectedEquipment = {
  id: 1,
  name: "Mahindra 575 DI Tractor",
  type: "Tractor",
  price: 500,
  owner: "Ramesh Kumar",
  location: "Trichy, Tamil Nadu",
  village: "Manachanallur",
  rating: 4.8,
  reviews: 23,
  image: "🚜",
  description: "50 HP, excellent for paddy fields and sugarcane farming",
  specifications: ["50 HP", "4WD", "Power Steering", "Hydraulic Lift"],
  crops: ["Rice", "Sugarcane", "Cotton"],
  ownerPhone: "+91 9876543210",
  ownerCrops: "Rice, Sugarcane, Cotton (25 acres)",
  kycStatus: "verified" as KYCStatus
};

// Header Component
function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <div className="text-3xl">🌾</div>
          <div>
            <h1 className="text-xl font-bold text-primary">Faarm Pool</h1>
            <p className="text-xs text-muted-foreground">Booking Equipment</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link href="/marketplace" className="text-sm hover:text-primary transition-colors">Marketplace</Link>
          <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/booking" className="text-sm text-primary font-medium">Booking</Link>
          <Link href="/kyc" className="text-sm hover:text-primary transition-colors">KYC Verify</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="btn-ripple"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

// Booking Steps
enum BookingStep {
  DETAILS = 1,
  SCHEDULE = 2,
  CONTACT = 3,
  PAYMENT = 4,
  CONFIRMATION = 5
}

// Step Indicator Component
function StepIndicator({ currentStep }: { currentStep: BookingStep }) {
  const steps = [
    { step: BookingStep.DETAILS, label: "Equipment", icon: "🚜" },
    { step: BookingStep.SCHEDULE, label: "Schedule", icon: "📅" },
    { step: BookingStep.CONTACT, label: "Contact", icon: "👤" },
    { step: BookingStep.PAYMENT, label: "Payment", icon: "💳" },
    { step: BookingStep.CONFIRMATION, label: "Confirm", icon: "✅" }
  ];

  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      {steps.map((step, index) => (
        <div key={step.step} className="flex items-center">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors ${
            currentStep >= step.step 
              ? "bg-primary text-primary-foreground border-primary" 
              : "bg-background border-muted-foreground text-muted-foreground"
          }`}>
            <span className="text-sm">{step.icon}</span>
          </div>
          <span className={`ml-2 text-sm font-medium hidden md:block ${
            currentStep >= step.step ? "text-primary" : "text-muted-foreground"
          }`}>
            {step.label}
          </span>
          {index < steps.length - 1 && (
            <div className={`mx-4 h-0.5 w-8 hidden md:block ${
              currentStep > step.step ? "bg-primary" : "bg-muted"
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}

// Equipment Details Step
function EquipmentDetailsStep({ onNext }: { onNext: () => void }) {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <div className="text-2xl">{selectedEquipment.image}</div>
          <span>{selectedEquipment.name}</span>
        </CardTitle>
        <CardDescription>{selectedEquipment.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Price */}
        <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
          <div>
            <span className="text-2xl font-bold text-primary">₹{selectedEquipment.price}</span>
            <span className="text-sm text-muted-foreground">/hour</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{selectedEquipment.rating}</span>
            <span className="text-sm text-muted-foreground">({selectedEquipment.reviews} reviews)</span>
          </div>
        </div>

        {/* Owner Info */}
        <div className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
          <div className="text-3xl">👨‍🌾</div>
          <div className="flex-1">
            <h4 className="font-semibold">{selectedEquipment.owner}</h4>
            <p className="text-sm text-muted-foreground flex items-center">
              <MapPin className="h-3 w-3 mr-1" />
              {selectedEquipment.village}, {selectedEquipment.location}
            </p>
            <p className="text-sm text-muted-foreground">
              Grows: {selectedEquipment.ownerCrops}
            </p>
          </div>
        </div>

        {/* KYC Trust Indicator */}
        <KYCTrustIndicator 
          status={selectedEquipment.kycStatus} 
          ownerName={selectedEquipment.owner} 
          compact={false} 
        />

        {/* Specifications */}
        <div>
          <h4 className="font-semibold mb-3">Equipment Specifications</h4>
          <div className="grid grid-cols-2 gap-2">
            {selectedEquipment.specifications.map((spec, index) => (
              <div key={index} className="px-3 py-2 bg-muted rounded text-sm">
                {spec}
              </div>
            ))}
          </div>
        </div>

        {/* Suitable Crops */}
        <div>
          <h4 className="font-semibold mb-3">Suitable for Crops</h4>
          <div className="flex flex-wrap gap-2">
            {selectedEquipment.crops.map((crop, index) => (
              <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded text-sm">
                {crop}
              </span>
            ))}
          </div>
        </div>

        <Button onClick={onNext} className="w-full btn-ripple">
          Continue to Schedule
        </Button>
      </CardContent>
    </Card>
  );
}

interface BookingData {
  date?: string;
  time?: string;
  duration?: number;
  totalCost?: number;
  name?: string;
  village?: string;
  phone?: string;
  purpose?: string;
}

// Schedule Step
function ScheduleStep({ onNext, onBack, bookingData, setBookingData }: {
  onNext: () => void;
  onBack: () => void;
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
}) {
  const [selectedDate, setSelectedDate] = useState(bookingData.date || "");
  const [selectedTime, setSelectedTime] = useState(bookingData.time || "");
  const [duration, setDuration] = useState(bookingData.duration || 4);

  const timeSlots = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00", "17:00", "18:00"
  ];

  const handleContinue = () => {
    setBookingData({
      ...bookingData,
      date: selectedDate,
      time: selectedTime,
      duration: duration,
      totalCost: selectedEquipment.price * duration
    });
    onNext();
  };

  // Generate next 7 days for date selection
  const availableDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <span>Select Date & Time</span>
        </CardTitle>
        <CardDescription>Choose when you need the equipment</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Date Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Date</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {availableDates.map(date => {
              const dateObj = new Date(date);
              const dayName = dateObj.toLocaleDateString('en-IN', { weekday: 'short' });
              const dayNum = dateObj.getDate();
              const month = dateObj.toLocaleDateString('en-IN', { month: 'short' });
              
              return (
                <button
                  key={date}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-lg border text-center transition-colors ${
                    selectedDate === date 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-background border-muted hover:border-primary"
                  }`}
                >
                  <div className="text-xs text-muted-foreground">{dayName}</div>
                  <div className="font-semibold">{dayNum}</div>
                  <div className="text-xs text-muted-foreground">{month}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-sm font-medium mb-3">Select Time</label>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {timeSlots.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`p-2 rounded-lg border text-center transition-colors ${
                  selectedTime === time 
                    ? "bg-primary text-primary-foreground border-primary" 
                    : "bg-background border-muted hover:border-primary"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <label className="block text-sm font-medium mb-3">Duration (hours)</label>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration(Math.max(1, duration - 1))}
            >
              -
            </Button>
            <span className="text-xl font-semibold w-12 text-center">{duration}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setDuration(duration + 1)}
            >
              +
            </Button>
          </div>
        </div>

        {/* Cost Summary */}
        {selectedDate && selectedTime && (
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-2">Booking Summary</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Date:</span>
                <span>{new Date(selectedDate).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span>Time:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span>Duration:</span>
                <span>{duration} hours</span>
              </div>
              <div className="flex justify-between font-semibold text-primary">
                <span>Total Cost:</span>
                <span>₹{selectedEquipment.price * duration}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onBack} className="flex-1">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            onClick={handleContinue} 
            className="flex-1 btn-ripple"
            disabled={!selectedDate || !selectedTime}
          >
            Continue
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Contact Step
function ContactStep({ onNext, onBack, bookingData, setBookingData }: {
  onNext: () => void;
  onBack: () => void;
  bookingData: BookingData;
  setBookingData: (data: BookingData) => void;
}) {
  const [formData, setFormData] = useState({
    name: bookingData.name || "",
    village: bookingData.village || "",
    phone: bookingData.phone || "",
    purpose: bookingData.purpose || ""
  });

  const handleContinue = () => {
    setBookingData({ ...bookingData, ...formData });
    onNext();
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <User className="h-5 w-5" />
          <span>Your Information</span>
        </CardTitle>
        <CardDescription>Tell us about yourself (no account needed)</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* KYC Notice for High-Value Equipment */}
        {selectedEquipment.price > 800 && (
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-200 flex items-center">
              <Shield className="h-4 w-4 mr-2" />
              KYC Verification Recommended
            </h4>
            <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
              For high-value equipment rentals (₹800+/hour), we recommend completing KYC verification 
              to build trust and ensure smoother transactions.
            </p>
            <Link href="/kyc">
              <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors">
                Verify Identity
              </button>
            </Link>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Your Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Village *</label>
            <input
              type="text"
              value={formData.village}
              onChange={(e) => setFormData({ ...formData, village: e.target.value })}
              placeholder="Your village name"
              className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Phone Number *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9876543210"
            className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Purpose of Use</label>
          <textarea
            value={formData.purpose}
            onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
            placeholder="What will you use the equipment for? (e.g., land preparation for rice farming)"
            rows={3}
            className="w-full px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Owner Contact Info */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-2">Owner Contact</h4>
          <div className="flex items-center space-x-3">
            <div className="text-2xl">👨‍🌾</div>
            <div>
              <p className="font-medium">{selectedEquipment.owner}</p>
              <p className="text-sm text-muted-foreground flex items-center">
                <Phone className="h-3 w-3 mr-1" />
                {selectedEquipment.ownerPhone}
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onBack} className="flex-1">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            onClick={handleContinue} 
            className="flex-1 btn-ripple"
            disabled={!formData.name || !formData.village || !formData.phone}
          >
            Continue to Payment
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Payment Step
function PaymentStep({ onNext, onBack, bookingData }: {
  onNext: () => void;
  onBack: () => void;
  bookingData: BookingData;
}) {
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const handlePayment = () => {
    // In a real app, integrate with Razorpay here
    setTimeout(() => {
      onNext();
    }, 2000);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Payment</span>
        </CardTitle>
        <CardDescription>Secure payment powered by Razorpay</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Booking Summary */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-3">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Equipment:</span>
              <span>{selectedEquipment.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Date:</span>
              <span>{bookingData.date ? new Date(bookingData.date).toLocaleDateString('en-IN') : ''}</span>
            </div>
            <div className="flex justify-between">
              <span>Time:</span>
              <span>{bookingData.time} ({bookingData.duration} hours)</span>
            </div>
            <div className="flex justify-between">
              <span>Renter:</span>
              <span>{bookingData.name}</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-lg text-primary">
              <span>Total Amount:</span>
              <span>₹{bookingData.totalCost}</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h4 className="font-semibold mb-3">Payment Method</h4>
          <div className="space-y-2">
            {[
              { id: "upi", label: "UPI (GPay, PhonePe, Paytm)", icon: "📱" },
              { id: "card", label: "Credit/Debit Card", icon: "💳" },
              { id: "netbanking", label: "Net Banking", icon: "🏦" }
            ].map(method => (
              <button
                key={method.id}
                onClick={() => setPaymentMethod(method.id)}
                className={`w-full p-3 rounded-lg border text-left transition-colors ${
                  paymentMethod === method.id 
                    ? "bg-primary/10 border-primary text-primary" 
                    : "bg-background border-muted hover:border-primary"
                }`}
              >
                <span className="mr-3">{method.icon}</span>
                {method.label}
              </button>
            ))}
          </div>
        </div>

        {/* Security Note */}
        <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
          <p className="text-sm text-green-800 dark:text-green-200">
            🔒 Your payment is secured by Razorpay with 256-bit SSL encryption
          </p>
        </div>

        <div className="flex space-x-3">
          <Button variant="outline" onClick={onBack} className="flex-1">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button onClick={handlePayment} className="flex-1 btn-ripple">
            Pay ₹{bookingData.totalCost}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Confirmation Step
function ConfirmationStep({ bookingData }: { bookingData: BookingData }) {
  const bookingId = `FP${Date.now().toString().slice(-6)}`;

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="text-6xl mb-4">✅</div>
        <CardTitle className="text-2xl text-green-600">Booking Confirmed!</CardTitle>
        <CardDescription>Your equipment rental has been successfully booked</CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Booking ID */}
        <div className="text-center p-4 bg-muted/50 rounded-lg">
          <p className="text-sm text-muted-foreground">Booking ID</p>
          <p className="text-xl font-bold text-primary">{bookingId}</p>
        </div>

        {/* Booking Details */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <h4 className="font-semibold mb-3">Booking Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Equipment:</span>
              <span>{selectedEquipment.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Owner:</span>
              <span>{selectedEquipment.owner}</span>
            </div>
            <div className="flex justify-between">
              <span>Date & Time:</span>
              <span>{bookingData.date ? new Date(bookingData.date).toLocaleDateString('en-IN') : ''} at {bookingData.time || ''}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{bookingData.duration} hours</span>
            </div>
            <div className="flex justify-between font-semibold text-primary">
              <span>Amount Paid:</span>
              <span>₹{bookingData.totalCost}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="p-4 bg-primary/10 rounded-lg">
          <h4 className="font-semibold mb-2 text-primary">What&apos;s Next?</h4>
          <ul className="space-y-1 text-sm">
            <li>• Owner will contact you at {bookingData.phone}</li>
            <li>• Coordinate pickup/delivery details</li>
            <li>• Equipment usage instructions will be provided</li>
            <li>• Payment is held securely until completion</li>
          </ul>
        </div>

        <div className="flex space-x-3">
          <Link href="/marketplace" className="flex-1">
            <Button variant="outline" className="w-full">
              Browse More Equipment
            </Button>
          </Link>
          <Link href="/dashboard" className="flex-1">
            <Button className="w-full btn-ripple">
              View Dashboard
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

// Main Booking Page Component
export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState<BookingStep>(BookingStep.DETAILS);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, BookingStep.CONFIRMATION) as BookingStep);
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, BookingStep.DETAILS) as BookingStep);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-teal-50/50 dark:from-green-950/20 dark:to-teal-950/20">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <StepIndicator currentStep={currentStep} />

            {currentStep === BookingStep.DETAILS && (
              <EquipmentDetailsStep onNext={nextStep} />
            )}
            
            {currentStep === BookingStep.SCHEDULE && (
              <ScheduleStep 
                onNext={nextStep} 
                onBack={prevStep}
                bookingData={bookingData}
                setBookingData={setBookingData}
              />
            )}
            
            {currentStep === BookingStep.CONTACT && (
              <ContactStep 
                onNext={nextStep} 
                onBack={prevStep}
                bookingData={bookingData}
                setBookingData={setBookingData}
              />
            )}
            
            {currentStep === BookingStep.PAYMENT && (
              <PaymentStep 
                onNext={nextStep} 
                onBack={prevStep}
                bookingData={bookingData}
              />
            )}
            
            {currentStep === BookingStep.CONFIRMATION && (
              <ConfirmationStep bookingData={bookingData} />
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}