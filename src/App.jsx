import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EducationSection from './components/EducationSection';
import ActionSection from './components/ActionSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <EducationSection />
      <ActionSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;