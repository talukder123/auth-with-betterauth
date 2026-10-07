import React from 'react';

const CategoryPage = async ({params}) => {
    const {categorySlug} = await params;


    return (
        <div>
          Category page is here !  
          Category: {categorySlug}
        </div>
    );
};

export default CategoryPage;