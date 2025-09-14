import React from 'react';
import TripPage from '../TripPage';

const Kashmir: React.FC = () => {
  const tripData = {
    title: "Kashmir with Gulmarg & Pahalgam",
    subtitle: "Experience the paradise on Earth with its pristine valleys, snow-capped mountains, and beautiful lakes",
    duration: "7 Days 6 Nights",
    groupSize: "Max 14 People",
    difficulty: "Easy to Moderate",
    rating: 4.8,
    reviews: 267,
    price: "38,999",
    originalPrice: "45,999",
    location: "Kashmir, Jammu & Kashmir",
    highlights: [
      "Gondola ride to Gulmarg's highest point",
      "Shikara ride on Dal Lake",
      "Explore the meadows of Pahalgam",
      "Visit the beautiful Mughal Gardens",
      "Experience local Kashmiri culture",
      "Photography in stunning landscapes"
    ],
    description: "Discover the breathtaking beauty of Kashmir, known as 'Paradise on Earth'. This 7-day journey takes you through the most iconic destinations of Kashmir - from the pristine Dal Lake in Srinagar to the snow-capped peaks of Gulmarg and the lush meadows of Pahalgam. Experience the perfect blend of natural beauty, adventure, and rich cultural heritage.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Arrive in Srinagar and experience the beauty of Dal Lake with a traditional Shikara ride.",
        activities: [
          "Airport pickup and transfer to hotel",
          "Shikara ride on Dal Lake",
          "Visit floating gardens and markets",
          "Evening at leisure with lake views"
        ]
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        description: "Explore the beautiful city of Srinagar with its Mughal gardens and historic attractions.",
        activities: [
          "Visit Nishat Bagh (Garden of Delight)",
          "Explore Shalimar Bagh",
          "Visit Chashme Shahi Garden",
          "Shopping at local markets and handicrafts"
        ]
      },
      {
        day: 3,
        title: "Srinagar to Gulmarg",
        description: "Travel to Gulmarg, the meadow of flowers, and experience the world's highest gondola ride.",
        activities: [
          "Drive to Gulmarg (2 hours)",
          "Gondola ride to Kongdoori Mountain",
          "Optional: Second phase gondola to Apharwat Peak",
          "Photography and mountain views"
        ]
      },
      {
        day: 4,
        title: "Gulmarg Exploration",
        description: "Spend the day exploring Gulmarg's beautiful meadows and adventure activities.",
        activities: [
          "Morning walk in Gulmarg meadows",
          "Visit Alpather Lake (if accessible)",
          "Golf course visit and photography",
          "Local market and handicrafts shopping"
        ]
      },
      {
        day: 5,
        title: "Gulmarg to Pahalgam",
        description: "Journey to Pahalgam, the valley of shepherds, through beautiful countryside.",
        activities: [
          "Drive to Pahalgam (3-4 hours)",
          "Check-in at resort",
          "Visit Betaab Valley",
          "Evening walk along Lidder River"
        ]
      },
      {
        day: 6,
        title: "Pahalgam Exploration",
        description: "Explore the beautiful valleys and meadows of Pahalgam.",
        activities: [
          "Visit Aru Valley",
          "Explore Chandanwari (Amarnath Yatra starting point)",
          "Visit Sheshnag Lake",
          "Photography in scenic landscapes"
        ]
      },
      {
        day: 7,
        title: "Pahalgam to Srinagar & Departure",
        description: "Return to Srinagar for departure with beautiful memories of Kashmir.",
        activities: [
          "Drive back to Srinagar",
          "Last minute shopping",
          "Airport transfer",
          "Departure with beautiful memories"
        ]
      }
    ],
    inclusions: {
      included: [
        "Accommodation in hotels and resorts",
        "All meals (traditional Kashmiri cuisine)",
        "Transport in comfortable vehicles",
        "Professional guide and driver",
        "Shikara ride on Dal Lake",
        "Gondola ride tickets in Gulmarg",
        "All entry fees and permits",
        "Airport transfers"
      ],
      excluded: [
        "Airfare to/from Srinagar",
        "Personal expenses and tips",
        "Alcoholic beverages",
        "Travel insurance",
        "Additional adventure activities",
        "Photography charges",
        "Shopping and handicrafts"
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    bestTime: "April to October (Best: May to September)",
    cancellationPolicy: "Free cancellation up to 20 days before departure. 60% refund for cancellations 10-20 days before. No refund for cancellations within 10 days.",
    groupDiscounts: [
      { minPeople: 4, discount: "8%" },
      { minPeople: 6, discount: "12%" },
      { minPeople: 8, discount: "18%" }
    ]
  };

  return <TripPage tripData={tripData} />;
};

export default Kashmir;
