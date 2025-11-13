import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Components/NavBar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "./Skills";
import FeaturedProjects from "./FeaturedProjects";
import { FaArrowUp } from "react-icons/fa";
import Contact from "./Contact";

const Home = ({ isLoading }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll(".reveal-on-scroll");
    if (!targets || !targets.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target); // only once per element
          }
        });
      },
      { threshold: 0.2 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="overflow-hidden container min-w-full">
      <div
        className={` w-full max-w-full overflow-hidden min-h-screen transition-opacity duration-900 bg-background text-primary scroll-smooth  ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <nav>
          <Navbar />
        </nav>
        <main>
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects />
          <Contact />
        </main>
        <footer className="text-center flex justify-between items-center mb-2 px-12 border-t border-primary/10 py-4 mt-10">
          <p className="text-[10px] md:text-sm">
            All rights reserved &copy; Opeyemi Okanlawon{" "}
            {new Date().getFullYear().toString()}.
          </p>
          <button>
            {" "}
            <a href="#home" className="animate-pulse">
              <FaArrowUp />
            </a>
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Home;
