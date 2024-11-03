import React from 'react';
import { Product } from '@prisma/client';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import { Card, CardContent } from '../ui/card';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';
import Link from 'next/link';
const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className=' pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const formatedPrice = formatCurrency(price);

        return (
          <article key={name} className=' group relative'>
            <Link href={`/products/${productId}`}>
              <Card className=' group-hover:shadow-xl tarnsform duration-500 transition-shadow'>
                <CardContent className=' p-4'>
                  <div className='relative h-64 md:h-48 rounded overflow-hidden '>
                    <Image
                      src={image}
                      alt={name}
                      priority
                      className=' object-cover group-hover:scale-110 transition duration-500'
                      fill
                      sizes='(max-width:760px) 100vw,(max-width:1200px), 33vw'
                    />
                  </div>
                  <div className='mt-4 text-center'>
                    <h2 className='text-lg  capitalize'>{name}</h2>
                    <p className='text-muted-foreground  mt-2'>
                      {formatedPrice}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <div className=' absolute top-7 right-7 z-5'>
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
