import { FC, useEffect, useState } from "react"
import { Product } from "../../interfaces/product"
import { useProduct } from "../../store/product"


interface Props {
    product: Product
}

export const CartItem: FC<Props> = ({ product }) => {
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(product.price)

    const removeProduct = useProduct(state => state.removeProduct);
    const decrement = useProduct(state => state.decrementCart);
    const totalPriceCart = useProduct(state => state.totalPriceCart)
    const updatePrice = useProduct(state => state.updatePrice)

    useEffect(() => {
        setTotalPrice(count * product.price)
    }, [product.price, totalPrice, count, totalPriceCart])

    const image = `${import.meta.env.VITE_API_URL_IMAGE}`

    const handleRemoveProduct = (id: string) => {
        removeProduct(id)
        decrement()
        updatePrice(totalPrice)
    }

    const handleIncrement = () => {
        setCount(count + 1)
        totalPriceCart(product.price)
    }
    const handleDecrement = () => {
        if (count < 1) return
        if (count > 1) setCount(count - 1)
        updatePrice(product.price)

    }
    return (
        <>
            <div className='flow-root'>
                <ul className='-my-6 divide-y divide-gray-500' >
                    <li className='py-6 flex' key={product.id}>
                        <div className='flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden '>
                            <img className='w-full h-full object-center object-cover' src={image + product.images[0] + ''} alt={product.title} />
                        </div>
                        <div className='ml-4 flex-1 flex flex-col'>
                            <div>
                                <div className='justify-between text-base font-medium text-black dark:text-gray-300'>
                                    <div>
                                        <h3 className='truncate text-pretty font-bold'>{product.title}</h3>
                                    </div>
                                    <div className=' flex flex-row justify-between'>
                                        <div>size: {product.sizes} </div>
                                        Total Price: $ {totalPrice}
                                    </div>

                                </div>
                            </div>
                            <div className='flex-1 flex items-center text-md'>
                                <label className='mr-2 text-black dark:text-gray-300'>$ {product.price} x {count} </label>
                                <div className='flex space-x col-span-2 text-solid-medium text-gray-300'>
                                    <button onClick={handleDecrement} className='flex rounded-full items-center justify-center hover:opacity-70 transition duration-200 disabled:cursor-not-allowed'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#ff0000" d="M176 128a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8m56 0A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88" /></svg>
                                    </button>
                                    <button onClick={handleIncrement} className='flex rounded-full items-center justify-center hover:opacity-70 transition duration-200 disabled:cursor-not-allowed'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="#008f39" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8" /></svg>
                                    </button>
                                </div>
                                <div className='flex-1'></div>
                                <div className='flex'>
                                    <button onClick={() => handleRemoveProduct(product.id)} className='flex rounded-full items-center justify-center hover:opacity-font-medium text-red-400 disabled:cursor-not-allowed hover:opacity-70 hover:text-red-500 transition duration-200 '>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>

                    </li>

                </ul>

            </div>
            {
                product.id.length > 1 && <hr className='border-md border-gray-200 mt-4 mb-4' />
            }
        </>
    )
}