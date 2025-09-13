"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter, MapPin, Star, Calendar, Clock } from "lucide-react";
import { KYCBadge, KYCTrustIndicator } from "@/components/kyc/kyc-components";
import type { KYCStatus } from "@/components/kyc/kyc-components";

// Equipment data with realistic Indian farming context
const equipmentData = [
  {
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
    availability: "Available",
    description: "50 HP, excellent for paddy fields and sugarcane farming",
    specifications: ["50 HP", "4WD", "Power Steering", "Hydraulic Lift"],
    crops: ["Rice", "Sugarcane", "Cotton"],
    kycStatus: "verified" as KYCStatus
  },
  {
    id: 2,
    name: "John Deere 5310 Harvester",
    type: "Harvester",
    price: 1200,
    owner: "Suresh Singh",
    location: "Erode, Tamil Nadu",
    village: "Kodumudi",
    rating: 4.9,
    reviews: 18,
    image: "🌾",
    availability: "Available",
    description: "Combine harvester perfect for wheat and maize",
    specifications: ["120 HP", "Self-Propelled", "High Capacity", "GPS Enabled"],
    crops: ["Wheat", "Maize", "Barley"],
    kycStatus: "verified" as KYCStatus
  },
  {
    id: 3,
    name: "Heavy Duty Rotavator",
    type: "Rotavator",
    price: 300,
    owner: "Anitha Devi",
    location: "Karur, Tamil Nadu",
    village: "Krishnarayapuram",
    rating: 4.7,
    reviews: 31,
    image: "⚙️",
    availability: "Available",
    description: "7-foot rotavator for soil preparation and weed control",
    specifications: ["7 Feet Width", "Heavy Duty Blades", "PTO Driven"],
    crops: ["Cotton", "Turmeric", "Groundnut"],
    kycStatus: "under_review" as KYCStatus
  },
  {
    id: 4,
    name: "Kubota Transplanter",
    type: "Transplanter",
    price: 800,
    owner: "Murugan P",
    location: "Thanjavur, Tamil Nadu",
    village: "Kumbakonam",
    rating: 4.6,
    reviews: 15,
    image: "🌱",
    availability: "Booked",
    description: "Rice transplanter for efficient paddy planting",
    specifications: ["6 Rows", "Automatic", "Adjustable Depth"],
    crops: ["Rice", "Paddy"],
    kycStatus: "not_started" as KYCStatus
  },
  {
    id: 5,
    name: "Swaraj 744 FE Tractor",
    type: "Tractor",
    price: 450,
    owner: "Krishna Reddy",
    location: "Salem, Tamil Nadu",
    village: "Mettur",
    rating: 4.5,
    reviews: 28,
    image: "🚜",
    availability: "Available",
    description: "45 HP compact tractor ideal for small to medium farms",
    specifications: ["45 HP", "Fuel Efficient", "Easy Operation"],
    crops: ["Vegetables", "Flowers", "Millets"],
    kycStatus: "verified" as KYCStatus
  },
  {
    id: 6,
    name: "Irrigation Pump Set",
    type: "Pump",
    price: 200,
    owner: "Lakshmi Narasimhan",
    location: "Coimbatore, Tamil Nadu",
    village: "Pollachi",
    rating: 4.4,
    reviews: 42,
    image: "💧",
    availability: "Available",
    description: "High capacity water pump for irrigation",
    specifications: ["5 HP Motor", "Submersible", "High Flow Rate"],
    crops: ["All Crops", "Coconut", "Banana"],
    kycStatus: "in_progress" as KYCStatus
  },
  {
    id: 7,
    name: "Seed Drill Machine",
    type: "Seeder",
    price: 350,
    owner: "Venkatesh Kumar",
    location: "Madurai, Tamil Nadu",
    village: "Usilampatti",
    rating: 4.3,
    reviews: 19,
    image: "🌾",
    availability: "Available",
    description: "9-tyne seed drill for precision sowing",
    specifications: ["9 Tyne", "Adjustable Spacing", "Fertilizer Box"],
    crops: ["Wheat", "Maize", "Sorghum"],
    kycStatus: "verified" as KYCStatus
  },
  {
    id: 8,
    name: "Power Weeder",
    type: "Weeder",
    price: 250,
    owner: "Selvam M",
    location: "Tirunelveli, Tamil Nadu",
    village: "Sankarankovil",
    rating: 4.6,
    reviews: 25,
    image: "🌿",
    availability: "Available",
    description: "Self-propelled weeder for inter-cultivation",
    specifications: ["Self-Propelled", "Adjustable Width", "Low Maintenance"],
    crops: ["Rice", "Cotton", "Sugarcane"],
    kycStatus: "rejected" as KYCStatus
  }
];

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
            <p className="text-xs text-muted-foreground">Equipment Marketplace</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link href="/marketplace" className="text-sm text-primary font-medium">Marketplace</Link>
          <Link href="/dashboard" className="text-sm hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/booking" className="text-sm hover:text-primary transition-colors">My Bookings</Link>
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
          <Button className="btn-ripple">List Equipment</Button>
        </div>
      </div>
    </motion.header>
  );
}

