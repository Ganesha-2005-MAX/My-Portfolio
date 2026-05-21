import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, GitBranch, Trophy, Code2, Target,
  Star, ArrowUpRight, Globe, Filter
} from "lucide-react";
import { useGitHubData, GitHubRepo } from "@/hooks/useGitHubData";
import { languageColors } from "@/lib/languageIcons";
import { Skeleton } from "@/components/ui/skeleton";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatRepoName(name: string): string {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

// Microlink screenshot API — free, no key needed for low-volume use
function previewUrl(homepage: string | null): string | null {
  if (!homepage) return null;
  return `https://api.microlink.io/?url=${encodeURIComponent(homepage)}&screenshot=true&meta=false&embed=screenshot.url`;
}

// Map common topics / languages → devicon CDN
const techIconMap: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "tailwind css": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
};

function getTechBadges(repo: EnrichedRepo): string[] {
  const tags = new Set<string>();
  if (repo.language) tags.add(repo.language.toLowerCase());
  repo.topics?.forEach((t) => tags.add(t.toLowerCase()));
  repo.techStack?.forEach((t) => tags.add(t.toLowerCase()));
  // Return only those we have icons for, max 5
  return [...tags].filter((t) => techIconMap[t]).slice(0, 5);
}

// ─── Types ────────────────────────────────────────────────────────────────────

type Category = "All" | "Web App" | "Full Stack" | "UI/UX" | "Tool";

interface EnrichedRepo extends GitHubRepo {
  category?: Category;
  techStack?: string[];
  liveUrl?: string | null;
  shortDesc?: string;
}

const STATIC_PROJECTS: EnrichedRepo[] = [
  {
    name: "hangman-game",
    description: "A high-fidelity, feature-rich Hangman game built with a focus on premium aesthetics, deep gamification, and a smooth user experience. Features a 7-view dashboard, Firestore leaderboards, and persistent settings.",
    html_url: "https://github.com/Ganesha-2005-MAX/hangman-game",
    language: "TypeScript",
    stargazers_count: 0,
    topics: ["react", "firebase", "tailwind", "typescript"],
    fork: false,
    homepage: "https://ganeshhangman.vercel.app",
    created_at: "",
    updated_at: "",
    category: "Web App",
    techStack: ["React", "Firebase", "Tailwind", "TypeScript"],
    liveUrl: "https://ganeshhangman.vercel.app",
    shortDesc: "High-fidelity Hangman game with a 7-view dashboard, real-time leaderboards, and achievements.",
  },
];

const CATEGORIES: Category[] = ["All", "Web App", "Full Stack", "UI/UX", "Tool"];

// ─── Sub-components ───────────────────────────────────────────────────────────

const ProjectSkeleton = () => (
  <div className="rounded-sm bg-card border border-border overflow-hidden">
    <Skeleton className="h-48 w-full rounded-none" />
    <div className="p-5 space-y-3">
      <div className="flex gap-2">
        <Skeleton className="h-5 w-16 rounded-full" />
        <Skeleton className="h-5 w-20 rounded-full" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="flex gap-2 pt-1">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>
    </div>
  </div>
);

