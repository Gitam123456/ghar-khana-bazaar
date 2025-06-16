
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Plus } from "lucide-react";
import Header from "@/components/Header";

const Menu = () => {
  const foodItems = [
    {
      id: 1,
      name: "Biryani",
      description: "Authentic homemade chicken biryani with aromatic spices",
      price: 250,
      rating: 4.8,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Dal Chawal",
      description: "Comfort food with yellow dal and steamed basmati rice",
      price: 120,
      rating: 4.5,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Rajma Chawal",
      description: "Kidney beans curry with rice, a North Indian favorite",
      price: 150,
      rating: 4.6,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Chole Bhature",
      description: "Spicy chickpea curry with fluffy bhature bread",
      price: 180,
      rating: 4.7,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Menu</h1>
          <p className="text-gray-600">Delicious homemade food delivered to your doorstep</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {foodItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600 mb-3">
                  {item.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">₹{item.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
