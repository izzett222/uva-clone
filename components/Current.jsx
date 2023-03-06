import Image from "next/image";
import Wrapper from "./Wrapper";
import current from "/public/current.jpg";
import right from "/public/black-right.svg";

export default function Current() {
  const data = [
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "Discover everything an international student needs to know about studying at the UvA.",
    },
    {
      img: current,
      title: "The UvA and the smart city",
      text: "Find out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential.",
    },
    {
      img: current,
      title: "Study in Amsterdam Week 20 - 24 Februa",
      text: "Discover everything an international student needs to know about studying at the UvA.",
    },
  ];
  return (
    <div className="pb-16">
      <Wrapper>
        <h2 className="title mb-6">Current</h2>
        <div className="flex flex-col sm:flex-row gap-[1.5rem]">
          {data.map((el, i) => {
            return (
              <div key={i} className="flex-1 rounded-[4px] border border-[#E6E6E6] hover:shadow-medium hover:cursor-pointer duration-200 group">
                <div className="relative  aspect-[7/3]">
                  <Image src={el.img} alt="" className="object-cover" fill />
                </div>
                <div className="py-6 px-4">
                  <h3 className="title--sm mb-3 group-hover:text-red group-hover:underline decoration-1 underline-offset-[3px] duration-200">{el.title}</h3>
                  <p className="leading-[25.6px] text-txt">{el.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
