import { FaExternalLinkAlt } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "A Smart and Seamless POS System",
    description:
      "Designed to streamline sales, inventory,and customer management for modern businesses. This POS system allows cashiers and managers to process transactions efficiently, track inventory in real time, and generate insightful sales reports,  all through a secure platform featuring user authentication and integrated payment gateways.",

    image: "/Projects/cookery photoshot6.png",
    tags: ["React", "Tailwind", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Product Management Dashboard",
    description:
      "A dynamic Product Management Dashboard designed to give businesses a clear, real-time view of their product data and performance. It allows users to monitor inventory levels, track product trends, analyze sales metrics, manage categories, and manage delivery statuses seamlessly, all from a single, intuitive interface.",

    image: "/Projects/topfash photoshot1.png",
    tags: ["Node.js", "Cloudinary", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A modern E-commerce Platform built for seamless shopping experiences. It features secure user authentication, integrated payment gateways, and an advanced filtering system that helps users find products effortlessly. With a sleek, responsive, and intuitive interface, with an engaging online shopping journey from login to checkout.",
    image: "/Projects/Fashioni projectshot1.png",
    tags: ["React", "Express", "MongoDB"],
    // demoUrl:`/projects/${project.id}`,
    githubUrl: "#",
  },
];

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="p-12 bg-background mt-10 min-h-screen scroll-smooth"
    >
      <h3 className="text-center text-3xl momo-signature-regular mb-20 text-secondary reveal-on-scroll">
        Featured <span className="text-primary">Projects</span>{" "}
      </h3>
      <p className="text-center text-primary mb-12 max-w-2xl mx-auto reveal-on-scroll min-w-full">
        Explore some of my recent projects, carefully designed with attention to
        detail, smooth performance, and an intuitive user experience.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-on-scroll">
        {" "}
        {projects.map((project, key) => (
          <div
            key={key}
            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <div className="py-6">
                <div className="px-2 flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-primary border animate-border"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-primary text-start text-xs mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3 p-2">
                  <Link
                    // to={`/projects/${project.id}`}
                    className=""
                  >
                    <FaExternalLinkAlt
                      size={20}
                      className="hover:text-primary text-secondary transition-colors duration-300"
                    />
                  </Link>
                  <a
                    target="_blank"
                    // href={project.githubUrl}
                    className=""
                  >
                    <IoGlobeOutline
                      size={20}
                      className="text-secondary hover:text-primary transition-colors duration-300"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 ">
        <button>
           <a
          target="_blank"
          href="https://github.com/iampeczi/Opeyemi-Okanlawon.git"
          className="btn w-fit flex items-center mx-auto gap-2 animate-border border reveal-on-scroll hover:border-0"
        >
          Checkout my Github <FaArrowRight size={16} />
        </a>
        </button>
       
      </div>
    </section>
  );
};

export default FeaturedProjects;
