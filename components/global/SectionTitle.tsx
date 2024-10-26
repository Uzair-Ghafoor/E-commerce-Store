import React from 'react';
import { Separator } from '../ui/separator';
const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className=' text-3xl font-medium mb-8 capitalize tracking-wider'>
        {text}
      </h1>
      <Separator />
    </div>
  );
};

export default SectionTitle;
