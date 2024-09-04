"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProductCard from "@/components/productCard";
import {useRouter} from "next/navigation";
import Filter from "@/components/filter";
import {useEffect, useState} from "react";

const Page = () => {
    const [isFilterOpen,setIsFilterOpen] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (isFilterOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isFilterOpen]);


    return (
        <>
            <Navbar/>
            {isFilterOpen && <Filter isModelOpen={()=> setIsFilterOpen(false)}/>}
            <div className={"px-5"}>
                <h1 className={"text-slate-400"}>Home &gt; <span className={"text-black"}>Casual</span></h1>
                <div className={"py-4 flex justify-between"}>
                    <div className={"flex gap-x-2 items-baseline"}>
                        <h1 className={"text-2xl font-bold"}>Casual</h1>
                        <p className={"text-sm text-slate-400"}>Showing 1-10 of 100 Products</p>
                    </div>
                    <div className={"w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center"} onClick={()=> setIsFilterOpen((prevState)=> !prevState)}>
                        <Image src={"/filter.svg"} alt={"filter"} width={24} height={24}/>
                    </div>
                </div>
                <div className={"py-4 flex flex-wrap gap-4 border-b border-slate-400"} style={{ gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))"}}>
                    <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'} onClick={()=> router.push('/product/1')}/>
                    <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'} onClick={()=> router.push('/product/1')}/>
                    <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'} onClick={()=> router.push('/product/1')}/>
                    <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'} onClick={()=> router.push('/product/1')}/>
                    <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'} onClick={()=> router.push('/product/1')}/>
                    <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'} onClick={()=> router.push('/product/1')}/>
                </div>
                <div className={"py-4 flex justify-between items-center"}>
                    <div className={"px-4 py-2 border flex gap-x-4 items-center"}>
                        <Image src={"/left.svg"} alt={"Left"} width={15} height={15} />
                        <p>Previous</p>
                    </div>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>...</p>
                    <div className={"px-4 py-2 border flex gap-x-4 items-center"}>
                        <p>Next</p>
                        <Image src={"/right.svg"} alt={"Left"} width={15} height={15} />
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}
export default Page;