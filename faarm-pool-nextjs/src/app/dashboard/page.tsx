"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, 
  TrendingUp,
  Package,
  DollarSign,
  Eye,
  MessageSquare
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

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
            <p className="text-xs text-muted-foreground">Owner Dashboard</p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm hover:text-primary transition-colors">Home</Link>
          <Link href="/marketplace" className="text-sm hover:text-primary transition-colors">Marketplace</Link>
          <Link href="/dashboard" className="text-sm text-primary font-medium">Dashboard</Link>
          <Link href="/booking" className="text-sm hover:text-primary transition-colors">Bookings</Link>
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

// Mock data for analytics
const earningsData = [
  { month: 'Jan', earnings: 12000, bookings: 15 },
  { month: 'Feb', earnings: 15000, bookings: 18 },
  { month: 'Mar', earnings: 18000, bookings: 22 },
  { month: 'Apr', earnings: 22000, bookings: 28 },
  { month: 'May', earnings: 25000, bookings: 32 },
  { month: 'Jun', earnings: 28000, bookings: 35 },
];

const equipmentUsageData = [
  { name: 'Tractor', hours: 120, revenue: 60000 },
  { name: 'Harvester', hours: 80, revenue: 96000 },
  { name: 'Rotavator', hours: 95, revenue: 28500 },
  { name: 'Pump', hours: 150, revenue: 30000 },
];

const bookingStatusData = [
  { name: 'Completed', value: 68, color: '#10b981' },
  { name: 'Pending', value: 15, color: '#f59e0b' },
  { name: 'Cancelled', value: 5, color: '#ef4444' },
];

// Demo owners data
const demoOwners = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Trichy, Tamil Nadu",
    avatar: "👨‍🌾",
    equipmentCount: 3,
    totalEarnings: 45000,
    rating: 4.8,
    crops: "Rice, Sugarcane",
    farmSize: "25 acres"
  },
  {
    id: 2,
    name: "Suresh Singh",
    location: "Erode, Tamil Nadu",
    avatar: "👨‍🌾",
    equipmentCount: 2,
    totalEarnings: 38000,
    rating: 4.9,
    crops: "Wheat, Maize",
    farmSize: "18 acres"
  },
  {
    id: 3,
    name: "Anitha Devi",
    location: "Karur, Tamil Nadu",
    avatar: "👩‍🌾",
    equipmentCount: 1,
    totalEarnings: 22000,
    rating: 4.7,
    crops: "Cotton, Turmeric",
    farmSize: "12 acres"
  }
];

// Stats cards data
const statsData = [
  {
    title: "Total Earnings",
    value: "₹1,05,000",
    change: "+12.3%",
    changeType: "positive" as const,
    icon: DollarSign,
    description: "This month"
  },
  {
    title: "Equipment Listed",
    value: "6",
    change: "+2",
    changeType: "positive" as const,
    icon: Package,
    description: "Active listings"
  },
  {
    title: "Total Bookings",
    value: "88",
    change: "+8",
    changeType: "positive" as const,
    icon: Calendar,
    description: "This month"
  },
  {
    title: "Profile Views",
    value: "342",
    change: "+23%",
    changeType: "positive" as const,
    icon: Eye,
    description: "Last 30 days"
  }
];

