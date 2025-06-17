
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Plus, Minus, Search, Filter, Heart, Calendar, Users, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [guestCount, setGuestCount] = useState(100);
  const [eventDate, setEventDate] = useState("");

  const categories = ["All", "Wedding Packages", "Baby Shower", "Housewarming", "Corporate", "Festival Special", "Birthday Parties"];

  const eventPackages = [
    {
      id: 1,
      name: "Royal Wedding Feast",
      description: "Complete traditional wedding catering with banana leaf service, live counters, and authentic Karnataka dishes",
      pricePerHead: 799,
      originalPrice: 899,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=200&fit=crop",
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
        "Setup & Cleanup"
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
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
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
        "Decorated Service"
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
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
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
    },
    {
      id: 4,
      name: "Corporate Elite Catering",
      description: "Professional catering for office events, meetings, and corporate celebrations",
      pricePerHead: 349,
      originalPrice: 399,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      category: "Corporate",
      minGuests: 25,
      maxGuests: 500,
      includes: [
        "Executive Lunch Boxes",
        "Tea/Coffee Service",
        "Healthy Snack Options",
        "Continental + South Indian",
        "Professional Presentation",
        "Timely Service",
        "Minimal Setup"
      ],
      duration: "2-6 hours",
      preparationTime: "Same day possible",
      suitableFor: ["Corporate Events", "Office Parties", "Meetings", "Product Launches"],
      isVeg: true,
      isPopular: false,
      discount: "13% OFF",
      bookings: "150+ Events"
    },
    {
      id: 5,
      name: "Ugadi Festival Special",
      description: "Traditional New Year celebration with authentic festive dishes and seasonal specialties",
      pricePerHead: 299,
      originalPrice: 349,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
      category: "Festival Special",
      minGuests: 50,
      maxGuests: 300,
      includes: [
        "Obbattu (Holige)",
        "Ugadi Pachadi",
        "Kosambari",
        "Traditional Rice Dishes",
        "Seasonal Vegetables",
        "Festival Sweets",
        "Traditional Service"
      ],
      duration: "4-5 hours",
      preparationTime: "1-2 days",
      suitableFor: ["Ugadi", "Diwali", "Dussehra", "Other Festivals"],
      isVeg: true,
      isPopular: true,
      discount: "14% OFF",
      bookings: "400+ Events"
    },
    {
      id: 6,
      name: "Birthday Celebration Package",
      description: "Fun and delicious catering for birthday parties with kid-friendly and adult options",
      pricePerHead: 279,
      originalPrice: 319,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      category: "Birthday Parties",
      minGuests: 20,
      maxGuests: 150,
      includes: [
        "Mini Meals",
        "Snack Platters",
        "Birthday Special Sweets",
        "Fresh Juices",
        "Kid-Friendly Options",
        "Party Setup",
        "Celebration Service"
      ],
      duration: "3-4 hours",
      preparationTime: "1 day",
      suitableFor: ["Birthday Parties", "Anniversary", "Small Celebrations"],
      isVeg: true,
      isPopular: false,
      discount: "13% OFF",
      bookings: "250+ Events"
    }
  ];

  const filteredItems = eventPackages.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const generateWhatsAppLink = (pkg: any) => {
    const message = `Hi Ghar Khanaa! I'm interested in the *${pkg.name}* package for ${guestCount} guests${eventDate ? ` on ${eventDate}` : ''}. 

Package Details:
- Price: ₹${pkg.pricePerHead} per head
- Total: ₹${pkg.pricePerHead * guestCount}
- Includes: ${pkg.includes.slice(0, 3).join(', ')} and more

Please share more details and help me book this event.`;
    
    const phone = '+919123456789';
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const calculateTotal = (pkg: any) => {
    return pkg.pricePerHead * guestCount;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-poppins">
            Event <span className="gradient-text">Catering Packages</span>
          </h1>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Professional catering for weddings, celebrations, and special occasions with authentic Karnataka cuisine
          </p>
        </div>

        {/* Event Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 font-poppins">📅 Plan Your Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
              <Input
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Guests</label>
              <Input
                type="number"
                value={guestCount}
                min={10}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 100)}
                className="w-full"
                placeholder="Number of Guests"
              />
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                <Search className="w-4 h-4 mr-2" />
                Find Packages
              </Button>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search event packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((pkg) => (
            <Card key={pkg.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden group border-0 shadow-lg">
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
                />
                {pkg.discount && (
                  <Badge className="absolute top-3 left-3 bg-green-500 animate-pulse">
                    {pkg.discount}
                  </Badge>
                )}
                {pkg.isPopular && (
                  <Badge className="absolute top-3 right-3 bg-orange-500">
                    Popular
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-3 left-3">
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                    VEG
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-poppins">{pkg.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm font-inter">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="py-0">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-xl font-bold text-primary">₹{pkg.pricePerHead}/head</span>
                  <span className="text-sm text-gray-500 line-through">₹{pkg.originalPrice}</span>
                </div>
                
                <div className="text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-4 mb-1">
                    <span className="flex items-center space-x-1">
                      <Users className="w-3 h-3" />
                      <span>{pkg.minGuests}-{pkg.maxGuests} guests</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{pkg.duration}</span>
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{pkg.bookings} • {pkg.preparationTime} prep</div>
                </div>

                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">Includes:</p>
                  <div className="flex flex-wrap gap-1">
                    {pkg.includes.slice(0, 3).map((item, i) => (
                      <Badge key={i} variant="outline" className="text-xs">{item}</Badge>
                    ))}
                    {pkg.includes.length > 3 && (
                      <Badge variant="outline" className="text-xs">+{pkg.includes.length - 3} more</Badge>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <div className="text-sm">
                    <div className="flex justify-between">
                      <span>For {guestCount} guests:</span>
                      <span className="font-bold">₹{calculateTotal(pkg).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4 space-y-2">
                <Button 
                  onClick={() => setSelectedPackage(pkg)} 
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book This Package
                </Button>
                <a 
                  href={generateWhatsAppLink(pkg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    WhatsApp Quote
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Package Detail Modal would go here */}
        {selectedPackage && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold font-poppins">{selectedPackage.name}</h2>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setSelectedPackage(null)}
                  >
                    ✕
                  </Button>
                </div>
                
                <img 
                  src={selectedPackage.image} 
                  alt={selectedPackage.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <p className="text-gray-600 mb-4 font-inter">{selectedPackage.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold mb-2">Package Includes:</h3>
                    <ul className="text-sm space-y-1">
                      {selectedPackage.includes.map((item: string, i: number) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="text-green-500">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Perfect For:</h3>
                    <div className="flex flex-wrap gap-1">
                      {selectedPackage.suitableFor.map((occasion: string, i: number) => (
                        <Badge key={i} variant="secondary" className="text-xs">{occasion}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold">₹{selectedPackage.pricePerHead} per head</div>
                      <div className="text-sm text-gray-600">For {guestCount} guests = ₹{calculateTotal(selectedPackage).toLocaleString()}</div>
                    </div>
                    <Badge className="bg-green-500">{selectedPackage.discount}</Badge>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={generateWhatsAppLink(selectedPackage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600">
                      <Phone className="w-4 h-4 mr-2" />
                      Book via WhatsApp
                    </Button>
                  </a>
                  <Button variant="outline" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
