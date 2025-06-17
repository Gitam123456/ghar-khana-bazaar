
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

interface EventSelectorProps {
  onEventPlanned?: (eventData: EventData) => void;
}

export interface EventData {
  date: string;
  time: string;
  guests: number;
  location: string;
  eventType: string;
  contactName: string;
  contactPhone: string;
}

export default function EventSelector({ onEventPlanned }: EventSelectorProps) {
  const [eventData, setEventData] = useState<EventData>({
    date: '',
    time: '',
    guests: 100,
    location: '',
    eventType: 'Wedding',
    contactName: '',
    contactPhone: ''
  });

  const eventTypes = [
    'Wedding', 'Baby Shower', 'Housewarming', 'Corporate Event', 
    'Birthday Party', 'Festival Celebration', 'Anniversary'
  ];

  const handleSubmit = () => {
    if (onEventPlanned) {
      onEventPlanned(eventData);
    }
  };

  return (
    <Card className="bg-white shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-2xl font-bold font-poppins text-center">
          🗓️ Plan Your Perfect Event
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Event Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
          <select 
            value={eventData.eventType}
            onChange={(e) => setEventData(prev => ({ ...prev, eventType: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {eventTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Event Date
            </label>
            <Input
              type="date"
              value={eventData.date}
              onChange={(e) => setEventData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-1" />
              Event Time
            </label>
            <Input
              type="time"
              value={eventData.time}
              onChange={(e) => setEventData(prev => ({ ...prev, time: e.target.value }))}
              className="w-full"
            />
          </div>
        </div>

        {/* Guests and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Number of Guests
            </label>
            <Input
              type="number"
              value={eventData.guests}
              min={10}
              onChange={(e) => setEventData(prev => ({ ...prev, guests: parseInt(e.target.value) || 100 }))}
              className="w-full"
              placeholder="Number of Guests"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Event Location
            </label>
            <Input
              type="text"
              value={eventData.location}
              onChange={(e) => setEventData(prev => ({ ...prev, location: e.target.value }))}
              className="w-full"
              placeholder="City or Venue"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
            <Input
              type="text"
              value={eventData.contactName}
              onChange={(e) => setEventData(prev => ({ ...prev, contactName: e.target.value }))}
              className="w-full"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <Input
              type="tel"
              value={eventData.contactPhone}
              onChange={(e) => setEventData(prev => ({ ...prev, contactPhone: e.target.value }))}
              className="w-full"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>

        {/* Estimated Cost Display */}
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600">Estimated cost range for {eventData.guests} guests:</p>
            <p className="text-2xl font-bold text-orange-600">
              ₹{(eventData.guests * 299).toLocaleString()} - ₹{(eventData.guests * 799).toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">Final pricing depends on selected package and customizations</p>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300"
        >
          Find Perfect Packages
        </Button>
      </CardContent>
    </Card>
  );
}
