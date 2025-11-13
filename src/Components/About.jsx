import React, { useEffect, useRef, useState } from "react";
import { PopupButton } from "react-calendly";
import { FaCode } from "react-icons/fa";
import { PiHandbagFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

const About = () => {


  return (
    <section
    
      id="about"
      className="p-12 bg-background min-h-screen mt-15 overflow-hidden "
    >
      <div className="">
        <h3 className="text-center text-3xl md:4xl momo-signature-regular mb-20 text-secondary reveal-on-scroll">
          About <span className="text-primary">Me</span>
        </h3>

        <div className="flex gap-6 flex-col md:flex-row ">
          <div className="flex-1">
            <p className="text-center reveal-on-scroll">
              I'm a Professional Full Stack Developer who thrives on building
              ideas that live and breathe on the web. I transform creative ideas
              into fully functional, high-performance, and scalable web
              applications.
            </p>
            <div className="text-center mt-20 flex justify-center items-center gap-4 md:gap-6 reveal-on-scroll">
              <div className="animate-bounce-in-delay-1 p-3 bg-primary/10 rounded-full flex items-center justify-center hover:text-secondary transition-colors duration-200 bounce">
                {" "}
                <a href="">
                  <FaFacebookF size={20} />
                </a>
              </div>
              <div className="animate-bounce-in-delay-2 p-3 bg-primary/10 rounded-full flex items-center justify-center hover:text-secondary transition-colors duration-200 bounce">
                {" "}
                <a href="">
                  <FaXTwitter size={20} />
                </a>
              </div>
              <div className="animate-bounce-in-delay-3 p-3 bg-primary/10 rounded-full flex items-center justify-center hover:text-secondary transition-colors duration-200 bounce">
                {" "}
                <a href="">
                  <RiInstagramFill size={20} />
                </a>
              </div>
              <div className="animate-bounce-in-delay-4 p-3 bg-primary/10 rounded-full flex items-center justify-center hover:text-secondary transition-colors duration-200 bounce">
                {" "}
                <a href="">
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10 p-4  reveal-on-scroll">
              <button className="btn bg-transparent border border-secondary text-primary font-semibold w-full flex-1">
                {" "}
                <a href="mailto:ptechnovations@gmail.com">Send a Mail</a>
              </button>
              <PopupButton
                url="https://calendly.com/ptechnovations"
                rootElement={document.getElementById("root")}
                text="Book a Call"
                className="btn flex-1 w-full font-semibold"
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6 ">
              <div className="bg-primary/2 rounded-md p-6 card-hover hover:bg-secondary/10 ">
                <div className="flex items-start gap-4 reveal-on-scroll">
                  <div className="p-3 rounded-full bg-primary/10 hover:rotate-12 transition-transform duration-300">
                    <FaCode className="h-6 w-6 text-secondary " />
                  </div>
                  <div className="text-left ">
                    <h4 className="font-semibold text-lg momo-signature-regular mb-2">
                      Web Development
                    </h4>
                    <p>
                      Creating responsive websites and web applications with
                      modern frameworks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/2  rounded-md p-6 card-hover hover:bg-secondary/10  ">
                <div className="flex items-start gap-4 reveal-on-scroll">
                  <div className="p-3 rounded-full bg-primary/10 hover:rotate-12 transition-transform duration-300">
                    <FaUsers className="h-6 w-6 text-secondary " />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg momo-signature-regular mb-2">
                      UI/UX Designs
                    </h4>
                    <p>
                      Designing intuitive user interfaces and seamless user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-primary/2  rounded-md p-6 card-hover hover:bg-secondary/10 ">
                <div className="flex items-start gap-4 reveal-on-scroll ">
                  <div className="p-3 rounded-full bg-primary/10 hover:rotate-12 transition-transform duration-300">
                    <PiHandbagFill className="h-6 w-6 text-secondary " />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg momo-signature-regular mb-2">
                      Project Management
                    </h4>
                    <p>
                      Leading projects from conception to completion with agile
                      methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
