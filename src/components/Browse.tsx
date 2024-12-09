import React from "react";
import Image from "next/image";
const Browse = () => {
  return (
    <main className="mt-10 px-3 md:px-20 py-10 ">
      <section className="flex flex-col  items-center bg-slate-200 rounded-2xl md:rounded-[50px] h-full md:h-[100vh]">
        <h1 className="text-4xl w-[250px] md:w-auto md:text-5xl font-extrabold uppercase my-10 mt-16">
          browse by dress style
        </h1>
        <div className="w-full items-center flex flex-col p-3">
          <div className="row1 flex md:flex-row flex-col gap-3   md:gap-10 p-2 ">
            <div className="item1 relative w-[300px] bg-red-400 md:w-[400px] h-[240px]  rounded-3xl">
              <Image src="/man1.jpg" alt="" fill className="  rounded-3xl" />
              <h1 className="relative text-4xl font-bold top-8 left-8">
               Casual
              </h1>
            </div>
            <div className="item1 relative w-[300px] bg-red-400 md:w-[700px] h-[240px] rounded-3xl">
              <Image src="/casual.jpg" alt="" fill className="  rounded-3xl" />
              <h1 className="relative text-4xl font-bold top-8 left-8">
                Formal
              </h1>
            </div>
          </div>
          <div className="row1 flex md:flex-row flex-col gap-3   md:gap-10 p-2 ">
            <div className="item1 relative w-[300px] bg-red-400 md:w-[700px] h-[240px]  rounded-3xl">
              <Image src="/formal.jpg" alt="" fill className="  rounded-3xl" />
              <h1 className="relative text-4xl font-bold top-8 left-8">
                Party
              </h1>
            </div>
            <div className="item1 relative w-[300px] bg-red-400 md:w-[400px] h-[240px] rounded-3xl">
              <Image src="/gym2.jpg" alt="" fill className="  rounded-3xl" />
              <h1 className="relative text-4xl font-bold top-8 left-8">
                Gym
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Browse;
