import { error } from '@sveltejs/kit';
import { products } from '$lib/data/products';

export function load({ params }) {
  const product = products.find((p) => p.id === params.slug);
  if (!product) throw error(404, 'Product not found');
  return { product };
}
