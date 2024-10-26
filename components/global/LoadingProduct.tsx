import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
const LoadingProduct = () => {
  return (
    <Card>
      <CardContent className=' p-4'>
        <Skeleton className='h-48 w-full' />
        <Skeleton className='h-4 w-3/4 mt-4' />
        <Skeleton className='h-4 w-1/4 mt-4' />
      </CardContent>
    </Card>
  );
};

export default LoadingProduct;
