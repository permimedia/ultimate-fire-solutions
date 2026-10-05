import { error } from '@sveltejs/kit';
import { categories, products } from '$lib/data/products';

export function load({ params }) {
  const category = categories.find((c) => c.id === params.category);
  if (!category) throw error(404, 'Category not found');
  const categoryProducts = products.filter((p) => p.category === params.category);
  return { category, products: categoryProducts };
}
