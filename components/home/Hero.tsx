import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroCarousel from '@/components/home/HeroCarousel';
const Hero = () => {
  return (
    <div className=' grid grid-cols-1 gap-24 items-center lg:grid-cols-2'>
      <div>
        <h1 className=' max-w-2xl tracking-tight font-bold text-4xl sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className=' mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          explicabo? Eius, obcaecati reiciendis! Quisquam officia magni dolorem!
          Soluta, incidunt ullam!
        </p>
        <Button asChild size={'lg'} className=' mt-10'>
          <Link href={'/products'}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </div>
  );
};

export default Hero;
