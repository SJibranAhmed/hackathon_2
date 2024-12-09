import React from "react";
import Arrival from "./Arrival";
import { Button } from "./ui/button";
const YouLike = () => {
  return (
    <main className=" pt-10">
      <section className="flex flex-col justify-center items-center mt-5">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase my-10 mt-16">
          you might also like
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

export default YouLike;
