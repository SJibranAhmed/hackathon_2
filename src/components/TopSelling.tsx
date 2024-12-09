import React from "react";
import Arrival from "./Arrival";
import { Button } from "./ui/button";
const TopSelling = () => {
  return (
    <main className=" border-b-2 pt-10">
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase my-10 mt-16">
          top selling
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

export default TopSelling;
