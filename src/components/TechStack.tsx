import { motion } from "framer-motion";

const TechStack = () => {
  const technologies = [
    { name: "Java", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "MySQL", color: "#4479A1" },
    { name: "MongoDB", color: "#47A248" },
    { name: "AWS", color: "#FF9900" },
    { name: "Springboot", color: "#E10098" },
    { name: "node.js", color: "#092E20" },
    { name: "React", color: "#61DAFB" },
    { name: "git&github", color: "#3178C6" },
    { name: "Docker", color: "#2496ED" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Tech Stack
          </h2>
          <p className="text-foreground/60 text-lg">
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass rounded-xl p-6 text-center group hover:shadow-[0_0_30px_hsl(174_100%_51%/0.2)] transition-all duration-300"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl group-hover:animate-float"
                style={{
                  background: `linear-gradient(135deg, ${tech.color}30, ${tech.color}10)`,
                  border: `2px solid ${tech.color}50`,
                }}
              >
                {tech.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
