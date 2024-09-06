import Image from "next/image";

const Footer = () => {
return (
    <>
        <div className={"px-5 md:px-0 md:mx-24"}>
            <Image src={"/logo.png"} alt={"logo"} width={50} height={50}/>
            <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            <div className={"py-3"}>
                <div className={"flex gap-x-5"}>
                    <Image src={"/facebook.svg"} alt={"facebook"} width={30} height={30} className={"rounded-full"}/>
                    <Image src={"/instagram.svg"} alt={"instagram"} width={30} height={30} className={"rounded-full"}/>
                    <Image src={"/tiktok.svg"} alt={"tiktok"} width={20} height={20} className={"rounded-full"}/>
                </div>
                <div className={"flex justify-between gap-x-16 py-8"}>
                    <div className={"flex flex-col w-full md:flex-row md:justify-between gap-y-5"}>
                        <div className={"flex flex-col gap-y-2"}>
                            <h1 className={"font-semibold text-md tracking-wider"}>COMPANY</h1>
                            <p className={"text-gray-500 text-sm"}>About</p>
                            <p className={"text-gray-500 text-sm"}>Features</p>
                            <p className={"text-gray-500 text-sm"}>Works</p>
                            <p className={"text-gray-500 text-sm"}>Career</p>
                        </div>
                        <div className={"flex flex-col gap-y-2 mr-5"}>
                            <h1 className={"font-semibold text-md tracking-wider"}>HELP</h1>
                            <p className={"text-gray-500 text-sm"}>Customer Support</p>
                            <p className={"text-gray-500 text-sm"}>Delivery Details</p>
                            <p className={"text-gray-500 text-sm"}>Terms & Conditions</p>
                            <p className={"text-gray-500 text-sm"}>Privacy Policy</p>
                        </div>
                    </div>
                    <div className={"flex flex-col w-full md:flex-row md:justify-around gap-y-5"}>
                        <div className={"flex flex-col gap-y-2"}>
                            <h1 className={"font-semibold text-md tracking-wider"}>FAQ</h1>
                            <p className={"text-gray-500 text-sm"}>Account</p>
                            <p className={"text-gray-500 text-sm"}>Manage Deliveries</p>
                            <p className={"text-gray-500 text-sm"}>Orders</p>
                            <p className={"text-gray-500 text-sm"}>Payment</p>
                        </div>
                        <div className={"flex flex-col gap-y-2 mr-5"}>
                            <h1 className={"font-semibold text-md tracking-wider"}>RESOURCES</h1>
                            <p className={"text-gray-500 text-sm"}>Free eBook</p>
                            <p className={"text-gray-500 text-sm"}>Development tutorial</p>
                            <p className={"text-gray-500 text-sm"}>How to - Blog</p>
                            <p className={"text-gray-500 text-sm"}>Youtube Playlist</p>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center flex-col mt-3"}>
                    <p>BirX &copy; 2010-2024, All Right Reserved</p>
                    <div className={"w-3/5 h-[50px] relative"}>
                        <Image src={"/payment.png"} alt={"payment"} fill objectFit={"contain"}/>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}
export default Footer;