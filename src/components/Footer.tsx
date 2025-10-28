import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Naveen143mpl", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/naveen-puttaparthi2005aa/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/naveen", label: "Twitter" },
    { icon: Mail, href: "mailto:naveen@example.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-foreground/60 hover:text-primary hover:shadow-[0_0_20px_hsl(174_100%_51%/0.5)] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-foreground/60 mb-2">
              naveen143mpl@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
