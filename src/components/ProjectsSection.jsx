import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
    id: 0,
    title: "HyperCode AI",
    description: "AI-powered coding application that streamlines development through intelligent code generation and real-time assistance. Built to boost productivity and innovation.",
    image: "https://masonprotsman.github.io/mason-portfolio/projects/project_0.png",
    tags: ["React", "TailwindCSS", "Typescript"],
    demoUrl: "https://masonprotsman.github.io/Ecommerce-App/",
    githubUrl: "https://github.com/masonprotsman/Ecommerce-App",
  },
  {
    id: 1,
    title: "International Weather App",
    description: "A beautifully designed weather application with real-time live data, global search capabilities, and location-based features for a seamless user experience.",
    image: "https://masonprotsman.github.io/mason-portfolio/projects/project_1.png",
    tags: ["React", "TailwindCSS", "Typescript"],
    demoUrl: "https://masonprotsman.github.io/Weather-Forecast-Pro/",
    githubUrl: "https://github.com/masonprotsman/Weather-Forecast-Pro",
  },
  {
    id: 2,
    title: "Restaurant Website",
    description:
      "A modern, responsive restaurant website featuring an elegant design, intuitive navigation, and seamless online reservation functionality to enhance the dining experience.",
    image: "https://masonprotsman.github.io/mason-portfolio/projects/project_4.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://masonprotsman.github.io/restaurant-website/",
    githubUrl: "https://github.com/masonprotsman/restaurant-website",
  },
  {
    id: 3,
    title: "Real Estate Website",
    description:
      "A high-end real estate website featuring stunning visuals and fully automated contact submission, designed to capture leads seamlessly and elevate the client experience.",
    image: "https://masonprotsman.github.io/mason-portfolio/projects/project_2.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://masonprotsman.github.io/react-real-estate/",
    githubUrl: "https://github.com/masonprotsman/react-real-estate",
  },
  {
    id: 4,
    title: "Movie Search App",
    description:
      "A dynamic, real-time movie discovery platform featuring live data integration from The Movie Database (TMDb) and personalized favorites management for a seamless user experience.",
    image: "https://masonprotsman.github.io/mason-portfolio/projects/project_3.png",
    tags: ["React", "Typescript"],
    demoUrl: "https://masonprotsman.github.io/Movie-Search-Project/",
    githubUrl: "https://github.com/masonprotsman/Movie-Search-Project",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  onClick={() => window.open(project.demoUrl, "_blank")}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/masonprotsman"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};