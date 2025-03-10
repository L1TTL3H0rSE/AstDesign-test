import { generateFakeProduct } from '~/utils/generate';

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'public, max-age=600');
  
  const products = Array.from({ length: 12 }, (_, i) => 
    generateFakeProduct(String(i + 1))
  );

  return {
    category: event.context.params?.slug,
    products
  };
});