import {
  ArrowLeft,
  ArrowRight,
  CircleCheck,
} from "lucide-react";
import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Customer = () => {
  return (
    <main className="w-[80%] h-[70vh] flex flex-col mt-8">
      <div className="flashSale w-full my-9">
        <header className="flex items-center justify-between">
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase">
            our happy cutomers
          </h1>

          <div className="backAndForth flex gap-3">
            <span className="flex items-center justify-center  cursor-pointer rounded-full w-[40px] h-[40px] ">
              <ArrowLeft />
            </span>
            <span className="flex items-center justify-center cursor-pointer  rounded-full w-[40px] h-[40px] ">
              <ArrowRight />
            </span>
          </div>
        </header>
      </div>
      <div className="comment flex gap-5 justify-center w-full h-[270px]">
        <div className="person w-[400px] h-full bg-white rounded-xl p-4 md:p-8 border-2">
          <div className="rate flex text-orange-300 gap-3 text-[18px]">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <h1 className="text-2xl flex items-center mt-3 gap-2 font-bold">
            Sheikh Jibran{" "}
            <CircleCheck className="bg-green-300 text-white rounded-full" />
          </h1>
          <p className="mt-3 text-[14px] text-black/60  md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ad cupiditate sequi in voluptatibus recusandae
            quisquam, delectus distinctio quo ex beatae reprehenderit! Sapiente
          </p>
        </div>
        <div className="person w-[400px]  hidden md:block h-full bg-white rounded-xl p-8 border-2">
          <div className="rate flex text-orange-300 gap-3 text-[18px]">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <h1 className="text-2xl flex items-center mt-3 gap-2 font-bold">
            Sheikh Jibran{" "}
            <CircleCheck className="bg-green-300 text-white rounded-full" />
          </h1>
          <p className="mt-3 text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ad cupiditate sequi in voluptatibus recusandae
            quisquam, delectus distinctio quo ex beatae reprehenderit! Sapiente
          </p>
        </div>
        <div className="person w-[400px] hidden md:block h-full bg-white rounded-xl p-8 border-2">
          <div className="rate flex text-orange-300 gap-3 text-[18px]">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarHalf />
          </div>
          <h1 className="text-2xl flex items-center mt-3 gap-2 font-bold">
            Sheikh Jibran{" "}
            <CircleCheck className="bg-green-300 text-white rounded-full" />
          </h1>
          <p className="mt-3 text-black/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ad cupiditate sequi in voluptatibus recusandae
            quisquam, delectus distinctio quo ex beatae reprehenderit! Sapiente
          </p>
        </div>
      </div>
    </main>
  );
};

export default Customer;
