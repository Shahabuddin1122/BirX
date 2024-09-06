"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Quantity from "@/components/quantity";
import VerticalProductCard from "@/components/verticalProductCard";
import Button from "@/components/Button";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    return (
        <>
            <Navbar/>
            <div className={"md:px-0 md:mx-24 px-5"}>
                <p className={"text-slate-400"}>Home &gt; <span
                    className={"text-black"}>Cart</span></p>
                <h1 className={"text-3xl font-extrabold py-4"}>YOUR CART</h1>
                <div className={"flex flex-col gap-y-4 border rounded-lg py-4"}>
                    <VerticalProductCard image={"/shirt.png"} name={'Gradient Graphic T-shirt'} color={'Black'} size={'Large'} price={'540'}/>
                    <VerticalProductCard image={"/shirt.png"} name={'Gradient Graphic T-shirt'} color={'Black'} size={'Large'} price={'540'}/>
                </div>
                <div className={"flex flex-col gap-y-4 border rounded-lg p-4 my-6"}>
                    <h1 className={"text-xl font-bold"}>Order Summary</h1>
                    <div className={"text-lg flex justify-between"}>
                        <p className={"text-slate-400"}>Subtotal</p>
                        <p className={"font-bold"}>৳ 565</p>
                    </div>
                    <div className={"text-lg flex justify-between"}>
                        <p className={"text-slate-400"}>Discount(-20%)</p>
                        <p className={"font-bold text-red-500"}>-৳ 13</p>
                    </div>
                    <div className={"text-lg flex justify-between"}>
                        <p className={"text-slate-400"}>Delivery Fee</p>
                        <p className={"font-bold"}>৳ 15</p>
                    </div>
                    <div className={"w-full border"}></div>
                    <div className={"text-black flex justify-between pb-4"}>
                        <p className={"text-lg"}>Total</p>
                        <p className={"font-bold text-xl"}>৳ 467</p>
                    </div>
                    <div className={'w-full flex justify-center items-center'}>
                        <Button text={"Go to Checkout"} option={true} onclick={()=> router.push('/checkout')}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Page;