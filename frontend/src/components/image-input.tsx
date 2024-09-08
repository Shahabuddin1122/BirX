"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const ImageInput = () => {
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [images, setImages] = useState<File[]>([]);

    const imageClick = () => {
        if (imageRef.current !== null) {
            if ("click" in imageRef.current) {
                imageRef.current.click();
            }
        }
    };

    const imageHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setImages((prevImages) => [...prevImages, ...filesArray]);
        }
    };

    return (
        <>
            <div className="flex gap-x-2 gap-y-2 flex-wrap">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="w-[100px] h-[100px] border-2 rounded-xl border-dotted border-black relative"
                    >
                        <Image
                            src={URL.createObjectURL(image)}
                            alt={`image-${index}`}
                            objectFit="cover"
                            fill
                            className="rounded-xl"
                        />
                    </div>
                ))}
                <div
                    className="w-[100px] h-[100px] border-2 rounded-xl border-dotted border-black flex justify-center items-center"
                    onClick={imageClick}
                >
                    <Image src="/plus.svg" alt="plus" width={30} height={30} />
                    <input
                        type="file"
                        name="images"
                        ref={imageRef}
                        className="hidden"
                        onChange={imageHandleChange}
                        multiple // Allow multiple file uploads
                    />
                </div>
            </div>
        </>
    );
};

export default ImageInput;
