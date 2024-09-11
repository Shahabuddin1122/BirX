"use client"
import AdminNavbar from "@/components/admin-navbar";
import Footer from "@/components/Footer";
import InfoCard from "@/components/info-card";
import Dropdown from "@/components/dropdown";
import PieChart from "@/components/pie-chart";
import BarChart from "@/components/bar-chart";
import Table from "@/components/table";

const options = [
    {label: 'week'},
    {label: 'month'},
]
const sampleOrderData = [
    { productName: 'Product A', customerId: 'C001', productId: 'P001', quantity: 2, price: '$20', status: 'Shipped' },
    { productName: 'Product B', customerId: 'C002', productId: 'P002', quantity: 1, price: '$15', status: 'Pending' },
    { productName: 'Product C', customerId: 'C003', productId: 'P003', quantity: 3, price: '$30', status: 'Delivered' },
    { productName: 'Product D', customerId: 'C004', productId: 'P004', quantity: 4, price: '$40', status: 'Cancelled' },
];
const sampleTopProduct = [
    { productName: 'Product A', review: 2.3, price: '$20',},
    { productName: 'Product B', review: 1.9, price: '$15',},
    { productName: 'Product C', review: 5, price: '$30',},
    { productName: 'Product D', review: 4.7, price: '$40',},
];

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
                <div className={'p-2 border rounded-xl bg-slate-50 my-4'}>
                    <h1 className={'font-bold text-2xl'}>Recent orders</h1>
                    <Table data={sampleOrderData}/>
                </div>
                <div className={'p-2 border rounded-xl bg-slate-50 my-4'}>
                    <h1 className={'font-bold text-2xl'}>Top products</h1>
                    <Table data={sampleTopProduct}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}
export default Page;