// Filter and Search Components
function SearchAndFilter({ 
  searchTerm, 
  setSearchTerm, 
  selectedType, 
  setSelectedType, 
  selectedLocation, 
  setSelectedLocation 
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}) {
  const types = ["All", "Tractor", "Harvester", "Rotavator", "Transplanter", "Pump", "Seeder", "Weeder"];
  const locations = ["All", "Trichy", "Erode", "Karur", "Thanjavur", "Salem", "Coimbatore", "Madurai", "Tirunelveli"];

  return (
    <div className="bg-background/60 backdrop-blur-sm border-b sticky top-20 z-40 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search equipment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Location Filter */}
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-3 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// Equipment Card Component
function EquipmentCard({ equipment }: { equipment: typeof equipmentData[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="card-hover"
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="text-4xl mb-2">{equipment.image}</div>
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              equipment.availability === "Available" 
                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
            }`}>
              {equipment.availability}
            </div>
          </div>
          <CardTitle className="text-lg">{equipment.name}</CardTitle>
          <CardDescription className="line-clamp-2">{equipment.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-primary">₹{equipment.price}</span>
              <span className="text-sm text-muted-foreground">/hour</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{equipment.rating}</span>
              <span className="text-sm text-muted-foreground">({equipment.reviews})</span>
            </div>
          </div>

          {/* Owner Info */}
          <div className="flex items-center space-x-2 text-sm">
            <div className="text-2xl">👨‍🌾</div>
            <div className="flex-1">
              <p className="font-medium">{equipment.owner}</p>
              <p className="text-muted-foreground flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {equipment.village}, {equipment.location.split(", ")[0]}
              </p>
            </div>
            <KYCBadge status={equipment.kycStatus} size="sm" showText={false} />
          </div>

          {/* KYC Trust Indicator */}
          {equipment.kycStatus === 'verified' && (
            <KYCTrustIndicator 
              status={equipment.kycStatus} 
              ownerName={equipment.owner} 
              compact={true} 
            />
          )}

          {/* Specifications */}
          <div>
            <p className="text-sm font-medium mb-2">Specifications:</p>
            <div className="flex flex-wrap gap-1">
              {equipment.specifications.slice(0, 3).map((spec, index) => (
                <span key={index} className="px-2 py-1 bg-muted rounded text-xs">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          {/* Suitable Crops */}
          <div>
            <p className="text-sm font-medium mb-2">Suitable for:</p>
            <div className="flex flex-wrap gap-1">
              {equipment.crops.slice(0, 3).map((crop, index) => (
                <span key={index} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                  {crop}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button 
              className="flex-1 btn-ripple" 
              disabled={equipment.availability === "Booked"}
            >
              <Calendar className="h-4 w-4 mr-2" />
              {equipment.availability === "Available" ? "Book Now" : "Unavailable"}
            </Button>
            <Button variant="outline" size="sm">
              <Clock className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// Main Marketplace Component
export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Filter equipment based on search and filters
  const filteredEquipment = equipmentData.filter(equipment => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "All" || equipment.type === selectedType;
    
    const matchesLocation = selectedLocation === "All" || 
                           equipment.location.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-teal-50/50 dark:from-green-950/20 dark:to-teal-950/20">
      <Header />
      
      <main className="pt-20">
        <SearchAndFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />

        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Equipment Marketplace
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Discover and rent agricultural equipment from verified farmers across Tamil Nadu
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {equipmentData.filter(e => e.availability === "Available").length} Available
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                  {equipmentData.filter(e => e.availability === "Booked").length} Booked
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {equipmentData.length} Total Equipment
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Equipment Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredEquipment.length > 0 ? (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {filteredEquipment.map((equipment) => (
                  <EquipmentCard key={equipment.id} equipment={equipment} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No equipment found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search or filters to find what you need.
                </p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                  setSelectedLocation("All");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-4">Can&apos;t find what you need?</h2>
              <p className="text-muted-foreground mb-6">
                List your equipment or send a request to farmers in your area
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-ripple">
                  List Your Equipment
                </Button>
                <Button size="lg" variant="outline" className="btn-ripple">
                  Send Equipment Request
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}