import React from 'react';
import TripPage from '../TripPage';

const LehLadakh: React.FC = () => {
  const tripData = {
    title: "Leh Ladakh with Nubra & Pangong",
    subtitle: "Experience the mesmerizing beauty of Ladakh with its pristine lakes, high-altitude deserts, and ancient monasteries",
    duration: "8 Days 7 Nights",
    groupSize: "Max 12 People",
    difficulty: "Moderate",
    rating: 4.8,
    reviews: 156,
    price: "45,999",
    originalPrice: "52,999",
    location: "Leh, Ladakh",
    highlights: [
      "Visit the stunning Pangong Tso Lake at 14,270 ft",
      "Explore the sand dunes of Nubra Valley",
      "Discover ancient monasteries and Buddhist culture",
      "Experience high-altitude camping under the stars",
      "Drive through the world's highest motorable roads",
      "Witness the confluence of Indus and Zanskar rivers"
    ],
    description: "Embark on an unforgettable journey to the 'Land of High Passes' - Ladakh. This 8-day adventure takes you through some of the most breathtaking landscapes on Earth, from the crystal-clear waters of Pangong Tso to the golden sand dunes of Nubra Valley. Experience the unique blend of Tibetan Buddhist culture, stunning natural beauty, and thrilling high-altitude adventures that make Ladakh a dream destination for every traveler.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Leh",
        description: "Arrive in Leh and acclimatize to the high altitude. Explore the local markets and get ready for your Ladakh adventure.",
        activities: [
          "Airport pickup and transfer to hotel",
          "Acclimatization and rest",
          "Visit Leh Palace and Shanti Stupa",
          "Explore Leh market and local cuisine"
        ]
      },
      {
        day: 2,
        title: "Leh to Nubra Valley via Khardung La",
        description: "Drive to Nubra Valley crossing the world's highest motorable pass, Khardung La at 18,380 ft.",
        activities: [
          "Cross Khardung La Pass (18,380 ft)",
          "Visit Diskit Monastery and Maitreya Buddha",
          "Camel ride on sand dunes in Hunder",
          "Stay in Nubra Valley camp"
        ]
      },
      {
        day: 3,
        title: "Nubra Valley Exploration",
        description: "Spend the day exploring the beautiful Nubra Valley and its surrounding attractions.",
        activities: [
          "Visit Sumur village and monastery",
          "Explore Turtuk village (last village of India)",
          "Photography session at sand dunes",
          "Local cultural interactions"
        ]
      },
      {
        day: 4,
        title: "Nubra to Pangong Tso",
        description: "Journey to the famous Pangong Tso Lake, one of the most beautiful high-altitude lakes in the world.",
        activities: [
          "Drive to Pangong Tso via Shyok Valley",
          "Visit Pangong Lake (14,270 ft altitude)",
          "Photography and relaxation by the lake",
          "Camping by Pangong Lake"
        ]
      },
      {
        day: 5,
        title: "Pangong Tso to Leh",
        description: "Return to Leh via Chang La pass, enjoying the scenic beauty of the Ladakh landscape.",
        activities: [
          "Sunrise photography at Pangong Lake",
          "Drive back to Leh via Chang La",
          "Visit Thiksey Monastery",
          "Rest and relaxation in Leh"
        ]
      },
      {
        day: 6,
        title: "Leh to Alchi and Likir",
        description: "Explore the ancient monasteries of Alchi and Likir, known for their beautiful murals and architecture.",
        activities: [
          "Visit Alchi Monastery (UNESCO site)",
          "Explore Likir Monastery",
          "Drive through beautiful countryside",
          "Return to Leh for overnight stay"
        ]
      },
      {
        day: 7,
        title: "Leh Local Sightseeing",
        description: "Explore the local attractions of Leh including monasteries, palaces, and cultural sites.",
        activities: [
          "Visit Hemis Monastery",
          "Explore Stok Palace",
          "Visit Hall of Fame Museum",
          "Shopping and local market exploration"
        ]
      },
      {
        day: 8,
        title: "Departure",
        description: "Bid farewell to the beautiful Ladakh with memories to last a lifetime.",
        activities: [
          "Check out from hotel",
          "Airport transfer",
          "Departure with beautiful memories"
        ]
      }
    ],
    inclusions: {
      included: [
        "Accommodation in hotels and camps",
        "All meals (breakfast, lunch, dinner)",
        "Transport in comfortable vehicles",
        "Professional guide and driver",
        "All permits and entry fees",
        "Camel ride in Nubra Valley",
        "Airport transfers",
        "Medical kit and oxygen cylinder"
      ],
      excluded: [
        "Airfare to/from Leh",
        "Personal expenses and tips",
        "Alcoholic beverages",
        "Travel insurance",
        "Any additional activities not mentioned",
        "Expenses due to natural calamities"
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    bestTime: "May to September (Peak season: June to August)",
    cancellationPolicy: "Free cancellation up to 30 days before departure. 50% refund for cancellations 15-30 days before. No refund for cancellations within 15 days.",
    groupDiscounts: [
      { minPeople: 4, discount: "5%" },
      { minPeople: 6, discount: "10%" },
      { minPeople: 8, discount: "15%" }
    ]
  };

  return <TripPage tripData={tripData} />;
};

export default LehLadakh;
