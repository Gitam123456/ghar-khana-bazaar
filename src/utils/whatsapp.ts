
export const generateWhatsAppLink = (
  customerName: string,
  packageName: string,
  guestCount: number,
  eventDate?: string,
  pricePerHead?: number,
  eventType?: string
) => {
  const total = pricePerHead ? pricePerHead * guestCount : 0;
  
  const message = `Hi Ghar Khanaa! 🙏

I'm interested in booking catering for my ${eventType || 'event'}.

*Event Details:*
👤 Name: ${customerName}
📦 Package: ${packageName}
👥 Guests: ${guestCount} people
📅 Date: ${eventDate || 'To be decided'}
💰 Estimated Cost: ₹${total.toLocaleString()}

Please share more details about:
- Complete menu items
- Service arrangements
- Advance booking process
- Any customization options

Thank you! Looking forward to celebrating with authentic Karnataka flavors.`;

  const phone = '+919123456789'; // Replace with actual business WhatsApp number
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const generateQuickWhatsAppLink = (message: string) => {
  const phone = '+919123456789';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const getQuickBookingMessage = () => {
  return "Hi Ghar Khanaa! I'm interested in your catering services for my upcoming event. Please share your packages and help me plan.";
};
