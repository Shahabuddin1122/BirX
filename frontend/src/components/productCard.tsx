import Image from "next/image";

const ProductCard = () => {
    return (
        <div className={"w-[160px] flex-shrink-0 border"}>
            <div className={"w-full h-[150px] bg-slate-100 rounded-lg relative"}>
                <Image src={"/shirt.png"} alt={"Shirt"} fill objectFit={"cover"} className={"rounded-lg"} />
            </div>
            <div className={"py-4 px-2"}>
                <p className={"font-semibold text-sm overflow-hidden whitespace-nowrap text-ellipsis"}>T-SHIRT WITH TAPE DETAILS</p>
                <p className={"font-bold text-md py-2"}>$120</p>
            </div>
        </div>
    );
};

export default ProductCard;
