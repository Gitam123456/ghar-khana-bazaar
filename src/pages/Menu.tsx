
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Star, Plus, Minus, Search, Filter, Heart } from "lucide-react";
import Header from "@/components/Header";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState<{[key: number]: number}>({});

  const categories = ["All", "Starters", "Main Course", "Rice & Biryani", "Breads", "Desserts", "Beverages"];

  const foodItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      description: "Authentic Hyderabadi chicken biryani with aromatic basmati rice and tender chicken",
      price: 280,
      originalPrice: 320,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d129?w=300&h=200&fit=crop",
      category: "Rice & Biryani",
      isVeg: false,
      isPopular: true,
      discount: "12% OFF"
    },
    {
      id: 2,
      name: "Dal Makhani",
      description: "Creamy black lentils slow-cooked with butter and aromatic spices",
      price: 180,
      originalPrice: 200,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
      category: "Main Course",
      isVeg: true,
      isPopular: false,
      discount: "10% OFF"
    },
    {
      id: 3,
      name: "Paneer Butter Masala",
      description: "Rich and creamy cottage cheese curry in tomato-based gravy",
      price: 220,
      originalPrice: 250,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
      category: "Main Course",
      isVeg: true,
      isPopular: true,
      discount: "12% OFF"
    },
    {
      id: 4,
      name: "Chicken Tikka",
      description: "Succulent pieces of chicken marinated in yogurt and spices, grilled to perfection",
      price: 350,
      originalPrice: 380,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop",
      category: "Starters",
      isVeg: false,
      isPopular: true,
      discount: "8% OFF"
    },
    {
      id: 5,
      name: "Garlic Naan",
      description: "Soft and fluffy Indian bread topped with garlic and herbs",
      price: 80,
      originalPrice: 90,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop",
      category: "Breads",
      isVeg: true,
      isPopular: false,
      discount: "11% OFF"
    },
    {
      id: 6,
      name: "Gulab Jamun",
      description: "Traditional Indian sweet dumplings in sugar syrup",
      price: 120,
      originalPrice: 140,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=300&h=200&fit=crop",
      category: "Desserts",
      isVeg: true,
      isPopular: false,
      discount: "14% OFF"
    }
  ];

  const filteredItems = foodItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, count]) => {
      const item = foodItems.find(item => item.id === parseInt(itemId));
      return total + (item ? item.price * count : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search for dishes..."
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

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.discount && (
                  <Badge className="absolute top-3 left-3 bg-green-500">
                    {item.discount}
                  </Badge>
                )}
                {item.isPopular && (
                  <Badge className="absolute top-3 right-3 bg-orange-500">
                    Popular
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-3 right-3 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-3 left-3">
                  <Badge variant={item.isVeg ? "secondary" : "destructive"} className="text-xs">
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="py-0">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-primary">₹{item.price}</span>
                  <span className="text-sm text-gray-500 line-through">₹{item.originalPrice}</span>
                </div>
              </CardContent>
              
              <CardFooter className="pt-4">
                {cart[item.id] > 0 ? (
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="font-medium">{cart[item.id]}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => addToCart(item.id)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <span className="font-medium">₹{item.price * cart[item.id]}</span>
                  </div>
                ) : (
                  <Button onClick={() => addToCart(item.id)} className="w-full">
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border">
            <div className="flex items-center justify-between space-x-4">
              <div>
                <div className="font-medium">{getTotalItems()} items</div>
                <div className="text-sm text-gray-600">₹{getTotalPrice()}</div>
              </div>
              <Button>View Cart</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
