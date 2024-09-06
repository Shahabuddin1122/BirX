"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProductCard from "@/components/productCard";
import {useRouter} from "next/navigation";
import Filter from "@/components/filter";
import React, {useEffect, useState} from "react";
import PriceRangeSlider from "@/components/priceRangeSlider";

const Page: React.FC = () => {
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
            {isFilterOpen && <Filter isModelOpen={setIsFilterOpen}/>}
            <div className={"md:mx-24 md:px-0 px-5"}>
                <h1 className={"text-slate-400"}>Home &gt; <span className={"text-black"}>Casual</span></h1>
                <div className={"md:grid grid-cols-12 gap-x-6"}>
                    <div className={"hidden md:col-span-4 md:border my-2 rounded-xl md:block px-3"}>
                        <div className={"flex justify-between text-xl py-3 "}>
                            <h1 className={"font-extrabold"}>Filter</h1>
                            <Image src={"/filter.svg"} alt={"filter"} width={24} height={24}/>
                        </div>
                        <div className={"w-full bg-slate-200 h-0.5"}></div>
                        <div className={"flex flex-col gap-y-4 py-4 "}>
                            <div className={"flex justify-between"}>
                                <p className={"text-lg"}>Shirts</p>
                                <Image src={'/rightV.svg'} alt={'right'} width={15} height={15}/>
                            </div>
                            <div className={"flex justify-between"}>
                                <p className={"text-lg"}>Jeans</p>
                                <Image src={'/rightV.svg'} alt={'right'} width={15} height={15}/>
                            </div>
                            <div className={"flex justify-between"}>
                                <p className={"text-lg"}>Trouser</p>
                                <Image src={'/rightV.svg'} alt={'right'} width={15} height={15}/>
                            </div>
                            <div className={"flex justify-between"}>
                                <p className={"text-lg"}>T-shirt</p>
                                <Image src={'/rightV.svg'} alt={'right'} width={15} height={15}/>
                            </div>
                            <div className={"flex justify-between"}>
                                <p className={"text-lg"}>Hoodie</p>
                                <Image src={'/rightV.svg'} alt={'right'} width={15} height={15}/>
                            </div>
                        </div>
                        <div className={"w-full bg-slate-200 h-0.5"}></div>
                        <div className={"flex justify-between text-xl py-3"}>
                            <h1 className={"font-extrabold"}>Color</h1>
                            <Image src={'/up.svg'} alt={'right'} width={15} height={15}/>
                        </div>
                        <div className={"flex flex-wrap gap-4 py-4"}>
                            <div className={"w-8 h-8 rounded-full bg-black"}></div>
                            <div className={"w-8 h-8 rounded-full bg-gray-400"}></div>
                            <div className={"w-8 h-8 rounded-full bg-amber-700"}></div>
                            <div className={"w-8 h-8 rounded-full bg-white border border-black"}></div>
                        </div>
                        <div className={"w-full bg-slate-200 h-0.5"}></div>
                        <div className={"flex justify-between text-xl py-3"}>
                            <h1 className={"font-extrabold"}>Size</h1>
                            <Image src={'/up.svg'} alt={'right'} width={15} height={15}/>
                        </div>
                        <div className={"flex flex-wrap gap-4 py-4"}>
                            <div className={"py-2 px-4 text-center rounded-full bg-slate-100"}>Small</div>
                            <div className={"py-2 px-4 text-center rounded-full bg-slate-100"}>Medium</div>
                            <div className={`py-2 px-4 text-center rounded-full bg-black text-white`}>Large</div>
                            <div className={`py-2 px-4 text-center rounded-full bg-slate-100`}>XL</div>
                            <div className={`py-2 px-4 text-center rounded-full bg-slate-100`}>XXL</div>
                        </div>
                        <div className={"w-full bg-slate-200 h-0.5"}></div>
                        <div className={"flex justify-between text-xl py-3"}>
                            <h1 className={"font-extrabold"}>Price</h1>
                            <Image src={'/up.svg'} alt={'right'} width={15} height={15}/>
                        </div>
                        <PriceRangeSlider min={100} max={10000}/>
                    </div>
                    <div className={"md:col-span-8"}>
                        <div className={"py-4 flex justify-between"}>
                            <div className={"flex gap-x-2 items-baseline"}>
                                <h1 className={"text-2xl font-bold"}>Casual</h1>
                                <p className={"text-sm text-slate-400"}>Showing 1-10 of 100 Products</p>
                            </div>
                            <div
                                className={"w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center md:hidden"}
                                onClick={() => setIsFilterOpen((prevState) => !prevState)}>
                                <Image src={"/filter.svg"} alt={"filter"} width={24} height={24}/>
                            </div>
                        </div>
                        <div className={"py-4 flex flex-wrap gap-4 border-b border-slate-400"}
                             style={{gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))"}}>
                            <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'}
                                         onClick={() => router.push('/product/1')}/>
                            <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'}
                                         onClick={() => router.push('/product/1')}/>
                            <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'}
                                         onClick={() => router.push('/product/1')}/>
                            <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'}
                                         onClick={() => router.push('/product/1')}/>
                            <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'}
                                         onClick={() => router.push('/product/1')}/>
                            <ProductCard image={"/shirt.png"} name={'T-SHIRT WITH TAPE DETAILS'} price={'1020'}
                                         onClick={() => router.push('/product/1')}/>
                        </div>
                        <div className={"py-4 flex justify-between items-center"}>
                            <div className={"px-4 py-2 border flex gap-x-4 items-center"}>
                                <Image src={"/left.svg"} alt={"Left"} width={15} height={15}/>
                                <p>Previous</p>
                            </div>
                            <div className={'flex gap-x-6 justify-center items-center'}>
                                <p>1</p>
                                <p className={'bg-slate-100 p-2 rounded-lg'}>2</p>
                                <p>3</p>
                                <p>...</p>
                            </div>
                            <div className={"px-4 py-2 border flex gap-x-4 items-center"}>
                            <p>Next</p>
                                <Image src={"/right.svg"} alt={"Left"} width={15} height={15}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    )
}
export default Page;