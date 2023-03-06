import Image from "next/image";
import Wrapper from "./Wrapper";
import hero from "/public/hero.jpg";
import right from "/public/red-right.svg";

export default function Hero() {
  const data = [
    {
      title: "Bachelor's",
      text: "20+ English-taught Bachelor's programmes",
    },
    {
      title: "Master's",
      text: "200+ English-taught Master's programmes",
    },
    {
      title: "Professional development",
      text: "MBA's, executive programmes, and master classes",
    },
  ];
  return (
    <div className="overflow-hidden">
      <Wrapper>
        <div className="sm:w-[64.66667%] justify-between lg:w-auto lg:max-w-[1141.6px] mx-auto flex flex-col lg:flex-row relative -pt-6 sm:pt-[72px] sm:pb-[86px] -mb-8 sm:-mb-20 md:mb-32 lg:mb-20">
          <div className="flex-1- lg:w-hero mb-6 pt-6 lg:pt-[72px]">
            <h1 className="text-[42px] leading-[59px] font-bold text-[#1f1d21]">
              University of Amsterdam
            </h1>
            <p className="text-[28px] leading-[45px] text-[#1f1d21]">
              Inspiring generations since 1632.
            </p>
          </div>
          <div className="min-h-[50vw] lg:w-hero aspect-[15/11]- lg:min-h-[500px] flex-1- gap-6 relative">
            <div className="bg-[#F7F7F7] absolute inset-0 translate-x-28  lg:translate-x-28 translate-y-20"></div>
            <Image src={hero} alt="" className="object-cover object-[100%_50%]" fill />
          </div>
          <div className="-translate-y-16 sm:-translate-y-20 md:translate-y-0 md:absolute inset-x-0 -bottom-24 sm:-bottom-10 lg:bottom-[148px] mx-auto lg:mx-0 flex flex-col lg:flex-row gap-3 w-[90%]">
            {data.map((el, i) => {
              return (
                <div
                  className="flex-1 font-sans gap-6 lg:max-w-[30%] hover:shadow-small hover:cursor-pointer duration-200 flex items-center bg-white border border-[#bd0032] py-4 px-6 rounded-[3px] justify-between"
                  key={i}
                >
                  <div className="">
                    <h3 className="text-red font-bold font-sans">{el.title}</h3>
                    <p className="text-[#575757] rounded-[2px]">{el.text}</p>
                  </div>
                  <Image src={right} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
