import { FC, useState } from "react"

import { Product } from "../../interfaces/product"
import { ShoppingIcon } from "../../assets/icons/shoppingIcon"
import { useProduct } from "../../store/product"
import { Button, ScrollShadow, Select, SelectItem, Textarea } from "@nextui-org/react"
interface Props {
    product: Product
}

export const ProductList: FC<Props> = ({ product }) => {

    const [showImage, setShowImage] = useState(true)
    const [sizeSelected, setSizeSelected] = useState('')


    const store = useProduct(state => state.addProduct);
    const increment = useProduct(state => state.incrementCart);
    const totalPriceCart = useProduct(state => state.totalPriceCart);


    const image = `${import.meta.env.VITE_API_URL_IMAGE}`

    const toggleShowImage = () => setShowImage(!showImage)

    const handleSelectedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSizeSelected(event.target.value)
    }

    const handleAddProductToCart = (product: Product) => {
        const newProduct = { ...product, sizes: [sizeSelected] }
        store(newProduct)
        increment()
        totalPriceCart(product.price)
    }


    return (
        <>

            <div className='relative flex w-[320px] max-w-20rem flex-col overflow-hidden rounded-lg border border-gray-500 shadow-md bg-white dark:bg-[#1e1e1e] dark:text-gray-500 text-black' key={product.id}>
                <h5 className='text-2xl font-bold text-center p-2 truncate '> {product.title}</h5>

                {
                    showImage && (
                        <div className='relative info overflow-hidden flex items-center justify-center '>
                            <img className='rounded-2xl object-cover w-[270px] h-[250px]  transition-transform duration-300 hover:scale-110' src={image + product.images[0]} alt={product.title} />
                            <img className='rounded-2xl object-cover w-[270px] h-[250px] absolute top-0 left-6 opacity-0 transition-opacity duration-300 hover:opacity-100' src={image + product.images[1]} alt={product.title} />
                        </div>
                    )
                }
                {
                    !showImage && (
                        <div className='info overflow-hidden flex items-center justify-center '>
                            <ScrollShadow className="w-[265px] h-[245px] overflow-hidden">
                                <Textarea
                                    readOnly
                                    defaultValue={product.description}
                                    className="overflow-hidden font-medium p-4 resize-none bg-transparent w-[270px]  h-[250px]"
                                />
                            </ScrollShadow>
                        </div>
                    )
                }

                <div className='py-2 px-5 flex items-center'>
                    <span onClick={toggleShowImage} className='font-medium hover:underline text-black dark:text-gray-500  cursor-pointer'>{showImage ? 'Description' : 'Image'}</span>
                </div>
                <div className='pb-6 px-5'>
                    <div className='flex flex-end items-center justify-between pb-4'>
                        <div className="flex w-2/3 flex-wrap md:flex-nowrap gap-4">
                            <Select
                                isRequired
                                selectedKeys={[sizeSelected]}
                                onChange={handleSelectedChange}
                                label="Selected size"
                                className="max-w-xs"
                            >
                                {product.sizes.map((size: string) => (
                                    <SelectItem key={size} value={size}>
                                        {size}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className='text-3xl font-bold py-2 text-black dark:text-gray-500'>${product.price}</div>
                    </div>
                    <div className='flex flex-row items-center justify-center'>
                        <Button onClick={() => handleAddProductToCart(product)} className='bg-gray-300 flex flex-row gap-2 p-2 rounded-md text-black w-full items-center justify-center '><ShoppingIcon width={24} height={24} /> Add to Cart</Button>
                    </div>
                </div>
            </div>
        </>
    )
}