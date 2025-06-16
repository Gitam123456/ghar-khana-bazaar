
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Truck } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {
  useEffect(() => {
    console.log("Index component mounted successfully");
  }, []);

  console.log("Index component rendering");

  const features = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: "Quality Food",
      description: "Fresh, homemade meals prepared with love by local home chefs"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Quick Delivery",
      description: "Fast and reliable delivery service right to your doorstep"
    },
    {
      icon: <Truck className="w-8 h-8 text-green-500" />,
      title: "Order Tracking",
      description: "Real-time tracking of your orders from kitchen to your table"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Ghar Khana Bazaar
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover delicious homemade food from local kitchens. 
            Fresh, authentic, and delivered with care.
          </p>
          <div className="space-x-4">
            <Link to="/menu">
              <Button size="lg" variant="secondary" className="text-primary">
                Browse Menu
              </Button>
            </Link>
            <Link to="/orders">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                View Orders
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the best of home-cooked meals with our reliable service and quality assurance
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

      {/* CTA Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Order?
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of satisfied customers who trust us for their daily meals
          </p>
          <Link to="/menu">
            <Button size="lg" className="px-8">
              Start Ordering Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
