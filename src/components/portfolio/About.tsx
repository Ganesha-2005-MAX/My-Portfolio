import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const About = () => {
  const stats = [
    { value: "2+", label: "Virtual Internships" },
    { value: "300+", label: "DSA Problems" },
    { value: "Full Stack", label: "Developer" },
    { value: "Google Cloud", label: "AI Intern" },
  ];



  return (
    <section id="about" className="pt-24 md:pt-32 pb-12 md:pb-16 relative bg-secondary/20 border-y border-border/40">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-primary" />
            <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            A closer look.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="prose prose-invert max-w-[700px]">
              <p className="text-base md:text-[17px] text-muted-foreground leading-[1.8] mb-6 font-light">
                I'm a Computer Science student at <span className="text-foreground font-normal">Galgotias University</span> with a strong interest in software development, database management, and cloud technologies. I enjoy building efficient and scalable applications while continuously improving my problem-solving and programming skills.
              </p>
              <p className="text-base md:text-[17px] text-muted-foreground leading-[1.8] mb-6 font-light">
                My experience includes working with <span className="text-primary font-medium">Java</span>, <span className="text-primary font-medium">SQL</span>, <span className="text-primary font-medium">Full Stack</span> development, and <span className="text-primary font-medium">Generative AI</span> technologies through academic projects and virtual internships. I’m particularly interested in backend development, modern web technologies, and creating solutions that combine functionality with clean user experiences.
              </p>
              <p className="text-base md:text-[17px] text-muted-foreground leading-[1.8] font-light">
                Currently, I’m expanding my expertise in <span className="text-primary font-medium">Data Structures & Algorithms</span>, <span className="text-primary font-medium">cloud computing</span>, and <span className="text-primary font-medium">AI-driven applications</span>, with the goal of becoming a skilled full-stack developer capable of building impactful and real-world software solutions.
              </p>
            </div>
            
            <a 
              href="/Ganesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-2 pb-1 text-foreground font-medium hover:text-primary transition-colors cursor-pointer group relative"
            >
              View Resume 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="md:col-span-5 grid grid-cols-2 gap-x-8 gap-y-12 mt-4 md:mt-0"
          >
            {stats.map(({ value, label }, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={label}
                className="flex flex-col border-l border-primary/20 pl-5 hover:border-primary transition-colors duration-300"
              >
                <div className="text-3xl md:text-4xl font-light text-foreground mb-2 tracking-tight">{value}</div>
                <div className="text-xs text-muted-foreground font-medium tracking-[0.1em] uppercase">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default About;
