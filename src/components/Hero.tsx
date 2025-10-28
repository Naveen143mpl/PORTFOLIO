import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "FULL STACK DEVELOPER";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/my resume pdf.pdf'; // Update with the correct path to your resume
    link.download = 'my resume pdf.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const socialLinks = [
    { icon: Github, href: "https://github.com/Naveen143mpl", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/naveen-puttaparthi2005aa/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:naveen143mpl@gmail.com", label: "Email" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-2">
              Hey, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4">
              Naveen 👋
            </h1>
            <div className="h-12 md:h-16">
              <p className="text-2xl md:text-4xl neon-text font-semibold">
                {text}
                <span className="animate-pulse">|</span>
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-8"
          >
            Crafting robust server-side solutions and scalable architectures
            with passion and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(174_100%_51%/0.5)] hover:shadow-[0_0_30px_hsl(174_100%_51%/0.8)] transition-all duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-foreground/60 hover:text-primary transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
