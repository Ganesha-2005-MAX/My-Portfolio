import { GitBranch, Link, Code2, Mail, BarChart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © 2026 <span className="text-primary font-semibold">Ganesh</span>. All rights reserved.
        </span>
        <div className="flex items-center gap-3">
          {[
            { icon: GitBranch, href: "https://github.com/Ganesha-2005-MAX", label: "GitHub" },
            { icon: Link, href: "https://www.linkedin.com/in/ganesh-87878415g/", label: "LinkedIn" },
            { icon: Code2, href: "https://leetcode.com/u/Ganesha_114/", label: "LeetCode" },
            { icon: BarChart, href: "https://codolio.com/profile/Ganesha_114", label: "Codolio" },
            { icon: Mail, href: "mailto:ganeshwork3987@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary/80 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
