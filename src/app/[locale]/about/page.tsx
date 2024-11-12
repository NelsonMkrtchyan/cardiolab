import SectionWrapper from "~/app/_components/SectionWrapper";
import BackgroundImage from "~/app/[locale]/about/_components/BackgroundImage";
import Image from "next/image";
import {
  svg_1,
  svg_2,
  svg_3,
  svg_4,
} from "~/app/_components/TemporaryComponents/svgs";

const About = () => {
  return (
    <>
      {/*<SectionPlaceholder title={"About Us"} />*/}

      <section
        id="section-placeholder"
        className="relative z-10 m-4 mt-32 h-96 overflow-hidden bg-transparent"
      >
        {/*<BackgroundImage />*/}
        <div className="absolute mb-10 h-full w-full overflow-hidden rounded">
          <div className="h-full w-full">
            <Image
              src="https://utfs.io/f/kPqN7718CWluLVh9fIFM9GPald3WK8xTLcn5eompzqNkuiFI"
              alt="image"
              fill={true}
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="z-10 flex h-full w-full p-6">
          <div className="relative flex h-full w-1/2 flex-col items-center justify-center">
            <p className="text-white md:text-xl lg:text-2xl">
              “CardioLab” Medical Clinic, founded in 2024, specializes in modern
              heart care that prioritizes your well-being. We provide a range of
              services for adults and children, from cardiovascular
              consultations and heart screenings to comprehensive health checks
              and advanced monitoring solutions.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-14 lg:py-16">
        <div className="container flex w-full flex-wrap lg:flex-nowrap lg:gap-10">
          <div className="mx-auto flex w-full flex-col items-center justify-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Our Vision
              </h2>
            </div>
            <div className="">
              <p className="text-font-light dark:text-font-dark text-center !leading-relaxed md:text-xl lg:text-start lg:text-2xl">
                Our vision is to provide the highest quality cardiovascular care
                in Armenia through innovative approaches, comprehensive
                solutions, and holistic care.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            {svg_1()}
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-14 lg:py-16">
        <div className="container flex w-full flex-wrap lg:flex-nowrap lg:gap-10">
          <div className="order-0 mx-auto flex w-full flex-col items-center justify-center lg:order-1">
            <div>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Our Mission
              </h2>
            </div>
            <div className="">
              <p className="!leading-relaxedtext-font-light dark:text-font-dark text-base md:text-xl lg:text-2xl">
                Our mission is to offer innovative, scientifically-based, and
                personalized care to all patients with cardiovascular
                conditions. We strive to enhance each patient’s treatment
                journey by providing compassionate care and raising awareness,
                thus contributing to the reduction of the cardiovascular disease
                burden in Armenia.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            {svg_4()}
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-14 lg:py-16">
        <div className="container flex w-full flex-wrap lg:flex-nowrap lg:gap-10">
          <div className="mx-auto flex w-full flex-col items-center justify-center">
            <div>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Our Values
              </h2>
            </div>
            <div className="">
              <p className="text-font-light dark:text-font-dark text-base !leading-relaxed md:text-xl lg:text-2xl">
                Quality, professionalism, innovation, patient-centered approach,
                compassion, personalized care, collaboration and unity,
                responsibility, integrity, inclusivity, knowledge, continuous
                professional development.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            {svg_3()}
          </div>
        </div>
      </section>

      <section id="features" className="py-12 md:py-14 lg:py-16">
        <div className="container flex w-full flex-wrap lg:flex-nowrap lg:gap-10">
          <div className="order-0 mx-auto flex w-full flex-col items-center justify-center lg:order-1">
            <div>
              <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                Our Strategic Directions
              </h2>
            </div>
            <div className="">
              <ul>
                <li className="text-font-light dark:text-font-dark text-base !leading-relaxed md:text-xl lg:text-2xl">
                  Clinical cardiovascular medicine.
                </li>
                <li className="text-font-light dark:text-font-dark text-base !leading-relaxed md:text-xl lg:text-2xl">
                  Research activities.
                </li>
                <li className="text-font-light dark:text-font-dark text-base !leading-relaxed md:text-xl lg:text-2xl">
                  Increasing patient awareness.
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            {svg_2()}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
