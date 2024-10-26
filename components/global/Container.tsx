import { cn } from '@/lib/utils';
import React from 'react';
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('max-w-6xl mx-auto xl:max-w-7xl px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
