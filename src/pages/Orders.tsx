
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";

const Orders = () => {
  const orders = [
    {
      id: "ORD001",
      items: ["Biryani", "Dal Chawal"],
      total: 370,
      status: "Delivered",
      date: "2024-06-15",
      address: "123 Main Street, Delhi"
    },
    {
      id: "ORD002",
      items: ["Chole Bhature", "Rajma Chawal"],
      total: 330,
      status: "Preparing",
      date: "2024-06-16",
      address: "456 Park Avenue, Mumbai"
    },
    {
      id: "ORD003",
      items: ["Biryani"],
      total: 250,
      status: "On the way",
      date: "2024-06-16",
      address: "789 Garden Road, Bangalore"
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Orders</h1>
          <p className="text-gray-600">Track your delicious food orders</p>
        </div>
        
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">Order #{order.id}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {order.date}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
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
                    <span className="font-medium">Total:</span>
                    <span className="text-xl font-bold text-primary">₹{order.total}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
