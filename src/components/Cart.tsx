"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronRight, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { FaTrashCan } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { GoTag } from "react-icons/go";

const Cart = () => {
  const pathname = usePathname();

  // Initialize the cart items with default quantity
  const initialItems = [
    {
      id: 1,
      image: "item1.jpg",
      name: "T-shirt and Tap",
      color: "Black",
      size: "Medium",
      price: 49,
      quantity: 1,
    },
    {
      id: 2,
      image: "item4.avif",
      name: "Sleeve Striped T-shirt",
      color: "Black",
      size: "Large",
      price: 59,
      quantity: 1,
    },
    {
      id: 3,
      image: "item8.avif",
      name: "Fit Men Jeans",
      color: "Blue",
      size: "Small",
      price: 39,
      quantity: 1,
    },
  ];

  // State to manage cart items
  const [items, setItems] = useState(initialItems);

  // Function to handle quantity increase
  const increaseQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to handle quantity decrease
  const decreaseQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to handle item deletion
  const deleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total price of all items
  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate the total price after applying the discount and delivery fee
  const calculateFinalTotal = () => {
    const subtotal = getTotalPrice();
    const discount = subtotal * 0.2; // 20% discount
    const deliveryFee = 5; // Delivery fee

    return subtotal - discount + deliveryFee;
  };

  return (
    <main className="w-full flex flex-col px-6 md:px-24">
      <p className="text-black/60 flex gap-2 text-[15px] md:text-[17px] my-4">
        Home <ChevronRight size={20} className="md:size-[25px]" />
        <span className="ml-1 text-black font-semibold">
          {pathname.replace(/\//g, " ").trim()}
        </span>
      </p>
      <div>
        <h1 className="font-extrabold text-2xl md:text-4xl uppercase my-3">
          Your Cart
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col border-2 w-full rounded-3xl p-4">
            {items.map((data) => (
              <div
                className={`flex justify-between items-center py-3 ${
                  data.id < 3 ? "border-b-2" : ""
                }`}
                key={data.id}
              >
                <div className="flex gap-3 w-full">
                  <div className="relative rounded-xl border-2 w-24 md:w-36 h-24 md:h-36">
                    <Image
                      src={`/${data.image}`}
                      alt={data.name}
                      fill
                      className="rounded-xl"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm md:text-2xl font-semibold">
                      {data.name}
                    </h1>
                    <p className="text-xs md:text-sm">
                      Size:{" "}
                      <span className="font-medium text-black/60">
                        {data.size}
                      </span>
                    </p>
                    <p className="text-xs md:text-sm">
                      Color:{" "}
                      <span className="font-medium text-black/60">
                        {data.color}
                      </span>
                    </p>
                    <h2 className="text-sm md:text-2xl font-bold mt-2 md:mt-5">
                      ${data.price}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-10 max-md:gap-12">
                  {/* Add cursor-pointer to the trash icon */}
                  <FaTrashCan
                    size={20}
                    color="red"
                    onClick={() => deleteItem(data.id)}
                    className="cursor-pointer"
                  />
                  <div className="flex items-center gap-2 px-3 py-2 bg-black/10 rounded-full text-sm md:text-base">
                    {/* Add cursor-pointer to the increase and decrease buttons */}
                    <Minus
                      onClick={() => decreaseQuantity(data.id)}
                      className="cursor-pointer"
                    />
                    <span>{data.quantity}</span>
                    <Plus
                      onClick={() => increaseQuantity(data.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-[70%] border-2 p-4 rounded-3xl">
            <h1 className="text-xl md:text-3xl font-semibold">Order Summary</h1>
            <div className="border-b-2 pb-5">
              <div className="mt-4 md:mt-6">
                <div className="flex justify-between text-sm md:text-2xl">
                  <p className="text-black/50">Subtotal</p>
                  <span className="font-semibold">${getTotalPrice()}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <div className="flex justify-between text-sm md:text-2xl">
                  <p className="text-black/50">Discount (-20%)</p>
                  <span className="font-semibold text-red-500">
                    -${(getTotalPrice() * 0.2).toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="mt-4 md:mt-6">
                <div className="flex justify-between text-sm md:text-2xl">
                  <p className="text-black/50">Delivery Fee</p>
                  <span className="font-semibold">$5</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-6">
              <div className="flex justify-between text-lg md:text-2xl">
                <p className="text-black/50 font-light">Total</p>
                <span className="font-semibold text-xl md:text-3xl">
                  ${calculateFinalTotal().toFixed(2)}
                </span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <div className="flex items-center px-4 bg-black/10 rounded-full w-full h-10">
                <GoTag size={20} className="text-black/60" />
                <Input
                  className="w-full h-full bg-transparent placeholder:text-sm"
                  placeholder="Add promo code"
                />
              </div>
              <Button className="h-10 w-20 rounded-full">Apply</Button>
            </div>
            <div className="bg-black text-white flex items-center justify-center h-12 mt-4 rounded-full">
              Go to Checkout
              <ArrowRight size={20} className="ml-2" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
