import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Student Management System",
      description:
        "AI-powered Student Management System built with Java, Spring Boot, and MySQL.",
      tech: ["Java", "Spring Boot", "MySQL","OpenAI API"],
      github: "https://github.com/Naveen143mpl/STUDENT-MANAGAMENT-SYSTEM",
      demo: "https://student-managament-system-mu.vercel.app/",
      gradient: "from-primary to-secondary",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A clean and responsive personal portfolio built using HTML, CSS, and TypeScript, showcasing resume details with a live preview. Includes a simple Download/Print feature for quick resume export.",
      tech: ["Type script","react", "HTML", "CSS"],
      gradient: "from-secondary to-primary",
    },
    {
      title: "TaskTime",
      description:
        "An AI-powered project planner built with Spring Boot, React, and OpenAI API, that automatically creates smart weekly schedules based on tasks and deadlines.",
      tech: ["react", "Springboot", "MongoDB", "OpenAI API"],
      github: "https://github.com/Naveen143mpl/TASK-TIME",
      demo: "https://task-time-rosy.vercel.app/",
      gradient: "from-primary via-secondary to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-foreground/60 text-lg">
            Some of my recent backend development work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="glass overflow-hidden h-full border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(174_100%_51%/0.2)]">
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
