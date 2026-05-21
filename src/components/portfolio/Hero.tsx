import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitBranch, Link, Code2, Mail, ArrowRight, BarChart, Download,
  Terminal, Cloud, Sparkles
} from "lucide-react";
// @ts-ignore
import profileImg from "../asset/Profile image .png";

const socialLinks = [
  { icon: GitBranch, href: "https://github.com/Ganesha-2005-MAX", label: "GitHub" },
  { icon: Link, href: "https://www.linkedin.com/in/ganesh-87878415g/", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/u/Ganesha_114/", label: "LeetCode" },
  { icon: BarChart, href: "https://codolio.com/profile/Ganesha_114", label: "Codolio" },
  { icon: Mail, href: "mailto:ganeshwork3987@gmail.com", label: "Email" },
];

const PHRASES = [
  "Java Developer",
  "Full Stack Developer",
  "AI Enthusiast",
  "Cloud Learner"
];

const Typewriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-5 overflow-hidden relative w-full">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 text-xs font-medium tracking-[0.2em] uppercase text-primary"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Dynamic drifting grid background */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes grid-drift {
          0% { background-position: 0 0; }
          100% { background-position: 48px 48px; }
        }
      `}} />
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-70"
        style={{
          animation: "grid-drift 25s linear infinite",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-20 w-full grid md:grid-cols-12 gap-12 md:gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-7 flex flex-col items-start"
        >
          <div className="flex items-center gap-3 mb-8 w-full max-w-xs opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <Typewriter />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] relative group">
            Ganesh
            <span className="text-primary inline-block group-hover:animate-bounce">.</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-[1.8] font-light">
            Building scalable applications with <span className="text-primary font-medium">Java</span>, <span className="text-primary font-medium">SQL</span>, and modern web technologies. Passionate about <span className="text-primary font-medium">full-stack development</span>, cloud computing, and AI-driven solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all rounded-sm text-sm tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              Explore Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Ganesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium hover:border-primary/50 hover:bg-secondary/50 transition-all rounded-sm text-sm tracking-wide"
            >
              Download Resume
              <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            </a>
            <a
              href="#internships"
              onClick={(e) => scrollToSection(e, "internships")}
              className="px-4 py-3 text-muted-foreground font-medium hover:text-primary transition-colors text-sm tracking-wide"
            >
              View Experience
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-4 py-3 text-muted-foreground font-medium hover:text-primary transition-colors text-sm tracking-wide"
            >
              Contact Me
            </a>
          </div>

          {/* Stats below buttons */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 mb-12 py-6 border-y border-border/40 w-full">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">2+</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Internships</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">300+</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">DSA Problems</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Java</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Full Stack</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-foreground">Cloud</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">AI Intern</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/30 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group"
              >
                <Icon size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="md:col-span-5 flex justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative w-full max-w-[320px] aspect-[4/5] group select-none">
            {/* Subtle glow behind the image */}
            <div className="absolute -inset-8 bg-primary/20 rounded-full blur-[80px] opacity-60 group-hover:opacity-85 transition-opacity duration-700 pointer-events-none -z-10" />

            {/* Gradient and Glass-effect Accent Block */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/5 to-transparent border border-primary/20 backdrop-blur-sm translate-x-4 translate-y-4 rounded-2xl transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5 -z-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" />

            {/* Main Photo Card Container */}
            <div className="relative w-full h-full border border-white/10 overflow-hidden rounded-2xl bg-secondary/20 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:rotate-1 group-hover:scale-[1.01]">
              <img
                src={profileImg}
                alt="Ganesh"
                className="w-full h-full object-cover object-center scale-[1.03] group-hover:scale-[1.08] filter grayscale hover:grayscale-0 contrast-110 saturate-[1.15] brightness-95 transition-all duration-700 ease-out"
              />
              {/* Vignette Shadow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -left-5 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[11px] font-semibold text-foreground/90 pointer-events-none"
            >
              <Terminal size={12} className="text-primary animate-pulse" />
              <span>Java Developer</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -left-10 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[11px] font-semibold text-foreground/90 pointer-events-none"
            >
              <Sparkles size={12} className="text-primary animate-pulse" />
              <span>AI & Cloud</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -right-5 z-20 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-background/80 backdrop-blur-md border border-border/80 shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-[11px] font-semibold text-foreground/90 pointer-events-none"
            >
              <Cloud size={12} className="text-primary animate-pulse" />
              <span>Full Stack</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
