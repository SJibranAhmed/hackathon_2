import React from "react";
import { usePathname } from "next/navigation";
import CustomLeft from "./CustomLeft";
import CustomRight from "./CustomRight";
import { ChevronDown, ChevronRight } from "lucide-react";
import { FiSliders } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import {
  Sheet,

  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const CustomItems = () => {
  const pathname = usePathname();
  return (
    <main className="w-full flex flex-col px-4 md:px-24">
      {/* Breadcrumb */}
      <p className="text-black/60 flex gap-2 text-sm md:text-[17px] my-4">
        Home <ChevronRight size={20} className="md:size-[25px]" />
        <span className="ml-1 text-black font-semibold">
          {pathname.replace(/\//g, " ").trim()}
        </span>
      </p>

      {/* Content */}
      <div className="content flex flex-col md:flex-row gap-3 justify-between w-full">
        {/* Left Panel */}
        <div className="left w-full md:w-[25%] h-full border-2 border-black/20 rounded-xl hidden md:block">
          <CustomLeft />
        </div>

        {/* Right Panel */}
        <div className="right w-full md:w-[74%] h-full">
          {/* Heading */}
          <div className="heading flex  max-md:items-center max-md:flex-row justify-between md:pr-10 ">
            <h1 className="font-semibold text-2xl md:text-4xl">Casual</h1>
            <div className="flex items-center max-md:text-[12px] justify-end mt-3 md:mt-0 max-md:hidden">
              <p className="text-black/60 text-sm md:text-base">
                Showing 1-10 of 100 Products &nbsp; Sort by:{" "}
              </p>
              <span className="flex font-medium ml-2 ">
                Most Popular
                <ChevronDown className="ml-2" />
              </span>
            </div>
            <div className="md:hidden flex items-center max-md:text-[12px] justify-end mt-3 md:mt-0">
              <div className="flex font-medium ml-2 "></div>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <FiSliders className="ml-2" size={25} />
                  </Button>
                </SheetTrigger>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                </SheetHeader>
                <SheetContent side={'bottom'} className="w-full h-full">
                  <div className="left w-full md:w-[25%] h-full border-2 border-black/20 rounded-xl">
                    <CustomLeft />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <CustomRight />
        </div>
      </div>
    </main>
  );
};

export default CustomItems;
