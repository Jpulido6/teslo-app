import { useEffect, useState } from "react"

// import { SearchIcon } from "./assets/icons/searchIcon"
// import { CloseIcon } from "./assets/icons/closeIcon"
import { ProductCard } from "./components/productCard/productCard"
import { useTheme } from "./store/theme"
import { Header } from "./components/header/Header"
import { Badge, Button } from "@nextui-org/react"
import { CartIcon } from "./assets/icons/cartIcon"
import { Cart } from "./components/cart/cart"
import { useProduct } from "./store/product"

// import { LightIcon } from "./assets/icons/lightIcon"
// import { DarkIcon } from "./assets/icons/darkIcon"

function App() {
  const [showModal, setShowModal] = useState(false)
  const count = useProduct(state => state.count);

  const theme = useTheme((state) => state.theme)
  // const toggleTheme = useTheme((state) => state.toggleTheme)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  // const [isOpen, setIsOpen] = useState(false)


  // const toggleSearch = () => setIsOpen(!isOpen)




  return (
    <>
      <div className="App dark:bg-[#1e1e1e] dark:text-gray-500 bg-white text-black backdrop-blur-3xl h-full ">
        <Header />
        {/* <header className='backdrop-blur-md sticky top-0 z-50 h-24 bg-white dark:bg-[#1e1e1e] text-black dark:text-gray-500'>
        <div className='max-w-[1400px] h-24 ml-auto m-r-auto relative items-center'>
          <div className='absolute top-0 bottom-0 px-4 flex items-center h-24'>
            <span className='text-3xl font-bold'>Teslo Shop</span>
          </div>
          <ul className="lg:grow lg:flex lg:justify-end lg:p-4 h-full items-center gap-1 m-auto flex flex-row">
            <li className="lg:ml-4"><a href=""><span>Men</span></a></li>
            <li className="lg:ml-4"><a href=""><span>Women</span></a></li>
            <li className="lg:ml-4"><a href=""><span>Kids</span></a></li>
            {/* <li className="lg:ml-4"><span className="cursor-pointer rotate-180 transition duration-100 ease-out" onClick={toggleTheme}>{ theme === 'dark' ? <LightIcon width={24} height={24}/> : <DarkIcon width={24} height={24}/> }</span></li>
            <li className="lg:ml-4">
              <span
                className={`cursor-pointer transition duration-300 ease-in-out ${theme === 'dark' ? 'rotate-0' : 'rotate-180'
                  }`}
                onClick={toggleTheme}
              >
                {theme === 'dark' ? (
                  <LightIcon width={24} height={24} />
                ) : (
                  <DarkIcon width={24} height={24} />
                )}
              </span>
            </li>
            <div className="relative gap-1 items-center h-full">
              {
                !isOpen &&
                <button
                  className="lg:ml-4 items-center h-full"
                  onClick={toggleSearch}
                >
                  <SearchIcon width={24} height={24} />
                </button>
              }
              {
                isOpen &&

                <div className=" flex flex-row right-4 pl-4 items-center h-full" >
                  <input
                    type="text"
                    className="h-8 pl-4 pr-4 py-2 rounded-lg border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block w-100 sm:text-sm items-center"
                    placeholder="Search..."
                    />
                    <span className="cursor-pointer" onClick={toggleSearch}><CloseIcon width={24} height={24} /></span>
                </div>
              }
            </div>
          </ul>
        </div>
      </header> */}

        <div className="fixed w-2/5 h-[450px] left-1/2 top-60 rounded-full opacity-[0.8] aspect-[1] translate-x-[-50%, -50%] right-2 bg-gradient-to-br from-blue-300  to-blue-800 rotate-6"></div>
        <div className="fixed w-96 h-96 left-7 top-2/4 rounded-full opacity-[0.8] aspect-[1] translate-x-[-50%, -50%] right-2 bg-gradient-to-br from-green-300  to-green-800 rotate-6"></div>
        <div className="backdrop-blur-[12vmax] w-full h-full absolute"></div>


        <ProductCard />

      </div>
      {
        showModal && <Cart closeModal={handleCloseModal} />
      }
      <div className="fixed top-48 right-4 z-40 ">
        <Badge content={count} shape="circle" color="danger" isInvisible={count === 0} >
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
            onClick={handleShowModal}
          >
            <CartIcon width={24} height={24} />
          </Button>
        </Badge>
      </div>

    </>
  )
}

export default App
