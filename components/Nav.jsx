import Wrapper from "./Wrapper";

export default function Nav() {
  const data = [
    "Alumni",
    "PhD",
    "Working at the UvA",
    "UvA Experts",
    "Staff website",
    "Student website",
  ];
  return (
    <div className="py-16">
      <Wrapper>
        <h2 className="title mb-6">Go to:</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {data.map((el, i) => {
            return (
              <div
                key={i}
                className="border-[#E6E6E6] text-[22px] hover:shadow-medium hover:underline underline-offset-2 hover:text-red duration-200 sm:text-[24px] leading-[1.15] font-bold rounded-[4px] px-4 pt-4 pb-9 border"
              >
                {el}
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
