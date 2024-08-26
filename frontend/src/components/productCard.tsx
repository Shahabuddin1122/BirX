import Image from "next/image";

const ProductCard = () => {
return (
    <>
        <div className={"w-[160px]"}>
            <div className={"w-full h-[100px] bg-slate-100 rounded-lg relative"}>
                <Image src={"/shirt.png"} alt={"Shirt"} fill objectFit={"fill"} />
            </div>
            <div className={"py-4 px-2"}>
                <p className={"font-semibold"}>T-SHIRT WITH TAPE DETAILS</p>
                <p className={"font-bold py-2"}>$120</p>
            </div>
        </div>
    </>
)
}
export default ProductCard;