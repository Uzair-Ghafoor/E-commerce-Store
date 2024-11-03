import { formatCurrency } from '@/utils/format';
import { Product } from '@prisma/client';
import { Card, CardContent } from '../ui/card';
import Link from 'next/link';
import Image from 'next/image';
import FavoriteToggleButton from './FavoriteToggleButton';

const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <div className=' mt-12 grid gap-y-8'>
      {products.map((product) => {
        const { name, image, company, price } = product;
        const formatPrice = formatCurrency(price);
        return (
          <article key={name} className=' group relative'>
            <Link href={`/products/${product.id}`}>
              <Card className='transition-shadow transform group-hover:shadow-xl duration-500'>
                <CardContent className=' p-8 grid gap-y-4 md:grid-cols-3'>
                  <div className=' relative h-64 md:h-48 md:w-48'>
                    <Image
                      src={image}
                      fill
                      sizes='(max-width:740px) 100vw, (max-width:1200px) 70vw, 33vw'
                      className=' object-cover rounded-lg'
                      alt={name}
                    />
                  </div>
                  <div>
                    <h2 className='text-xl font-semibold capitalize'>{name}</h2>
                    <h3 className='text-muted-foreground'>{company}</h3>
                  </div>
                  <span className='flex text-muted-foreground text-lg justify-start md:justify-end'>
                    {formatPrice}
                  </span>
                </CardContent>
              </Card>
            </Link>
            <div className=' absolute bottom-10 right-10'>
              <FavoriteToggleButton productId={product.id} />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProductsList;
