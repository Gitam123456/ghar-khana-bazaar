
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck, MapPin, Users, Award, Shield } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  const popularRestaurants = [
    {
      id: 1,
      name: "Mama's Kitchen",
      cuisine: "North Indian",
      rating: 4.8,
      deliveryTime: "25-30 min",
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop",
      offer: "20% OFF"
    },
    {
      id: 2,
      name: "Spice Garden",
      cuisine: "South Indian",
      rating: 4.6,
      deliveryTime: "30-35 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop",
      offer: "Free Delivery"
    },
    {
      id: 3,
      name: "Biriyani House",
      cuisine: "Mughlai",
      rating: 4.9,
      deliveryTime: "20-25 min",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d129?w=300&h=200&fit=crop",
      offer: "Buy 1 Get 1"
    },
    {
      id: 4,
      name: "Punjab Dhaba",
      cuisine: "Punjabi",
      rating: 4.7,
      deliveryTime: "35-40 min",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop",
      offer: "15% OFF"
    }
  ];

  const categories = [
    { name: "Pizza", icon: "🍕", count: "120+ options" },
    { name: "Burger", icon: "🍔", count: "85+ options" },
    { name: "Chinese", icon: "🥡", count: "95+ options" },
    { name: "Indian", icon: "🍛", count: "150+ options" },
    { name: "Italian", icon: "🍝", count: "60+ options" },
    { name: "Desserts", icon: "🍰", count: "40+ options" }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Fast Delivery",
      description: "Get your food delivered in 30 minutes or less"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Safe & Hygienic",
      description: "100% safe and hygienic food preparation"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Best Quality",
      description: "Premium quality ingredients and authentic taste"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Delicious Food
                <br />
                <span className="text-yellow-300">Delivered Fast</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Order from your favorite restaurants and get fresh, hot food delivered to your doorstep in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button size="lg" variant="secondary" className="text-orange-600 font-semibold px-8">
                    Order Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-orange-600 px-8">
                  View Menu
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=500&fit=crop" 
                alt="Delicious Food" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's on your mind?</h2>
            <p className="text-gray-600">Choose from a variety of cuisines</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Restaurants</h2>
              <p className="text-gray-600">Most ordered from restaurants near you</p>
            </div>
            <Link to="/menu">
              <Button variant="outline">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularRestaurants.map((restaurant) => (
              <Card key={restaurant.id} className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                <div className="relative">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-500">
                    {restaurant.offer}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{restaurant.deliveryTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose HomeFoodi?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide the best food delivery experience with quality assurance and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-orange-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-orange-100">Orders Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Cities Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Order Your Favorite Food?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join millions of food lovers and get your favorite meals delivered in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 px-8">
                Start Ordering
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 px-8">
              Download App
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
