import type { PageLoad } from './$types';
import { fireDetectionProducts } from '$lib/data/fire-detection-products';
import { error } from '@sveltejs/kit';

export const load: PageLoad = ({ params }) => {
    const product = fireDetectionProducts.find((p) => p.slug === params.slug);
    if (!product) throw error(404, 'Product not found');
    return { product };
};
