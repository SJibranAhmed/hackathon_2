import React from "react";
import { Button } from "./ui/button";

const Content = () => {
  return (
    <main className="relative md:flex  w-[100%] h-[90vh] bg-black/10">
      <div className="content relative px-5 py-10 md:p-0 md:left-20 md:top-20 md:w-[650px] md:order-2 z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase mb-5">
          Find Clothes That Matches Your Style
        </h1>
        <p className="text-[14px] md:text-[16px] text-gray-600">
          Magnam, expedita! Soluta corrupti fuga saepe natus rem molestias
          ducimus, voluptates exercitationem cupiditate aliquid unde sunt animi
          at, laborum excepturi.
        </p>
        <Button className="mt-10 py-4 px-10 w-full md:w-auto text-[16px] md:text-[18px] rounded-full">
          Shop Now
        </Button>
        <div className="performance mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="item flex flex-col justify-center items-center">
              <h1 className="font-bold text-2xl md:text-3xl">200+</h1>
              <p className="text-black/40 text-[12px] md:text-[14px]">
                International Brands
              </p>
            </div>
            <div className="item flex flex-col justify-center items-center border-l-2 border-gray-200">
              <h1 className="font-bold text-2xl md:text-3xl">2,000+</h1>
              <p className="text-black/40 text-[12px] md:text-[14px]">
                High-Quality Products
              </p>
            </div>
            <div className="item flex flex-col justify-center items-center col-span-2 md:col-span-1">
              <h1 className="font-bold text-2xl md:text-3xl">30,000+</h1>
              <p className="text-black/40 text-[12px] md:text-[14px]">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;

/*import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Content = () => {
  return (
    <main className="md:flex md:items-center md:relative w-auto md:w-full h-[90vh]">
      
      <div className="md:w-full md:h-full md:order-1 relative">
        <Image
          src="/bg.jpg"
          alt="Man"
          objectFit="cover"
          fill
          quality={100}
          className="w-full h-full"
        />
      </div>
      
      <div className="content relative px-5 py-10 md:p-0 md:left-20 md:top-20 w-full md:w-[650px] md:order-2">
        <h1 className="text-4xl md:text-7xl font-extrabold uppercase mb-5 ">
          find clothes that matches your style
        </h1>
        <p>
          Magnam, expedita! Soluta corrupti fuga saepe natus rem molestias
          ducimus, voluptates exercitationem cupiditate aliquid unde sunt animi
          at, laborum excepturi.
        </p>
        <Button className="mt-10 py-7 w-full md:w-auto text-[18px] rounded-full">
          Shop Now
        </Button>
      </div>
    </main>
  );
};

export default Content; */
