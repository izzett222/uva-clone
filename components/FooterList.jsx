import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import right from "/public/white-right.svg";
export default function FooterList({ title, links }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t sm:border-none border-t-white text-white font-sans">
      <div className="py-6" onClick={() => setOpen(!open)}>
        <h3 className="flex justify-between font-bold items-center">
          <span>{title}</span>
          <Image src={right} alt="" className={`w-3 h-3 ${ open ? "-rotate-90" : 'rotate-[90deg]'} sm:hidden`} />
        </h3>
      </div>

        <div className={`flex-col ${open ? "flex": "hidden sm:flex"} sm:flex pb-2`}>
          {links.map((el, i) => {
            return (
              <Link href="/" key={i} className="text-sm text-white py-[3px] flex gap-1 items-center">
                <Image src={right} alt="" className="w-3 h-3" />
                {el}
              </Link>
            );
          })}
        </div>
    </div>
  );
}
