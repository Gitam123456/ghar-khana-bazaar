
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Truck, MapPin, Users, Award, Shield, ChefHat, Heart, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";

const Index = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const foodItemsRef = useRef<HTMLDivElement>(null);
  const vegetablesRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Enhanced hero image parallax with 3D effects
      if (heroImageRef.current) {
        const heroOffset = scrollY * 0.3;
        const rotateX = Math.min(scrollY * 0.01, 10);
        const scale = 1 + Math.min(scrollY * 0.0002, 0.1);
        heroImageRef.current.style.transform = `translateY(${heroOffset}px) scale(${scale}) rotateX(${rotateX}deg)`;
      }

      // Enhanced food items animation with depth
      if (foodItemsRef.current) {
        const foodRect = foodItemsRef.current.getBoundingClientRect();
        const foodCenter = foodRect.top + foodRect.height / 2;
        const distanceFromCenter = Math.abs(windowHeight / 2 - foodCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
        
        const translateY = (1 - progress) * 120;
        const opacity = progress;
        const scale = 0.7 + progress * 0.3;
        const rotateX = (1 - progress) * 20;
        
        foodItemsRef.current.style.transform = `translateY(${translateY}px) scale(${scale}) rotateX(${rotateX}deg)`;
        foodItemsRef.current.style.opacity = opacity.toString();
      }

      // Enhanced vegetables animation with 3D rotation
      if (vegetablesRef.current) {
        const vegRect = vegetablesRef.current.getBoundingClientRect();
        const vegCenter = vegRect.top + vegRect.height / 2;
        const distanceFromCenter = Math.abs(windowHeight / 2 - vegCenter);
        const maxDistance = windowHeight;
        const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
        
        const translateX = (1 - progress) * -80;
        const rotateY = (1 - progress) * 25;
        const rotateZ = (1 - progress) * 5;
        const opacity = progress;
        
        vegetablesRef.current.style.transform = `translateX(${translateX}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        vegetablesRef.current.style.opacity = opacity.toString();
      }

      // Enhanced features animation with staggered 3D effects
      if (featuresRef.current) {
        const featuresRect = featuresRef.current.getBoundingClientRect();
        const featuresTop = featuresRect.top;
        if (featuresTop < windowHeight * 0.8) {
          const progress = Math.max(0, 1 - featuresTop / (windowHeight * 0.8));
          const children = featuresRef.current.children;
          
          Array.from(children).forEach((child, index) => {
            const delay = index * 0.15;
            const adjustedProgress = Math.max(0, progress - delay);
            const translateY = (1 - adjustedProgress) * 80;
            const opacity = adjustedProgress;
            const rotateX = (1 - adjustedProgress) * 15;
            const scale = 0.8 + adjustedProgress * 0.2;
            
            (child as HTMLElement).style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`;
            (child as HTMLElement).style.opacity = opacity.toString();
            (child as HTMLElement).style.transitionDelay = `${delay * 100}ms`;
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const popularRestaurants = [
    {
      id: 1,
      name: "Karnataka Mess",
      cuisine: "South Indian",
      rating: 4.8,
      deliveryTime: "25-30 min",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
      offer: "20% OFF",
      originalPrice: "₹300",
      currentPrice: "₹240"
    },
    {
      id: 2,
      name: "Mysore Palace Restaurant",
      cuisine: "Karnataka Special",
      rating: 4.6,
      deliveryTime: "30-35 min",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
      offer: "Free Delivery",
      originalPrice: "₹450",
      currentPrice: "₹450"
    },
    {
      id: 3,
      name: "Udupi Kitchen",
      cuisine: "Coastal Karnataka",
      rating: 4.9,
      deliveryTime: "20-25 min",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
      offer: "Buy 1 Get 1",
      originalPrice: "₹280",
      currentPrice: "₹140"
    },
    {
      id: 4,
      name: "Bangalore Tiffin Center",
      cuisine: "Traditional",
      rating: 4.7,
      deliveryTime: "35-40 min",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
      offer: "15% OFF",
      originalPrice: "₹200",
      currentPrice: "₹170"
    },
    {
      id: 5,
      name: "Coorg Spice House",
      cuisine: "Coorg Special",
      rating: 4.8,
      deliveryTime: "40-45 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      offer: "25% OFF",
      originalPrice: "₹350",
      currentPrice: "₹262"
    }
  ];

  const categories = [
    { name: "Dosa", icon: "🥞", count: "120+ varieties", color: "from-orange-400 to-red-500" },
    { name: "Idli", icon: "⚪", count: "85+ options", color: "from-green-400 to-blue-500" },
    { name: "Vada", icon: "🍩", count: "95+ options", color: "from-purple-400 to-pink-500" },
    { name: "Sambar", icon: "🍲", count: "150+ types", color: "from-yellow-400 to-orange-500" },
    { name: "Rasam", icon: "🍵", count: "60+ flavors", color: "from-red-400 to-pink-500" },
    { name: "Payasam", icon: "🍮", count: "40+ varieties", color: "from-indigo-400 to-purple-500" }
  ];

  const features = [
    {
      icon: <Clock className="w-10 h-10 text-orange-500" />,
      title: "Lightning Fast",
      description: "Get your favorite Karnataka dishes delivered in just 25 minutes",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Shield className="w-10 h-10 text-green-500" />,
      title: "100% Authentic",
      description: "Traditional recipes passed down through generations of Karnataka families",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Award className="w-10 h-10 text-blue-500" />,
      title: "Premium Quality",
      description: "Sourced from the finest spice gardens and organic farms of Karnataka",
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-x-hidden">
      <Header />
      
      {/* Enhanced Hero Section with 3D Depth */}
      <section 
        ref={heroSectionRef}
        className="relative min-h-screen bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 text-white overflow-hidden perspective-1000"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute top-60 right-20 w-24 h-24 bg-yellow-300 rounded-full animate-floating3d"></div>
          <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-orange-300 rounded-full animate-pulse-subtle"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
            <div className={`z-10 relative transform transition-all duration-1000 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-block mb-6">
                <Badge className="bg-yellow-400 text-orange-800 px-4 py-2 text-sm font-semibold animate-pulse-subtle">
                  🔥 Now delivering in 25+ cities
                </Badge>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Taste the
                <br />
                <span className="gradient-text font-poppins">Soul of Karnataka</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 font-inter font-light leading-relaxed">
                Experience authentic South Indian flavors crafted with love, tradition, and the finest spices from Karnataka's heritage kitchens.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/menu">
                  <Button 
                    size="lg" 
                    className="btn-premium text-white font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <ChefHat className="w-5 h-5 mr-2" />
                    Order Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/menu">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="glass-effect text-white border-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    View Menu
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm opacity-90">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">4.8 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">50K+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5" />
                  <span className="font-semibold">25min Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block relative perspective-1000">
              <img 
                ref={heroImageRef}
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=700&h=600&fit=crop" 
                alt="Authentic Karnataka Thali" 
                className="rounded-3xl shadow-2xl transition-all duration-1000 ease-out transform-3d hover-tilt w-full h-auto object-cover"
                style={{ transformOrigin: 'center center' }}
              />
              
              {/* Floating food elements with 3D effects */}
              <div className="absolute -top-10 -right-10 animate-floating3d">
                <div className="text-8xl opacity-80 transform rotate-12">🥞</div>
              </div>
              <div className="absolute -bottom-10 -left-10 animate-float">
                <div className="text-7xl opacity-80 transform -rotate-12">🍲</div>
              </div>
              <div className="absolute top-1/2 -right-16 animate-pulse-subtle">
                <div className="text-6xl opacity-60">⚪</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Enhanced Categories Section with Netflix-style cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-poppins">
              Karnataka's Finest <span className="gradient-text">Delicacies</span>
            </h2>
            <p className="text-xl text-gray-600 font-inter max-w-2xl mx-auto">
              Discover authentic flavors that have been perfecting South Indian cuisine for centuries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className={`netflix-card text-center cursor-pointer group relative overflow-hidden bg-gradient-to-br ${category.color} border-0`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="text-5xl mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 transform">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-white mb-2 text-lg font-poppins">{category.name}</h3>
                  <p className="text-sm text-white/90 font-inter">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Popular Restaurants with 3D cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={foodItemsRef}
            className="transition-all duration-1000 ease-out perspective-1000"
            style={{ opacity: 0, transform: 'translateY(100px) scale(0.8) rotateX(20deg)' }}
          >
            <div className="flex justify-between items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-poppins">
                  Top <span className="gradient-text">Karnataka</span> Restaurants
                </h2>
                <p className="text-xl text-gray-600 font-inter">Most loved destinations for authentic South Indian cuisine</p>
              </div>
              <Link to="/menu">
                <Button variant="outline" className="hover:scale-105 transition-all duration-300 shadow-lg font-semibold">
                  View All
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {popularRestaurants.map((restaurant, index) => (
                <Card key={restaurant.id} className="netflix-card overflow-hidden group border-0 shadow-xl card-3d">
                  <div className="relative overflow-hidden">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white font-bold animate-pulse">
                      {restaurant.offer}
                    </Badge>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    
                    {/* Price overlay on hover */}
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold text-lg">{restaurant.currentPrice}</span>
                        {restaurant.originalPrice !== restaurant.currentPrice && (
                          <span className="text-white/70 line-through text-sm">{restaurant.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1 font-poppins group-hover:gradient-text transition-all duration-300">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 font-inter">{restaurant.cuisine}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold">{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Enhanced floating vegetables with 3D transforms */}
        <div 
          ref={vegetablesRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out perspective-1000"
          style={{ opacity: 0, transform: 'translateX(-80px) rotateY(25deg) rotateZ(5deg)' }}
        >
          <div className="flex flex-col space-y-12">
            <div className="text-9xl opacity-20 animate-floating3d transform hover:scale-110 transition-all duration-500">🥥</div>
            <div className="text-7xl opacity-25 animate-float transform hover:scale-110 transition-all duration-500">🌶️</div>
            <div className="text-8xl opacity-20 animate-pulse-subtle transform hover:scale-110 transition-all duration-500">🍃</div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with 3D cards */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 font-poppins">
              Why Choose <span className="gradient-text">Ghar Khanaa</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              We bring you the authentic taste of Karnataka with traditional recipes, fresh ingredients, and modern convenience
            </p>
          </div>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000"
          >
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="hover-lift text-center group relative overflow-hidden border-0 shadow-xl card-3d"
                style={{ opacity: 0, transform: 'translateY(80px) rotateX(15deg) scale(0.8)' }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 transform">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 group-hover:shadow-xl transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-black font-poppins group-hover:gradient-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-gray-600 text-lg font-inter leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="hover-scale cursor-pointer group">
              <div className="text-5xl md:text-6xl font-black mb-4 animate-pulse-subtle group-hover:gradient-text transition-all duration-300">200+</div>
              <div className="text-orange-100 text-lg font-inter group-hover:text-white transition-all duration-300">Karnataka Restaurants</div>
            </div>
            <div className="hover-scale cursor-pointer group">
              <div className="text-5xl md:text-6xl font-black mb-4 animate-pulse-subtle group-hover:gradient-text transition-all duration-300">75K+</div>
              <div className="text-orange-100 text-lg font-inter group-hover:text-white transition-all duration-300">Happy Food Lovers</div>
            </div>
            <div className="hover-scale cursor-pointer group">
              <div className="text-5xl md:text-6xl font-black mb-4 animate-pulse-subtle group-hover:gradient-text transition-all duration-300">500K+</div>
              <div className="text-orange-100 text-lg font-inter group-hover:text-white transition-all duration-300">Dosas Delivered</div>
            </div>
            <div className="hover-scale cursor-pointer group">
              <div className="text-5xl md:text-6xl font-black mb-4 animate-pulse-subtle group-hover:gradient-text transition-all duration-300">15+</div>
              <div className="text-orange-100 text-lg font-inter group-hover:text-white transition-all duration-300">Karnataka Cities</div>
            </div>
          </div>
        </div>
        
        {/* Enhanced background animated elements */}
        <div className="absolute top-10 left-10 animate-floating3d">
          <div className="text-6xl opacity-10">🍽️</div>
        </div>
        <div className="absolute bottom-10 right-10 animate-float">
          <div className="text-7xl opacity-10">🚚</div>
        </div>
        <div className="absolute top-1/2 left-1/4 animate-pulse-subtle">
          <div className="text-5xl opacity-10">⭐</div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 font-poppins">
            Craving Authentic <span className="gradient-text">Karnataka</span> Food?
          </h2>
          <p className="text-gray-300 mb-12 text-xl font-inter leading-relaxed max-w-2xl mx-auto">
            Join thousands of food lovers and experience the traditional flavors that define South Indian cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/menu">
              <Button 
                size="lg" 
                className="btn-premium text-white font-bold px-12 py-4 text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <ChefHat className="w-6 h-6 mr-3" />
                Start Ordering
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            <Link to="/menu">
              <Button 
                size="lg" 
                variant="outline" 
                className="glass-effect text-white border-white hover:bg-white hover:text-gray-900 px-12 py-4 text-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <MapPin className="w-6 h-6 mr-3" />
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
