import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './pages/Hero';
import CategoryGrid from './pages/CategoryGrid';
import FeaturedPlaces from './pages/FeaturedPlaces';
import CallToAction from './pages/CallToAction';

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <CategoryGrid />
      <FeaturedPlaces />
      <CallToAction />
    </MainLayout>
  );
};

export default HomePage;