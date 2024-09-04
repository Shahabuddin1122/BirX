"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import InputBox from "@/components/inputBox";
import Button from "@/components/Button";
import Calender from "@/components/calender";
import Image from "next/image";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    return (
        <>
            <Navbar/>
            <div className={"px-5"}>
                <div>
                    <div className={"flex gap-x-2"}>
                        <Image src={'/home.svg'} alt={'home'} width={20} height={20}/>
                        <h1 className={"text-xl font-extrabold"}>Address</h1>
                    </div>
                    <p className={"pb-4"}>Your product will arrive at this place</p>
                    <InputBox headerText={"Full Name"}/>
                    <InputBox headerText={"Mobile Number"}/>
                    <InputBox headerText={"Address"}/>
                    <Calender/>
                </div>
                <div className={"py-4"}>
                    <div className={"flex gap-x-2"}>
                        <Image src={'/bill.svg'} alt={'home'} width={20} height={20}/>
                        <h1 className={"text-xl font-extrabold"}>Order Summary</h1>
                    </div>
                    <p className={"pb-4"}>Total cost before checkout.</p>
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
                    <Button text={"Order"} option={true} onclick={() => router.push('/')}/>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Page;