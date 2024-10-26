import { fetchFeaturedProducts } from '@/utils/actions';
import EmptyList from '../global/EmptyList';
import ProductsGrid from '@/components/products/ProductsGrid';
import SectionTitle from '../global/SectionTitle';
const FeatredProducts = async () => {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className=' pt-24'>
      <SectionTitle text='featured products' />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeatredProducts;
