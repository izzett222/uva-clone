import FooterList from "./FooterList";
import Wrapper from "./Wrapper";
import logo from "/public/logo-white.svg";
import right from "/public/black-right.svg";
import Image from "next/image";
import facebook from "/public/facebook.svg";
import twitter from "/public/twitter.svg";
import linkedin from "/public/linkedin.svg";
import instagram from "/public/instagram.svg";
import whatsapp from "/public/whatsapp.svg";
import youtube from "/public/youtube.svg";
import Link from "next/link";

export default function Footer() {
  const data = [
    {
      title: "Education & research",
      links: [
        "Bachelors programmes",
        "Minors",
        "Masters programmes",
        "Professional development",
        "Exchange",
        "Summer School",
        "PhD at UvA",
        "Research at UvA",
      ],
    },
    {
      title: "Go to",
      links: [
        "Webmail for UvA staff",
        "Webmail UvA students",
        "Library",
        "Canvas",
        "SIS",
        "Timetable",
        "Course Catalogue",
        "Vacancies",
        "UvAshopnl Merchandise store",
      ],
    },
    {
      title: "Information for",
      links: [
        "Prospective students",
        "Current students",
        "Staff",
        "Journalists",
        "Alumni",
        "Donors",
        "Employers",
        "External suppliers",
      ],
    },
    {
      title: "Contact",
      links: [
        "Contact information",
        "Locations",
        "Contact Student Services",
        "The UvA and social media",
      ],
    },
  ];
  const data1 = [
    "Copyright UvA 2023",
    "About this site",
    "Privacy",
    "Cookie settings",
  ];
  const logos = [facebook, twitter, linkedin, instagram, whatsapp, youtube];
  return (
    <footer className="mt-16 bg-[#1f1d20] pt-9">
      <Wrapper>
        <div className="flex justify-between items-center mb-12 relative">
          <Image src={logo} alt="" className="h-[38px]" />
          <div className="bg-[#F9F9F9] absolute top-0 right-0 z-10 sm:static py-2 px-2 rounded-[2px] flex justify-center items-center w-fit -translate-y-2 flex-shrink-0">
            <Image src={right} alt="" className="-translate-y-[1px] -rotate-90 " />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4  sm:pb-16">
          {data.map((el, i) => {
            return <FooterList key={i} {...el} />;
          })}
        </div>
      </Wrapper>
      <div className="sm:border-t border-t-[#8F8F8F] py-6 text-white font-sans">
        <Wrapper>
          <div className="text-white flex flex-col-reverse lg:flex-row items-center gap-y-6 lg:justify-between">
            <div className="flex gap-3 text-sm text-[#d6d6d6]">
              {data1.map((el, i) => {
                return (
                  <Link href={"/"} key={i}>
                    {el}
                  </Link>
                );
              })}
            </div>
            <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-1.5 lg:gap-3 items-center text-[#d6d6d6] text-sm">
              <span className="mb-3 sm:mb-0">Follow UvA on social media</span>
              <div className="w-full sm:w-auto flex justify-between sm:justify-start gap-1.5 lg:gap-3">
                {logos.map((el, i) => {
                  return <Image src={el} key={i} alt="" />;
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
