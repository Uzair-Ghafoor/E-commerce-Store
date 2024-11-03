import React from 'react';
import LoadingProduct from './LoadingProduct';

const LoadingContainer = () => {
  return (
    <div className=' grid pt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
};

export default LoadingContainer;
