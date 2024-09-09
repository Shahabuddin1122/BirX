import Image from "next/image";
import LineGraph from "@/components/line-graph";

const InfoCard = () => {
    return (
        <>
            <div className={'p-2 border rounded-xl bg-slate-50'}>
                <div className={'flex justify-between items-center'}>
                    <Image src={'/shop.svg'} alt={'cart'} width={30} height={30}/>
                    <div>
                        <p className={'text-slate-400'}>Total Sales</p>
                        <p className={'font-bold text-xl'}>34,210</p>
                    </div>
                    <div className={'flex gap-x-2'}>
                        <Image src={'/increase.svg'} alt={'increase'} width={20} height={20}/>
                        <p>1.56%</p>
                    </div>
                </div>
                <LineGraph/>
            </div>
        </>
    )
}
export default InfoCard;