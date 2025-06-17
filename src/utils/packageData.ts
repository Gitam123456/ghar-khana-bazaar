
export interface EventPackage {
  id: number;
  name: string;
  description: string;
  pricePerHead: number;
  originalPrice: number;
  rating: number;
  image: string;
  category: string;
  minGuests: number;
  maxGuests: number;
  includes: string[];
  duration: string;
  preparationTime: string;
  suitableFor: string[];
  isVeg: boolean;
  isPopular: boolean;
  discount: string;
  bookings: string;
}

export const eventPackages: EventPackage[] = [
  {
    id: 1,
    name: "Royal Wedding Feast",
    description: "Complete traditional wedding catering with banana leaf service, live counters, and authentic Karnataka dishes",
    pricePerHead: 799,
    originalPrice: 899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
    category: "Wedding Packages",
    minGuests: 200,
    maxGuests: 2000,
    includes: [
      "Banana Leaf Service",
      "25+ Traditional Dishes",
      "Live Dosa Counter",
      "Payasam Station",
      "Traditional Welcome Drink",
      "Professional Service Staff",
      "Setup & Cleanup",
      "Wedding Decoration",
      "Traditional Music Setup"
    ],
    duration: "6-8 hours",
    preparationTime: "2-3 days",
    suitableFor: ["Wedding Ceremony", "Reception", "Muhurtham"],
    isVeg: true,
    isPopular: true,
    discount: "11% OFF",
    bookings: "500+ Events"
  },
  {
    id: 2,
    name: "Seemantha Special Package",
    description: "Traditional baby shower catering with auspicious dishes and special sweets for the expecting mother",
    pricePerHead: 449,
    originalPrice: 499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    category: "Baby Shower",
    minGuests: 50,
    maxGuests: 300,
    includes: [
      "Coconut Rice",
      "Bisi Bele Bath",
      "Traditional Sweets",
      "Fruit Platter",
      "Tender Coconut Water",
      "Special Pregnancy-friendly Menu",
      "Decorated Service",
      "Blessing Ceremony Arrangements"
    ],
    duration: "4-5 hours",
    preparationTime: "1-2 days",
    suitableFor: ["Baby Shower", "Seemantha", "Jathakarma"],
    isVeg: true,
    isPopular: true,
    discount: "10% OFF",
    bookings: "300+ Events"
  },
  {
    id: 3,
    name: "Gruha Pravesha Blessing",
    description: "Auspicious housewarming feast with traditional dishes to bless your new home",
    pricePerHead: 399,
    originalPrice: 449,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
    category: "Housewarming",
    minGuests: 30,
    maxGuests: 200,
    includes: [
      "Akki Rotti",
      "Chitranna (Lemon Rice)",
      "Kosambari",
      "Filter Coffee",
      "Traditional Sweets",
      "Puja Prasadam",
      "Simple Service Setup"
    ],
    duration: "3-4 hours",
    preparationTime: "1 day",
    suitableFor: ["Housewarming", "Gruha Pravesha", "Vastu Puja"],
    isVeg: true,
    isPopular: false,
    discount: "11% OFF",
    bookings: "200+ Events"
  }
];

export const getPackagesByCategory = (category: string): EventPackage[] => {
  if (category === "All") return eventPackages;
  return eventPackages.filter(pkg => pkg.category === category);
};

export const getPackageById = (id: number): EventPackage | undefined => {
  return eventPackages.find(pkg => pkg.id === id);
};

export const calculatePackageTotal = (packageItem: EventPackage, guestCount: number): number => {
  return packageItem.pricePerHead * guestCount;
};
