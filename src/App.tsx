import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Inclusions from './components/Inclusions';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const galleryImages = [
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  ];

  const handleGalleryPrev = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleGalleryNext = () => {
    setCurrentImageIndex(prev => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  // Simulate loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <div className="loading-screen">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <h2>Vibin Adventures</h2>
            <p>Loading your adventure...</p>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero 
            onGalleryPrev={handleGalleryPrev}
            onGalleryNext={handleGalleryNext}
            currentImageIndex={currentImageIndex}
            galleryImages={galleryImages}
          />
          <Itinerary />
          <Inclusions />
          <AboutUs />
          <ContactUs />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
