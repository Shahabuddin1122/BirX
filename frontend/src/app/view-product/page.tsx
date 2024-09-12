import AdminNavbar from "@/components/admin-navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Table from "@/components/table";
import Button from "@/components/Button";
import React from "react";

const sampleOrderData = [
    { productName: 'Product A', productId: 'P001', quantity: 2, price: '$20', stock: 'Out of stock' },
    { productName: 'Product B', productId: 'P002', quantity: 1, price: '$15', stock: 'In Stock' },
    { productName: 'Product C', productId: 'P003', quantity: 3, price: '$30', stock: 'Out of stock' },
    { productName: 'Product D', productId: 'P004', quantity: 4, price: '$40', stock: 'Limited Stock' },
];

const Page = () => {
    return (
        <>
            <AdminNavbar/>
            <div className={'md:px-0 md:mx-24 px-5 pb-5'}>
                <p className={"text-slate-400"}>Dashboard &gt; <span
                    className={"text-black"}>View-product</span></p>
                <h1 className={"text-3xl font-extrabold py-4"}>VIEW PRODUCT</h1>
                <div className={'md:grid grid-cols-12 gap-4'}>
                    <div className={'flex justify-center gap-x-2 border border-black rounded-lg pr-2 md:col-span-8'}>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full rounded-lg px-2 py-3"
                        />
                        <Image
                            src={"/search.svg"}
                            alt={"search"}
                            width={24}
                            height={24}
                            className={"cursor-pointer"}
                            aria-label="Toggle Search"
                        />
                    </div>
                    <div className={'md:col-span-4 my-4 md:my-0'}>
                        <button className={'w-full py-3 border-black bg-white text-black border rounded-lg'}>Add Product</button>
                    </div>
                </div>
                <Table data={sampleOrderData} admin={true}/>
                <div className={'md:flex justify-between items-center border-t py-2 md:py-0'}>
                    <p className={'text-gray-500 text-sm'}>Showing 5 entries</p>
                    <div className={"py-4 flex justify-between items-center gap-x-6 md:gap-x-10"}>
                        <div className={"px-3 py-3 border rounded-full flex gap-x-4 items-center"}>
                            <Image src={"/left.svg"} alt={"Left"} width={15} height={15}/>
                        </div>
                        <div className={'flex justify-center items-center gap-x-4'}>
                            <p>1</p>
                            <p className={'bg-black text-white px-3 py-1 font-bold text-lg rounded-full'}>2</p>
                            <p>3</p>
                        </div>
                        <div className={"px-3 py-3 border rounded-full flex gap-x-4 items-center"}>
                            <Image src={"/right.svg"} alt={"Left"} width={15} height={15}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Page;