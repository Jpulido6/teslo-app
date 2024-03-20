import { useState } from 'react';

import { CircularProgress, Pagination } from '@nextui-org/react';
import { useProductsByPage } from '../../hooks/useProducts';
import { ProductList } from '../productList/productList';

export const ProductCard = () => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const productQuery = useProductsByPage(currentPage);    

    if (productQuery.isLoading) return (

        <div className="h-[120vh] w-full flex justify-center items-center overflow-auto">
            <div className='flex w-full justify-center z-[200] text-5xl gap-2'>
                Loading <CircularProgress size='md' />                
            </div>
        </div>
    )
    if (productQuery.isError) return (
        <>
            <div className="h-screen w-full flex justify-center items-center">
                <p className='text-5xl z-[200]'>{productQuery.error.message}</p>
                <p className='text-5xl z-[200]'>Error</p>
            </div>
        </>
    )

    return (
        <>
            <div className='flex flex-wrap gap-9 justify-center max-w-[1200px] mb-20 mt-10 mx-auto'>
                {
                    productQuery.data?.map((product) =>
                        <ProductList key={product.id} product={product} />)
                }

            </div>
            <div className='flex justify-center'>
                <Pagination isCompact showControls showShadow total={6} initialPage={currentPage} onChange={page => setCurrentPage(page)} />
            </div>

        </>
    );
}