"use client"
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import InputBox from "@/components/inputBox";
import Button from "@/components/Button";
import Dropdown from "@/components/dropdown";
import Image from "next/image";
import ImageInput from "@/components/image-input";

const Page = () => {
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

    return (
        <>
            <Navbar/>
            <div className={'md:px-0 md:mx-24 px-5 pb-5'}>
                <p className={"text-slate-400"}>Home &gt; <span
                    className={"text-black"}>Add-product</span></p>
                <h1 className={"text-3xl font-extrabold py-4"}>ADD A PRODUCT</h1>
                <div className={'md:grid grid-cols-12 gap-x-4'}>
                    <div className={'border p-4 rounded-xl md:col-span-6'}>
                        <p className={'font-semibold pb-2 text-lg'}>General Information</p>
                        <InputBox headerText={'Product Name'} required={true}/>
                        <InputBox headerText={'Product Description'} required={true}/>
                        <div className={'py-1'}>
                            <p className={'text-lg py-1'}>Product Category<span className={"text-red-500 px-1"}>*</span>
                            </p>
                            <Dropdown options={categoryOptions} name={'category'}/>
                        </div>
                        <div className={'py-1'}>
                            <p className={'text-lg py-1'}>Product Color<span className={"text-red-500 px-1"}>*</span>
                            </p>
                            <Dropdown options={colorOptions} name={'color'}/>
                        </div>
                    </div>
                    <div className={'md:col-span-6'}>
                        <div className={'border p-4 rounded-xl my-4 md:my-0'}>
                            <p className={'font-semibold text-lg'}>Price</p>
                            <InputBox headerText={'Base Price'} required={true}/>
                            <InputBox headerText={'Discount Percentage(%)'} required={false}/>
                        </div>
                        <div className={'border p-4 rounded-xl my-4'}>
                            <p className={'font-semibold text-lg'}>Inventory</p>
                            <InputBox headerText={'Quantity'} required={true}/>
                            <InputBox headerText={'Barcode'} required={false}/>
                        </div>
                    </div>
                    <div className={'border p-4 rounded-xl my-4 md:col-span-12'}>
                        <p className={'font-semibold pb-2 text-lg'}>Images</p>
                        <ImageInput/>
                    </div>
                </div>
                <div className={'flex justify-center items-center'}>
                    <Button text={'Add'} option={true}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Page;