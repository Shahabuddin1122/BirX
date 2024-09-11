"use client";

import React from "react";
import Image from "next/image";

type ProductData = {
    productName?: string;
    customerId?: string;
    productId?: string;
    quantity?: number;
    price?: string;
    status?: string;
    review?: number;
    sale?: number;
    stock?: string;
};

type TableProps = {
    data: ProductData[];
    admin?: boolean;
};

const Table: React.FC<TableProps> = ({ data, admin }) => {
    const headers = Object.keys(data[0]);

    return (
        <div className="flex justify-center py-5">
            <div className="overflow-x-auto w-full max-w-4xl">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                        {headers.map((header) => (
                            <th key={header} className="py-3 px-6 text-left">
                                {header.replace(/([A-Z])/g, ' $1').toUpperCase()} {/* Formatting camelCase */}
                            </th>
                        ))}
                        {admin && <th className="py-3 px-6 text-left">
                            ACTION
                        </th>}
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                            {headers.map((key) => (
                                <td key={key} className="py-3 px-6 text-left">
                                    {key === 'status' ? (
                                        <span
                                            className={`py-1 px-3 rounded-full text-xs whitespace-nowrap
                                                    ${item[key] === 'Shipped' ? 'bg-blue-200 text-blue-600' : ''} 
                                                    ${item[key] === 'Pending' ? 'bg-yellow-200 text-yellow-600' : ''} 
                                                    ${item[key] === 'Delivered' ? 'bg-green-200 text-green-600' : ''} 
                                                    ${item[key] === 'Cancelled' ? 'bg-red-200 text-red-600' : ''}`}
                                        >
                                                {item[key]}
                                            </span>
                                    ) : key === 'stock' ? (
                                        <span
                                            className={`py-1 px-3 rounded-full text-xs whitespace-nowrap
                                                    ${item[key] === 'Out of stock' ? 'bg-orange-200 text-orange-600' : ''} 
                                                    ${item[key] === 'In Stock' ? 'bg-green-200 text-green-600' : ''} 
                                                    ${item[key] === 'Limited Stock' ? 'bg-yellow-200 text-yellow-600' : ''} 
                                                    `}
                                        >
                                                {item[key]}
                                            </span>
                                    ) : key === 'review' ? (
                                        <span className={'flex gap-x-1'}>
                                            <Image src="/star2.svg" alt="Star" width={16} height={16} className="mr-1"/>
                                            {item[key]}
                                        </span>
                                    ) : key === 'productName' ? (
                                        <span className={'flex gap-x-2 font-bold text-black'}>
                                            <Image src="/pant.jpg" alt="Star" width={20} height={20} className="mr-1"/>
                                            {item[key]}
                                        </span>
                                    ):(
                                        item[key]
                                    )}
                                </td>
                            ))}
                            {admin &&
                                <td className="py-3 px-6 text-left">
                                    <span className={'flex gap-x-2'}>
                                        <Image src="/eye.svg" alt="Star" width={16} height={16} className="mr-1"/>
                                        <Image src="/edit.svg" alt="Star" width={16} height={16} className="mr-1"/>
                                        <Image src="/delete.svg" alt="Star" width={16} height={16} className="mr-1"/>
                                    </span>
                                </td>
                            }
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
