import AdminNavbar from "@/components/admin-navbar";
import Footer from "@/components/Footer";
import React from "react";
import Table from "@/components/table";
import Image from "next/image";

const sampleOrderData = [
    { orderId: 'O001',userName: 'Hridoy', price: '$20', mobile: '01982711168', status: 'Shipped' },
    { orderId: 'O002',userName: 'Hridoy', price: '$15', mobile: '01982711168', status: 'Pending' },
    { orderId: 'O003',userName: 'Hridoy', price: '$30', mobile: '01982711168', status: 'Delivered' },
    { orderId: 'O004',userName: 'Hridoy', price: '$40', mobile: '01982711168', status: 'Delivered' },
    { orderId: 'O001',userName: 'Hridoy', price: '$20', mobile: '01982711168', status: 'Shipped' },
    { orderId: 'O002',userName: 'Hridoy', price: '$15', mobile: '01982711168', status: 'Pending' },
    { orderId: 'O003',userName: 'Hridoy', price: '$30', mobile: '01982711168', status: 'Delivered' },
    { orderId: 'O004',userName: 'Hridoy', price: '$40', mobile: '01982711168', status: 'Delivered' },
    { orderId: 'O001',userName: 'Hridoy', price: '$20', mobile: '01982711168', status: 'Shipped' },
    { orderId: 'O002',userName: 'Hridoy', price: '$15', mobile: '01982711168', status: 'Pending' },
    { orderId: 'O003',userName: 'Hridoy', price: '$30', mobile: '01982711168', status: 'Delivered' },
    { orderId: 'O004',userName: 'Hridoy', price: '$40', mobile: '01982711168', status: 'Delivered' },
];

const Page = () => {
    return (
        <>
            <AdminNavbar/>
            <div className={'md:px-0 md:mx-24 px-5 pb-5'}>
                <p className={"text-slate-400"}>Dashboard &gt; <span
                    className={"text-black"}>Order</span></p>
                <h1 className={"text-3xl font-extrabold py-4"}>ORDER LIST</h1>
                <Table data={sampleOrderData} admin={true}/>
                <div className={'md:flex justify-between items-center border-t py-2 md:py-0'}>
                    <p className={'text-gray-500 text-sm'}>Showing 12 entries</p>
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