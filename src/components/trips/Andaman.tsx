import React from 'react';
import TripPage from '../TripPage';

const Andaman: React.FC = () => {
  const tripData = {
    title: "Andaman – Port Blair to Neil Island Exploration",
    subtitle: "Discover the pristine beaches, crystal-clear waters, and rich marine life of the Andaman Islands",
    duration: "6 Days 5 Nights",
    groupSize: "Max 12 People",
    difficulty: "Easy",
    rating: 4.6,
    reviews: 178,
    price: "35,999",
    originalPrice: "42,999",
    location: "Andaman & Nicobar Islands",
    highlights: [
      "Explore the pristine beaches of Neil Island",
      "Snorkeling and diving in crystal-clear waters",
      "Visit the historic Cellular Jail",
      "Experience bioluminescent beach at Havelock",
      "Island hopping and beach hopping",
      "Sunset views at Radhanagar Beach"
    ],
    description: "Embark on a tropical paradise adventure in the Andaman Islands, where pristine beaches meet crystal-clear waters and rich marine life. This 6-day journey takes you through the most beautiful islands of Andaman - from the historic Port Blair to the stunning beaches of Havelock and Neil Island. Experience the perfect blend of adventure, relaxation, and natural beauty.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        description: "Arrive in Port Blair and explore the historic city with its colonial architecture and rich history.",
        activities: [
          "Airport pickup and transfer to hotel",
          "Visit Cellular Jail and light & sound show",
          "Explore Corbyn's Cove Beach",
          "Local market shopping and dinner"
        ]
      },
      {
        day: 2,
        title: "Port Blair to Havelock Island",
        description: "Travel to Havelock Island, known for its pristine beaches and excellent diving spots.",
        activities: [
          "Early morning ferry to Havelock",
          "Check-in at beach resort",
          "Visit Radhanagar Beach (Beach No. 7)",
          "Sunset photography and relaxation"
        ]
      },
      {
        day: 3,
        title: "Havelock Island Exploration",
        description: "Spend the day exploring the beautiful beaches and marine life of Havelock Island.",
        activities: [
          "Snorkeling at Elephant Beach",
          "Visit Kalapathar Beach",
          "Glass bottom boat ride",
          "Evening at leisure on the beach"
        ]
      },
      {
        day: 4,
        title: "Havelock to Neil Island",
        description: "Travel to Neil Island, the vegetable bowl of Andaman, known for its natural beauty.",
        activities: [
          "Ferry to Neil Island",
          "Check-in at beach resort",
          "Visit Laxmanpur Beach for sunset",
          "Explore natural rock formations"
        ]
      },
      {
        day: 5,
        title: "Neil Island Exploration",
        description: "Explore the pristine beaches and natural attractions of Neil Island.",
        activities: [
          "Visit Bharatpur Beach for water sports",
          "Explore Sitapur Beach (Sunrise Beach)",
          "Snorkeling and swimming",
          "Local village tour and culture"
        ]
      },
      {
        day: 6,
        title: "Neil Island to Port Blair & Departure",
        description: "Return to Port Blair for departure with beautiful memories of the Andaman Islands.",
        activities: [
          "Early morning ferry to Port Blair",
          "Visit Anthropological Museum",
          "Last minute shopping",
          "Airport transfer and departure"
        ]
      }
    ],
    inclusions: {
      included: [
        "Accommodation in beach resorts and hotels",
        "All meals (fresh seafood and local cuisine)",
        "Ferry transfers between islands",
        "Snorkeling equipment and activities",
        "Professional guide and assistance",
        "All entry fees and permits",
        "Glass bottom boat ride",
        "Airport transfers"
      ],
      excluded: [
        "Airfare to/from Port Blair",
        "Scuba diving (optional activity)",
        "Personal expenses and tips",
        "Alcoholic beverages",
        "Travel insurance",
        "Additional water sports",
        "Photography charges"
      ]
    },
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    ],
    bestTime: "October to April (Best weather and clear waters)",
    cancellationPolicy: "Free cancellation up to 15 days before departure. 70% refund for cancellations 7-15 days before. No refund for cancellations within 7 days.",
    groupDiscounts: [
      { minPeople: 4, discount: "7%" },
      { minPeople: 6, discount: "12%" },
      { minPeople: 8, discount: "18%" }
    ]
  };

  return <TripPage tripData={tripData} />;
};

export default Andaman;
