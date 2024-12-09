import React from "react";
import Image from "next/image";
import Arrival from "./Arrival";
import { Button } from "./ui/button";
const NewArrivals = () => {
  return (
    <main className=" border-b-2 pb-20">
      <div className="relative flex flex-wrap  md:justify-around p-5 md:p-0  gap-2 md:gap-4 justify-items-center bg-black h-[150px] md:h-[120px] py-5 w-full">
        <Image src="/brand1.jpg" alt="Brand 1" width={200} height={100} className="h-[50px] w-[100px] md:w-[250px] md:h-full"/>
        <Image src="/brand2.jpg" alt="Brand 2" width={200} height={100} className="h-[50px] w-[100px] md:w-[250px] md:h-full"/>
        <Image src="/brand5.webp" alt="Brand 5" width={200} height={100} className="h-[50px] w-[100px] md:w-[250px] md:h-full"/>
        <Image src="/brand6.jpg" alt="Brand 6" width={200} height={100} className="h-[50px] w-[100px] md:w-[250px] md:h-full"/>
        <Image src="/brand3.png" alt="Brand 3" width={200} height={100} className="h-[50px] w-[100px] md:w-[250px] md:h-full"/>
      </div>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase my-10 mt-16">
          New Arrivals
        </h1>
        <section>
          <Arrival />
        </section>
        <Button
          className="px-20 py-7 text-[18px] my-10 rounded-full"
          variant={"outline"}
        >
          View All
        </Button>
      </section>
    </main>
  );
};

export default NewArrivals;
