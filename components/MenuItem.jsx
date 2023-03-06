import Image from "next/image";
import black from "/public/black-right.svg";
import white from "/public/white-right.svg";
import Link from "next/link";
import { useState } from "react";
export default function MenuItem({ title, links, href }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex border-b border-b-white">
        <button
          className={`w-10 ${
            open ? "bg-txt" : "bg-white"
          } flex justify-center items-center h-10 border-r-white border-r`}
          onClick={() => setOpen(!open)}
        >
          {open && <Image src={white} className={`rotate-90 w-[18px] h-[18px]`} alt="" />}
          {!open && <Image src={black} className=" w-[18px] h-[18px]" alt="" />}
        </button>
        <div className=" py-[5px] pr-4 text-[14px] leading-[28px]">
          <Link href={href} className="text-txt px-4 flex gap-0.5 items-center font-sans hover:underline underline-offset-2 hover:text-red">
            {title}
          </Link>
        </div>
      </div>
      {open &&
        links.map((el, i) => {
          return (
            <div key={i} className="flex border-b bg-[#E0E0E0] border-b-white">
              <div className="w-10 h-10 border-r border-r-white"></div>
              <div className=" py-[5px] px-4 text-[14px] leading-[28px]">
                <Link
                  href={href}
                  className="text-txt flex gap-0.5 items-center font-sans hover:underline underline-offset-2 hover:text-red"
                >
                  {el}
                </Link>
              </div>
            </div>
          );
        })}
    </>
  );
}
