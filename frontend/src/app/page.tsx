import Image from "next/image";
import Navbar from "@/components/navbar";
import ProductCard from "@/components/productCard";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

export default function Home() {
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
              <div className={"flex flex-wrap gap-x-6"}>
                  <ProductCard/>
                  <ProductCard/>
              </div>
              <Button text={"View All"} option={false}/>
          </div>
          <div className={"px-5"}>
              <h1 className={"text-2xl font-bold text-center py-5"}>TOP SELLING</h1>
              <div className={"flex flex-wrap gap-x-6"}>
                  <ProductCard/>
                  <ProductCard/>
              </div>
              <Button text={"View All"} option={false}/>
          </div>
          <Footer/>

      </>
  );
}
