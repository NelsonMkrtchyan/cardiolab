import { type ReactNode } from "react";

interface SectionWrapper {
  children: ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapper) => {
  return (
    <>
      <section
        id="section-placeholder"
        className="border-lime relative z-10 m-4 overflow-hidden border-2 bg-transparent py-4 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">{children}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper;
