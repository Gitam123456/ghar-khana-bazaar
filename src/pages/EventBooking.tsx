
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import EventSelector, { EventData } from "@/components/EventSelector";
import { eventPackages } from "@/utils/packageData";
import { generateWhatsAppLink } from "@/utils/whatsapp";
import { Star, Users, Clock, CheckCircle, Phone, Calendar } from "lucide-react";

const EventBooking = () => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [selectedPackages, setSelectedPackages] = useState<number[]>([]);

  const handleEventPlanned = (data: EventData) => {
    setEventData(data);
  };

  const getRecommendedPackages = () => {
    if (!eventData) return eventPackages.slice(0, 3);
    
    return eventPackages.filter(pkg => {
      const isGuestCountSuitable = eventData.guests >= pkg.minGuests && eventData.guests <= pkg.maxGuests;
      const isEventTypeSuitable = pkg.suitableFor.some(occasion => 
        occasion.toLowerCase().includes(eventData.eventType.toLowerCase()) ||
        eventData.eventType.toLowerCase().includes(occasion.toLowerCase())
      );
      return isGuestCountSuitable || isEventTypeSuitable;
    }).slice(0, 4);
  };

  const togglePackageSelection = (packageId: number) => {
    setSelectedPackages(prev => 
      prev.includes(packageId) 
        ? prev.filter(id => id !== packageId)
        : [...prev, packageId]
    );
  };

  const calculateTotalCost = () => {
    if (!eventData) return 0;
    return selectedPackages.reduce((total, packageId) => {
      const pkg = eventPackages.find(p => p.id === packageId);
      return total + (pkg ? pkg.pricePerHead * eventData.guests : 0);
    }, 0);
  };

  const generateBookingWhatsApp = () => {
    if (!eventData || selectedPackages.length === 0) return '#';
    
    const selectedPkgs = eventPackages.filter(pkg => selectedPackages.includes(pkg.id));
    const packageNames = selectedPkgs.map(pkg => pkg.name).join(', ');
    
    return generateWhatsAppLink(
      eventData.contactName,
      packageNames,
      eventData.guests,
      eventData.date,
      calculateTotalCost() / eventData.guests,
      eventData.eventType
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-poppins">
            Book Your <span className="gradient-text">Perfect Event</span>
          </h1>
          <p className="text-gray-600 text-lg font-inter max-w-2xl mx-auto">
            Tell us about your event and we'll recommend the perfect catering packages for your special day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Event Planning Form */}
          <div className="lg:col-span-2">
            <EventSelector onEventPlanned={handleEventPlanned} />
            
            {/* Recommended Packages */}
            {eventData && (
              <div className="mt-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold font-poppins mb-2">
                    Recommended for Your {eventData.eventType}
                  </h2>
                  <p className="text-gray-600 font-inter">
                    Perfect packages for {eventData.guests} guests on {eventData.date}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getRecommendedPackages().map((pkg) => (
                    <Card 
                      key={pkg.id} 
                      className={`cursor-pointer transition-all duration-300 border-2 ${
                        selectedPackages.includes(pkg.id) 
                          ? 'border-orange-500 bg-orange-50 shadow-lg' 
                          : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
                      }`}
                      onClick={() => togglePackageSelection(pkg.id)}
                    >
                      <div className="relative">
                        <img 
                          src={pkg.image} 
                          alt={pkg.name}
                          className="w-full h-32 object-cover rounded-t-lg"
                        />
                        {selectedPackages.includes(pkg.id) && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle className="w-6 h-6 text-green-500 bg-white rounded-full" />
                          </div>
                        )}
                        <Badge className="absolute top-2 left-2 bg-green-500">
                          {pkg.discount}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-lg font-poppins">{pkg.name}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{pkg.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-3 font-inter">{pkg.description}</p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <span className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{pkg.minGuests}-{pkg.maxGuests}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{pkg.duration}</span>
                          </span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="text-lg font-bold text-primary">₹{pkg.pricePerHead}/head</span>
                            <div className="text-xs text-gray-500">₹{(pkg.pricePerHead * eventData.guests).toLocaleString()} total</div>
                          </div>
                          <Badge variant={selectedPackages.includes(pkg.id) ? "default" : "outline"}>
                            {selectedPackages.includes(pkg.id) ? "Selected" : "Select"}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            {eventData && (
              <div className="sticky top-4">
                <Card className="shadow-xl border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold font-poppins">Booking Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Event Details</h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>Type:</strong> {eventData.eventType}</p>
                        <p><strong>Date:</strong> {eventData.date}</p>
                        <p><strong>Time:</strong> {eventData.time}</p>
                        <p><strong>Guests:</strong> {eventData.guests}</p>
                        <p><strong>Location:</strong> {eventData.location}</p>
                      </div>
                    </div>
                    
                    {selectedPackages.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Selected Packages</h3>
                        <div className="space-y-2">
                          {selectedPackages.map(packageId => {
                            const pkg = eventPackages.find(p => p.id === packageId);
                            if (!pkg) return null;
                            return (
                              <div key={packageId} className="flex justify-between text-sm">
                                <span>{pkg.name}</span>
                                <span>₹{(pkg.pricePerHead * eventData.guests).toLocaleString()}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    {selectedPackages.length > 0 && (
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold">Total Cost:</span>
                          <span className="text-2xl font-bold text-orange-600">
                            ₹{calculateTotalCost().toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <a 
                            href={generateBookingWhatsApp()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full"
                          >
                            <Button className="w-full bg-green-500 hover:bg-green-600">
                              <Phone className="w-4 h-4 mr-2" />
                              Confirm via WhatsApp
                            </Button>
                          </a>
                          <Button variant="outline" className="w-full">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Call
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {selectedPackages.length === 0 && eventData && (
                      <div className="text-center py-4">
                        <p className="text-gray-500 text-sm mb-4">
                          Select packages above to see pricing and proceed with booking
                        </p>
                        <Badge variant="outline">Select at least one package</Badge>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBooking;
