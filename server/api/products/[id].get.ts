import { generateFakeProduct } from '~/utils/generate';

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params?.id || '1');
  setHeader(event, 'Cache-Control', 'public, max-age=600');
  
  return generateFakeProduct(String(id));
});