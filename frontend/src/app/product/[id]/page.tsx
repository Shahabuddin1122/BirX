import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Button from "@/components/Button";
import ProductCard from "@/components/productCard";

const page = () => {
    return (
        <>
            <Navbar/>
            <div className={"px-5"}>
                <h1 className={"text-slate-400"}>Home &gt; Shop &gt; Men &gt; <span
                    className={"text-black"}>T-Shirts</span></h1>
                <div className={"w-full h-[250px] my-4 bg-slate-100 rounded-lg relative"}>
                    <Image src={"/shirt.png"} alt={"Shirt"} fill objectFit={"cover"} className={"rounded-lg"}/>
                </div>
                <div className={"flex justify-between h-[100px] gap-x-4"}>
                    <div className={"w-1/3 h-full relative rounded-lg border-black border-2"}>
                        <Image src={"/shirt.png"} alt={"Shirt"} fill objectFit={"cover"} className={"rounded-lg"}/>
                    </div>
                    <div className={"w-1/3 h-full relative rounded-lg"}>
                        <Image src={"/shirt.png"} alt={"Shirt"} fill objectFit={"cover"} className={"rounded-lg"}/>
                    </div>
                    <div className={"w-1/3 h-full relative rounded-lg"}>
                        <Image src={"/shirt.png"} alt={"Shirt"} fill objectFit={"cover"} className={"rounded-lg"}/>
                    </div>
                </div>
                <div className={"py-4 flex flex-col gap-y-2"}>
                    <h1 className={"text-2xl font-extrabold"}>One Life Graphic T-shirt</h1>
                    <div className={"flex "}>
                        <h1 className={"font-bold text-lg"}>$260</h1>
                    </div>
                    <p className={"font-light"}>This graphic t-shirt which is perfect for any occasion. Crafted from a
                        soft and breathable fabric, it offers superior comfort and style.</p>
                </div>
                <div className={"py-4 border-t-2"}>
                    <p className={"pb-4"}>Select Colors</p>
                    <div className={"flex gap-x-4"}>
                        <div className={"w-8 h-8 rounded-full bg-black"}></div>
                        <div className={"w-8 h-8 rounded-full bg-gray-400"}></div>
                        <div className={"w-8 h-8 rounded-full bg-amber-700"}></div>
                    </div>
                </div>
                <div className={"py-4 border-t-2"}>
                    <p className={"pb-4"}>Choose Size</p>
                    <div className={"flex gap-x-4"}>
                        <div className={"py-2 px-4 text-center rounded-full bg-slate-100"}>Small</div>
                        <div className={"py-2 px-4 text-center rounded-full bg-slate-100"}>Medium</div>
                        <div className={`py-2 px-4 text-center rounded-full bg-black text-white`}>Large</div>
                    </div>
                </div>
                <div className={"pt-10 border-t-2 flex gap-x-4"}>
                    <div className={"py-3 px-4 rounded-full flex gap-x-4 bg-slate-100 flex-shrink-0"}>
                        <Image src={"/minus.svg"} alt={"decrement"} width={15} height={15}/>
                        <p className={"text-xl font-bold"}>1</p>
                        <Image src={"/plus.svg"} alt={"increment"} width={15} height={15}/>
                    </div>
                    <Button text={"Add to Cart"} option={true} />
                </div>
                <div className={""}>
                    <h1 className={"text-4xl font-extrabold text-center py-10"}>YOU MIGHT <br/>ALSO LIKE</h1>
                    <div className={"relative overflow-x-auto scrollbar-hide"}>
                        <div className={"flex gap-x-6 whitespace-nowrap"}>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default page;