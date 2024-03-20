import { create } from "zustand";
import { Product } from "../interfaces/product";

interface State {
    product: Product[]
    count: number
    totalPrice: number
    page: number
    addProduct: (product: Product) => void
    removeProduct: (id: string) => void
    incrementCart: () => void
    decrementCart: () => void
    totalPriceCart: (price: number) => void
    updatePrice: (price: number) => void
    restartPrice: () => void
    numberPage: (page: number) => void
}

export const useProduct = create<State>((set, get) => ({
    product: [],
    count: 0,
    page: 1,
    totalPrice: 0,
    addProduct: (product: Product) => {
        set((state) => ({
            product: [...state.product, product]
        }))
    },
    removeProduct: (id: string) => {
        const productState = get().product;
        const product = productState.filter(product => product.id !== id);
        set(() => ({
            product: [...product]
        }))
    },
    incrementCart: () => {
        set((state) => ({
            count: state.count + 1
        }))
    },
    decrementCart: () => {
        set((state) => ({
            count: state.count - 1
        }))
    },
    totalPriceCart: (price: number) => {
        set((state) => ({
            totalPrice: state.totalPrice + price
        }))
    },
    updatePrice: (price: number) => {
        const totalPrice = get().totalPrice

        if (totalPrice >  price) {
            set((state) => ({
                totalPrice: state.totalPrice - price
            }))
        }
    },
    restartPrice: () => {
        set(() => ({
            totalPrice: 0
        }))
    },
    numberPage: (page: number) => {
        set(() => ({
            page
        }))
    }
    
}))