// Stats Card Component
function StatsCard({ stat }: { stat: typeof statsData[0] }) {
  const Icon = stat.icon;
  
  return (
    <Card className="card-hover">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </div>
          <div className={`p-3 rounded-full ${
            stat.changeType === 'positive' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
          }`}>
            <Icon className={`h-6 w-6 ${
              stat.changeType === 'positive' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
            }`} />
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <span className={`text-sm font-medium ${
            stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
          }`}>
            {stat.change}
          </span>
          <span className="text-sm text-muted-foreground ml-2">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Owner Profile Selector
function OwnerSelector({ selectedOwner, onSelect }: {
  selectedOwner: typeof demoOwners[0];
  onSelect: (owner: typeof demoOwners[0]) => void;
}) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Select Farmer Profile</CardTitle>
        <CardDescription>View dashboard for different farmers (Demo Mode)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-4">
          {demoOwners.map(owner => (
            <button
              key={owner.id}
              onClick={() => onSelect(owner)}
              className={`p-4 rounded-lg border text-left transition-colors ${
                selectedOwner.id === owner.id 
                  ? "bg-primary/10 border-primary text-primary" 
                  : "bg-background border-muted hover:border-primary"
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-2xl">{owner.avatar}</div>
                <div>
                  <h4 className="font-semibold">{owner.name}</h4>
                  <p className="text-sm text-muted-foreground">{owner.location}</p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p>📊 {owner.equipmentCount} equipment • ₹{owner.totalEarnings.toLocaleString()} earned</p>
                <p>🌾 {owner.crops} • {owner.farmSize}</p>
                <p>⭐ {owner.rating} rating</p>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Equipment List Component
function MyEquipmentList({ owner }: { owner: typeof demoOwners[0] }) {
  const equipment = [
    { name: "Mahindra 575 DI Tractor", type: "Tractor", price: 500, status: "Available", bookings: 23 },
    { name: "John Deere Harvester", type: "Harvester", price: 1200, status: "Booked", bookings: 15 },
    { name: "Heavy Duty Rotavator", type: "Rotavator", price: 300, status: "Available", bookings: 31 }
  ].slice(0, owner.equipmentCount);

  return (
    <Card>
      <CardHeader>
        <CardTitle>My Equipment</CardTitle>
        <CardDescription>Equipment owned by {owner.name}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {equipment.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">
                  {item.type === 'Tractor' && '🚜'}
                  {item.type === 'Harvester' && '🌾'}
                  {item.type === 'Rotavator' && '⚙️'}
                </div>
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">₹{item.price}/hour • {item.bookings} bookings</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === "Available" 
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                }`}>
                  {item.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Recent Bookings Component
function RecentBookings() {
  const bookings = [
    { id: "FP001", renter: "Murugan P", equipment: "Tractor", date: "15/01/2025", amount: 2000, status: "Completed" },
    { id: "FP002", renter: "Krishna Reddy", equipment: "Harvester", date: "18/01/2025", amount: 4800, status: "Pending" },
    { id: "FP003", renter: "Selvam M", equipment: "Rotavator", date: "20/01/2025", amount: 1200, status: "Confirmed" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
        <CardDescription>Latest equipment rental requests</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map(booking => (
            <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">{booking.renter}</h4>
                <p className="text-sm text-muted-foreground">
                  {booking.equipment} • {booking.date} • ₹{booking.amount}
                </p>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                booking.status === "Completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
                booking.status === "Pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              }`}>
                {booking.status}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Main Dashboard Component
export default function DashboardPage() {
  const [selectedOwner, setSelectedOwner] = useState(demoOwners[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50/50 to-teal-50/50 dark:from-green-950/20 dark:to-teal-950/20">
      <Header />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Welcome Section */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Welcome, {selectedOwner.name}! 👨‍🌾
              </h1>
              <p className="text-lg text-muted-foreground">
                Track your equipment earnings and manage bookings
              </p>
            </div>

            {/* Owner Selector */}
            <OwnerSelector selectedOwner={selectedOwner} onSelect={setSelectedOwner} />

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <StatsCard stat={stat} />
                </motion.div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Earnings Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Earnings</CardTitle>
                  <CardDescription>Revenue from equipment rentals</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={earningsData}>
                      <defs>
                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`₹${value}`, 'Earnings']} />
                      <Area 
                        type="monotone" 
                        dataKey="earnings" 
                        stroke="hsl(var(--primary))" 
                        fillOpacity={1} 
                        fill="url(#colorEarnings)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Equipment Usage */}
              <Card>
                <CardHeader>
                  <CardTitle>Equipment Performance</CardTitle>
                  <CardDescription>Hours used and revenue generated</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={equipmentUsageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Booking Status Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Booking Status Distribution</CardTitle>
                <CardDescription>Overview of all bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
                  <ResponsiveContainer width="100%" height={300} maxHeight={300}>
                    <PieChart>
                      <Pie
                        data={bookingStatusData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {bookingStatusData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-col space-y-2">
                    {bookingStatusData.map((entry, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-4 h-4 rounded" 
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm font-medium">{entry.name}: {entry.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Equipment and Bookings */}
            <div className="grid lg:grid-cols-2 gap-6">
              <MyEquipmentList owner={selectedOwner} />
              <RecentBookings />
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Manage your equipment and bookings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Button className="btn-ripple h-auto p-4 flex-col space-y-2">
                    <Package className="h-6 w-6" />
                    <span>List Equipment</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                    <Calendar className="h-6 w-6" />
                    <span>View Calendar</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                    <MessageSquare className="h-6 w-6" />
                    <span>Messages</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex-col space-y-2">
                    <TrendingUp className="h-6 w-6" />
                    <span>Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}