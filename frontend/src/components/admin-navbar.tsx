"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const AdminNavbar = () => {
    const router = useRouter()
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


    return (
        <>
            <div className={"md:mx-24 md:px-0  px-5 py-5 flex justify-between items-center"}>
                <div className={"flex justify-center items-center gap-4"}>
                    <Image
                        src={"/bars.svg"}
                        alt={"bar"}
                        width={24}
                        height={24}
                        onClick={toggleSidebar}
                        className={"cursor-pointer block sm:hidden"}
                    />
                    <Image src={"/logo.png"} alt={"logo"} className={'cursor-pointer'} width={50} height={50} onClick={()=> router.push('/admin-dashboard')}/>
                    <div className={"hidden sm:flex md:gap-x-4 xl:gap-x-12 justify-center items-center"}>
                        <p className={"md:text-xs lg:text-base cursor-pointer font-bold"}><Link href={'/admin-dashboard'}>Dashboard</Link></p>
                        <p className={"md:text-xs lg:text-base cursor-pointer"}><Link href={'/add-product'}>Add Product</Link></p>
                        <p className={"md:text-xs lg:text-base cursor-pointer"}>View Product</p>
                        <p className={"md:text-xs lg:text-base cursor-pointer"}>Order</p>
                    </div>
                </div>
                <div className={"flex justify-center items-center gap-5"}>
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
                        <li><Link href={"/admin-dashboard"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/home.svg'} alt={'home'} width={15} height={15}/>
                                <p>Dashboard</p>
                            </div>
                        </Link></li>
                        <li><Link href={"/add-product"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/plus.svg'} alt={'home'} width={15} height={15}/>
                                <p>Add a product</p>
                            </div>
                        </Link></li>
                        <li><Link href={"/add-product"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/shop.svg'} alt={'home'} width={15} height={15}/>
                                <p>View products</p>
                            </div>
                        </Link></li>
                        <li><Link href={"/add-product"} className={""}>
                            <div className={'flex gap-x-4'}>
                                <Image src={'/store.svg'} alt={'home'} width={15} height={15}/>
                                <p>Order</p>
                            </div>
                        </Link></li>

                    </ul>
                </div>
            )}
        </>
    );
};

export default AdminNavbar;
