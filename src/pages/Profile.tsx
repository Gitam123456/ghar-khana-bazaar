import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { User, Mail, Phone, MapPin, Edit, Star, Gift, CreditCard, Bell, Shield, LogOut } from "lucide-react";
import Header from "@/components/Header";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const userStats = [
    { label: "Total Orders", value: "47", icon: <Gift className="w-5 h-5 text-blue-500" /> },
    { label: "Favorite Items", value: "12", icon: <Star className="w-5 h-5 text-yellow-500" /> },
    { label: "Money Saved", value: "₹2,340", icon: <CreditCard className="w-5 h-5 text-green-500" /> },
    { label: "Member Since", value: "Jan 2024", icon: <User className="w-5 h-5 text-purple-500" /> }
  ];

  const addresses = [
    {
      id: 1,
      type: "Home",
      address: "123 Main Street, New Delhi, Delhi - 110001",
      isDefault: true
    },
    {
      id: 2,
      type: "Office",
      address: "456 Business Park, Gurgaon, Haryana - 122001",
      isDefault: false
    }
  ];

  const favoriteRestaurants = [
    {
      name: "Mama's Kitchen",
      cuisine: "North Indian",
      orders: 8,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=100&h=100&fit=crop"
    },
    {
      name: "Spice Garden",
      cuisine: "South Indian",
      orders: 5,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=100&h=100&fit=crop"
    }
  ];

  const menuItems = [
    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
    { id: "addresses", label: "Addresses", icon: <MapPin className="w-4 h-4" /> },
    { id: "favorites", label: "Favorites", icon: <Star className="w-4 h-4" /> },
    { id: "payments", label: "Payments", icon: <CreditCard className="w-4 h-4" /> },
    { id: "notifications", label: "Notifications", icon: <Bell className="w-4 h-4" /> },
    { id: "security", label: "Security", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-white" />
                </div>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
                <Badge className="mt-2 bg-gold-100 text-gold-800">Gold Member</Badge>
              </CardHeader>
              <CardContent>
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </Button>
                  ))}
                  <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="w-4 h-4" />
                    <span className="ml-2">Logout</span>
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Stats Cards */}
            {activeTab === "profile" && (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {userStats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-2">
                          {stat.icon}
                        </div>
                        <div className="font-bold text-lg">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Profile Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>
                      Update your personal details here
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue="Doe" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" defaultValue="+91 9876543210" />
                    </div>
                    <div>
                      <Label htmlFor="birthday">Date of Birth</Label>
                      <Input id="birthday" type="date" defaultValue="1990-01-15" />
                    </div>
                    <Button className="w-full md:w-auto">
                      <Edit className="w-4 h-4 mr-2" />
                      Update Profile
                    </Button>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Addresses Tab */}
            {activeTab === "addresses" && (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Delivery Addresses</CardTitle>
                      <CardDescription>Manage your delivery locations</CardDescription>
                    </div>
                    <Button>Add New Address</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant={address.isDefault ? "default" : "secondary"}>
                                {address.type}
                              </Badge>
                              {address.isDefault && (
                                <Badge variant="outline">Default</Badge>
                              )}
                            </div>
                            <p className="text-gray-600">{address.address}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Favorites Tab */}
            {activeTab === "favorites" && (
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Restaurants</CardTitle>
                  <CardDescription>Your most ordered restaurants</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {favoriteRestaurants.map((restaurant, index) => (
                      <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                        <img 
                          src={restaurant.image} 
                          alt={restaurant.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium">{restaurant.name}</h3>
                          <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm">{restaurant.rating}</span>
                            </div>
                            <span className="text-sm text-gray-600">{restaurant.orders} orders</span>
                          </div>
                        </div>
                        <Button variant="outline">Order Again</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Other tabs content would go here */}
            {activeTab === "payments" && (
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Payment methods management coming soon...</p>
                </CardContent>
              </Card>
            )}

            {activeTab === "notifications" && (
              <Card>
                <CardHeader>
                  <CardTitle>Notification Settings</CardTitle>
                  <CardDescription>Control your notification preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Notification settings coming soon...</p>
                </CardContent>
              </Card>
            )}

            {activeTab === "security" && (
              <Card>
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                  <CardDescription>Manage your account security</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Security settings coming soon...</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
