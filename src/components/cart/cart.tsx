import { FC, useEffect } from "react";
import { CloseIcon } from "../../assets/icons/closeIcon";
import { Product } from "../../interfaces/product";
import { useProduct } from "../../store/product";
import { CartList } from "../cartList/CartList";
import { Button } from "@nextui-org/react";




interface Props {
  closeModal: () => void
  product?: Product[]
}

export const Cart: FC<Props> = ({ closeModal }) => {

  const product = useProduct(state => state.product);
  const totalPrice = useProduct(state => state.totalPrice);
  const restartPrice = useProduct(state => state.restartPrice);

  useEffect(() => {
    if (product.length === 0) {
      restartPrice()
    }
  }, [product, restartPrice])

  return (
    <>

      <div className="fixed inset-0 overflow-hidden z-50">
        <div className="absolute inset-0 overflow-hidden" >
          <div className="absolute  inset-0 bg-gray-500 bg-opacity-75 transition-opacity opacity-100"></div>

          <div className="fixed inset-y-0 right-0 max-w-full flex max-h-screen">

            <div className="w-screen max-w-md translate-x-0 transition ease-in-out duration-500">
              <div className="h-full flex flex-col bg-white dark:bg-black shadow-xl overflow-y-scroll">
                <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">

                  <div className="flex items-start justify-between">
                    <span className="justify-start text-xl ">Shopping Cart</span>
                    <span className="justify-end cursor-pointer" onClick={closeModal} >
                      <CloseIcon width={32} height={32} />
                    </span>

                  </div>

                  <div className="mt-4 flex justify-center items-center text-center">
                    {
                      product.length === 0 && (
                        <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                          <span className="justify-center text-center text-xl">🛒 You cart is empty.</span>
                        </div>
                      )
                    }

                  </div>
                  {
                    product && <CartList product={product} />
                  }
                </div>
                {
                  product.length > 0 && (
                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium">
                        <p>Subtotal</p>
                        <p>{totalPrice}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <Button className='bg-gray-300 flex flex-row gap-2 p-2 rounded-md text-black w-full items-center justify-center '>Checkout</Button>
                      </div>
                    </div>
                  )
                }
              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}