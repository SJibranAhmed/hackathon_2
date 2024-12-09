"use client";
import React from "react";
import Link from "next/link";
import {
  ChevronDown,
  CircleUserRound,
  Menu,
  Search,
  ShoppingCart,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"; // Import Sheet and Button from ShadCN

const Navbar = () => {
  return (
    <div className="relative z-40 bg-white container border-b-2"><Sheet>
      {/* Heading for the promotional offer */}
      <div className="heading flex justify-center text-[14px] md:text-[18px] px-10 items-center bg-slate-950 text-center text-white/80 py-2">
        <div className="">
          Sign up and get 20% off your first order.{" "}
          <Link
            href=""
            className="font-medium underline text-white capitalize underline-offset-4"
          >
            Sign up now
          </Link>
        </div>
        <span className="hidden md:block absolute right-20 cursor-pointer">X</span>
      </div>

      {/* Navbar */}
      <nav className="px-2 md:px-10 py-4 md:py-8">
        <div className="flex items-center justify-between md:px-[70px]">
          {/* Hamburger Menu */}
          <SheetTrigger>
            <div
              className="md:hidden cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <Menu />
            </div>
          </SheetTrigger>
          <h1 className="font-extrabold text-3xl uppercase -ml-4 md:-ml-0">
            <Link href={"/"}>Shop.co</Link>
          </h1>
          <div className="navItem hidden md:flex items-center gap-8">
            <ul className="flex gap-8">
              <li className="flex capitalize">
                <Link href="/Shop" className="flex items-center">
                  Shop
                  <ChevronDown />
                </Link>
              </li>
              <li>
                <Link href="/" className="py-2">
                  On Sale
                </Link>
              </li>
              <li>
                <Link href="" className="py-2 after:w-full rounded-md capitalize transition-all duration-300">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/Casual" className="py-2 after:w-full rounded-md capitalize transition-all duration-300">
                  Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Search and Cart/User Icons */}
          <div className="input flex items-center gap-3">
            <div className="flex items-center text-[15px] md:bg-slate-100 md:rounded-full ">
              <Search className="md:w-[50px] cursor-pointer" />
              <input
                type="search"
                placeholder="What are you looking for?"
                className="outline-none p-3 w-[600px] h-[50px] rounded-sm bg-transparent md:block hidden"
              />
            </div>
            <div className="flex md:ml-8 gap-4">
              <Link href={'/Cart'}>
                <ShoppingCart className="cursor-pointer" />
              </Link>
              <CircleUserRound className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - ShadCN Sheet */}
      
        <SheetHeader>
          <SheetTitle className="text-xl font-bold"></SheetTitle>
        </SheetHeader>
        <SheetContent side={"left"}>
          <ul className="flex flex-col gap-6 p-4">
            <li>
              <Link href="/Shop" className="text-lg">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/" className="text-lg">
                On Sale
              </Link>
            </li>
            <li>
              <Link href="" className="text-lg">
                New Arrivals
              </Link>
            </li>
            <li>
              <Link href="/Casual" className="text-lg">
                Brands
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
