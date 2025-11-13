import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import { projects } from "../projectData";


const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  


   useEffect(() => {
    window.scrollTo({top: 0, left:0, behavior: 'instant'
     

    });
   
  }, [id]);

  // Find project by ID
  const project = projects.find((p) => p.id === parseInt(id));

  const handleBackToProjects = () => {
    navigate("/");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100);
  };

  // If project not found, redirect
  if (!project) {
    return (
      <div className="min-h-screen bg-background text-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project Not Found</h1>
          <button onClick={() => navigate("/#projects")} className="btn">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Get previous and next project IDs
  const currentIndex = projects.findIndex((p) => p.id === parseInt(id));
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  return (
    <div className="min-h-screen bg-background text-primary">
      {/* Back Button */}
      <div className="p-6 md:p-12">
        <button
          onClick={handleBackToProjects}
          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
        >
          <FaArrowLeft /> Back to Projects
        </button>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {project.title}
          </h1>
          <p className="text-xl text-secondary mb-6">{project.tagline}</p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-primary/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-transparent border border-secondary flex items-center gap-2"
            >
              <FaGithub /> View Code
            </a>
          </div>
        </div>
      </section>

      {/* Main Image/Video */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </section>

      {/* Project Overview Grid */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-secondary font-semibold mb-2">Role</h3>
            <p>{project.role}</p>
          </div>
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-secondary font-semibold mb-2">Duration</h3>
            <p>{project.duration}</p>
          </div>
          <div className="bg-primary/5 p-6 rounded-lg">
            <h3 className="text-secondary font-semibold mb-2">Team Size</h3>
            <p>{project.teamSize}</p>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            About the Project
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-line leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 md:px-12 pb-12 bg-primary/5">
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-secondary mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Screenshots
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.slice(1).map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Challenges & Solutions
          </h2>
          <div className="space-y-4">
            {project.challenges.map((challenge, i) => (
              <div key={i} className="bg-primary/5 p-6 rounded-lg">
                <p>{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes/Results */}
      <section className="px-6 md:px-12 pb-12 bg-secondary/10">
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-secondary">
            Results & Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.outcomes.map((outcome, i) => (
              <div key={i} className="text-center">
                <p className="text-xl md:text-2xl font-bold text-secondary mb-2">
                  {outcome.split(" ")[0]}
                </p>
                <p className="text-sm">
                  {outcome.split(" ").slice(1).join(" ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial (if applicable) */}
      {project.testimonial && (
        <section className="px-6 md:px-12 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl italic mb-4">
              "{project.testimonial.text}"
            </blockquote>
            <p className="text-secondary">
              — {project.testimonial.author}, {project.testimonial.position}
            </p>
          </div>
        </section>
      )}

      {/* Next/Previous Projects */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-6xl mx-auto flex justify-between">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
            >
              <FaArrowLeft /> {prevProject.title}
            </Link>
          ) : (
            <div></div>
          )}
          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
            >
              {nextProject.title} <FaExternalLinkAlt />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
