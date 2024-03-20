import { useQuery } from "@tanstack/react-query";
import { tesloApi } from "../api/tesloApi";
import { Product } from "../interfaces/product";


const getProducts = async ():Promise<Product[]> => {
    const { data } = await tesloApi.get<Product[]>('/products?limit=9&offset=0');
    
    return data;
}

const getProductByPage = async (page: number):Promise<Product[]> => {
    const { data } = await tesloApi.get<Product[]>(`/products?limit=9&offset=${(page - 1) * 9}`);
    
    return data;
}

export const useProductsByPage = (page: number) => {
    const productsQuery = useQuery({
        queryKey: ['products', page],
        queryFn: () => getProductByPage(page),
        staleTime: 1000 * 60 * 60
    });

    return productsQuery;
}


export const useProducts = () => {
    const productsQuery = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 60
    });

    return productsQuery;
}
