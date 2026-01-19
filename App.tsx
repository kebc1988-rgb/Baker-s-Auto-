import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyValues from './components/KeyValues';
import Services from './components/Services';
import Process from './components/Process';
import TrustProof from './components/TrustProof';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100 overflow-x-hidden selection:bg-accent-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <KeyValues />
        <Services />
        <Process />
        <TrustProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;