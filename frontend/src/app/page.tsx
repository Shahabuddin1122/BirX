"use client"
import Image from "next/image";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/productCard";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
      <>
          <Navbar/>
          <div className={"pt-10 bg-stone-100 md:mx-24 md:flex"}>
              <div className={"sm:w-full md:w-1/2 px-5 md:flex md:flex-col md:justify-center lg:gap-y-4"}>
                  <h1 className={"text-4xl font-extrabold"}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                  <p className={"text-xl py-3"}>Browse through our diverse range of meticulously crafted garments,
                      designed
                      to bring out your individuality and cater to your sense of style.</p>
                  <Button text={"Shop now"} option={true} onclick={() => router.push('/products')}/>
                  <div className={"flex justify-around py-3"}>
                      <div>
                          <h1 className={"text-lg font-bold"}>1000+</h1>
                          <p className={"text-sm"}>High-Quality Products</p>
                      </div>
                      <div>
                          <h1 className={"text-lg font-bold"}>200+</h1>
                          <p className={"text-sm"}>Happy Customers</p>
                      </div>
                  </div>
              </div>
              <div className={"relative md:w-1/2"}>
                  <Image src={"/hero_image.png"} alt={"hero image"} width={200} height={500} layout={'responsive'} objectFit={'cover'}/>
                  <Image src={"/star.svg"} alt={"star"} width={60} height={60} className={"absolute top-10 right-5"}/>
                  <Image src={"/star.svg"} alt={"star"} width={30} height={30} className={"absolute bottom-52 left-5 lg:bottom-64"}/>
              </div>
          </div>

          <div className={"md:mx-24 p-5 bg-black text-white flex flex-wrap justify-center gap-x-10 gap-y-2"}>
              <p className={"font-serif text-2xl"}>VERSACE</p>
              <p className={"font-mono text-2xl"}>ZARA</p>
              <p className={"font-sans text-2xl"}>GUCCI</p>
              <p className={"font-sans font-bold text-2xl"}>PRADA</p>
              <p className={"font-mono text-2xl font-extralight"}>Calvin Klein</p>
          </div>
          <div className="px-5 md:mx-24">
              <h1 className="text-2xl font-bold text-center py-5 lg:text-4xl">NEW ARRIVALS</h1>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 pb-5">
                  <ProductCard image="/shirt.png" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                               onClick={() => router.push('/product/1')}/>
                  <ProductCard image="/shirt.png" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                               onClick={() => router.push('/product/1')}/>
                  <div className="hidden md:block">
                      <ProductCard image="/shirt.png" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                                   onClick={() => router.push('/product/1')}/>
                  </div>
                  <div className="hidden lg:block">
                      <ProductCard image="/shirt.png" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                                   onClick={() => router.push('/product/1')}/>
                  </div>
              </div>

              <Button text="View All" option={false} onclick={() => router.push('/products')}/>
          </div>


          <div className={"px-5 md:mx-24"}>
              <h1 className={"text-2xl font-bold text-center py-5 lg:text-4xl"}>TOP SELLING</h1>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 pb-5">
                  <ProductCard image="/shirt.png" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                               onClick={() => router.push('/product/1')}/>
                  <ProductCard image="/pant.jpg" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                               onClick={() => router.push('/product/1')}/>
                  <div className="hidden md:block">
                      <ProductCard image="/pant.jpg" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                                   onClick={() => router.push('/product/1')}/>
                  </div>
                  <div className="hidden lg:block">
                      <ProductCard image="/shirt.png" name="T-SHIRT WITH TAPE DETAILS" price="1020"
                                   onClick={() => router.push('/product/1')}/>
                  </div>
              </div>
              <Button text={"View All"} option={false} onclick={() => router.push('/products')}/>
          </div>
          <div className={"sm:mx-5 md:mx-24 bg-gray-100 rounded-xl my-10 py-5"}>
              <h1 className={"text-4xl font-extrabold text-center py-5 lg:text-4xl"}>BROWSE BY <br/>DRESS STYLE</h1>
              <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 mx-4"}>
                  <div className={'lg:h-[200px] bg-white rounded-xl py-20 relative md:col-span-2'}>
                      <Image src={'/casual.png'} alt={'casual'} objectFit={'cover'} layout={'fill'}/>
                      <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Casual</h2>
                  </div>
                  <div className={'lg:h-[200px] bg-white rounded-xl py-20 relative'}>
                      <Image src={'/formal.png'} alt={'casual'} objectFit={'cover'} layout={'fill'}/>
                      <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Formal</h2>
                  </div>
                  <div className={'lg:h-[200px] bg-white rounded-xl py-20 relative'}>
                      <Image src={'/party.png'} alt={'casual'} layout={'fill'}/>
                      <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Party</h2>
                  </div>
                  <div className={'lg:h-[200px] bg-white rounded-xl py-20 relative md:col-span-2'}>
                      <Image src={'/gym.png'} alt={'casual'} layout={'fill'}/>
                      <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Gym</h2>
                  </div>
              </div>
          </div>
          <Footer/>

      </>
  );
}
