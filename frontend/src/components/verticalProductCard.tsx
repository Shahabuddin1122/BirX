import Image from "next/image";
import Quantity from "@/components/quantity";
import React from "react";

interface VerticalProductCardProps {
    image: string,
    name: string,
    size: string,
    color: string,
    price: string,
    onClick?: () => void;
}

const VerticalProductCard:React.FC<VerticalProductCardProps> = ({image,name,size,color,price,onClick}) => {
    return (
        <>
            <div className={"w-full px-4 py-2 flex gap-x-6"}>
                <div className={"w-[120px] h-auto relative bg-slate-100 rounded-lg"}>
                    <Image src={image} alt={"product"} fill objectFit={"contain"} className={"rounded-lg"}/>
                </div>
                <div className={"w-full"}>
                    <div className={"flex justify-between"}>
                        <p className={"text-lg font-bold"}>{name}</p>
                        <Image src={"/trash.svg"} alt={"delete"} width={15} height={15}/>
                    </div>
                    <p className={"font-bold"}>Size: <span className={"text-slate-600"}>{size}</span></p>
                    <p className={"font-bold"}>Color: <span className={"text-slate-600"}>{color}</span></p>
                    <div className={"flex justify-between py-2"}>
                        <p className={"text-xl font-bold"}>৳ {price}</p>
                        <Quantity/>
                    </div>
                </div>
            </div>

        </>
    )
}
export default VerticalProductCard;