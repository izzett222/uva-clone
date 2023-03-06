import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import current from "/public/current.jpg";
import right from "/public/red-right.svg";
import blackRight from "/public/black-right.svg";
import news1 from "/public/news1.jpeg";
import news2 from "/public/news2.jpeg";
import news3 from "/public/news3.png";
import news4 from "/public/news4.jpeg";
import news5 from "/public/news5.jpeg";


export default function News() {
  const data = [
    {
      img: news1,
      title: "'Forever chemical' PFAS in Dutch drinking water",
      text: "There’s PFAS coming out of our taps. New research by Mohammad Sadia, PhD candidate at the Institute for Biodiversity and Ecosystem Dynamics (IBED) – University of Amsterdam (UvA) shows that drinking water produced ...",
    },
    {
      img: news2,
      title: "Teflon is so slippery because it slides on itself",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news3,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news4,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news5,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news1,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news2,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news3,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...",
    },
    {
      img: news4,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "The surface of Teflon – the non-stick coating in your pan – is incredibly slippery. Thanks to research carried out at the Institute of Physics (UvA) and research centre ARCNL, we finally know where this slipperiness ...              ",
    },
  ];
  return (
    <div className="pb-16 bg-[#E6E6E6] pt-16 overflow-hidden">
      <Wrapper>
        <h2 className="title mb-9 flex justify-between items-center">News <Image src={blackRight} alt="" className="w-5 h-5 opacity-50" /></h2>
        <div className="flex">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="w-[90%] min-[470px]:w-[60%] hover:shadow-medium duration-200 sm:w-[45%] lg:w-[23%] flex-shrink-0 mr-4 rounded-[4px] border border-[#E6E6E6] bg-white"
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
