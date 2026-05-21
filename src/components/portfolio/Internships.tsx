import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, Clock, ExternalLink } from "lucide-react";

interface Internship {
  title: string;
  company: string;
  date: string;
  duration?: string;
  description: string;
  skills?: string[];
  badgeUrl?: string;
  certificateUrl?: string;
}

const INTERNSHIPS: Internship[] = [
  {
    title: "Google Cloud Generative - AI",
    company: "Google for Developers",
    date: "Apr-Jun 2026",
    duration: "3 Month",
    description: "Selected for an 10-week virtual internship focused on Google Cloud Generative AI technologies. Gained practical knowledge of Generative AI, Large Language Models (LLMs), prompt engineering, Vertex AI, responsible AI practices, multimodal AI, embeddings, transformer models, and AI-driven workflow automation. Worked on industry-oriented learning modules, assessments, and AI application development concepts using Google Cloud technologies.",
    skills: ["Generative AI", "Google Cloud", "Vertex AI", "Prompt Engineering", "LLMs", "Multimodal AI", "Responsible AI", "AI Agents", "MLOps"],
    badgeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    certificateUrl: "/certificates/Google_Cloud_Generative_AI.pdf",
  },
  {
    title: "Java Full Stack Developer",
    company: "EduSkill Academy",
    date: "Jan-Mar 2026",
    duration: "3 Months",
    description: "Completed a 10-week virtual internship focused on Java Full Stack Development. Gained hands-on experience in frontend and backend development, object-oriented programming, database management, and full-stack application development. Worked with Java technologies, SQL databases, and modern web development concepts while improving problem-solving and software development skills.",
    skills: ["Java", "React", "SQL", "Spring Boot", "OOP", "Problem Solving", "Servlets", "JSP"],
    badgeUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    certificateUrl: "/certificates/Java_Full_Stack_Developer.pdf",
  }
];

const Internships = () => {
  return (
    <section id="internships" className="pt-12 md:pt-16 pb-12 md:pb-16 relative bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-3 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Internships & Simulations.
          </h2>
          <p className="text-muted-foreground font-light mt-4 text-[15px] max-w-xl mx-auto">
            Practical experience gained through industry internships and job simulations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {INTERNSHIPS.map((internship, index) => (
            <motion.div
              key={internship.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group relative flex flex-col rounded-xl bg-card/40 backdrop-blur-sm border border-border/60 overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_rgba(234,179,8,0.15)] hover:-translate-y-1 transition-all duration-500 p-8"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-500" />
              <div className="flex items-start justify-between gap-5 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  {internship.badgeUrl ? (
                    <img
                      src={internship.badgeUrl}
                      alt={internship.company}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <Briefcase className="text-primary w-6 h-6" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                    {internship.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mt-2 font-medium">
                    <span className="flex items-center gap-1"><Building2 size={12} /> {internship.company}</span>
                    <span className="flex items-center gap-1"><Calendar size={12} /> {internship.date}</span>
                    {internship.duration && (
                      <span className="flex items-center gap-1"><Clock size={12} /> {internship.duration}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 block mb-2">
                  Role Description
                </span>
                <p className="text-[13px] md:text-sm text-muted-foreground/90 leading-[1.8]">
                  {internship.description}
                </p>
              </div>

              {internship.skills && internship.skills.length > 0 && (
                <div className="mt-6 pt-5 border-t border-border/30">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/60 block mb-3">
                    Skills & Technologies
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest bg-secondary/30 text-foreground/80 border border-border/40 rounded hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {internship.certificateUrl && (
                <div className="pt-5 mt-6 border-t border-border/50">
                  <a
                    href={internship.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors group/link"
                  >
                    View Certificate
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
