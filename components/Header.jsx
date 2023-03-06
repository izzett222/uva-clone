import Image from "next/image";
import Wrapper from "./Wrapper";
import logo from "/public/logo.svg";
import logoMd from "/public/logo-md.svg";
import logoSm from "/public/logo-sm.svg";
import search from "/public/search.svg";
import heart from "/public/heart.svg";
import nl from "/public/nl.svg";
import Link from "next/link";

export default function Header() {
    const data = ["Education", "Research", "News & Events", "About the UvA", "Library"]
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white">
      <div className="h-[70px] sm:h-[84px] bg-white shadow-menu z-20 relative">
        <Wrapper>
          <div className="flex h-[70px] sm:h-[84px] justify-between items-center">
            <div className="lg:flex-1">
              <Image src={logo} className="hidden lg:block" alt="" />
              <Image
                src={logoMd}
                className="hidden sm:block lg:hidden h-[38px]"
                alt=""
              />
              <Image src={logoSm} className="sm:hidden h-[52px] w-[34px] translate-y-1" alt="" />
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
              <Link href={"/"} className="flex items-center gap-[5px] px-2 order-3 lg:order-[initial]">
                <span className="hidden sm:inline-block font-sans font-semibold leading-[16px] whitespace-nowrap w-max">
                  Compare programmes
                </span>
                <Image src={heart} alt="" />
              </Link>
              <Link
                href={"/"}
                className="flex h-full aspect-square items-center justify-center border border-[#1F1D21] rounded-sm order-1 lg:order-[initial]"
              >
                <Image src={nl} alt="" />
              </Link>
              <button className="bg-[#1f1d20] lg:hidden hover:bg-opacity-80 py-2 h-full  -sm:h-auto flex items-center gap-0.6 sm:pl-3 sm:pr-1 rounded-[2px] text-white shadow-[5px] font-sans font-bold">
                <span className="hidden sm:inline-block">Menu</span>
                <div className="flex flex-col gap-1 px-2 h-full sm:h-auto justify-center items-center">
                  <div className="h-[1.5px] bg-white w-[24px]"></div>
                  <div className="h-[1.5px] bg-white w-[24px]"></div>
                  <div className="h-[1.5px] bg-white w-[24px]"></div>
                </div>
              </button>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="hidden lg:block shadow-menu bg-[#F5F5F5]">
        <Wrapper>
            <div className="flex h-[54px]">
                {data.map((el, i) => {
                    return <div key={i} className="pt-3 pb-2 mr-12 text-txt text-xl leading-[32px] hover:cursor-pointer hover:text-[#bd0032] hover:underline">{el}</div>
                })}
            </div>
        </Wrapper>
      </div>
    </header>
  );
}
