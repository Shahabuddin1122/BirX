import Image from "next/image";

const Quantity = () => {
    return (
        <>
            <div className={"px-4 rounded-full flex items-center gap-x-4 bg-slate-100 flex-shrink-0"}>
                <Image src={"/minus.svg"} alt={"decrement"} width={15} height={15}/>
                <p className={"text-xl font-bold"}>1</p>
                <Image src={"/plus.svg"} alt={"increment"} width={15} height={15}/>
            </div>
        </>
    );
}
export default Quantity;