import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/Landing';
import HowWeMet from './pages/HowWeMet';
import BeautifulMahi from './pages/BeautifulMahi';
import WhyILikeYou from './pages/WhyILikeYou';
import Proposal from './pages/Proposal';
import FuturePlans from './pages/FuturePlans';
import Admin from './pages/Admin';
import Navigation from './components/Navigation';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/how-we-met" element={<HowWeMet />} />
        <Route path="/beautiful-mahi" element={<BeautifulMahi />} />
        <Route path="/why-i-like-you" element={<WhyILikeYou />} />
        <Route path="/future-plans" element={<FuturePlans />} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <AnimatedRoutes />
      {/* Background Music will persist here once implemented if needed globally */}
    </Router>
  );
}

export default App;
