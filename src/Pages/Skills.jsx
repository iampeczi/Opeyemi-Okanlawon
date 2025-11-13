import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVite,
  SiPostgresql,
  SiReactquery,
  SiRedux,
} from "react-icons/si";

const expertise = [
  { name: "React", icon: <FaReact className="text-4xl text-[#61DAFB]" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl text-[#F7DF1E]" />,
  },
  { name: "HTML", icon: <FaHtml5 className="text-4xl text-[#E34F26]" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-4xl text-[#1572B6]" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-[#06B6D4]" />,
  },
  { name: "Node.js", icon: <FaNode className="text-4xl text-[#339933]" /> },
  { name: "Express.js", icon: <SiExpress className="text-4xl text-primary" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-[#47A248]" /> },
  { name: "Github", icon: <FaGithub className="text-4xl text-primary" /> },
  { name: "VITE", icon: <SiVite className="text-4xl text-[#646CFF]" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-4xl text-[#4169E1]" />,
  },
  { name: "Figma", icon: <FaFigma className="text-4xl text-[#F24E1E]" /> },
  {
    name: "React Query",
    icon: <SiReactquery className="text-4xl text-[#FF4154]" />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-4xl text-[#764ABC]" />,
  },
];

const Skills = () => {
  return (
    <section id="expertise" className= "p-12 bg-background mt-20 min-h-screen">
      <h3 className="text-center text-3xl momo-signature-regular mb-20 text-secondary reveal-on-scroll">
        Expertise
      </h3>
      <p className="mb-15 reveal-on-scroll text-center">Over the years, I’ve had the opportunity to work across a broad spectrum of technologies and tools, gaining hands-on experience and building expertise in key areas that drive modern development and innovation. Here are some of the core areas where I’ve built strong expertise and practical experience:</p>
      <div className="skills-marquee reveal-on-scroll overflow-hidden">
        <div className="skills-track mt-15">
          {[...expertise, ...expertise].map((skill, i) => (
            <div
              key={i}
              className="flex flex-col items-center min-w-[140px] gap-3 md:mx-4"
            >
              <div className="hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="w-full overflow-hidden">
                <div className="skill-bar">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
