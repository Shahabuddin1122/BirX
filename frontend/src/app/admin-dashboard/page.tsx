"use client"
import AdminNavbar from "@/components/admin-navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/info-card";
import Dropdown from "@/components/dropdown";
import PieChart from "@/components/pie-chart";
import BarChart from "@/components/bar-chart";

const options = [
    {label: 'week'},
    {label: 'month'},
]

const Page = () => {
    return (
        <>
            <AdminNavbar/>
            <div className={'md:px-0 md:mx-24 px-5 pb-5'}>
                <div className={'flex flex-col gap-4'}>
                    <InfoCard/>
                    <InfoCard/>
                    <InfoCard/>
                </div>
                <div className={'p-2 border rounded-xl bg-slate-50 my-4'}>
                    <h1 className={'font-bold text-2xl'}>Sale by category</h1>
                    <div className={'flex justify-between py-4'}>
                        <div>
                            <p>Total Sale</p>
                            <h1 className={'font-bold text-xl'}>৳1000</h1>
                        </div>
                        <Dropdown options={options} name={'category'}/>
                    </div>
                    <PieChart/>
                </div>
                <div className={'p-2 border rounded-xl bg-slate-50 my-4'}>
                    <h1 className={'font-bold text-2xl'}>Earnings revenue</h1>
                    <div className={'flex justify-between py-4'}>
                        <div className={'flex gap-x-20'}>
                            <div>
                                <p>Revenue</p>
                                <h1 className={'font-bold text-xl'}>৳1000</h1>
                            </div>
                            <div>
                                <p>Order</p>
                                <h1 className={'font-bold text-xl'}>৳1000</h1>
                            </div>
                        </div>
                        <Dropdown options={options} name={'category'}/>
                    </div>
                    <BarChart/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Page;