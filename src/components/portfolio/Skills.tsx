import { motion } from "framer-motion";
import {
  Brain, Sparkles, MessageSquare, Cloud, Cpu, Database, Layers, Network, Monitor,
  GraduationCap, Trophy, Terminal, Award
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "SQL", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "C", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Spring Boot", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "Tailwind CSS", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "JDBC", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Oracle SQL", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "Firebase", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "Supabase", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
  },
  {
    title: "AI & Cloud",
    skills: [
      { name: "Google Cloud", devicon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "Vertex AI", icon: Brain },
      { name: "Generative AI", icon: Sparkles },
      { name: "Prompt Eng.", icon: MessageSquare },
      { name: "Cloud Computing", icon: Cloud },
    ],
  },
  {
    title: "Core CS",
    skills: [
      { name: "DSA", icon: Cpu },
      { name: "DBMS", icon: Database },
      { name: "OOPs", icon: Layers },
      { name: "Computer Networks", icon: Network },
      { name: "Operating Systems", icon: Monitor },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="pt-12 md:pt-16 pb-12 md:pb-16 relative overflow-hidden bg-secondary/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border/40 pb-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-8 h-[1px] bg-primary" />
              <span className="text-primary text-xs font-semibold uppercase tracking-[0.2em]">Competencies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Tech Stack.
            </h2>
          </div>
          <p className="text-muted-foreground font-light max-w-md text-sm md:text-[15px] leading-relaxed">
            My technical stack includes modern development tools, backend technologies, cloud platforms, and core computer science fundamentals.
          </p>
        </motion.div>

        {/* Small Statistics Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {[
            { icon: Terminal, text: "20+ Technologies" },
            { icon: GraduationCap, text: "2 Virtual Internships" },
            { icon: Trophy, text: "300+ DSA Problems" },
            { icon: Award, text: "Full Stack Developer" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/30 border border-border/60 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-primary transition-all duration-300 shadow-sm"
            >
              <Icon size={13} className="text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: ci * 0.08 }}
              className="group flex flex-col bg-secondary/15 border border-border/40 rounded-xl p-5 hover:bg-secondary/25 hover:border-primary/30 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,255,255,0.02)] transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle card glowing background gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="mb-5 pb-3 border-b border-border/40">
                <h3 className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3.5 group/item py-2 px-2.5 -mx-2.5 rounded-lg hover:bg-background/40 transition-all duration-300 cursor-default"
                    >
                      <div className="w-8 h-8 rounded-lg bg-secondary/50 flex items-center justify-center border border-border/50 group-hover/item:border-primary/40 group-hover/item:bg-primary/10 transition-all duration-300 overflow-hidden shrink-0">
                        {skill.devicon ? (
                          <img
                            src={skill.devicon}
                            alt={skill.name}
                            className="w-4 h-4 object-contain group-hover/item:scale-110 transition-transform duration-300"
                          />
                        ) : (
                          IconComponent && (
                            <IconComponent
                              size={15}
                              className="text-muted-foreground group-hover/item:text-primary group-hover/item:scale-110 transition-all duration-300 stroke-[2]"
                            />
                          )
                        )}
                      </div>
                      <span className="text-[13.5px] font-medium text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
