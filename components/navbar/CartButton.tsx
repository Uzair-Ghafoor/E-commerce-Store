import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { LuShoppingCart } from 'react-icons/lu';
const cartButton = async () => {
  const numItemsinCart = 9;
  return (
    <Button
      asChild
      variant={'outline'}
      size={'icon'}
      className=' flex justify-center items-center relative'
    >
      <Link href={'/cart'}>
        <LuShoppingCart />
        <span className=' absolute -top-3 -right-3 bg-primary text-white h-6 w-6 rounded-full flex justify-center items-center text-xs'>
          {numItemsinCart}
        </span>
      </Link>
    </Button>
  );
};

export default cartButton;
