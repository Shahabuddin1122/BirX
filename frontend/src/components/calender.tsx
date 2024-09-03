"use client"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useState} from "react";
import "./calender.css";
const Calender = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className={"w-full py-1"}>
                <h4 className={"text-lg py-1"}>Preferable delivery date</h4>
                <DatePicker className={"w-full py-2 px-4 border-2 rounded-lg"} selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </>
    )
}
export default Calender;