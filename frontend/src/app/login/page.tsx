import Image from "next/image";
import Button from "@/components/Button";
import React from "react";

const Page = () => {
    return (
        <>
            <Image src={"/logo.png"} alt={"logo"} width={100} height={100} className={'px-4'}/>
            <div className={'md:mx-auto px-4 md:w-[500px] md:border rounded-xl h-[700px] flex flex-col justify-center gap-y-12'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <h1 className={'text-2xl font-extrabold'}>Sign In</h1>
                    <p>Hi! welcome back, you&apos;ve been missed</p>
                </div>
                <div className={'w-full flex flex-col gap-y-1'}>
                    <div className={'flex flex-col gap-y-4'}>
                        <div className={'w-full border bg-white flex gap-x-2 rounded-full px-4'}>
                            <Image src={'/email.svg'} alt={'email'} width={20} height={20}/>
                            <input placeholder={'Enter your email'}
                                   className={'p-3 w-full rounded-full focus:outline-none'}/>
                        </div>
                        <button className={'py-3 w-full bg-black text-white rounded-full'}>Sign In</button>
                    </div>
                    <p className={'flex justify-end text-lg underline'}>Forget password ?</p>
                </div>
                <div className={'flex flex-col gap-y-4'}>
                    <div className={'flex justify-center items-center'}>
                        <div className={"w-full bg-slate-200 h-0.5"}></div>
                        <p>{"Or_sign_in_with"}</p>
                        <div className={"w-full bg-slate-200 h-0.5"}></div>
                    </div>
                    <div className={"flex justify-center gap-x-5"}>
                        <Image src={"/facebook.svg"} alt={"facebook"} width={30} height={30}
                               className={"rounded-full"}/>
                        <Image src={"/instagram.svg"} alt={"instagram"} width={30} height={30}
                               className={"rounded-full"}/>
                        <Image src={"/tiktok.svg"} alt={"tiktok"} width={20} height={20} className={"rounded-full"}/>
                    </div>
                </div>
                <p className={'flex justify-center'}>Don&apos;t have an account ?<span className={'text-sky-600 underline'}> Sign up</span></p>

            </div>
        </>
    );
}
export default Page;