// src/config/siteConfig.js

// Edit this file to configure VINCIT FITNESS details.
export const siteConfig = {
  brand: 'VINCIT FITNESS',

  productionDomain: 'https://example.com',

  // WhatsApp number with India country code
  whatsappNumber: '919966169699',

  gymAddress: '8CJ2+XMM, Sri Krishna Colony, New Green City, Budwel, Hyderabad, Telangana 500030, India',

  // Google Maps location
  googleMapsEmbedUrl:
    'https://www.google.com/maps?q=8CJ2%2BXMM%2C%20Sri%20Krishna%20Colony%2C%20New%20Green%20City%2C%20Budwel%2C%20Hyderabad%2C%20Telangana%20500030%2C%20India&output=embed',

  googleMapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=8CJ2%2BXMM%2C%20Sri%20Krishna%20Colony%2C%20New%20Green%20City%2C%20Budwel%2C%20Hyderabad%2C%20Telangana%20500030%2C%20India',

  email: '',

  businessHours: 'Please contact the gym to confirm opening hours.',

  heroVideoSrc: '/videos/vincit-background.mp4',

  heroPosterSrc: '/images/vincit-video-poster.jpg',

  favicon: '/favicon.svg',

  defaultDescription:
    'Train with purpose, build strength, and find a membership that fits your goals at VINCIT FITNESS.',
};

export function whatsappUrl(message) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');

  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : `https://wa.me/?text=${encodeURIComponent(message)}`;
}

export function directionsUrl() {
  return (
    siteConfig.googleMapsDirectionsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      siteConfig.gymAddress
    )}`
  );
}