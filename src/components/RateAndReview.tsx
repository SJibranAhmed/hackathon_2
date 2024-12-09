import {
  ChevronDown,
  CircleCheck,
  Ellipsis,
  SortAsc,
} from "lucide-react";
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Button } from "./ui/button";

const RateAndReview = () => {
  return (
    <main className="w-[80%] max-md:w-full h-[100vh] max-md:h-full flex flex-col my-8">
      {/* Tabs */}
      <div className="option flex justify-center max-md:flex-col max-md:gap-2 gap-2 mb-3 h-[80px]">
        <div className="flex justify-center border-b-2 items-center w-[400px] max-md:w-full h-full">
          <h1 className="text-2xl max-md:text-lg text-black/35">Product Details</h1>
        </div>
        <div className="flex justify-center border-b-2 border-black items-center w-[400px] max-md:w-full h-full">
          <h1 className="text-2xl max-md:text-lg font-semibold">Rating & Reviews</h1>
        </div>
        <div className="flex justify-center border-b-2 items-center w-[400px] max-md:w-full h-full">
          <h1 className="text-2xl max-md:text-lg text-black/35">FAQs</h1>
        </div>
      </div>

      {/* Header */}
      <div className="flashSale w-full my-9">
        <header className="flex items-center justify-between max-md:flex-col max-md:gap-4">
          <h1 className="text-3xl max-md:text-xl font-bold">
            All Reviews{" "}
            <span className="text-[18px] max-md:text-sm text-black/60 font-medium">
              {"(451)"}
            </span>
          </h1>

          <div className="backAndForth flex gap-3 max-md:w-full max-md:justify-center">
            <span className="flex items-center justify-center bg-slate-200 cursor-pointer rounded-full w-[40px] h-[40px]">
              <SortAsc />
            </span>
            <span className="flex items-center justify-center bg-slate-200 cursor-pointer rounded-full w-[100px] h-[40px]">
              Latest
              <ChevronDown />
            </span>
            <span className="flex items-center justify-center bg-black text-white cursor-pointer rounded-full w-[200px] max-md:w-full h-[40px]">
              Write a Review
            </span>
          </div>
        </header>
      </div>

      {/* Comments Section */}
      <div className="comment flex flex-col gap-5 justify-center w-full max-md:px-2 h-[100vh] max-md:h-full">
        {[...Array(2)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-10 max-md:flex-col max-md:gap-5">
            {[...Array(3)].map((_, colIndex) => (
              <div
                key={colIndex}
                className="person w-[400px] max-md:w-full h-full bg-white rounded-xl p-4 md:p-8 border-2"
              >
                <div className="flex justify-between">
                  <div className="rate flex text-orange-300 gap-3 text-[18px]">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                  </div>
                  <Ellipsis />
                </div>
                <h1 className="text-2xl max-md:text-lg flex items-center mt-3 gap-2 font-bold">
                  Sheikh Jibran{" "}
                  <CircleCheck className="bg-green-300 text-white rounded-full" />
                </h1>
                <p className="mt-3 text-[14px] max-md:text-sm text-black/60 md:text-[16px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus ad cupiditate sequi in voluptatibus recusandae
                  quisquam, delectus distinctio quo ex beatae reprehenderit!
                  Sapiente
                </p>
              </div>
            ))}
          </div>
        ))}

        {/* Load More Button */}
        <div className="w-full text-center">
          <Button
            className="px-20 py-7 max-md:px-10 max-md:py-4 text-[18px] max-md:text-sm my-10 rounded-full"
            variant={"outline"}
          >
            Load More Reviews
          </Button>
        </div>
      </div>
    </main>
  );
};

export default RateAndReview;
