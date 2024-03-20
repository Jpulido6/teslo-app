import { Button, Input, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react'
import { SearchIcon } from '../../assets/icons/searchIcon'
import { useState } from 'react'
import { CloseIcon } from '../../assets/icons/closeIcon'



export const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Navbar>
            <NavbarBrand>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 128 128">
                    <path fill="#491cf8" d="m107.346 2.012l-6.914.431l.539 14.377c.028.795-.889 1.259-1.514.766l-4.63-3.65l-5.485 4.162a.934.934 0 0 1-1.498-.784l.617-14.123L19.873 7.48a6.264 6.264 0 0 0-5.87 6.488l3.86 102.838a6.264 6.264 0 0 0 5.98 6.023l83.612 3.754a6.273 6.273 0 0 0 4.609-1.73a6.255 6.255 0 0 0 1.936-4.526V8.264a6.258 6.258 0 0 0-1.975-4.566a6.257 6.257 0 0 0-4.679-1.686m-41.46 21.187c16.308 0 25.214 8.723 25.214 25.319c-2.204 1.713-18.62 2.88-18.62.443c.346-9.3-3.817-9.707-6.13-9.707c-2.198 0-5.899.662-5.899 5.644c0 12.288 31.69 11.625 31.69 36.424c0 13.95-11.335 21.655-25.791 21.655c-14.92 0-27.957-6.036-26.485-26.963c.578-2.457 19.545-1.873 19.545 0c-.23 8.635 1.735 11.175 6.707 11.175c3.817 0 5.553-2.103 5.553-5.646c0-12.621-31.227-13.063-31.227-36.201c0-13.285 9.138-22.143 25.444-22.143z" />
                </svg>
                <p className="font-bold text-inherit">Teslo Shop</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        New
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Men
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Women
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Kids
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent as="div" className="items-center" justify="end">
                {
                    !isOpen
                        ? <Button onClick={() => setIsOpen(true)} color="default"><SearchIcon width={16} height={16} /></Button>
                        : <div className='flex items-center animate-appearance-in'>
                            <Input
                                classNames={{
                                    base: "max-w-full sm:max-w-[10rem] h-10",
                                    mainWrapper: "h-full",
                                    input: "text-small",
                                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                                }}
                                placeholder="Type to search..."
                                size="sm"
                                startContent={<SearchIcon width={16} height={16} />}
                                type="search"
                            />
                            <span className="cursor-pointer" onClick={() => setIsOpen(false)}><CloseIcon width={24} height={24} /></span>
                        </div>

                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}

