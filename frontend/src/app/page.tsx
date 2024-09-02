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
          <div className={"px-5 pt-10 bg-stone-100"}>
              <h1 className={"text-4xl font-extrabold"}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
              <p className={"text-xl py-3"}>Browse through our diverse range of meticulously crafted garments, designed
                  to bring out your individuality and cater to your sense of style.</p>
              <Button text={"Shop now"} option={true}/>
              <div className={"flex justify-around py-3"}>
                  <div>
                      <h1 className={"text-lg font-bold"}>1000+</h1>
                      <p className={"text-sm"}>International Brands</p>
                  </div>
                  <div>
                      <h1 className={"text-lg font-bold"}>200+</h1>
                      <p className={"text-sm"}>Happy Customers</p>
                  </div>
              </div>
          </div>
          <div className={"relative"}>
              <img src={"/hero_image.png"} alt={"hero image"} className={"w-full"}/>
              <Image src={"/star.svg"} alt={"star"} width={60} height={60} className={"absolute top-10 right-5"}/>
              <Image src={"/star.svg"} alt={"star"} width={30} height={30} className={"absolute bottom-52 left-5"}/>
          </div>
          <div className={"w-full p-5 bg-black text-white flex flex-wrap justify-center gap-x-10 gap-y-2"}>
              <p className={"font-serif text-2xl"}>VERSACE</p>
              <p className={"font-mono text-2xl"}>ZARA</p>
              <p className={"font-sans text-2xl"}>GUCCI</p>
              <p className={"font-sans font-bold text-2xl"}>PRADA</p>
              <p className={"font-mono text-2xl font-extralight"}>Calvin Klein</p>
          </div>
          <div className={"px-5"}>
              <h1 className={"text-2xl font-bold text-center py-5"}>NEW ARRIVALS</h1>
              <div className={"flex justify-between gap-x-6 pb-5"}>
                  <ProductCard onClick={()=> router.push('/product/1')}/>
                  <ProductCard onClick={()=> router.push('/product/1')}/>
              </div>
              <Button text={"View All"} option={false} onclick={()=> router.push('/products')}/>
          </div>
          <div className={"px-5"}>
              <h1 className={"text-2xl font-bold text-center py-5"}>TOP SELLING</h1>
              <div className={"flex justify-between gap-x-6 pb-5"}>
                  <ProductCard onClick={()=> router.push('/product/1')}/>
                  <ProductCard onClick={()=> router.push('/product/1')}/>
              </div>
              <Button text={"View All"} option={false} onclick={()=> router.push('/products')}/>
          </div>
          <div className={"mx-5 bg-gray-100 rounded-xl my-10 py-5"}>
              <h1 className={"text-4xl font-extrabold text-center py-5"}>BROWSE BY <br/>DRESS STYLE</h1>
              <div className={"w-4/5 h-[200px] bg-white mx-auto rounded-xl relative my-4"}>
                  <Image src={"/casual.png"} alt={"casual"} fill objectFit={"cover"} className={"rounded-xl"}/>
                  <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Casual</h2>
              </div>
              <div className={"w-4/5 h-[200px] bg-white mx-auto rounded-xl relative my-4"}>
                  <Image src={"/formal.png"} alt={"formal"} fill objectFit={"cover"} className={"rounded-xl"}/>
                  <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Formal</h2>
              </div>
              <div className={"w-4/5 h-[200px] bg-white mx-auto rounded-xl relative my-4"}>
                  <Image src={"/party.png"} alt={"party"} fill objectFit={"cover"} className={"rounded-xl"}/>
                  <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Party</h2>
              </div>
              <div className={"w-4/5 h-[200px] bg-white mx-auto rounded-xl relative my-4"}>
                  <Image src={"/gym.png"} alt={"gym"} fill objectFit={"cover"} className={"rounded-xl"}/>
                  <h2 className={"absolute top-5 left-4 font-bold text-xl"}>Gym</h2>
              </div>
          </div>
          <Footer/>

      </>
  );
}
