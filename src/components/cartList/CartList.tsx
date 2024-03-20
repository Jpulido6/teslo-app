import { FC } from 'react'
import { Product } from '../../interfaces/product'
import { CartItem } from '../cartItem/CartItem';
interface Props {
    product: Product[]
}
export const CartList: FC<Props> = ({ product }) => {
    return (
        <>
            {
                product.map((product) => (
                    <CartItem product={product} key={product.id} />
                ))
            }
        </>
    )
}