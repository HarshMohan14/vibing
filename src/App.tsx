import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Itinerary from './components/Itinerary';
import Inclusions from './components/Inclusions';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import BookingForm from './components/BookingForm';
import TripsPage from './components/TripsPage';
import { LehLadakh, SpitiValley, Kerala, Andaman, Kashmir } from './components/trips';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

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

  // Simple routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simulate loading
  useEffect(() => {
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

  const renderPage = () => {
    switch (currentPage) {
      case 'domestic':
        return <TripsPage />;
      case 'leh-ladakh':
        return <LehLadakh />;
      case 'spiti-valley':
        return <SpitiValley />;
      case 'kerala':
        return <Kerala />;
      case 'andaman':
        return <Andaman />;
      case 'kashmir':
        return <Kashmir />;
      case 'about':
        return <AboutUs />;
      case 'contact':
        return <ContactUs />;
      case 'home':
      default:
        return (
          <>
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
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          {renderPage()}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
