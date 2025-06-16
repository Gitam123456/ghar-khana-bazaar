
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone, Star, ChefHat, Truck, CheckCircle } from "lucide-react";
import Header from "@/components/Header";

const Orders = () => {
  const [selectedTab, setSelectedTab] = useState("Current");

  const currentOrders = [
    {
      id: "ORD001",
      restaurant: "Mama's Kitchen",
      items: ["Chicken Biryani", "Dal Makhani", "Garlic Naan"],
      total: 540,
      status: "Preparing",
      estimatedTime: "25-30 min",
      date: "2024-06-16",
      time: "2:30 PM",
      address: "123 Main Street, Delhi",
      phone: "+91 9876543210",
      progress: 2
    },
    {
      id: "ORD002",
      restaurant: "Spice Garden",
      items: ["Paneer Butter Masala", "Jeera Rice"],
      total: 320,
      status: "On the way",
      estimatedTime: "10-15 min",
      date: "2024-06-16",
      time: "3:15 PM",
      address: "456 Park Avenue, Mumbai",
      phone: "+91 9876543210",
      progress: 3
    }
  ];

  const pastOrders = [
    {
      id: "ORD003",
      restaurant: "Biriyani House",
      items: ["Mutton Biryani", "Raita", "Shorba"],
      total: 650,
      status: "Delivered",
      date: "2024-06-15",
      time: "7:45 PM",
      address: "789 Garden Road, Bangalore",
      rating: 5
    },
    {
      id: "ORD004",
      restaurant: "Punjab Dhaba",
      items: ["Chole Bhature", "Lassi"],
      total: 280,
      status: "Delivered",
      date: "2024-06-14",
      time: "1:20 PM",
      address: "321 City Center, Pune",
      rating: 4
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Preparing":
        return "bg-yellow-100 text-yellow-800";
      case "On the way":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Preparing":
        return <ChefHat className="w-4 h-4" />;
      case "On the way":
        return <Truck className="w-4 h-4" />;
      case "Delivered":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const OrderProgress = ({ progress }: { progress: number }) => {
    const steps = ["Order Placed", "Confirmed", "Preparing", "On the way", "Delivered"];
    
    return (
      <div className="flex items-center space-x-2 mt-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div 
              className={`w-3 h-3 rounded-full ${
                index <= progress ? 'bg-green-500' : 'bg-gray-300'
              }`}
            />
            {index < steps.length - 1 && (
              <div 
                className={`w-8 h-0.5 ${
                  index < progress ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Orders</h1>
          <p className="text-gray-600">Track and manage your food orders</p>
        </div>

        {/* Order Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
          {["Current", "Past"].map((tab) => (
            <Button
              key={tab}
              variant={selectedTab === tab ? "default" : "ghost"}
              onClick={() => setSelectedTab(tab)}
              className="flex-1"
            >
              {tab} Orders
            </Button>
          ))}
        </div>
        
        {/* Current Orders */}
        {selectedTab === "Current" && (
          <div className="space-y-6">
            {currentOrders.length > 0 ? (
              currentOrders.map((order) => (
                <Card key={order.id} className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <span>Order #{order.id}</span>
                          {getStatusIcon(order.status)}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1 space-x-4">
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {order.date} • {order.time}
                          </span>
                          <span className="font-medium text-orange-600">{order.restaurant}</span>
                        </CardDescription>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Items Ordered:</h4>
                        <p className="text-gray-600">{order.items.join(", ")}</p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{order.address}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          <span>{order.phone}</span>
                        </div>
                      </div>

                      {order.status !== "Delivered" && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium">Estimated Time:</span>
                            <span className="text-sm font-medium text-green-600">{order.estimatedTime}</span>
                          </div>
                          <OrderProgress progress={order.progress} />
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center pt-4 border-t">
                        <span className="font-medium">Total Amount:</span>
                        <span className="text-xl font-bold text-primary">₹{order.total}</span>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" className="flex-1">
                          Track Order
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Contact Restaurant
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <div className="text-gray-400 mb-4">
                    <ChefHat className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Current Orders</h3>
                  <p className="text-gray-600 mb-4">You don't have any ongoing orders right now</p>
                  <Button>Browse Menu</Button>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* Past Orders */}
        {selectedTab === "Past" && (
          <div className="space-y-4">
            {pastOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                      <CardDescription className="flex items-center mt-1 space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {order.date} • {order.time}
                        </span>
                        <span className="font-medium text-orange-600">{order.restaurant}</span>
                      </CardDescription>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {order.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-1">Items:</h4>
                      <p className="text-gray-600">{order.items.join(", ")}</p>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{order.address}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <div className="flex items-center space-x-4">
                        <span className="font-medium">₹{order.total}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm">{order.rating}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Reorder</Button>
                        <Button variant="outline" size="sm">Review</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
