"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <>
            <div className={"md:mx-24  px-5 py-5 flex justify-between items-center"}>
                <div className={"flex justify-center items-center gap-4"}>
                    {
                        !searchOpen ? (
                            <>
                                <Image
                                    src={"/bars.svg"}
                                    alt={"bar"}
                                    width={24}
                                    height={24}
                                    onClick={toggleSidebar}
                                    className={"cursor-pointer block sm:hidden"}
                                />
                                <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                            </>
                        ) : (
                            <Image
                                src={"/left.svg"}
                                alt={"left"}
                                width={24}
                                height={24}
                                onClick={toggleSearch}
                                className={"cursor-pointer block sm:hidden"}
                            />
                        )
                    }

                    <div className={"hidden sm:flex md:gap-x-4 xl:gap-x-12"}>
                        <p>Shop</p>
                        <p>Sale</p>
                        <p>New Arrivals</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center gap-5"}>
                    <div className={"relative flex justify-center gap-x-2 sm:border sm:rounded sm:px-1"}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="hidden sm:block p-1 md:w-[180px] lg:w-[250px]"
                        />
                        {searchOpen && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="absolute -top-2  sm:hidden border rounded px-1 py-2 transition-opacity duration-300"
                            />
                        )}
                        <Image
                            src={"/search.svg"}
                            alt={"search"}
                            width={24}
                            height={24}
                            onClick={toggleSearch}
                            className={"cursor-pointer sm:block"}
                            aria-label="Toggle Search"
                        />
                    </div>
                    <Image src={"/store.svg"} alt={"store"} width={24} height={24}/>
                    <Image src={"/profile.svg"} alt={"profile"} width={24} height={24}/>
                </div>
            </div>

            {sidebarOpen && (
                <div className={" fixed top-0 left-0 w-64 h-full z-50 bg-white shadow-lg p-5"}>
                    <div className={"flex justify-between items-center mb-4"}>
                        <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                        <button onClick={toggleSidebar} className={"text-xl"}>×</button>
                    </div>
                    <ul className={"space-y-4"}>
                        <li><Link href="/" className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/home.svg'} alt={'home'} width={15} height={15}/>
                                <p>Home</p>
                            </div>
                        </Link></li>
                        <li><Link href={"/products"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/shop.svg'} alt={'home'} width={15} height={15}/>
                                <p>Shop</p>
                            </div>
                        </Link></li>
                        <li><Link href={"#on_sale"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/discount.svg'} alt={'home'} width={15} height={15}/>
                                <p>On Sale</p>
                            </div>
                        </Link></li>
                        <li><Link href={"#new_arrival"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/magic.svg'} alt={'home'} width={15} height={15}/>
                                <p>New Arrivals</p>
                            </div>
                        </Link></li>
                        <li><Link href={"#new_arrival"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/question.svg'} alt={'home'} width={15} height={15}/>
                                <p>How to Order</p>
                            </div>
                        </Link></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
