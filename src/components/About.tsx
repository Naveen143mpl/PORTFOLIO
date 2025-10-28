import { motion } from "framer-motion";
import { Code2, Database, Server, Cloud } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend development", level: 90, icon: Server },
    { name: "Backend development", level: 85, icon: Database },
    { name: "Cloud computing", level: 88, icon: Code2 },
    { name: "API Development", level: 82, icon: Cloud },
    { name: "Database Design", level: 75, icon: Cloud },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-foreground/60 text-lg">
            Passionate about building scalable solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 shadow-[0_0_30px_hsl(174_100%_51%/0.1)]"
          >
            <div className="mb-6">
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed text-center">
              I'm a passionate Full stack developer with expertise in building robust,
              scalable server-side applications. I love working with modern
              technologies and solving complex problems through elegant code.
              My goal is to create efficient systems that power amazing user
              experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 hover:shadow-[0_0_30px_hsl(174_100%_51%/0.2)] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <skill.icon className="text-primary" size={24} />
                    <span className="font-semibold text-foreground">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full shadow-[0_0_10px_hsl(174_100%_51%/0.5)]"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
