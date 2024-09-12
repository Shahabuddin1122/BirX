import Table from "@/components/table";
import React from "react";

const sampleOrderData = [
    { productName: 'Product A', color: 'Red', size: 'medium', quantity: 2, price: '$20', },
    { productName: 'Product B', color: 'Red', size: 'medium', quantity: 1, price: '$15', },
    { productName: 'Product C', color: 'Red', size: 'medium', quantity: 3, price: '$30', },
    { productName: 'Product D', color: 'Red', size: 'medium', quantity: 4, price: '$40', },
];

const OrderCard = () => {
    return (
        <>
            <div className={''}>
                <div className={'md:grid grid-cols-12 gap-x-4 gap-y-2'}>
                    {/*address-info*/}
                    <div className={'md:col-span-6 border rounded-xl p-4'}>
                        <h1 className={"text-xl font-extrabold"}>Address</h1>
                        <div className={'py-2'}>
                            <p className={'font-bold'}>Name: <span className={'font-normal'}>Shahabuddin Akhon</span></p>
                            <p className={'font-bold'}>Mobile: <span className={'font-normal'}>01982711168</span></p>
                            <p className={'font-bold'}>Address: <span className={'font-normal'}>Jatrabari,Dhaka-1236</span>
                            </p>
                        </div>
                    </div>
                    {/*billing details*/}
                    <div className={'md:col-span-6 border rounded-xl p-4 my-4 md:my-0'}>
                        <h1 className={"text-xl font-extrabold pb-4"}>Order Summary</h1>
                        <div className={"flex flex-col gap-y-4 pb-4"}>
                            <div className={"text-lg flex justify-between"}>
                                <p className={"text-slate-400"}>Subtotal</p>
                                <p className={"font-bold"}>$565</p>
                            </div>
                            <div className={"text-lg flex justify-between"}>
                                <p className={"text-slate-400"}>Discount(-20%)</p>
                                <p className={"font-bold text-red-500"}>-$13</p>
                            </div>
                            <div className={"text-lg flex justify-between"}>
                                <p className={"text-slate-400"}>Delivery Fee</p>
                                <p className={"font-bold"}>$15</p>
                            </div>
                            <div className={"w-full border"}></div>
                            <div className={"text-black flex justify-between pb-4"}>
                                <p className={"text-lg"}>Total</p>
                                <p className={"font-bold text-xl"}>$467</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*product-info*/}
                <div className={'py-4'}>
                    <h1 className={"text-xl font-extrabold"}>Products</h1>
                    <Table data={sampleOrderData}/>
                </div>
            </div>
        </>
    )
}
export default OrderCard