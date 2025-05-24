import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServiceHighlights from '../components/home/ServiceHighlights';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';
import PageTransition from '../components/common/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <HeroSection />
      <ServiceHighlights />
      <AboutPreview />
      <Testimonials />
      <CtaSection />
    </PageTransition>
  );
};

export default Home;