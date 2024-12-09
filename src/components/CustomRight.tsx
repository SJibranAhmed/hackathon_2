import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CustomRight = () => {
  const items = [
    {
      id: 1,
      name: "T-shirt and Tape Detail",
      image: "item1.jpg",
      oldPrice: 529,
      newPrice: 469,
      rating: "3.5",
    },
    {
      id: 2,
      name: "Skinny Fit Jeans",
      image: "item2.jpg",
      oldPrice: 519,
      newPrice: 479,
      rating: "4.0",
      discount: "-" + Math.floor(((519 - 479) / 519) * 100) + "%",
    },
    {
      id: 3,
      name: "Checkered Shirt",
      image: "item3.webp",
      oldPrice: 509,
      newPrice: 489,
      rating: "4.9",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      image: "item4.avif",
      oldPrice: 529,
      newPrice: 499,
      rating: "3.5",
      discount: "-" + Math.floor(((529 - 499) / 529) * 100) + "%",
    },
    {
      id: 5,
      name: "Casual Hoodie",
      image: "item5.webp",
      oldPrice: 599,
      newPrice: 579,
      rating: "2.4",
    },
    {
      id: 6,
      name: "Athletic Shorts",
      image: "item6.webp",
      oldPrice: 399,
      newPrice: 359,
      rating: "4.1",
    },
    {
      id: 7,
      name: "Pullover Sweatshirt",
      image: "item7.jpg",
      oldPrice: 649,
      newPrice: 629,
      rating: "4.2",
      discount: "-" + Math.floor(((649.99 - 629.99) / 649.99) * 100) + "%",
    },
    {
      id: 8,
      name: "Fleece Jacket",
      image: "item8.avif",
      oldPrice: 999,
      newPrice: 949,
      rating: "4.8",
    },
    {
      id: 9,
      name: "Plain White Tee",
      image: "item9.avif",
      oldPrice: 299,
      newPrice: 269,
      rating: "3.4",
      discount: "-" + Math.floor(((299 - 269) / 299) * 100) + "%",
    },
  ];

  return (
    <main className="flex flex-wrap gap-2 justify-between items-center mt-8 border-b-2 pb-5">
      {items.map((data, index) => (
        <div
          className="items[0] w-full md:w-[320px] bg-black/5  h-[350px] md:h-[450px] relative flex flex-col justify-between p-2 rounded-lg"
          key={index}
        >
          <div className="relative w-full md:w-[303px] h-[250px] md:h-[300px]">
            <Image
              src={`/${data.image}`}
              alt={data.name}
              fill
              className=" w-[400px] h-[200px] object-cover shadow-lg rounded-xl mb-5"
            />
          </div>
          <div className="p-2">
            <h3 className="text-[26px] font-semibold">{data.name}</h3>
            <div className="rate flex items-center gap-1 text-[14px] text-orange-300 mt-2">
              {[...Array(Math.round(Number(data.rating)))].map((_, index) => (
                <StarIcon key={index} width={25} />
              ))}

              <span className="text-black ml-2 tracking-wider">
                5/<span className="text-black/60 ">{data.rating}</span>
              </span>
            </div>
            <div className="font-medium flex items-center text-[14px] mt-2">
              {" "}
              <span className="text-2xl font-semibold">${data.newPrice}</span>
              {data.discount ? (
                <>
                  <span className="ml-3 line-through text-[18px] text-black/40 font-semibold">
                    {data.oldPrice}
                  </span>
                  <span className="text-red-600/95 bg-red-200/50 py-[8px] px-4 ml-2 text-[13px] rounded-full">
                    {data.discount}
                  </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="w-full my-5">
        <Pagination>
          <PaginationContent className="flex flex-wrap justify-center gap-2">
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem className="flex gap-2">
              <PaginationLink href="#" size="default" className="text-sm">
                1
              </PaginationLink>
              <PaginationLink href="#" size="default" className="text-sm">
                2
              </PaginationLink>
              <PaginationLink href="#" size="default" className="text-sm">
                3
              </PaginationLink>
              <PaginationEllipsis className="text-sm" />
              <PaginationLink href="#" size="default" className="text-sm">
                8
              </PaginationLink>
              <PaginationLink href="#" size="default" className="text-sm">
                9
              </PaginationLink>
              <PaginationLink href="#" size="default" className="text-sm">
                10
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};

export default CustomRight;
