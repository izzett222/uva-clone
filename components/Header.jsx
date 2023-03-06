import Image from "next/image";
import Wrapper from "./Wrapper";
import logo from "/public/logo.svg";
import logoMd from "/public/logo-md.svg";
import logoSm from "/public/logo-sm.svg";
import search from "/public/search.svg";
import heart from "/public/heart.svg";
import cross from "/public/cross.svg";
import right from "/public/red-right.svg";
import nl from "/public/nl.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const data = [
    "Education",
    "Research",
    "News & Events",
    "About the UvA",
    "Library",
  ];
  const nav = [
    {
      text: "Education",
      link: "/education",
      links: [
        "Bachelors",
        "Masters",
        "Professional development",
        "Summer School",
        "Open programmes",
        "Exchange",
      ],
    },
    {
      text: "Research",
      link: "/research",
      links: ["Research at the UvA", "PhD"],
    },
    {
      text: "News & Events",
      link: "/news",
      links: [
        "News",
        "Events",
        "Press Office",
        "Coronavirus information",
        "Ukraine information and support",
      ],
    },
    {
      text: "About the UvA",
      link: "/about",
      links: [
        "About the University",
        "Alumni",
        "Contact and locations",
        "Organisation",
        "Policy and regulations",
        "Working at the UvA",
      ],
    },
    { text: "Library", link: "/library", links: [] },
  ];
  useEffect(() => {
    const handleScrolled = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };
    document.addEventListener("scroll", handleScrolled);
    return () => document.removeEventListener("scroll", handleScrolled);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white">
      <div
        className={`h-[70px] ${
          !scrolled && "sm:h-[84px]"
        } duration-200 bg-white shadow-menu z-20 relative`}
      >
        <Wrapper>
          <div
            className={`flex h-[70px] ${
              !scrolled && "sm:h-[84px]"
            } justify-between items-center`}
          >
            <div className="lg:flex-1">
              {!scrolled && (
                <Image src={logo} className="hidden lg:block" alt="" />
              )}
              {!scrolled && (
                <Image
                  src={logoMd}
                  className="hidden sm:block lg:hidden h-[38px]"
                  alt=""
                />
              )}
                <Image
                  src={logoSm}
                  className={`${
                    scrolled ? "sm:block" : "sm:hidden"
                  }  h-[52px] w-[34px] translate-y-1`}
                  alt=""
                />
            </div>
            <div className="flex h-[42px] gap-x-3 items-center flex-1 flex-row-reverse lg:flex-row lg:justify-end">
              <form
                action=""
                className="flex order-2 lg:order-[initial] h-full rounded-[2px] items-center font-sans  text-base w-fit lg:flex-1 max-w-[400px] py-2 border border-txt lg:border-[#d6d6d6]"
              >
                <input
                  type="text"
                  className="hidden lg:block indent-2 flex-1 h-full outline-none text-txt placeholder:text-txt placeholder:text-opacity-75"
                  placeholder="Search..."
                />
                <div className="w-10 h-[30px] flex items-center justify-center lg:border-l lg:border-l-[#D6D6D6]">
                  <Image src={search} className="" alt="" />
                </div>
              </form>
              <Link
                href={"/"}
                className="flex items-center gap-[5px] px-2 order-3 lg:order-[initial] group"
              >
                <span className="hidden sm:inline-block group-hover:underline underline-offset-1 font-sans font-semibold leading-[16px] whitespace-nowrap w-max">
                  Compare programmes
                </span>
                <Image src={heart} className="hover:shadow-menu-hover" alt="" />
              </Link>
              <Link
                href={"/"}
                className=" hover:shadow-menu-hover duration-200 flex h-full aspect-square items-center justify-center border border-[#1F1D21] rounded-sm order-1 lg:order-[initial]"
              >
                <Image src={nl} alt="" className="" />
              </Link>
              <button
                className="bg-[#1f1d20] lg:hidden hover:bg-opacity-80 py-2 h-full  -sm:h-auto flex items-center gap-0.6 sm:pl-3 sm:pr-1 rounded-[2px] text-white shadow-[5px] font-sans font-bold"
                onClick={() => setOpen(!open)}
              >
                <span className="hidden sm:inline-block">Menu</span>
                {open && <div className="px-2 sm:px-0"><Image src={cross} className="sm:ml-3.5" alt="" /></div>}
                {!open && (
                  <div className="flex flex-col gap-1 px-2 h-full sm:h-auto justify-center items-center">
                    <div className="h-[1.5px] bg-white w-[24px]"></div>
                    <div className="h-[1.5px] bg-white w-[24px]"></div>
                    <div className="h-[1.5px] bg-white w-[24px]"></div>
                  </div>
                )}
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
      <div
        className={`hidden lg:block shadow-menu bg-[#F5F5F5] ${
          scrolled && "absolute left-0 right-0 -top-[54px]"
        } duration-500 transition-all`}
      >
        <Wrapper>
          <div className={`flex h-[54px]`}>
            {nav.map((el, i) => {
              return (
                <div key={i} className="relative group">
                  <div className="pt-3 peer pb-2 mr-6 xl:mr-12 text-txt text-xl leading-[32px] hover:cursor-pointer hover:text-[#bd0032] hover:border-b-2 hover:border-b-red">
                    {el.text}
                  </div>
                  {!!el.links.length && <div className="bg-[#F5F5F5] px-5 pt-3 pb-4 absolute z-20 bottom-0 translate-y-full -translate-x-5 shadow-hover w-[300px] hidden group-hover:flex font-sans duration-150 delay-150 flex-col">
                    {el.links.map((item, i) => {
                      return (
                        <Link
                          key={i}
                          className="my-1.5 hover:underline hover:text-red underline-offset-[3px]"
                          href={el.link}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>}
                </div>
              );
            })}
          </div>
        </Wrapper>
      </div>
      {open && (
        <div className="absolute lg:hidden bottom-0 translate-y-full inset-x-0 bg-[#d6d6d6] flex flex-col font-sans">
          <div className="flex border-b border-b-white">
            <div className="w-10 h-10"></div>
            <div className=" py-[5px] pr-4 text-[14px] leading-[28px]">
              <span className="text-red flex gap-0.5 items-center font-sans">
                <Image
                  src={right}
                  className="w-4 h-[18px] -translate-y-[1.2px]"
                  alt=""
                />{" "}
                Home
              </span>
            </div>
          </div>
          {nav.map(
            (el, i) =>
              i !== nav.length - 1 && (
                <MenuItem
                  title={el.text}
                  links={el.links}
                  href={el.link}
                  key={i}
                />
              )
          )}
          <div className="flex border-b border-b-white">
            <div className="w-10 h-10 border-r border-r-white"></div>
            <div className=" py-[5px] px-4 text-[14px] leading-[28px]">
              <Link href="/library" className="text-txt flex gap-0.5 items-center font-sans hover:underline underline-offset-2 hover:text-red">
                Library
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
