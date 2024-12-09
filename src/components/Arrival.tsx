import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
const Arrival = () => {
  const items = [
    {
      id: 1,
      name: "T-shirt and Tape Detail",
      image: "item1.jpg",
      oldPrice: 499.99,
      newPrice: 449.99,
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      image: "item2.jpg",
      oldPrice: 499.99,
      newPrice: 449.99,
    },
    {
      id: 3,
      name: "Checkered Shirt",
      image: "item3.webp",
      oldPrice: 499.99,
      newPrice: 449.99,
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      image: "item4.avif",
      oldPrice: 499.99,
      newPrice: 449.99,
    },
  ];
  return (
    <main className=" flex md:gap-4 justify-center">
      <div className="items[0] w-full md:w-[350px] border h-[350px] md:h-[400px] relative flex flex-col justify-between p-2 rounded-lg">
        <div className="relative w-[250px] md:w-[330px] h-[250px] md:h-[250px]">
          <Image
            src={`/${items[0].image}`}
            alt={items[0].name}
            fill
            className=" w-[400px] h-[200px] object-cover shadow-lg rounded-xl mb-5"
          />
        </div>
        <div className="p-2">
          <h3 className="text-2xl font-semibold">{items[0].name}</h3>
          <div className="rate flex gap-1 text-[14px] text-orange-300 mt-2">
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <span className="text-slate-400">(88)</span>
          </div>
          <div className="font-medium text-[14px] mt-2">
            <span className="text-2xl">${items[0].newPrice}</span>
            <span className="ml-3 line-through text-slate-400">$140</span>
          </div>
        </div>
      </div>
      <div className="items[0] w-full md:w-[350px] border h-[350px] md:h-[400px] relative hidden md:flex flex-col justify-between p-2 rounded-lg">
        <div className="relative w-[250px] md:w-[330px] h-[250px] md:h-[250px]">
          <Image
            src={`/${items[1].image}`}
            alt={items[1].name}
            fill
            className=" w-[400px] h-[200px] object-cover shadow-lg rounded-xl mb-5"
          />
        </div>
        <div className="p-2">
          <h3 className="text-2xl font-semibold">{items[1].name}</h3>
          <div className="rate flex gap-1 text-[14px] text-orange-300 mt-2">
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <span className="text-slate-400">(88)</span>
          </div>
          <div className="font-medium text-[14px] mt-2">
            <span className="text-2xl">${items[1].newPrice}</span>
            <span className="ml-3 line-through text-slate-400">$140</span>
          </div>
        </div>
      </div>


      <div className="items[0] w-full md:w-[350px] border h-[350px] md:h-[400px] relative hidden md:flex flex-col justify-between p-2 rounded-lg">
        <div className="relative w-[250px] md:w-[330px] h-[250px] md:h-[250px]">
          <Image
            src={`/${items[2].image}`}
            alt={items[2].name}
            fill
            className=" w-[400px] h-[200px] object-cover shadow-lg rounded-xl mb-5"
          />
        </div>
        <div className="p-2">
          <h3 className="text-2xl font-semibold">{items[2].name}</h3>
          <div className="rate flex gap-1 text-[14px] text-orange-300 mt-2">
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <span className="text-slate-400">(88)</span>
          </div>
          <div className="font-medium text-[14px] mt-2">
            <span className="text-2xl">${items[2].newPrice}</span>
            <span className="ml-3 line-through text-slate-400">$140</span>
          </div>
        </div>
      </div>

      <div className="items[0] w-full md:w-[350px] border h-[350px] md:h-[400px]  relative hidden md:flex flex-col justify-between p-2 rounded-lg">
        <div className="relative w-[250px] md:w-[330px] h-[250px] md:h-[250px]">
          <Image
            src={`/${items[3].image}`}
            alt={items[3].name}
            fill
            className=" w-[400px] h-[200px] object-cover shadow-lg rounded-xl mb-5"
          />
        </div>
        <div className="p-2">
          <h3 className="text-2xl font-semibold">{items[3].name}</h3>
          <div className="rate flex gap-1 text-[14px] text-orange-300 mt-2">
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <StarIcon width={15} />
            <span className="text-slate-400">(88)</span>
          </div>
          <div className="font-medium text-[14px] mt-2">
            <span className="text-2xl">${items[3].newPrice}</span>
            <span className="ml-3 line-through text-slate-400">$140</span>
          </div>
        </div>
      </div>
      
    </main>
  );
};

export default Arrival;
