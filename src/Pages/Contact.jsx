import React from "react";
import contactImage from "../../public/Projects/undraw_contact-us_kcoa (1).png";

import { BsInstagram, BsMailbox, BsTwitterX } from "react-icons/bs";
import {
  FaFacebook,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="text-center text-primary p-12 bg-background min-h-screen mt-15 max-w-full w-full overflow-hidden"
    >
      <h3 className="text-3xl  md:text-4xl momo-signature-regular mb-20 text-secondary reveal-on-scroll">
        {" "}
        Get in <span className="text-primary">Touch</span>{" "}
      </h3>
      <div className="flex gap-6 mb-10">
        <div className="flex-1">
          <div className="flex flex-col gap-8 max-w-4xl w-full justify-start items-center ">
            <p className=" text-center reveal-on-scroll">
              Got a project in mind or interested in collaborating? Don’t
              hesitate to reach out. I'm always excited to explore new ideas and
              opportunities.
            </p>
            <div className=" min-w-full reveal-on-scroll ">
              <div className="space-y-8 item-start  flex flex-col ">
                <h3 className="text-2xl font-semibold mb-6 text-start ">
                  Contact Information
                </h3>
                <div className="space-y-6 justify-center text-xs md:text-base">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <BsMailbox className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-start">
                      <h4 className="font-medium text-sm">Email</h4>
                      <a
                        href="mailto:opexy56@gmail.com"
                        className="text-muted-foreground duration-200 hover:text-secondary transition-colors"
                      >
                        opexy56@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <FaPhoneAlt className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-start">
                      <h4 className="font-medium text-sm">Phone</h4>
                      <a
                        href="tel:2348065611409"
                        className="text-muted-foreground hover:text-secondary duration-200 transition-colors"
                      >
                        +234 (806) 561-1409
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <FaMapMarkedAlt className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-start w-full">
                      <h4 className="font-medium text-sm">Location</h4>
                      <p>Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-4 justify-center items-start ">
                  <h4 className=" py-4 text-start width-full text-sm ">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com"
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      <FaLinkedin />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.x.com/iampeczi?s=21"
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      <BsTwitterX />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/iampeczi"
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/iampeczi"
                      className="hover:text-secondary transition-colors duration-300"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex flex-1 relative reveal-on-scroll ">
          <img
            src={contactImage}
            alt="Contact Us"
            className="object-cover w-full h-full"
          />
          <div className="absolute bg-background opacity-70 inset-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