const RepoCard = ({ repo, index }: { repo: EnrichedRepo; index: number }) => {
  const [imgError, setImgError] = useState(false);
  const liveUrl = repo.liveUrl ?? repo.homepage;
  const screenshotSrc = !imgError ? previewUrl(liveUrl ?? null) : null;
  const langColor = repo.language ? languageColors[repo.language] ?? "#8b8b8b" : "#8b8b8b";
  const techBadges = getTechBadges(repo);
  const description = repo.shortDesc ?? repo.description ?? "No description available.";
  const category = repo.category ?? "Web App";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-sm bg-card border border-border/50 overflow-hidden
                 hover:border-border transition-all duration-300 cursor-pointer"
      onClick={() => liveUrl && window.open(liveUrl, "_blank")}
    >
      {/* ── Card Header / Image ── */}
      <div className="relative h-48 bg-secondary/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {screenshotSrc ? (
          <img
            src={screenshotSrc}
            alt={repo.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-8xl font-bold opacity-[0.03] select-none font-mono">
            {String(index + 1).padStart(2, "0")}
          </div>
        )}

        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-primary/95 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            {category}
          </span>
        </div>

        {liveUrl && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 backdrop-blur-sm text-[10px] font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
        )}
      </div>

      {/* ── Card Body ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Title */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
            {formatRepoName(repo.name)}
          </h3>
          <ArrowUpRight
            size={16}
            className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5"
          />
        </div>

        {/* Short description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
          {description}
        </p>

        {/* Tech stack icon badges */}
        {techBadges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techBadges.map((tech) => (
              <div
                key={tech}
                title={tech.charAt(0).toUpperCase() + tech.slice(1)}
                className="w-7 h-7 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/40 hover:bg-secondary/80 transition-colors"
              >
                <img
                  src={techIconMap[tech]}
                  alt={tech}
                  className="w-4 h-4 object-contain"
                />
              </div>
            ))}
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex items-center gap-3 pt-1 border-t border-border mt-auto">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            <GitBranch size={13} />
            Source
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors py-2 ml-auto"
            >
              <Globe size={13} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// ─── DSA Stats Card ───────────────────────────────────────────────────────────

const DSAStatsCard = () => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="flex flex-col rounded-sm bg-card border border-border/50 overflow-hidden
               hover:border-border transition-all duration-300 group"
  >
    {/* Header */}
    <div className="relative h-48 bg-secondary/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/certificates/problem_solving_cert.jpg" 
          alt="Problem Solving Certificate" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
      </div>
      
      {/* Icon overlaid on top */}
      <Trophy className="w-16 h-16 text-primary/40 group-hover:scale-110 group-hover:text-primary transition-all duration-500 relative z-10 drop-shadow-2xl" />
      
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/90 text-[10px] font-bold uppercase tracking-wider text-primary-foreground z-10 shadow-lg">
        Competitive Coding
      </div>
      <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400 z-10 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Active
      </div>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-5">
      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
        DSA Problem Solver
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        Solved 200+ problems across competitive coding platforms, strengthening algorithmic thinking and problem-solving abilities.
      </p>

      {/* Stats grid */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { value: "200+", label: "Solved" },
          { value: "DSA", label: "Focus" },
          { value: "Java", label: "Language" },
        ].map(({ value, label }) => (
          <div key={label} className="text-center p-2.5 rounded-xl bg-secondary/50 border border-border">
            <div className="text-lg font-bold text-primary">{value}</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* Platform links */}
      <div className="flex flex-wrap gap-2 pt-1 border-t border-border mt-auto">
        <a
          href="https://leetcode.com/u/Ganesha_114/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFA116]/10 border border-[#FFA116]/30 text-xs font-semibold text-[#FFA116] hover:bg-[#FFA116]/20 transition-colors"
        >
          <Code2 size={12} /> LeetCode <ExternalLink size={11} />
        </a>
        <a
          href="https://codolio.com/profile/Ganesha_114"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#6C63FF]/10 border border-[#6C63FF]/30 text-xs font-semibold text-[#6C63FF] hover:bg-[#6C63FF]/20 transition-colors"
        >
          <Target size={12} /> Codolio <ExternalLink size={11} />
        </a>
      </div>
    </div>
  </motion.article>
);

// ─── Filter Tabs ──────────────────────────────────────────────────────────────

const FilterTabs = ({
  active,
  onChange,
  counts,
}: {
  active: Category;
  onChange: (c: Category) => void;
  counts: Partial<Record<Category, number>>;
}) => (
  <div className="flex flex-wrap justify-center gap-2 mb-10">
    <div className="flex items-center gap-1.5 text-muted-foreground mr-1">
      <Filter size={14} />
      <span className="text-[10px] font-medium uppercase tracking-[0.1em]">Filter</span>
    </div>
    {CATEGORIES.map((cat) => (
      <button
        key={cat}
        onClick={() => onChange(cat)}
        className={`px-3 py-1.5 rounded-sm text-xs font-medium border transition-all duration-200 ${active === cat
          ? "bg-foreground text-background border-foreground"
          : "bg-transparent text-muted-foreground border-transparent hover:text-foreground"
          }`}
      >
        {cat}
        {counts[cat] !== undefined && (
          <span className={`ml-1.5 ${active === cat ? "opacity-70" : "opacity-50"}`}>
            ({counts[cat]})
          </span>
        )}
      </button>
    ))}
  </div>
);

// ─── Main Section ─────────────────────────────────────────────────────────────

const Projects = () => {
  const { data, loading, error } = useGitHubData();
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  // Map our premium static projects and enrich them with live GitHub data if available
  const rawRepos: EnrichedRepo[] = STATIC_PROJECTS.map((staticProj) => {
    // If GitHub data is loaded successfully, find matching repo to merge stars and info
    const githubRepo = !loading && !error && data?.featuredRepos
      ? data.featuredRepos.find(
          (r) => r.name.toLowerCase() === staticProj.name.toLowerCase() ||
                 (staticProj.name === "gamified-learning" && r.name.toLowerCase() === "eduquest")
        )
      : null;

    if (githubRepo) {
      return {
        ...staticProj,
        stargazers_count: githubRepo.stargazers_count || staticProj.stargazers_count,
        description: githubRepo.description || staticProj.description,
        html_url: githubRepo.html_url || staticProj.html_url,
      };
    }
    return staticProj;
  });

  // Filtered repos
  const filteredRepos =
    activeCategory === "All"
      ? rawRepos
      : rawRepos.filter((r) => r.category === activeCategory);

  // Count per category
  const counts: Partial<Record<Category, number>> = { All: rawRepos.length };
  CATEGORIES.filter((c) => c !== "All").forEach((cat) => {
    const n = rawRepos.filter((r) => r.category === cat).length;
    if (n > 0) counts[cat] = n;
  });

  return (
    <section id="projects" className="pt-12 md:pt-16 pb-12 md:pb-16 relative bg-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-medium uppercase tracking-[0.2em] mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Selected Works.
          </h2>
          <p className="text-muted-foreground font-light mt-4 text-[15px] max-w-xl mx-auto">
            A collection of things I've built — from full-stack web apps to gamified learning platforms.
          </p>
        </motion.div>

        {/* Filter tabs */}
        {!loading && (
          <FilterTabs
            active={activeCategory}
            onChange={setActiveCategory}
            counts={counts}
          />
        )}

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredRepos.map((repo, i) => (
                <RepoCard key={repo.name} repo={repo} index={i} />
              ))}
              {/* DSA card always visible on "All" or hidden otherwise */}
              {activeCategory === "All" && (
                <DSAStatsCard key="dsa-card" />
              )}
            </AnimatePresence>
          )}

          {/* Empty state */}
          {!loading && filteredRepos.length === 0 && activeCategory !== "All" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="sm:col-span-2 lg:col-span-3 text-center py-20 text-muted-foreground"
            >
              <p className="text-4xl mb-3">🚧</p>
              <p className="font-semibold">No projects in this category yet.</p>
              <p className="text-sm mt-1">Check back soon!</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
