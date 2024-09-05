"use client"
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <div className={"md:mx-24  px-5 py-5 flex justify-between items-center"}>
                <div className={"flex justify-center items-center gap-4"}>
                    <Image src={"/bars.svg"} alt={"bar"} width={24} height={24} onClick={toggleSidebar} className={"cursor-pointer block sm:hidden"}/>
                    <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                </div>
                <div className={"flex justify-center items-center gap-5"}>
                    <Image src={"/search.svg"} alt={"search"} width={24} height={24}/>
                    <Image src={"/store.svg"} alt={"store"} width={24} height={24}/>
                    <Image src={"/profile.svg"} alt={"profile"} width={24} height={24}/>
                </div>
            </div>

            {sidebarOpen && (
                <div className={"fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-5"}>
                    <div className={"flex justify-between items-center mb-4"}>
                        <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
                        <button onClick={toggleSidebar} className={"text-xl"}>×</button>
                    </div>
                    <ul className={"space-y-4"}>
                        <li><a href="#home" className={"text-blue-500"}>Home</a></li>
                        <li><a href="#about" className={"text-blue-500"}>Shop</a></li>
                        <li><a href="#on_sale" className={"text-blue-500"}>On Sale</a></li>
                        <li><a href="#new_arrival" className={"text-blue-500"}>New Arrivals</a></li>
                        <li><a href="#brand" className={"text-blue-500"}>Brands</a></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Navbar;
