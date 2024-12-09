import { Slider } from "@/components/ui/slider";
import { ChevronRight, ChevronUp, Circle } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { FiSliders } from "react-icons/fi";

const CustomLeft = () => {
  return (
    <main className="px-4 py-5 rounded-xl md:px-6">
      <div className="filter">
        {/* Header */}
        <div className="flex justify-between px-4 md:px-5 border-b-2 pb-5">
          <h1 className="font-bold text-xl md:text-2xl">Filters</h1>
          <FiSliders size={20} className="text-black/40 md:size-[25px]" />
        </div>

        {/* Categories */}
        <div className="border-b-2">
          {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
            (category, index) => (
              <div
                key={index}
                className="flex justify-between px-4 md:px-5 mt-5"
              >
                <h1 className="text-[14px] md:text-[16px] tracking-wide text-black/60">
                  {category}
                </h1>
                <ChevronRight />
              </div>
            )
          )}
        </div>

        {/* Price Slider */}
        <div className="border-b-2 pb-8">
          <div className="flex justify-between px-4 md:px-5 py-5">
            <h1 className="font-bold text-xl md:text-2xl">Price</h1>
            <ChevronUp />
          </div>
          <Slider defaultValue={[33]} max={100} step={1} />
          <div className="font-bold flex justify-between w-[60%] md:w-[40%]">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>

        {/* Colors */}
        <div className="border-b-2 pb-7">
          <div className="flex justify-between px-4 md:px-5 py-5">
            <h1 className="font-bold text-xl md:text-2xl">Colors</h1>
            <ChevronUp />
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {[
              "red",
              "blue",
              "green",
              "purple",
              "pink",
              "gray",
              "yellow",
              "orange",
              "black",
              "brown",
            ].map((color, index) => (
              <Circle key={index} color={color} size={40} />
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="border-b-2 pb-8">
  <div className="flex justify-between px-4 md:px-5 py-5">
    <h1 className="font-bold text-xl md:text-2xl">Size</h1>
    <ChevronUp />
  </div>
  <div className="grid grid-cols-2 gap-3 px-4">
    {[
      "XX-Small",
      "X-Small",
      "Small",
      "Medium",
      "Large",
      "X-Large",
      "XX-Large",
      "3X-Large",
      "4X-Large",
    ].map((size, index) => (
      <Button
        key={index}
        className={`py-3 text-sm rounded-full ${size == "Small"?'bg-black hover:bg-black/80 text-white':''}`}
       variant={'secondary'} 
      >
        {size}
        
      </Button>
    ))}
  </div>
</div>


        {/* Dress Styles */}
        <div>
          <div className="flex justify-between px-4 md:px-5 mt-5">
            <h1 className="font-bold text-xl md:text-2xl">Dress Style</h1>
            <ChevronUp />
          </div>
          {["Casual", "Formal", "Party", "Gym"].map((style, index) => (
            <div key={index} className="flex justify-between px-4 md:px-5 mt-5">
              <h1 className="text-[14px] md:text-[16px] tracking-wide text-black/60">
                {style}
              </h1>
              <ChevronRight />
            </div>
          ))}
          <div className="btn text-center my-4">
            <Button className="py-5 md:py-7 rounded-full w-[90%] md:w-[80%]">
              Apply Filter
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CustomLeft;
