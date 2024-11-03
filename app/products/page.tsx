import ProductsContainer from '@/components/products/ProductsContainer';
import React from 'react';

const Products = async ({
  searchParams,
}: {
  searchParams: Promise<{ layout?: string; search?: string }>;
}) => {
  const searchparamsPromise = await searchParams;
  const layout = searchparamsPromise.layout || 'grid';
  const search = searchparamsPromise.search || '';

  return (
    <>
      <ProductsContainer layout={layout} search={search} />
    </>
  );
};

export default Products;
