import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import Subscribe from "./Subscribe";

const Footer = () => {
  return (
    <main>
      <Subscribe />
      <footer className=" flex max-md:flex-col justify-center bg-slate-100 pt-24">
        <div className="DwndApp h-[300px]  w-[20%]  px-12 mt-7 max-md:w-full ">
          <h1 className="text-4xl font-extrabold text-black uppercase tracking-wider my-7">
            Shop.co
          </h1>
          <div>
            <p className="capitalize text-[14px] text-black/60">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, harum.
            </p>
            <div className="icons flex justify-around pr-10 text-2xl mt-6 text-black">
              <FaFacebook
                title="Facebook"
                className="hover:text-white  hover:bg-black rounded-full cursor-pointer"
              />
              <FaWhatsapp
                title="Whatsapp"
                className="hover:text-white hover:bg-black rounded-full cursor-pointer"
              />
              <FaLinkedin
                title="LinkedIn"
                className="hover:text-white hover:bg-black rounded-full cursor-pointer"
              />
              <FaInstagram
                title="Instagram"
                className="hover:text-white hover:bg-black rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className=" flex  text-black/60 gap-3 flex-wrap  justify-around px-10 py-7 max-md:py-0 mb-10 max-md:mb-0">
          <div className="Exl h-[300px] justify-center md:flex-1  px-4 max-md:px-0">
            <h1 className="text-[24px] text-black font-medium tracking-wider my-7 uppercase">
              company
            </h1>
            <div>
              <ul className="flex flex-col gap-3 text-[16px]">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
          </div>
          <div className="Sprt  h-[300px] flex-1 px-4 ">
            <h1 className="text-[24px] text-black font-medium tracking-wider my-7 uppercase">
              help
            </h1>
            <div>
              <ul className="flex flex-col gap-3 text-[16px] capitalize">
                <li>customer suppert</li>
                <li>delivery details</li>
                <li>terms & conditions</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
          <div className="Sprt  h-[300px] flex-1 px-4 ">
            <h1 className="text-[24px] text-black font-medium tracking-wider my-7 uppercase">
              faq
            </h1>
            <div>
              <ul className="flex flex-col gap-3 text-[16px] capitalize">
                <li>account</li>
                <li>manage deliveries</li>
                <li>orders</li>
                <li>Payments</li>
              </ul>
            </div>
          </div>
          <div className="Sprt  h-[300px] flex-1 px-4 ">
            <h1 className="text-[24px] text-black font-medium tracking-wider my-7 uppercase">
              resource
            </h1>
            <div>
              <ul className="flex flex-col gap-3 text-[16px] ">
                <li>Free eBooks</li>
                <li>Development Tutorials</li>
                <li>How to-Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="flex flex-col gap-5 md:flex-row justify-between items-center pb-3 border-t-2 pt-5 bg-slate-100 px-56 max-md:px-2 w-full">
        <div className="reserve text-[14px] md:text-[16px]">
          &copy; Copyright{" "}
          <span className=" italic"> Sheikh Jibran Ahmed </span> All right
          reserved
        </div>
        <div className="payment flex justify-center gap-5 items-center">
          <Image src="/pay1.jpg" alt="" width={50} height={100} />
          <Image src="/pay2.png" alt="" width={50} height={100} />
          <Image src="/pay3.png" alt="" width={50} height={100} />
          <Image src="/pay4.jpg" alt="" width={50} height={100} />
          <Image src="/pay5.png" alt="" width={50} height={100} />
        </div>
      </div>
    </main>
  );
};

export default Footer;
