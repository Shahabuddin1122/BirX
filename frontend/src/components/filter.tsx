import Image from "next/image";
import Button from "@/components/Button";
import React from "react";

interface FilterProps {
    isModelOpen: (open: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({ isModelOpen }) => {
    return (
        <>
            <div className={"fixed inset-0 bg-slate-100 bg-opacity-50 z-20 overflow-hidden"}>
                <div className={"w-full max-h-[70vh] px-5 py-4 pb-10 bg-white shadow-2xl absolute rounded-t-2xl z-30 top-72 overflow-y-auto"}>
                    <div className={"flex justify-between text-xl py-3"}>
                        <h1 className={"font-extrabold"}>Filter</h1>
                        <p className={"cursor-pointer"} onClick={()=> isModelOpen(false)}>✕</p>
                    </div>
                    <div className={"w-full bg-slate-200 h-0.5"}></div>
                    <div className={"flex flex-col gap-y-4 py-4"}>
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
                    <div className={"flex flex-wrap gap-x-4 py-4"}>
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
                    <Button text={'Apply Filter'} option={true} />
                </div>
            </div>
        </>
    );
}

export default Filter;
