import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import current from "/public/current.jpg";
import right from "/public/red-right.svg";
import blackRight from "/public/black-right.svg";

export default function News() {
  const data = [
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "When it comes to enhancing the sustainability of plastic bottles, consumers are willing to pay - the more so when the alternative is visually distinctive consumers are willing to pay a bonus for bio-based alternatives - the more so when the alternative is visually distinctive. This follows from ...",
    },
    {
      img: current,
      title: "The UvA and the smart city",
      text: "Find out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential.",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...              ",
    },
  ];
  return (
    <div className="pb-16 bg-[#E6E6E6] pt-16 overflow-hidden">
      <Wrapper>
        <h2 className="title mb-6 flex justify-between items-center">News <Image src={blackRight} alt="" className="w-5 h-5 opacity-50" /></h2>
        <div className="flex">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="w-[90%] min-[470px]:w-[60%]  sm:w-[45%] lg:w-[23%] flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white"
              >
                <div className="relative  aspect-[7/3]">
                  <Image src={el.img} alt="" className="object-cover" fill />
                </div>
                <div className="py-6 px-4">
                  <h3 className="title--sm mb-3">{el.title}</h3>
                  <p className="leading-[25.6px] text-txt">{el.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end">
            <Link href="/" className="leading-[1.2] mt-3 text-red gap-0.5 font-sans border-b border-b-red pb w-fit flex items-center ">More news <Image src={right} alt=""  className="w-4 h-4" /></Link>
        </div>
      </Wrapper>
    </div>
  );
}
