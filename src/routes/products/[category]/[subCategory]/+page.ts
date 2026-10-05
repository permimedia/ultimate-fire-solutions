import { error } from '@sveltejs/kit';
import { categories, products } from '$lib/data/products';

export function load({ params }) {
  const category = categories.find((c) => c.id === params.category);
  const subCategory = category?.subcategories.find((s) => s.id === params.subCategory);
  if (!category || !subCategory) throw error(404, 'Subcategory not found');
  const subCategoryProducts = products.filter((p) => p.category === params.category && p.subCategory === params.subCategory);
  return { category, subCategory, products: subCategoryProducts };
}
