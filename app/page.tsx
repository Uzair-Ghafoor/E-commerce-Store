import React, { Suspense } from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeatredProducts';
import LoadingContainer from '@/components/global/LoadingContainer';
const HomePage = () => {
  return (
    <div>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
};

export default HomePage;
