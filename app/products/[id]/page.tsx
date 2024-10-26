import React from 'react';
import { fetchSingleProduct } from '@/utils/actions';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Product } from '@prisma/client';
const page = async ({ params }: { params: { id: string } }) => {
  const product = await fetchSingleProduct(params.id);

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className=' text-lg'>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className=' text-lg'>
            <BreadcrumbLink href='/products'>Products</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem className=' text-lg text-black capitalize'>
            <BreadcrumbLink>{product?.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
};

export default page;
