import React, { useEffect, useState } from "react";
import black from "../assets/portfolio/colored.jpg";
import { TbArrowBigDown } from "react-icons/tb";

const Hero = () => {
  const [isScroll, setIsScroll] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScroll(scrollPosition > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScroll]);

  return (
    <section id="home" className="container h-screen bg-background mt-8 overflow-hidden ">
      {/* desktop */}
      <div className="hidden lg:flex w-full h-[calc(100vh)] lg:bg-background">
        <div className="flex-1 w-full h-full">
          <div className=" flex-col flex justify-center items-center h-full">
            <p className="mb-1 font-semibold momo-signature-regular ">Welcome! My name is</p>
            <h1 className="text-4xl md:text-7xl momo-signature-regular">Opeyemi.<span className="text-secondary">O</span>.</h1>
            <h3 className="mt-6 font-semibold momo-signature-regular">I build things for the web.</h3>
            <button className="btn mt-6 animate-border border"><a href="#projects">View My Projects</a></button>
            {isScroll ? (
              ""
            ) : (
              <TbArrowBigDown
                size={24}
                className="absolute bottom-10 animate-bounce"
              />
            )}
          </div>
        </div>

        <div className="lg:flex lg:flex-1 w-full h-full">
          <img
            src={black}
            alt="hero-image"
            className="object-cover w-full h-full "
          />
        </div>
      </div>

      {/* mobile */}

      <div
        className="container w-full text-center flex justify-center items-center h-auto min-h-screen lg:hidden bg-background "
        style={{
          background: `url(${black}) rgba(5,5,5,0.9) center/cover no-repeat`,
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="flex-col min-w-full flex justify-center items-start text-center px-8 py-2 gap-4 ">
          <h1 className="w-full overflow-hidden flex-col flex justify-center items-start space-y-1 md:space-y-3">
            <span className=" md:text-3xl momo-signature-regular">
              Welcome!{" "}My name is
            </span>
            
            <span className="text-4xl md:text-6xl momo-signature-regular ">Opeyemi.<span className="text-secondary">O</span>.</span>
            <span className="momo-signature-regular  font-semibold md:text-3xl mt-4">
              I build things for the web.
            </span>
          </h1>
          <button className="btn mt-4 border animate-border hover:border-0"><a href="#projects">View My Projects</a></button>
        </div>
        {isScroll ? (
          ""
        ) : (
          <TbArrowBigDown
            size={24}
            className="absolute bottom-5 animate-bounce"
          />
        )}
      </div>
      
    </section>
  );
};

export default Hero;
