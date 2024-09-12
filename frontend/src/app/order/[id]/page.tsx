import AdminNavbar from "@/components/admin-navbar";
import Footer from "@/components/Footer";
import React from "react";
import Table from "@/components/table";
import OrderCard from "@/components/order-card";
import Button from "@/components/Button";

const Page = () => {
    return (
        <>
            <AdminNavbar/>
            <div className={'md:px-0 md:mx-24 px-5 pb-5'}>
                <p className={"text-slate-400"}>Dashboard &gt; <span
                    className={"text-black"}>Order</span></p>
                <h1 className={"text-3xl font-extrabold py-4"}>ORDER LIST</h1>
                <OrderCard/>

                <div className={'w-1/3 mx-auto'}>
                    <Button text={'Deliver'} option={true}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Page;