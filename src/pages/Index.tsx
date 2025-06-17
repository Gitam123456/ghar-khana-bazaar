
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck, MapPin, Users, Award, Shield } from "lucide-react";
import Header from "@/components/Header";
import { useEffect, useRef } from "react";

const Index = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const foodItemsRef = useRef<HTMLDivElement>(null);
  const vegetablesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero image parallax effect
      if (heroImageRef.current) {
        const heroOffset = scrollY * 0.5;
        heroImageRef.current.style.transform = `translateY(${heroOffset}px) scale(${1 + scrollY * 0.0001})`;
      }

      // Food items animation
      if (foodItemsRef.current) {
        const foodRect = foodItemsRef.current.getBoundingClientRect();
        const foodCenter = foodRect.top + foodRect.height / 2;
        const distanceFromCenter = Math.abs(windowHeight / 2 - foodCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
        
        const translateY = (1 - progress) * 100;
        const opacity = progress;
        const scale = 0.8 + progress * 0.2;
        
        foodItemsRef.current.style.transform = `translateY(${translateY}px) scale(${scale})`;
        foodItemsRef.current.style.opacity = opacity.toString();
      }

      // Vegetables animation
      if (vegetablesRef.current) {
        const vegRect = vegetablesRef.current.getBoundingClientRect();
        const vegCenter = vegRect.top + vegRect.height / 2;
        const distanceFromCenter = Math.abs(windowHeight / 2 - vegCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
        
        const translateX = (1 - progress) * -50;
        const rotateY = (1 - progress) * 15;
        const opacity = progress;
        
        vegetablesRef.current.style.transform = `translateX(${translateX}px) rotateY(${rotateY}deg)`;
        vegetablesRef.current.style.opacity = opacity.toString();
      }

      // Features animation
      if (featuresRef.current) {
        const featuresRect = featuresRef.current.getBoundingClientRect();
        const featuresTop = featuresRect.top;
        if (featuresTop < windowHeight * 0.8) {
          const progress = Math.max(0, 1 - featuresTop / (windowHeight * 0.8));
          const children = featuresRef.current.children;
          
          Array.from(children).forEach((child, index) => {
            const delay = index * 0.1;
            const adjustedProgress = Math.max(0, progress - delay);
            const translateY = (1 - adjustedProgress) * 50;
            const opacity = adjustedProgress;
            
            (child as HTMLElement).style.transform = `translateY(${translateY}px)`;
            (child as HTMLElement).style.opacity = opacity.toString();
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularRestaurants = [
    {
      id: 1,
      name: "Karnataka Mess",
      cuisine: "South Indian",
      rating: 4.8,
      deliveryTime: "25-30 min",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=200&fit=crop",
      offer: "20% OFF"
    },
    {
      id: 2,
      name: "Mysore Palace Restaurant",
      cuisine: "Karnataka Special",
      rating: 4.6,
      deliveryTime: "30-35 min",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&h=200&fit=crop",
      offer: "Free Delivery"
    },
    {
      id: 3,
      name: "Udupi Kitchen",
      cuisine: "Coastal Karnataka",
      rating: 4.9,
      deliveryTime: "20-25 min",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300&h=200&fit=crop",
      offer: "Buy 1 Get 1"
    },
    {
      id: 4,
      name: "Bangalore Tiffin Center",
      cuisine: "Traditional",
      rating: 4.7,
      deliveryTime: "35-40 min",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300&h=200&fit=crop",
      offer: "15% OFF"
    }
  ];

  const categories = [
    { name: "Dosa", icon: "🥞", count: "120+ varieties" },
    { name: "Idli", icon: "⚪", count: "85+ options" },
    { name: "Vada", icon: "🍩", count: "95+ options" },
    { name: "Sambar", icon: "🍲", count: "150+ types" },
    { name: "Rasam", icon: "🍵", count: "60+ flavors" },
    { name: "Payasam", icon: "🍮", count: "40+ varieties" }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Fresh & Hot",
      description: "Traditional South Indian food prepared fresh and served hot"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Authentic Recipes",
      description: "Original Karnataka recipes passed down through generations"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: "Best Quality",
      description: "Premium ingredients sourced directly from Karnataka"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 relative">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Authentic South Indian
                <br />
                <span className="text-yellow-300">Karnataka Flavors</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Experience the rich heritage of Karnataka cuisine with traditional dosas, idlis, and more delivered fresh to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/menu">
                  <Button size="lg" variant="secondary" className="text-orange-600 font-semibold px-8 hover:scale-105 hover:bg-yellow-200 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Order Now
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-400 hover:text-orange-800 hover:border-yellow-400 px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <img 
                ref={heroImageRef}
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&h=500&fit=crop" 
                alt="South Indian Thali" 
                className="rounded-2xl shadow-2xl transition-transform duration-1000 ease-out"
                style={{ transformOrigin: 'center center' }}
              />
            </div>
          </div>
        </div>
        
        {/* Floating South Indian food elements */}
        <div className="absolute top-20 right-10 animate-bounce delay-1000">
          <div className="text-6xl opacity-20">🥞</div>
        </div>
        <div className="absolute bottom-20 left-10 animate-bounce delay-2000">
          <div className="text-5xl opacity-20">⚪</div>
        </div>
        <div className="absolute top-40 left-1/4 animate-bounce delay-500">
          <div className="text-4xl opacity-20">🍲</div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Traditional Karnataka Delicacies</h2>
            <p className="text-gray-600">Authentic flavors from the heart of South India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3 transition-transform duration-300 hover:scale-110">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Food Items Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={foodItemsRef}
            className="transition-all duration-1000 ease-out"
            style={{ opacity: 0, transform: 'translateY(100px) scale(0.8)' }}
          >
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Karnataka Restaurants</h2>
                <p className="text-gray-600">Most loved South Indian food destinations</p>
              </div>
              <Link to="/menu">
                <Button variant="outline" className="hover:scale-105 transition-transform duration-300">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularRestaurants.map((restaurant, index) => (
                <Card key={restaurant.id} className="hover:shadow-lg transition-all duration-500 cursor-pointer overflow-hidden group hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className="absolute top-3 left-3 bg-green-500 animate-pulse">
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
        </div>
        
        {/* Floating South Indian vegetables */}
        <div 
          ref={vegetablesRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out"
          style={{ opacity: 0, transform: 'translateX(-50px) rotateY(15deg)' }}
        >
          <div className="flex flex-col space-y-8">
            <div className="text-8xl opacity-30 animate-bounce delay-300">🥥</div>
            <div className="text-6xl opacity-30 animate-bounce delay-700">🌶️</div>
            <div className="text-7xl opacity-30 animate-bounce delay-1100">🍃</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Ghar Khanaa?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring you the authentic taste of Karnataka with traditional recipes and fresh ingredients
            </p>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-700 hover:scale-105"
                style={{ opacity: 0, transform: 'translateY(50px)' }}
              >
                <CardHeader>
                  <div className="flex justify-center mb-4 transition-transform duration-500 hover:scale-110 hover:rotate-12">
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
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover:scale-110 transition-transform duration-500">
              <div className="text-4xl font-bold mb-2 animate-pulse">200+</div>
              <div className="text-orange-100">Karnataka Restaurants</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-500">
              <div className="text-4xl font-bold mb-2 animate-pulse delay-200">75K+</div>
              <div className="text-orange-100">Happy Food Lovers</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-500">
              <div className="text-4xl font-bold mb-2 animate-pulse delay-400">500K+</div>
              <div className="text-orange-100">Dosas Delivered</div>
            </div>
            <div className="hover:scale-110 transition-transform duration-500">
              <div className="text-4xl font-bold mb-2 animate-pulse delay-600">15+</div>
              <div className="text-orange-100">Karnataka Cities</div>
            </div>
          </div>
        </div>
        
        {/* Background animated elements */}
        <div className="absolute top-10 left-10 animate-spin-slow">
          <div className="text-4xl opacity-10">🍽️</div>
        </div>
        <div className="absolute bottom-10 right-10 animate-spin-slow">
          <div className="text-5xl opacity-10">🚚</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">
            Craving Authentic Karnataka Food?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of food lovers and taste the traditional flavors of South India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start Ordering
              </Button>
            </Link>
            <Link to="/menu">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-400 hover:text-white hover:border-orange-400 px-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Download App
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
