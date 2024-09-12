"use client"
import Image from "next/image";
import {useState} from "react";

const InputBoxEdit = ({headerText,text,required}:{headerText:string,required:boolean,text:string}) => {
    const [isEdit,setIsEdit] = useState<boolean>(false);
    return (
        <>
            <div className={"w-full py-1"}>
                <h4 className={"text-lg py-1"}>{headerText}{required && <span className={"text-red-500 px-1"}>*</span>}</h4>
                <div className={'flex gap-x-4 items-start'}>
                    {isEdit ? <input placeholder={`Enter ${headerText.toLowerCase()}`}
                                               className={"w-full py-2 px-4 border-2 rounded-lg"}/> : <p className={"w-full py-2 px-4 border-2 rounded-lg"}>{text}</p>}
                    <Image src={isEdit ? '/check.svg' : '/pen.svg'} alt={'edit'} height={16} width={16} className={'pt-2'}
                           onClick={() => setIsEdit((prevState)=> !prevState)}/>
                </div>
            </div>
        </>
    );
}
export default InputBoxEdit;