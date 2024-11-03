import React from 'react';
import { fetchAllProducts } from '@/utils/actions';
import ProductsList from './ProductsList';
import ProductsGrid from './ProductsGrid';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '../ui/button';
import Link from 'next/link';
const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}) => {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerm = search ? `&search=${search}` : '';
  return (
    <>
      <header className=' flex items-center justify-between'>
        <h4 className=' text-lg font-bold'>
          {totalProducts} product{products.length > 1 && 's'}
        </h4>
        <div className=' flex gap-x-2'>
          <Button
            variant={layout === 'grid' ? 'default' : 'ghost'}
            size='icon'
            asChild
          >
            <Link href={`/products?layout=grid${searchTerm}`}>
              <LuLayoutGrid />
            </Link>
          </Button>
          <Button
            variant={layout === 'list' ? 'default' : 'ghost'}
            size='icon'
            asChild
          >
            <Link href={`/products?layout=list${searchTerm}`}>
              <LuList />
            </Link>
          </Button>
        </div>
      </header>
      <section>
        {products.length === 0 ? (
          <h5>Sorry, no products matched your result</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </section>
    </>
  );
};

export default ProductsContainer;
