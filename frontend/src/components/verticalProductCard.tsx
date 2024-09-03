import Image from "next/image";
import Quantity from "@/components/quantity";

const VerticalProductCard = () => {
    return (
        <>
            <div className={"w-full px-4 py-2 flex gap-x-4"}>
                <div className={"w-[120px] h-auto relative bg-slate-100 rounded-lg"}>
                    <Image src={"/shirt.png"} alt={"product"} fill objectFit={"cover"} className={"rounded-lg"}/>
                </div>
                <div className={"w-full"}>
                    <div className={"flex justify-between"}>
                        <p className={"text-lg font-bold"}>Gradient Graphic T-shirt</p>
                        <Image src={"/trash.svg"} alt={"delete"} width={15} height={15}/>
                    </div>
                    <p className={"font-bold"}>Size: <span className={"text-slate-600"}>Large</span></p>
                    <p className={"font-bold"}>Color: <span className={"text-slate-600"}>White</span></p>
                    <div className={"flex justify-between py-2"}>
                        <p className={"text-xl font-bold"}>$145</p>
                        <Quantity/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default VerticalProductCard;