"use client"
import Image from "next/image";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Button from "@/components/Button";

const UserInfo = () => {
    const router = useRouter();
    const [userEmail,setUserEmail] = useState<string>('');
    const subscribeButton = ()=>{
        if (userEmail == 'abc@gmail.com'){
            router.push('/login');
        }
    }
    return (
        <>
            <div
                className={'sm:mx-5  md:mx-24 py-5 bg-black rounded-xl my-10 px-4 flex flex-col gap-y-6 md:grid grid-cols-12 md:gap-x-4 md:items-center'}>
                <p className={'text-3xl text-white font-extrabold md:col-span-6'}>STAY UPTO DATE ABOUT OUR LATEST
                    OFFERS</p>
                <div className={'flex flex-col gap-y-4 md:col-span-6'}>
                    <div className={'w-full border bg-white flex gap-x-2 rounded-full px-4'}>
                        <Image src={'/email.svg'} alt={'email'} width={20} height={20}/>
                        <input placeholder={'Enter your email'}
                               name={'email'}
                               value={userEmail}
                               onChange={(e)=> setUserEmail(e.target.value)}
                               className={'p-3 w-full rounded-full focus:outline-none'}/>
                    </div>
                    <Button text={'Subscribe to BirX'} option={false} onclick={subscribeButton} />
                </div>
            </div>
        </>
    )
}
export default UserInfo;