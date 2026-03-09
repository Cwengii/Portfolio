import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "CyberQuest",
    category: "Cybersecurity",
    description: "Cybersecurity project to help kids learn about the importance of cybersecurity",
    image: project1,
    link: "https://gk-ah-cwengz-stars.vercel.app/",
  },
  {
    title: "TaxiFind",
    category: "Cybersecurity, Data Engineering, Creative Design",
    description: "A web application that allows users to find the safest route to their destination using data from the South African Police Service",
    image: project2,
    link: "https://github.com/Cwengii/Taxi-Find",
  },
  {
    title: "Command Center Dashboard",
    category: "Data Engineering, Creative Design",
    description: "A dashboard that allows users to monitor the status of the command center",
    image: project3,
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Selected Work</p>
        <h2 className="font-display text-5xl md:text-7xl text-foreground mb-16">PROJECTS</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className="group block animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="overflow-hidden border border-border mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1">
                {project.category}
              </p>
              <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {project.description}
              </p>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a
            href="https://github.com/Cwengii?tab=repositories"
            className="inline-block font-mono text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors border border-primary hover:border-foreground px-8 py-3"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
