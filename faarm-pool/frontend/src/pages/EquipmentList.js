import React, { useEffect, useState } from 'react';
// import api from '../services/api';

const EquipmentList = () => {
  const [equipment, setEquipment] = useState([]);
  const [filters, setFilters] = useState({ type: '', location: '', minPrice: '', maxPrice: '' });
  const [loading, setLoading] = useState(true);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('name'); // 'name', 'price', 'rating'
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        // Enhanced mock data with comprehensive agricultural equipment specifications
        const mockEquipment = [
          {
            id: 1,
            name: 'John Deere 5050D Tractor',
            type: 'Tractor',
            pricePerDay: 2500,
            weeklyRate: 15000,
            monthlyRate: 55000,
            location: 'Ludhiana, Punjab',
            description: 'Heavy duty 55 HP tractor suitable for all farming operations. Equipped with power steering and advanced hydraulic system.',
            features: ['55 HP Engine', 'Power Steering', 'Hydraulic Lift', 'PTO', '4WD', 'AC Cabin'],
            specifications: {
              horsePower: '55 HP',
              engine: '3029D, 3 Cylinder Turbo',
              displacement: '2900 CC',
              fuelTank: '68 Liters',
              liftingCapacity: '2100 kg',
              gearbox: '9 Forward + 3 Reverse',
              wheelDrive: '4WD',
              pto: '540/1000 RPM',
              hydraulics: 'Dual Acting',
              steeringType: 'Power Steering',
              brakes: 'Wet Disc Brakes',
              dimensions: '3850 x 2032 x 2743 mm',
              weight: '2850 kg'
            },
            applications: [
              'Heavy Plowing',
              'Deep Cultivation',
              'Harvesting Support',
              'Heavy Transportation',
              'Large Scale Operations',
              'Commercial Farming'
            ],
            rating: 4.8,
            reviews: 127,
            totalBookings: 234,
            icon: '🚜',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&q=80',
            availability: 'Available',
            owner: 'Punjab Tractors Ltd',
            ownerRating: 4.9,
            insurance: 'Comprehensive',
            operatorAvailable: true,
            operatorRate: 1000,
            deliveryRadius: '75 km',
            minimumBooking: '1 day',
            fuelIncluded: false,
            maintenanceRecord: 'Excellent'
          },
          {
            id: 2,
            name: 'Case IH Axial Flow 8250 Combine',
            type: 'Harvester',
            pricePerDay: 5000,
            weeklyRate: 32000,
            monthlyRate: 120000,
            location: 'Karnal, Haryana',
            description: 'Advanced combine harvester with GPS technology, grain loss monitoring, and automated systems for maximum efficiency.',
            features: ['GPS Guided', 'Auto Header Control', 'Grain Monitor', 'AC Cabin', 'Auto Steer', 'Yield Mapping'],
            specifications: {
              horsePower: '375 HP',
              engine: 'FPT 8.7L, 6 Cylinder Turbo',
              grainTank: '10400 Liters',
              fuelTank: '900 Liters',
              cuttingWidth: '7.6 m (with header)',
              threshingSystem: 'Axial Flow Rotor',
              cleaningSystem: 'Twin Pitch Cleaning Fan',
              unloadingRate: '130 L/sec',
              groundClearance: '410 mm',
              wheelbase: '4267 mm',
              weight: '15500 kg',
              automation: 'Full Auto Mode Available'
            },
            applications: [
              'Wheat Harvesting',
              'Rice Harvesting',
              'Corn Harvesting',
              'Soybean Harvesting',
              'Large Scale Operations',
              'Commercial Farming'
            ],
            rating: 4.9,
            reviews: 89,
            totalBookings: 156,
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop&q=80',
            availability: 'Available',
            owner: 'Haryana Agri Services',
            ownerRating: 4.8,
            insurance: 'Full Coverage',
            operatorAvailable: true,
            operatorRate: 1500,
            deliveryRadius: '100 km',
            minimumBooking: '3 days',
            fuelIncluded: true,
            maintenanceRecord: 'Excellent'
          },
          {
            id: 3,
            name: 'Mahindra Super Seeder Turbo',
            type: 'Seeder',
            pricePerDay: 1200,
            weeklyRate: 7500,
            monthlyRate: 28000,
            location: 'Amritsar, Punjab',
            description: 'Advanced seeder with turbo mechanism for efficient seed placement and stubble management.',
            features: ['Turbo Seeder', 'Adjustable Depth', 'Stubble Management', 'Multiple Crop Seeds'],
            specifications: {
              workingWidth: '2.25 m',
              seedBoxCapacity: '85 kg',
              fertilizerBox: '45 kg',
              rowSpacing: '18-23 cm (adjustable)',
              seedingDepth: '2-8 cm (adjustable)',
              powerRequirement: '35-45 HP',
              weight: '580 kg',
              seedMeteringType: 'Fluted Roller',
              furrowOpeners: 'Inverted T Type',
              covering: 'Press Wheel',
              frameType: 'Heavy Duty MS Frame',
              hitching: 'Three Point Linkage'
            },
            applications: [
              'Wheat Seeding',
              'Barley Seeding',
              'Mustard Seeding',
              'Zero Tillage Farming',
              'Stubble Management',
              'Direct Seeding'
            ],
            rating: 4.7,
            reviews: 95,
            totalBookings: 187,
            icon: '🌱',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&q=80',
            availability: 'Available',
            owner: 'Modern Agri Tools',
            ownerRating: 4.6,
            insurance: 'Standard',
            operatorAvailable: true,
            operatorRate: 600,
            deliveryRadius: '60 km',
            minimumBooking: '1 day',
            fuelIncluded: false,
            maintenanceRecord: 'Good'
          },
          {
            id: 4,
            name: 'Kubota Rotavator RX Series',
            type: 'Rotavator',
            pricePerDay: 800,
            weeklyRate: 5000,
            monthlyRate: 18000,
            location: 'Jaipur, Rajasthan',
            description: 'Heavy duty rotavator for deep soil cultivation and stubble management with 48 blades.',
            features: ['48 L-Type Blades', 'Adjustable Depth', 'Heavy Frame', 'Side Drive', 'Chain Cover'],
            specifications: {
              workingWidth: '1.8 m',
              bladeCount: '48 Blades',
              bladeType: 'L-Type Italian',
              powerRequirement: '35-50 HP',
              weight: '450 kg',
              depthControl: '3-20 cm (adjustable)',
              gearbox: 'Oil Bath Type',
              blade: 'Heat Treated',
              frameType: 'Heavy MS Channel',
              hitching: 'Category I & II'
            },
            applications: [
              'Soil Preparation',
              'Stubble Management',
              'Weed Control',
              'Mixing Crop Residue',
              'Secondary Tillage',
              'Seedbed Preparation'
            ],
            rating: 4.6,
            reviews: 203,
            totalBookings: 298,
            icon: '⚙️',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop&q=80',
            availability: 'Available',
            owner: 'Rajasthan Farm Equipment',
            ownerRating: 4.5,
            insurance: 'Standard',
            operatorAvailable: true,
            operatorRate: 500,
            deliveryRadius: '45 km',
            minimumBooking: '1 day',
            fuelIncluded: false,
            maintenanceRecord: 'Good'
          },
          {
            id: 5,
            name: 'Kubota Disc Plough Heavy Duty',
            type: 'Plough',
            pricePerDay: 600,
            weeklyRate: 3500,
            monthlyRate: 12000,
            location: 'Jaipur, Rajasthan',
            description: 'Heavy duty disc plough for deep cultivation and effective stubble management.',
            features: ['3 Disc Setup', 'Adjustable Angle', 'Heavy Frame', 'Ball Bearing', 'Depth Control'],
            specifications: {
              discDiameter: '66 cm',
              discCount: '3 Discs',
              workingWidth: '75 cm',
              powerRequirement: '25-35 HP',
              weight: '280 kg',
              discSpacing: '25 cm',
              penetration: '15-25 cm',
              frameType: 'Heavy Duty MS',
              bearingType: 'Sealed Ball Bearing',
              hitching: 'Three Point Linkage'
            },
            applications: [
              'Primary Tillage',
              'Deep Plowing',
              'Stubble Breaking',
              'Hard Soil Cultivation',
              'Land Preparation',
              'Trash Incorporation'
            ],
            rating: 4.5,
            reviews: 156,
            totalBookings: 178,
            icon: '🔧',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop&q=80',
            availability: 'Booked',
            owner: 'Rajasthan Implements',
            ownerRating: 4.3,
            insurance: 'Basic',
            operatorAvailable: false,
            operatorRate: 400,
            deliveryRadius: '35 km',
            minimumBooking: '1 day',
            fuelIncluded: false,
            maintenanceRecord: 'Average'
          },
          {
            id: 6,
            name: 'New Holland TD5.110 Precision Seeder',
            type: 'Seeder',
            pricePerDay: 1200,
            weeklyRate: 7800,
            monthlyRate: 30000,
            location: 'Meerut, Uttar Pradesh',
            description: 'Precision pneumatic seeder for optimal crop spacing and seed placement with fertilizer attachment.',
            features: ['Pneumatic System', 'Fertilizer Box', 'Depth Control', 'Row Marker', 'Auto Shut-off'],
            specifications: {
              workingWidth: '3.0 m',
              rowCount: '12 Rows',
              rowSpacing: '25 cm',
              seedBoxCapacity: '120 kg',
              fertilizerCapacity: '80 kg',
              seedingDepth: '2-10 cm',
              powerRequirement: '50-75 HP',
              weight: '750 kg',
              meteringSystem: 'Pneumatic Precision',
              furrowOpeners: 'Double Disc',
              coveringDevice: 'Press Wheel',
              frameType: 'Heavy Duty Folding'
            },
            applications: [
              'Corn Seeding',
              'Soybean Seeding',
              'Sunflower Seeding',
              'Precision Farming',
              'Row Crop Planting',
              'Fertilizer Application'
            ],
            rating: 4.7,
            reviews: 92,
            totalBookings: 145,
            icon: '🌱',
            image: 'https://images.unsplash.com/photo-1566754844954-2f1b45b8abc0?w=400&h=300&fit=crop&q=80',
            availability: 'Available',
            owner: 'UP Agri Solutions',
            ownerRating: 4.8,
            insurance: 'Comprehensive',
            operatorAvailable: true,
            operatorRate: 700,
            deliveryRadius: '80 km',
            minimumBooking: '2 days',
            fuelIncluded: false,
            maintenanceRecord: 'Excellent'
          },
          {
            id: 7,
            name: 'Swaraj 855 FE Tractor',
            type: 'Tractor',
            pricePerDay: 2000,
            weeklyRate: 12500,
            monthlyRate: 45000,
            location: 'Panipat, Haryana',
            description: 'Fuel efficient 50 HP tractor perfect for medium-sized farms with excellent build quality and reliability.',
            features: ['50 HP Engine', 'Fuel Efficient', 'Dual Clutch', 'Oil Bath Filter', 'Power Steering'],
            specifications: {
              horsePower: '50 HP',
              engine: '3307 CC, 3 Cylinder',
              fuelTank: '60 Liters',
              liftingCapacity: '1800 kg',
              gearbox: '8 Forward + 2 Reverse',
              wheelDrive: '2WD',
              pto: '540 RPM',
              hydraulics: 'Single Acting',
              steeringType: 'Manual/Power Optional',
              brakes: 'Oil Immersed Disc',
              tyreSize: 'Front: 7.50-16, Rear: 16.9-30',
              wheelbase: '2080 mm',
              weight: '2350 kg'
            },
            applications: [
              'Medium Scale Farming',
              'Field Preparation',
              'Cultivation',
              'Hauling',
              'General Purpose Operations',
              'Small to Medium Implements'
            ],
            rating: 4.4,
            reviews: 178,
            totalBookings: 267,
            icon: '🚜',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop&q=80',
            availability: 'Available',
            owner: 'Haryana Tractor Service',
            ownerRating: 4.5,
            insurance: 'Standard',
            operatorAvailable: true,
            operatorRate: 800,
            deliveryRadius: '55 km',
            minimumBooking: '1 day',
            fuelIncluded: false,
            maintenanceRecord: 'Good'
          },
          {
            id: 8,
            name: 'Fieldking Multi Cultivator',
            type: 'Cultivator',
            pricePerDay: 700,
            location: 'Hisar, Haryana',
            description: 'Multi-purpose cultivator for seedbed preparation and inter-cultivation operations.',
            features: ['9 Tyne', 'Spring Loaded', 'Adjustable Width', 'Heavy Duty'],
            rating: 4.3,
            reviews: 134,
            icon: '🔱',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 8,
            name: 'Massey Ferguson Thresher',
            type: 'Thresher',
            pricePerDay: 1800,
            location: 'Rohtak, Haryana',
            description: 'High capacity thresher with efficient grain separation and cleaning system.',
            features: ['Self Propelled', 'High Capacity', 'Clean Grain', 'Low Maintenance'],
            rating: 4.6,
            reviews: 87,
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 9,
            name: 'Sonalika Tiger Tractor',
            type: 'Tractor',
            pricePerDay: 2200,
            location: 'Muzaffarnagar, Uttar Pradesh',
            description: 'Reliable tractor with excellent performance for small to medium farms.',
            features: ['45 HP Engine', 'Multi Speed', 'Comfortable Seat', 'Easy Operation'],
            rating: 4.2,
            reviews: 95,
            icon: '🚜',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 10,
            name: 'Lemken Compact Disc Harrow',
            type: 'Harrow',
            pricePerDay: 900,
            location: 'Bathinda, Punjab',
            description: 'Heavy duty disc harrow for effective soil preparation and residue management.',
            features: ['20 Disc', 'Gang Adjustment', 'Heavy Frame', 'Maintenance Free'],
            rating: 4.5,
            reviews: 112,
            icon: '🔧',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 11,
            name: 'Claas Crop Sprayer',
            type: 'Sprayer',
            pricePerDay: 1500,
            location: 'Nashik, Maharashtra',
            description: 'Precision sprayer for effective pest control and fertilizer application.',
            features: ['Boom Sprayer', 'GPS Control', '600L Tank', 'Auto Boom Height'],
            rating: 4.7,
            reviews: 76,
            icon: '💧',
            image: 'https://images.unsplash.com/photo-1566754844954-2f1b45b8abc0?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 12,
            name: 'Escorts Powertrac Tractor',
            type: 'Tractor',
            pricePerDay: 1800,
            location: 'Gwalior, Madhya Pradesh',
            description: 'Compact tractor ideal for small farms and orchard operations.',
            features: ['35 HP Engine', 'Compact Design', 'Easy Maneuver', 'Fuel Economy'],
            rating: 4.1,
            reviews: 143,
            icon: '🚜',
            image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 13,
            name: 'Mahindra Rice Transplanter',
            type: 'Transplanter',
            pricePerDay: 2800,
            location: 'Thanjavur, Tamil Nadu',
            description: 'Automated rice transplanter for efficient paddy planting with precision spacing.',
            features: ['8 Row Planting', 'Adjustable Depth', 'Floating System', 'High Speed'],
            rating: 4.8,
            reviews: 54,
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Booked'
          },
          {
            id: 14,
            name: 'Krone Big Pack Baler',
            type: 'Baler',
            pricePerDay: 3200,
            location: 'Kolhapur, Maharashtra',
            description: 'High density square baler for efficient hay and straw baling operations.',
            features: ['Large Chamber', 'Auto Tie', 'Crop Density Control', 'Hydraulic System'],
            rating: 4.6,
            reviews: 38,
            icon: '📦',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 15,
            name: 'VST Shakti Reaper',
            type: 'Reaper',
            pricePerDay: 2400,
            location: 'Mandya, Karnataka',
            description: 'Self-propelled reaper for efficient harvesting of wheat, paddy and other crops.',
            features: ['Self Propelled', 'Cutting Width 4ft', 'Windrowing', 'Easy Operation'],
            rating: 4.4,
            reviews: 89,
            icon: '✂️',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 16,
            name: 'Preet Multi Crop Thresher',
            type: 'Thresher',
            pricePerDay: 1600,
            location: 'Rajkot, Gujarat',
            description: 'Versatile thresher suitable for multiple crops including wheat, paddy, and pulses.',
            features: ['Multi Crop', 'High Efficiency', 'Easy Cleaning', 'Portable Design'],
            rating: 4.3,
            reviews: 167,
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 17,
            name: 'Farmtrac 60 Tractor',
            type: 'Tractor',
            pricePerDay: 2600,
            location: 'Chandigarh, Punjab',
            description: 'Heavy duty tractor with modern features for large scale farming operations.',
            features: ['60 HP Engine', 'Power Steering', 'Live PTO', 'Oil Immersed Brakes'],
            rating: 4.5,
            reviews: 201,
            icon: '🚜',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 18,
            name: 'Dasmesh Straw Reaper',
            type: 'Reaper',
            pricePerDay: 2000,
            location: 'Sirsa, Haryana',
            description: 'Specialized straw reaper for efficient collection and bundling of crop residue.',
            features: ['Straw Collection', 'Auto Bundle', 'Adjustable Height', 'High Capacity'],
            rating: 4.2,
            reviews: 73,
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 19,
            name: 'Kubota Combine Harvester',
            type: 'Harvester',
            pricePerDay: 4800,
            location: 'Coimbatore, Tamil Nadu',
            description: 'Advanced combine harvester with superior threshing and cleaning capabilities.',
            features: ['Rubber Track', 'Large Grain Tank', 'Auto Unload', 'Climate Control'],
            rating: 4.9,
            reviews: 45,
            icon: '🌾',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 20,
            name: 'Fieldking Reversible Plough',
            type: 'Plough',
            pricePerDay: 750,
            location: 'Bhopal, Madhya Pradesh',
            description: 'Reversible plough for efficient furrow turning and soil inversion.',
            features: ['2 Bottom', 'Reversible', 'Heavy Duty', 'Adjustable Furrow'],
            rating: 4.4,
            reviews: 156,
            icon: '🔧',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 21,
            name: 'Shaktiman Potato Planter',
            type: 'Planter',
            pricePerDay: 1400,
            location: 'Agra, Uttar Pradesh',
            description: 'Specialized potato planter for precise placement and optimal crop establishment.',
            features: ['Cup Feed System', 'Fertilizer Box', 'Depth Control', 'Row Marker'],
            rating: 4.6,
            reviews: 92,
            icon: '🥔',
            image: 'https://images.unsplash.com/photo-1566754844954-2f1b45b8abc0?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 22,
            name: 'Captain Tractor Trolley',
            type: 'Trolley',
            pricePerDay: 400,
            location: 'Faridabad, Haryana',
            description: 'Heavy duty farm trolley for transportation of crops and farm materials.',
            features: ['5 Ton Capacity', 'Hydraulic Tipping', 'Steel Body', 'Pneumatic Tyres'],
            rating: 4.0,
            reviews: 234,
            icon: '🚛',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
            availability: 'Available'
          },
          {
            id: 23,
            name: 'Mahindra Sugar Cane Harvester',
            type: 'Harvester',
            pricePerDay: 6000,
            location: 'Pune, Maharashtra',
            description: 'Specialized sugar cane harvester for efficient cutting and loading operations.',
            features: ['Whole Stalk', 'Auto Loading', 'Trash Separation', 'High Capacity'],
            rating: 4.7,
            reviews: 28,
            icon: '🎋',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop',
            availability: 'Booked'
          },
          {
            id: 24,
            name: 'Indo Farm Laser Land Leveler',
            type: 'Leveler',
            pricePerDay: 1100,
            location: 'Patiala, Punjab',
            description: 'Precision land leveler with laser guidance for perfect field preparation.',
            features: ['Laser Guided', 'Auto Control', 'Precision Level', 'Water Savings'],
            rating: 4.8,
            reviews: 67,
            icon: '📏',
            image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=400&h=300&fit=crop',
            availability: 'Available'
          }
        ];
        
        setTimeout(() => {
          setEquipment(mockEquipment);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Failed to fetch equipment');
        setLoading(false);
      }
    };
    fetchEquipment();
  }, []);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  // Apply filters, search, and sorting
  const processedEquipment = equipment
    .filter(item => {
      const matchesFilters = (
        (!filters.type || item.type.toLowerCase().includes(filters.type.toLowerCase())) &&
        (!filters.location || item.location.toLowerCase().includes(filters.location.toLowerCase())) &&
        (!filters.minPrice || item.pricePerDay >= parseInt(filters.minPrice)) &&
        (!filters.maxPrice || item.pricePerDay <= parseInt(filters.maxPrice))
      );
      
      const matchesSearch = !searchTerm || 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      return matchesFilters && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price_low':
          return a.pricePerDay - b.pricePerDay;
        case 'price_high':
          return b.pricePerDay - a.pricePerDay;
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.totalBookings || 0) - (a.totalBookings || 0);
        default: // name
          return a.name.localeCompare(b.name);
      }
    });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('⭐');
    }
    return stars.join('');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const renderEquipmentDetail = () => {
    if (!selectedEquipment) return null;

    return (
      <div className="modal-overlay" onClick={() => setSelectedEquipment(null)}>
        <div className="equipment-detail-modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{selectedEquipment.name}</h2>
            <button className="close-btn" onClick={() => setSelectedEquipment(null)}>✕</button>
          </div>
          
          <div className="modal-content">
            <div className="detail-main">
              <div className="detail-image">
                <img src={selectedEquipment.image} alt={selectedEquipment.name} />
                <div className="availability-badge">
                  {selectedEquipment.availability === 'Available' ? '✅ Available' : '❌ Booked'}
                </div>
              </div>
              
              <div className="detail-info">
                <div className="equipment-meta">
                  <span className="equipment-type">{selectedEquipment.type}</span>
                  <div className="rating-section">
                    <span className="stars">{renderStars(selectedEquipment.rating)}</span>
                    <span className="rating-text">{selectedEquipment.rating} ({selectedEquipment.reviews} reviews)</span>
                  </div>
                </div>
                
                <p className="detail-description">{selectedEquipment.description}</p>
                
                <div className="pricing-section">
                  <div className="price-item">
                    <span className="price-label">Daily Rate:</span>
                    <span className="price-value">{formatCurrency(selectedEquipment.pricePerDay)}</span>
                  </div>
                  {selectedEquipment.weeklyRate && (
                    <div className="price-item">
                      <span className="price-label">Weekly Rate:</span>
                      <span className="price-value">{formatCurrency(selectedEquipment.weeklyRate)}</span>
                    </div>
                  )}
                  {selectedEquipment.monthlyRate && (
                    <div className="price-item">
                      <span className="price-label">Monthly Rate:</span>
                      <span className="price-value">{formatCurrency(selectedEquipment.monthlyRate)}</span>
                    </div>
                  )}
                </div>

                <div className="owner-section">
                  <h4>Owner Information</h4>
                  <div className="owner-info">
                    <span className="owner-name">{selectedEquipment.owner}</span>
                    <span className="owner-rating">⭐ {selectedEquipment.ownerRating}</span>
                  </div>
                  <div className="service-info">
                    <p>📍 Location: {selectedEquipment.location}</p>
                    <p>🚚 Delivery Radius: {selectedEquipment.deliveryRadius}</p>
                    <p>📅 Min Booking: {selectedEquipment.minimumBooking}</p>
                    <p>⛽ Fuel: {selectedEquipment.fuelIncluded ? 'Included' : 'Not Included'}</p>
                    {selectedEquipment.operatorAvailable && (
                      <p>👨‍🔧 Operator Available: ₹{selectedEquipment.operatorRate}/day</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detail-tabs">
              <div className="tab-section">
                <h4>🔧 Technical Specifications</h4>
                {selectedEquipment.specifications ? (
                  <div className="specifications-grid">
                    {Object.entries(selectedEquipment.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item">
                        <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Detailed specifications not available.</p>
                )}
              </div>
              
              <div className="tab-section">
                <h4>🌾 Applications</h4>
                <div className="applications-list">
                  {selectedEquipment.applications ? selectedEquipment.applications.map((app, index) => (
                    <span key={index} className="application-tag">{app}</span>
                  )) : <p>No specific applications listed.</p>}
                </div>
              </div>
              
              <div className="tab-section">
                <h4>✨ Key Features</h4>
                <div className="features-list">
                  {selectedEquipment.features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      <span className="feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="modal-actions">
              <button className="btn btn-secondary" onClick={() => setSelectedEquipment(null)}>
                Close
              </button>
              <button 
                className={`btn btn-primary ${selectedEquipment.availability === 'Booked' ? 'btn-disabled' : ''}`}
                disabled={selectedEquipment.availability === 'Booked'}
              >
                {selectedEquipment.availability === 'Booked' ? '📅 Currently Booked' : '🛒 Book Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="equipment-list">
        <div className="loading">
          <div className="spinner"></div>
          Loading equipment...
        </div>
      </div>
    );
  }

  return (
    <div className="equipment-list enhanced-card">
      <div className="equipment-header">
        <div className="header-content">
          <h1>🚜 Premium Farm Equipment Rental</h1>
          <p>Discover and rent high-quality farm machinery from trusted owners across India</p>
        </div>
        
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{equipment.length}</span>
            <span className="stat-label">Available Equipment</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Set(equipment.map(e => e.location.split(',')[1]?.trim())).size}</span>
            <span className="stat-label">Cities Covered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{new Set(equipment.map(e => e.type)).size}</span>
            <span className="stat-label">Equipment Types</span>
          </div>
        </div>
      </div>
      
      <div className="search-and-controls">
        <div className="search-section">
          <div className="search-box">
            <input 
              type="text" 
              placeholder="🔍 Search equipment, features, or description..." 
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          
          <div className="view-controls">
            <select value={sortBy} onChange={handleSort} className="sort-select">
              <option value="name">Sort by Name</option>
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popularity">Most Popular</option>
            </select>
            
            <div className="view-toggle">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                ⊞ Grid
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                ☰ List
              </button>
            </div>
          </div>
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <label className="filter-label">Equipment Type</label>
            <select name="type" className="filter-select" onChange={handleFilterChange}>
              <option value="">All Types</option>
              <option value="Tractor">Tractor</option>
              <option value="Harvester">Harvester</option>
              <option value="Seeder">Seeder</option>
              <option value="Rotavator">Rotavator</option>
              <option value="Plough">Plough</option>
              <option value="Cultivator">Cultivator</option>
              <option value="Thresher">Thresher</option>
              <option value="Harrow">Harrow</option>
              <option value="Sprayer">Sprayer</option>
              <option value="Transplanter">Transplanter</option>
              <option value="Baler">Baler</option>
              <option value="Reaper">Reaper</option>
              <option value="Planter">Planter</option>
              <option value="Trolley">Trolley</option>
              <option value="Leveler">Leveler</option>
            </select>
          </div>
          <div className="filter-group">
            <label className="filter-label">Location</label>
            <input name="location" className="filter-input" placeholder="Enter city or state..." onChange={handleFilterChange} />
          </div>
          <div className="filter-group">
            <label className="filter-label">Min Price (₹/day)</label>
            <input name="minPrice" className="filter-input" placeholder="500" type="number" onChange={handleFilterChange} />
          </div>
          <div className="filter-group">
            <label className="filter-label">Max Price (₹/day)</label>
            <input name="maxPrice" className="filter-input" placeholder="5000" type="number" onChange={handleFilterChange} />
          </div>
        </div>
      </div>
      
      <div className="results-summary">
        <p>Showing {processedEquipment.length} of {equipment.length} equipment</p>
      </div>
      
      <div className={`equipment-grid ${viewMode}`}>
        {processedEquipment.map(item => (
          <div key={item.id} className="equipment-card enhanced-card">
            <div className="equipment-image">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                  onLoad={(e) => {
                    e.target.setAttribute('data-loaded', 'true');
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const fallback = e.target.nextSibling;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
              ) : null}
              <div 
                style={{
                  display: item.image ? 'none' : 'flex',
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  background: 'linear-gradient(135deg, var(--accent-green) 0%, var(--accent-teal) 100%)',
                  borderRadius: '12px'
                }}
              >
                {item.icon}
              </div>
              
              <div className="image-overlay">
                <span className={`availability-badge ${item.availability.toLowerCase()}`}>
                  {item.availability}
                </span>
                {item.totalBookings && (
                  <span className="popularity-badge">
                    📈 {item.totalBookings} bookings
                  </span>
                )}
              </div>
            </div>
            
            <div className="equipment-content">
              <div className="equipment-header">
                <h3 className="equipment-title">{item.name}</h3>
                <span className="equipment-type">{item.type}</span>
              </div>
              
              <p className="equipment-description">{item.description}</p>
              
              <div className="equipment-features">
                {item.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
                {item.features.length > 3 && (
                  <span className="feature-more">+{item.features.length - 3} more</span>
                )}
              </div>
              
              <div className="equipment-rating">
                <span className="stars">{renderStars(item.rating)}</span>
                <span className="rating-text">{item.rating} ({item.reviews} reviews)</span>
              </div>
              
              <div className="equipment-details">
                <div className="price-section">
                  <span className="main-price">₹{item.pricePerDay.toLocaleString()}/day</span>
                  {item.weeklyRate && (
                    <span className="alt-price">₹{item.weeklyRate.toLocaleString()}/week</span>
                  )}
                </div>
                <p className="equipment-location">📍 {item.location}</p>
                {item.owner && (
                  <p className="equipment-owner">👤 {item.owner} ⭐ {item.ownerRating}</p>
                )}
              </div>
              
              <div className="equipment-actions">
                <button 
                  className="btn btn-secondary btn-enhanced"
                  onClick={() => setSelectedEquipment(item)}
                >
                  👁️ View Details
                </button>
                <button 
                  className={`btn book-btn btn-enhanced ${item.availability === 'Booked' ? 'btn-disabled' : 'btn-primary'}`}
                  disabled={item.availability === 'Booked'}
                >
                  {item.availability === 'Booked' ? '📅 Booked' : '🛒 Book Now'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {processedEquipment.length === 0 && (
        <div className="no-results">
          <div className="no-results-content">
            <h3>🔍 No equipment found</h3>
            <p>Try adjusting your search criteria or filters to find more options.</p>
            <button className="btn btn-primary" onClick={() => {
              setSearchTerm('');
              setFilters({ type: '', location: '', minPrice: '', maxPrice: '' });
            }}>
              Clear All Filters
            </button>
          </div>
        </div>
      )}
      
      {renderEquipmentDetail()}
    </div>
  );
};

export default EquipmentList;
