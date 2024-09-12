"use client"
import AdminNavbar from "@/components/admin-navbar";
import Footer from "@/components/Footer";
import React, {useState} from "react";
import InputBox from "@/components/inputBox";
import Dropdown from "@/components/dropdown";
import InputBoxEdit from "@/components/input-box-edit";
import ImageInput from "@/components/image-input";
import Image from "next/image";

const categoryOptions = [
    { label: 'Small'},
    { label: 'Medium'},
    { label: 'Large'},
    { label: 'XL'},
];
const colorOptions = [
    { label: 'Black'},
    { label: 'Gray'},
    { label: 'Red'},
    { label: 'Orange'},
];

const Page = () => {
    const [isEditCategory,setIsEditCategory] = useState<boolean>(false)
    const [isEditColor,setIsEditColor] = useState<boolean>(false)
    return (
        <>
            <AdminNavbar/>
            <div className={'md:px-0 md:mx-24 px-5 pb-5'}>
                <p className={"text-slate-400"}>Dashboard &gt; <span
                    className={"text-black"}>View-product</span></p>
                <h1 className={"text-3xl font-extrabold py-4"}>Edit Information</h1>
                <div className={'md:grid grid-cols-12 gap-x-4'}>
                    <div className={'border p-4 rounded-xl md:col-span-6'}>
                        <p className={'font-semibold pb-2 text-lg'}>General Information</p>
                        <InputBoxEdit text={'T-SHIRT WITH TAPE DETAILS'} headerText={'Product Name'} required={true}/>
                        <InputBoxEdit text={'This graphic t-shirt which is perfect for any occasion.\n' +
                            '                                    Crafted\n' +
                            '                                    from\n' +
                            '                                    a\n' +
                            '                                    soft and breathable fabric, it offers superior comfort and style.'}
                                      headerText={'Product Description'} required={true}/>
                        <div className={'py-1'}>
                            <p className={'text-lg py-1'}>Product Category<span className={"text-red-500 px-1"}>*</span>
                            </p>
                            <div className={'flex gap-x-4 justify-between'}>
                                {isEditCategory ? <div className={'w-full'}>
                                    <Dropdown options={categoryOptions} name={'category'}/>
                                </div> : <div className={"flex gap-4 flex-wrap py-2"}>
                                    <div className={"py-2 px-4 text-center rounded-full bg-slate-100"}>Small</div>
                                    <div className={"py-2 px-4 text-center rounded-full bg-slate-100"}>Medium</div>
                                    <div className={`py-2 px-4 text-center rounded-full bg-black text-white`}>Large
                                    </div>
                                </div>}
                                <Image src={isEditCategory ? '/check.svg' : '/pen.svg'} alt={'edit'} height={16} width={16} className={'pt-2'}
                                       onClick={() => setIsEditCategory((prevState)=> !prevState)}/>
                            </div>
                        </div>
                        <div className={'py-1'}>
                            <p className={'text-lg py-1'}>Product Color<span className={"text-red-500 px-1"}>*</span>
                            </p>
                            <div className={'flex gap-x-4 justify-between'}>
                                {isEditColor ? <div className={'w-full'}>
                                    <Dropdown options={colorOptions} name={'color'}/>
                                </div> : <div className={"flex gap-4 flex-wrap py-2"}>
                                    <div className={"w-8 h-8 rounded-full bg-black"}></div>
                                    <div className={"w-8 h-8 rounded-full bg-gray-400"}></div>
                                    <div className={"w-8 h-8 rounded-full bg-amber-700"}></div>
                                </div>}
                                <Image src={isEditColor ? '/check.svg' : '/pen.svg'} alt={'edit'} height={16}
                                       width={16} className={'pt-2'}
                                       onClick={() => setIsEditColor((prevState) => !prevState)}/>
                            </div>
                        </div>
                    </div>
                    <div className={'md:col-span-6'}>
                        <div className={'border p-4 rounded-xl my-4 md:my-0'}>
                            <p className={'font-semibold text-lg'}>Price</p>
                            <InputBoxEdit text={'$510'} headerText={'Base Price'} required={true}/>
                            <InputBoxEdit text={'10'} headerText={'Discount Percentage(%)'} required={false}/>
                        </div>
                        <div className={'border p-4 rounded-xl my-4'}>
                            <p className={'font-semibold text-lg'}>Inventory</p>
                            <InputBoxEdit text={'100'} headerText={'Quantity'} required={true}/>
                            <InputBoxEdit text={'34324245'} headerText={'Barcode'} required={false}/>
                        </div>
                    </div>
                    <div className={'border p-4 rounded-xl my-4 md:col-span-12'}>
                        <div className={'flex justify-between'}>
                            <p className={'font-semibold pb-2 text-lg'}>Images</p>
                            <Image src={'/delete.svg'} alt={'delete'} width={16} height={16} />
                        </div>
                        <ImageInput/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Page;