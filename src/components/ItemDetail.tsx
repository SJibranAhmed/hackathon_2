"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { CircleCheck, Circle, Plus, Minus } from "lucide-react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Button } from "@/components/ui/button";

const ItemDetail = () => {
  const pathname = usePathname();
  const images = ["/item1.jpg", "/item1.jpg", "/item1.jpg"];
  const colors = [
    { color: "red", selected: true },
    { color: "blue", selected: false },
    { color: "pink", selected: false },
  ];
  const sizes = ["Small", "Medium", "Large", "X-Large"];

  return (
    <main className="w-full flex flex-col px-24 max-md:px-2 h-[100vh] max-md:h-full">
      {/* Breadcrumbs */}
      <p className="text-black/60">
        Home /
        <span className="ml-2 text-black font-bold">
          {pathname.replace(/\//g, " ").trim()}
        </span>
      </p>

      {/* Main Content */}
      <div className="content flex max-md:flex-col justify-center gap-3 h-[80vh] max-md:h-full mt-5 w-full">
        {/* Image Gallery */}
        <div className="leftSide w-[50%] max-md:w-full h-full flex flex-col gap-1 justify-center">
          <div className="gallery flex max-md:flex-col flex-row gap-1 h-[500px] w-full p-2">
            {/* Thumbnails */}
            <div className="thumbnails flex flex-col max-md:flex-row max-md:order-2 gap-1 w-[220px] max-md:w-full">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-full relative h-[200px] max-md:h-[120px] rounded-xl"
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    objectFit="cover"
                    fill
                    className={`rounded-xl border ${
                      index === 0 ? "border-[3px] border-black" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Main Image */}
            <div className="main-image relative h-full w-[60%] max-md:w-full">
              <Image
                src="/item1.jpg"
                alt="Main product image"
                objectFit="cover"
                fill
                className="rounded-xl border-2"
              />
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="details w-[50%] max-md:w-full h-full">
          <div className="p-2">
            {/* Title and Rating */}
            <h3 className="text-4xl font-extrabold uppercase">
              One Line Graphic T-Shirt
            </h3>
            <div className="rating flex gap-3 text-orange-300 mt-2">
              <BsStarFill size={25} />
              <BsStarFill size={25} />
              <BsStarFill size={25} />
              <BsStarFill size={25} />
              <BsStarHalf size={25} />
            </div>

            {/* Price and Description */}
            <div className="price-description font-medium text-[14px] border-b-2 pb-8 mt-2">
              <span className="text-3xl">$200</span>
              <span className="ml-3 text-3xl line-through text-slate-400">
                $140
              </span>
              <p className="text-[18px] mt-3 pr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                amet distinctio placeat nesciunt, in commodi.
              </p>
            </div>

            {/* Select Colors */}
            <div className="colors my-2 border-b-2 pb-4">
              <h1 className="text-2xl">Select Colors</h1>
              <div className="flex mt-4 gap-3">
                {colors.map((color, index) => (
                  <div key={index}>
                    {color.selected ? (
                      <CircleCheck size={50} color={color.color} />
                    ) : (
                      <Circle size={50} color={color.color} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Choose Size */}
            <div className="sizes my-2 border-b-2 pb-4">
              <h1 className="text-2xl">Choose Size</h1>
              <div className="flex max-md:flex-col mt-4 gap-3">
                {sizes.map((size, index) => (
                  <Button
                    key={index}
                    variant={index === 2 ? undefined : "secondary"}
                    className="px-8 rounded-full"
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="add-to-cart my-2 border-b-2 pb-4">
              <h1 className="text-2xl">Quantity</h1>
              <div className="flex max-md:flex-col mt-4 gap-10">
                <div className="flex gap-6 justify-center items-center rounded-full px-6 bg-blue-200">
                  <Plus />
                  <span>1</span>
                  <Minus />
                </div>
                <Button className="px-20 rounded-full">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetail;
