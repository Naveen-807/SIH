"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";

// Animation variants
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
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
        <div className="flex items-center space-x-3">
          <div className="text-3xl">🌾</div>
          <div>
            <h1 className="text-xl font-bold text-primary">Faarm Pool</h1>
            <p className="text-xs text-muted-foreground">Empowering Farmers</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link>
          <Link href="#benefits" className="text-sm hover:text-primary transition-colors">Benefits</Link>
          <Link href="#testimonials" className="text-sm hover:text-primary transition-colors">Stories</Link>
          <Link href="/marketplace" className="text-sm hover:text-primary transition-colors">Browse Equipment</Link>
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
          <Link href="/marketplace">
            <Button className="btn-ripple">Get Started</Button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            variants={staggerChild}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Empowering Farmers Through Sharing
          </motion.h1>
          
          <motion.p 
            variants={staggerChild}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Connect with fellow farmers to rent and share agricultural equipment. Reduce costs, increase productivity, build community.
          </motion.p>

          <motion.div 
            variants={staggerChild}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/marketplace">
              <Button size="lg" className="btn-ripple text-lg px-8 py-3">
                Browse Equipment 🚜
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="btn-ripple text-lg px-8 py-3">
              List Your Equipment 📋
            </Button>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            variants={staggerChild}
            className="relative max-w-2xl mx-auto"
          >
            <div className="bg-white/10 dark:bg-black/10 rounded-2xl p-8 backdrop-blur-sm border">
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">👨‍🌾</div>
                  <p className="text-sm font-medium">Farmer A</p>
                  <p className="text-xs text-muted-foreground">Needs Harvester</p>
                </div>
                
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-3xl"
                >
                  🚜
                </motion.div>
                
                <div className="text-center">
                  <div className="text-4xl mb-2">👩‍🌾</div>
                  <p className="text-sm font-medium">Farmer B</p>
                  <p className="text-xs text-muted-foreground">Owns Harvester</p>
                </div>
              </div>
              <p className="text-center mt-4 text-sm text-muted-foreground">
                Seamless equipment sharing between farmers
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      icon: "📋",
      title: "List",
      description: "Farmers list their available equipment with photos, pricing, and availability"
    },
    {
      icon: "🔍",
      title: "Search",
      description: "Browse and filter equipment by type, location, price, and availability"
    },
    {
      icon: "📅",
      title: "Book",
      description: "Select dates, make secure payments, and coordinate pickup/delivery"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">Simple steps to share agricultural equipment</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={staggerChild}>
              <Card className="text-center p-6 card-hover">
                <CardHeader>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Benefits Section
function BenefitsSection() {
  const benefits = [
    {
      icon: "💰",
      title: "Lower Costs",
      description: "Reduce equipment expenses by 60-80% through sharing instead of buying"
    },
    {
      icon: "📈",
      title: "Higher Productivity",
      description: "Access to modern equipment when you need it, exactly when you need it"
    },
    {
      icon: "🤝",
      title: "Build Trust",
      description: "Strengthen farming communities through collaboration and mutual support"
    },
    {
      icon: "🌱",
      title: "Sustainable Farming",
      description: "Maximize equipment utilization and reduce environmental impact"
    }
  ];

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Faarm Pool?</h2>
          <p className="text-xl text-muted-foreground">Benefits that transform farming operations</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index} variants={staggerChild}>
              <Card className="text-center p-6 card-hover h-full">
                <CardHeader>
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      location: "Trichy, Tamil Nadu",
      story: "Saved ₹2 lakh by renting a harvester instead of buying. Faarm Pool connected me with Suresh ji who had exactly what I needed.",
      avatar: "👨‍🌾",
      crop: "Rice & Sugarcane"
    },
    {
      name: "Anitha Devi",
      location: "Karur, Tamil Nadu", 
      story: "My rotavator was sitting idle for months. Now I earn ₹15,000 extra monthly by renting it to fellow farmers through Faarm Pool.",
      avatar: "👩‍🌾",
      crop: "Cotton & Turmeric"
    },
    {
      name: "Suresh Singh",
      location: "Erode, Tamil Nadu",
      story: "The platform is so easy to use. Posted my tractor on Monday, got 3 bookings by Friday. Great way to maximize equipment ROI.",
      avatar: "👨‍🌾",
      crop: "Wheat & Maize"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Farmer Stories</h2>
          <p className="text-xl text-muted-foreground">Real experiences from our farming community</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center"
          >
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-5xl">{testimonials[currentIndex].avatar}</div>
                <blockquote className="text-lg italic">
                  &ldquo;{testimonials[currentIndex].story}&rdquo;
                </blockquote>
                <div>
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].location}</p>
                  <p className="text-sm text-primary">Grows: {testimonials[currentIndex].crop}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of farmers already saving money and increasing productivity
          </p>
          <Link href="/marketplace">
            <Button size="lg" variant="secondary" className="btn-ripple text-lg px-8 py-3">
              Start Now – No Signup Needed
            </Button>
          </Link>
          <p className="text-sm mt-4 opacity-75">
            Browse equipment instantly • No hidden fees • Secure payments
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🌾</div>
              <h3 className="font-bold text-lg">Faarm Pool</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Empowering farmers through equipment sharing across India.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/marketplace" className="hover:text-primary">Browse Equipment</Link></li>
              <li><Link href="/dashboard" className="hover:text-primary">Owner Dashboard</Link></li>
              <li><Link href="#" className="hover:text-primary">How It Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary">Safety Guidelines</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 support@faarmpool.in</li>
              <li>📱 +91 9876543210</li>
              <li>🌐 Built for SIH 2025</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Faarm Pool. Built with ❤️ for farmers and agricultural communities.</p>
        </div>
      </div>
    </footer>
  );
}

// Main Landing Page
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
