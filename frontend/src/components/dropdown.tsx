"use client"
import React from 'react';

interface Option {
    label: string;
}

interface DropdownProps {
    options: Option[],
    name: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, name }) => {

    return (
        <div>
            <select className="w-full py-3 border-2 rounded-lg px-2" required name={name}
                    >
                <option value="" disabled selected>Select</option>
                {options.map((division) => (
                    <option key={division.label} value={division.label}>
                        {division.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
