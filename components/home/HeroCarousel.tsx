'use client';
import React from 'react';
import carousel1 from '@/public/images/carousel1.jpg';
import carousel2 from '@/public/images/carousel2.jpg';
import carousel3 from '@/public/images/carousel3.jpg';
import carousel4 from '@/public/images/carousel4.jpg';
import carousel5 from '@/public/images/carousel5.jpg';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
const images = [carousel1, carousel2, carousel3, carousel4, carousel5];
const HeroCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className=' hidden lg:block'
    >
      <CarouselContent>
        {images.map((img, i) => {
          return (
            <CarouselItem key={i}>
              <Card>
                <CardContent className=' p-2'>
                  <Image
                    className=' h-[24rem] rounded-md w-full object-cover'
                    src={img}
                    alt='images'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious></CarouselPrevious>
      <CarouselNext></CarouselNext>
    </Carousel>
  );
};

export default HeroCarousel;
