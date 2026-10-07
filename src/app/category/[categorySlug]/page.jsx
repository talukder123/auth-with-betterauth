import baseURL from '@/services/baseURL';
import React from 'react';

const getCategoriesProduct = async () => {
    const res = await fetch(`${baseURL}/api/products?category=gpu`);
    const data = await res.json();
    return data;
}

const CategoryPage = async ({ params }) => {

    const categoryProducts = await getCategoriesProduct();
    const { categorySlug } = await params;

    console.log(categoryProducts);

    return (
        <div>
            Category page is here !
            Category: {categorySlug}
        </div>
    );
};

export default CategoryPage;