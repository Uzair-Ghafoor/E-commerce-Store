import React, { Suspense } from 'react';
import Container from '../global/Container';
import Logo from './Logo';
import Navsearch from './Navsearch';
import CartButton from './CartButton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
const Navbar = () => {
  return (
    <nav className=' border-b'>
      <Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center py-8 gap-4'>
        <Logo />
        <Suspense>
          <Navsearch />
        </Suspense>
        <div className=' flex gap-4 items-center'>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
