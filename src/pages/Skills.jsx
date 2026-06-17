import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava, FaReact, FaGitAlt, FaGithub,
  FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiRedux,
  SiTailwindcss, SiJavascript, SiPostman, SiVite, SiIntellijidea, SiApachemaven,
  SiShadcnui,
  SiSpringsecurity,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiDatabase } from "react-icons/fi";
import { BiLogoSpringBoot } from "react-icons/bi";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

const skills = [
  { name: "React", icon: FaReact, color: "#06B6D4", category: "Frontend", builtWith: "Frontend Architecture & Component Development" },
  { name: "JavaScript", icon: SiJavascript, color: "#F59E0B", category: "Frontend", builtWith: "REST integrations, DOM projects" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend", builtWith: "All UI projects in this portfolio" },
  { name: "Redux", icon: SiRedux, color: "#7C3AED", category: "Frontend", builtWith: "State Management & Application Data Flow" },
  { name: "HTML5", icon: FaHtml5, color: "#EF4444", category: "Frontend", builtWith: "Foundation of all web projects" },
  { name: "CSS3", icon: FaCss3Alt, color: "#2563EB", category: "Frontend", builtWith: "Custom animations & layouts" },
  { name: "Vite", icon: SiVite, color: "#7C3AED", category: "Frontend", builtWith: "All React project builds" },
  { name: "shadcn/ui", icon: SiShadcnui, color: "#7C3AED", category: "Frontend", builtWith: "UI components in React apps" },
  { name: "Java", icon: FaJava, color: "#EF4444", category: "Backend", builtWith: "All backend services & APIs" },
  { name: "Spring Boot", icon: SiSpringboot, color: "#22C55E", category: "Backend", builtWith: "REST APIs, Auth, Microservices" },
  { name: "Spring Security", icon: SiSpringsecurity, color: "#22C55E", category: "Backend", builtWith: "Authentication, Authorization & API" },
  { name: "Spring JPA", icon: BiLogoSpringBoot, color: "#22C55E", category: "Backend", builtWith: "Security Database Access & ORM Integration" },
  { name: "Maven", icon: SiApachemaven, color: "#EF4444", category: "Backend", builtWith: "Build tool for all Java projects" },
  { name: "MySQL", icon: SiMysql, color: "#2563EB", category: "Database", builtWith: "Primary DB for all projects" },
  { name: "SQL", icon: FiDatabase, color: "#06B6D4", category: "Database", builtWith: "Database Design & Management" },
  { name: "Git", icon: FaGitAlt, color: "#EF4444", category: "Tools", builtWith: "Version control, 600+ commits" },
  { name: "GitHub", icon: FaGithub, color: "#6B7280", category: "Tools", builtWith: "All project repos & collaboration" },
  { name: "Postman", icon: SiPostman, color: "#EF4444", category: "Tools", builtWith: "API testing & documentation" },
  { name: "VS Code", icon: VscVscode, color: "#2563EB", category: "Tools", builtWith: "Primary editor for all frontend" },
  { name: "IntelliJ", icon: SiIntellijidea, color: "#EF4444", category: "Tools", builtWith: "Primary IDE for Java/Spring Boot" },
];

function SkillCard({ name, icon: Icon, color, builtWith, index }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative cursor-pointer"
      style={{ perspective: "800px", height: "110px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onTouchStart={() => setFlipped((v) => !v)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d", width: "100%", height: "100%", position: "relative" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-2"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${color}15`, border: `1px solid ${color}30` }}
          >
            <Icon size={22} color={color} />
          </div>
          <span className="text-[12px] font-bold" style={{ color: "var(--text)" }}>
            {name}
          </span>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center gap-1.5 px-2 text-center"
          style={{
            background: `linear-gradient(135deg, ${color}18, ${color}08)`,
            border: `1px solid ${color}35`,
            boxShadow: `0 8px 24px ${color}20`,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Icon size={16} color={color} />
          <p className="text-[10.5px] font-semibold leading-snug" style={{ color: "var(--text)" }}>
            {builtWith}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 pt-24 pb-16 px-4 md:px-6"
    >
      <div className="max-w-225 mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          <div
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] mb-3"
            style={{ color: "var(--g2)" }}
          >
            <span className="w-5 h-px opacity-50" style={{ background: "var(--g2)" }} />
            Tech Arsenal
          </div>
          <h1
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(22px,5vw,52px)", color: "var(--text)" }}
          >
            Skills &amp; <span className="grad-text">Technologies</span>
          </h1>
          <p
            className="text-[13px] md:text-[15px] leading-relaxed max-w-120"
            style={{ color: "var(--soft)" }}
          >
            Hover any card to see what I've built with that technology.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-2 flex-wrap mb-6 md:mb-10"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="text-[12px] md:text-[13px] font-bold px-4 md:px-5 py-2 md:py-2.5 rounded-full cursor-pointer"
              style={{
                background: active === cat ? "var(--grad)" : "var(--card)",
                border: `1px solid ${active === cat ? "transparent" : "var(--border)"}`,
                color: active === cat ? "#fff" : "var(--soft)",
                boxShadow: active === cat ? "0 4px 16px rgba(124,58,237,0.35)" : "var(--shadow)",
              }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Count badge */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-4 md:mb-6 flex items-center gap-2"
        >
          <span
            className="text-[11px] md:text-[12px] font-semibold px-3 py-1 rounded-full"
            style={{
              background: "rgba(124,58,237,0.07)",
              border: "1px solid rgba(124,58,237,0.15)",
              color: "var(--g2)",
            }}
          >
            {filtered.length} technologies
          </span>
          <span className="text-[11px] md:text-[12px]" style={{ color: "var(--softer)" }}>
            — tap to flip
          </span>
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.name} {...skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </motion.div>
  );
}