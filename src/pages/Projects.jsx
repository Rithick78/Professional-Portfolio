import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  FaJava, FaReact,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiTailwindcss,
  SiRedux, SiMongodb, SiHibernate,
} from "react-icons/si";

const tagIconMap = {
  Java: FaJava,
  React: FaReact,
  "Spring Boot": SiSpringboot,
  MySQL: SiMysql,
  Tailwind: SiTailwindcss,
  Redux: SiRedux,
  MongoDB: SiMongodb,
  Hibernate: SiHibernate,
};

const tagColors = {
  Java: "#EF4444",
  React: "#06B6D4",
  "Spring Boot": "#22C55E",
  MySQL: "#2563EB",
  Tailwind: "#06B6D4",
  Redux: "#7C3AED",
  MongoDB: "#22C55E",
  Hibernate: "#7C3AED",
};

const filters = ["All", "Full Stack", "Frontend"];

const projects = [
  {
    id: 1,
    title: "FoodBill Pro",
    image: "/FoodBill.png",
    desc: "A smart digital menu and billing system for food businesses. Customers see real-time stock availability — no more ordering unavailable items.",
    long: "FoodBill Pro eliminates the frustration of ordering out-of-stock food items by providing a live digital menu where customers instantly see what's available. Admins can add, edit, delete menu items, and mark items as out-of-stock in real time. The built-in billing system lets admins manage the full order flow — from menu to bill generation — reducing customer wait time and improving the overall dining experience.",
    tags: ["Java", "Spring Boot", "React", "Tailwind", "MySQL", "Redux"],
    category: "Full Stack",
    github: "https://github.com/Rithick78/FoodBillPro--Backend",
    live: "#",
    featured: true,
    accentColor: "#2563EB",
    features: ["JWT Auth", "Admin Dashboard", "Live Stock Status", "Billing System", "Digital Menu"],
  },
  {
    id: 2,
    title: "CareerScan",
    image: "/Careerscan.png",
    desc: "Spring Boot REST API that powers AI-based job matching using resume parsing, live job search, and skill overlap scoring.",
    long: "Automatically parses resumes, extracts skills and experience, searches live job listings, and calculates match scores based on skill overlap. Provides personalized job recommendations, helping users quickly identify opportunities that align with their qualifications and career goals.",
    tags: ["Java", "Spring Boot", "React", "Tailwind", "MySQL", "Redux", "ShadCN"],
    category: "Full Stack",
    github: "https://github.com/Rithick78/CareerScan---backend",
    live: "https://careerscan.netlify.app/",
    featured: true,
    accentColor: "#06B6D4",
    features: ["AI Resume Parsing", "Smart Job Matching", "JWT-Based", "Save & Track Jobs"],
  },
  {
    id: 3,
    title: "AI-ResumeBuilder",
    image: "/Resume.png",
    desc: "AI-powered resume builder that helps users create professional resumes with personalized content and modern templates.",
    long: "Generates tailored resume content using AI, provides real-time resume previews, and supports customizable themes for personalization. Includes secure user accounts, resume management, and one-click download and sharing features, enabling users to create polished resumes quickly and efficiently.",
    tags: ["React", "ShadCN", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/Rithick78/ai-resume-builder",
    live: "https://ai-resume-builder-rj.netlify.app/",
    featured: false,
    accentColor: "#7C3AED",
    features: ["AI-Powered Resumes", "Clerk Authentication", "Strapi CMS Integration", "Instant Download & Sharing"],
  },
  {
    id: 4,
    title: "AI-MockInterview",
    image: "/Mock.png",
    desc: "AI-powered mock interview platform that helps users improve interview performance through realistic practice sessions and instant feedback.",
    long: "Simulates real interview experiences with interactive question-and-answer sessions, webcam-based practice, and text-to-speech capabilities. Provides instant performance ratings, personalized corrective feedback, and progress insights to help users strengthen communication skills, identify improvement areas, and build confidence for real-world interviews.",
    tags: ["Next.js", "ShadCN", "Tailwind"],
    category: "Frontend",
    github: "https://github.com/Rithick78/AI-Mock-Interview",
    live: "https://ai-mock-interview-rj.netlify.app/",
    featured: false,
    accentColor: "#22C55E",
    features: ["AI Mock Interviews", "Webcam-Based Sessions", "Text-to-Speech AI", "AI Feedback"],
  },
  {
    id: 5,
    title: "Animated-Portfolio",
    image: "/PersonalPorfolio.png",
    desc: "Modern developer portfolio showcasing projects, technical expertise, and achievements through an engaging and responsive user experience.",
    long: "Features interactive project showcases, smooth animations, and a clean, professional design that highlights technical skills and accomplishments. Optimized for seamless performance across desktop, tablet, and mobile devices, providing an intuitive browsing experience while maintaining a scalable and maintainable architecture.",
    tags: ["Next.js", "ShadCN", "React Bits", "Aceternity UI"],
    category: "Frontend",
    github: "https://github.com/Rithick78/Personal-Portfolio",
    live: "https://portfoliorj7.netlify.app/",
    featured: false,
    accentColor: "#EF4444",
    features: ["Modern Portfolio", "React Bits Animations", "Aceternity UI"],
  },
  {
    id: 6,
    title: "Todo List Application",
    image: "/Todo.png",
    desc: "Task management application designed to organize daily activities through a simple and intuitive user experience.",
    long: "Provides complete task management functionality, allowing users to create, view, update, and delete tasks efficiently. Features a clean and responsive interface, organized workflows, and component-based architecture to deliver a smooth and productive experience across desktop and mobile devices.",
    tags: ["React", "CSS"],
    category: "Frontend",
    github: "https://github.com/Rithick78/Todo-list",
    live: "https://todo-list-rj.netlify.app/",
    featured: false,
    accentColor: "#6366F1",
    features: ["Task Management", "CRUD Operations", "Responsive Interface"],
  },
  {
    id: 7,
    title: "Weather Application",
    image: "/Weather.png",
    desc: "Real-time weather application that provides current weather conditions and temperature updates for locations worldwide.",
    long: "Allows users to search weather information by city name and instantly view current temperature and weather conditions. Integrates live weather data retrieval, responsive layouts, and an intuitive user interface to deliver accurate and accessible weather updates across desktop and mobile devices.",
    tags: ["React", "CSS"],
    category: "Frontend",
    github: "https://github.com/Rithick78/Weather-finder",
    live: "https://weather-project-rj.netlify.app/",
    featured: false,
    accentColor: "#6366F1",
    features: ["Real-Time Weather Data", "City-Based Search", "API Integration"],
  },
  {
    id: 8,
    title: "First Portfolio",
    image: "/Portfolio.png",
    desc: "Personal portfolio website built to showcase projects, skills, and learning progress through a clean and responsive interface.",
    long: "Developed as part of a web development learning journey, featuring project highlights, technical skills, and a structured presentation of work. Emphasized component-based design, responsive layouts, and user-friendly navigation to deliver a consistent experience across desktop, tablet, and mobile devices.",
    tags: ["React", "CSS"],
    category: "React",
    github: "https://github.com/Rithick78/Portfolio",
    live: "https://portfolio-r-j.netlify.app/",
    featured: false,
    accentColor: "#6366F1",
    features: ["React Development", "Responsive Design", "Project Showcase", "Component-Based UI"],
  },

];

/* ── TAG CHIP ── */
function TagChip({ tag }) {
  const Icon = tagIconMap[tag];
  const color = tagColors[tag] || "var(--g2)";
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] md:text-[11px] font-semibold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full"
      style={{
        background: `${color}12`,
        border: `1px solid ${color}28`,
        color,
      }}
    >
      {Icon && <Icon size={10} />}
      {tag}
    </span>
  );
}

/* ── FEATURED CARD ── */
function FeaturedCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl md:rounded-4xl overflow-hidden"
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? project.accentColor + "40" : "var(--border)"}`,
        boxShadow: hovered ? `0 20px 60px ${project.accentColor}20` : "var(--shadow)",
        transition: "border-color 0.4s, box-shadow 0.4s",
      }}
    >
      {/* Gradient bg overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 pointer-events-none rounded-3xl md:rounded-4xl"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}08, transparent 60%)`,
        }}
      />

      {/* Image area — clean gradient, no icons */}
      <div
        className="relative h-35 md:h-45 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}15, rgba(124,58,237,0.12), rgba(6,182,212,0.08))`,
        }}
      >
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
        {/* Featured badge */}
        <div
          className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] md:text-[11px] font-bold px-2.5 py-1 md:px-3 md:py-1.5 rounded-full"
          style={{
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.25)",
            color: "var(--g2)",
          }}
        >
          <Star size={10} fill="currentColor" /> Featured
        </div>

        {/* Links on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-3 right-3 flex gap-2"
        >

          <a href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center no-underline"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub size={13} />
          </a>

          <a href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center no-underline"
            style={{ background: "var(--grad)", color: "#fff" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-4 md:p-6">
        <h3
          className="font-display font-bold text-[16px] md:text-[18px] mb-1.5 md:mb-2"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-[12px] md:text-[13.5px] leading-relaxed mb-3 md:mb-4"
          style={{ color: "var(--soft)" }}
        >
          {hovered ? project.long : project.desc}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
          {project.features.map((f) => (
            <span
              key={f}
              className="text-[10px] md:text-[11px] font-semibold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                color: "var(--soft)",
              }}
            >
              ✓ {f}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 md:gap-1.5 mb-4 md:mb-5">
          {project.tags.map((t) => <TagChip key={t} tag={t} />)}
        </div>

        {/* Bottom links */}
        <div className="flex gap-2 md:hidden">

          <a href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-full text-[12px] md:text-[13px] font-bold no-underline transition-all duration-300"
            style={{
              border: "1px solid var(--border2)",
              color: "var(--text)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--g2)";
              e.currentTarget.style.color = "var(--g2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border2)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            <FaGithub size={13} /> GitHub
          </a>

          <a href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 md:py-2.5 rounded-full text-[12px] md:text-[13px] font-bold no-underline text-white"
            style={{ background: "var(--grad)" }}
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── SMALL CARD ── */
function SmallCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-[18px] md:rounded-3xl overflow-hidden flex flex-col"
      style={{
        background: "var(--card)",
        border: `1px solid ${hovered ? project.accentColor + "40" : "var(--border)"}`,
        boxShadow: hovered ? `0 12px 40px ${project.accentColor}18` : "var(--shadow)",
        transition: "border-color 0.35s, box-shadow 0.35s, transform 0.35s",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* ── IMAGE AREA ── */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: "140px",
          background: `linear-gradient(135deg, ${project.accentColor}15, rgba(124,58,237,0.12), rgba(6,182,212,0.08))`,
          flexShrink: 0,
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              transition: "transform 0.4s ease",
              transform: hovered ? "scale(1.05)" : "scale(1)",
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {project.tags[0] && tagIconMap[project.tags[0]] && (() => {
              const Icon = tagIconMap[project.tags[0]];
              return <Icon size={36} color={`${project.accentColor}40`} />;
            })()}
          </div>
        )}

        {/* Links — top right */}
        <div className="absolute top-2.5 right-2.5 flex gap-1.5">

          <a href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center no-underline transition-all duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--soft)",
              background: "var(--card)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--g2)";
              e.currentTarget.style.color = "var(--g2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--soft)";
            }}
          >
            <FaGithub size={12} />
          </a>

          <a href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center no-underline"
            style={{ background: "var(--grad)", color: "#fff" }}
          >
            <ExternalLink size={12} />
          </a>
        </div>
      </div >

      {/* ── CONTENT ── */}
      < div className="p-4 md:p-5 flex flex-col gap-3 flex-1" >
        <div>
          <h3
            className="font-display font-bold text-[14px] md:text-[15px] mb-1"
            style={{ color: "var(--text)" }}
          >
            {project.title}
          </h3>
          <p
            className="text-[12px] md:text-[12.5px] leading-relaxed"
            style={{ color: "var(--soft)" }}
          >
            {project.desc}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 md:gap-1.5 mt-auto">
          {project.tags.map((t) => <TagChip key={t} tag={t} />)}
        </div>
      </div >
    </motion.div >
  );
}

/* ── MAIN ── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const filteredRest =
    activeFilter === "All" ? rest : rest.filter((p) => p.category === activeFilter);

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
          className="mb-8 md:mb-14"
        >
          <div
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] mb-3"
            style={{ color: "var(--g2)" }}
          >
            <span className="w-5 h-px opacity-50" style={{ background: "var(--g2)" }} />
            Portfolio
          </div>
          <h1
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(22px,5vw,52px)", color: "var(--text)" }}
          >
            Featured <span className="grad-text">Projects</span>
          </h1>
          <p
            className="text-[13px] md:text-[15px] leading-relaxed max-w-125"
            style={{ color: "var(--soft)" }}
          >
            Real-world applications built end-to-end. Hover cards for more details.
          </p>
        </motion.div>

        {/* Featured 2 cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-10 md:mb-16">
          {featured.map((p) => (
            <FeaturedCard key={p.id} project={p} />
          ))}
        </div>

        {/* More projects */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center justify-between flex-wrap gap-3 md:gap-4 mb-5 md:mb-6">
            <h2
              className="font-display font-bold text-[18px] md:text-[22px]"
              style={{ color: "var(--text)" }}
            >
              More Projects
              <span
                className="ml-2 text-[12px] md:text-[14px] font-semibold px-2 py-0.5 md:px-2.5 md:py-1 rounded-full align-middle"
                style={{
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.18)",
                  color: "var(--g2)",
                }}
              >
                {rest.length}+
              </span>
            </h2>

            {/* Filters */}
            <div className="flex gap-1.5 md:gap-2 flex-wrap">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  whileTap={{ scale: 0.96 }}
                  className="text-[11px] md:text-[12px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full cursor-pointer transition-all duration-250"
                  style={{
                    background: activeFilter === f ? "var(--grad)" : "var(--card)",
                    border: `1px solid ${activeFilter === f ? "transparent" : "var(--border)"}`,
                    color: activeFilter === f ? "#fff" : "var(--soft)",
                    boxShadow: activeFilter === f ? "0 4px 14px rgba(124,58,237,0.3)" : "var(--shadow)",
                  }}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Small cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            >
              {(showAll ? filteredRest : filteredRest.slice(0, 3)).map((p, i) => (
                <SmallCard key={p.id} project={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View more */}
        {filteredRest.length > 3 && (
          <div className="flex justify-center mt-4 md:mt-6">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full text-[12px] md:text-[13px] font-bold cursor-pointer transition-all duration-300"
              style={{
                border: "1px solid var(--g2)",
                color: "var(--g2)",
                background: "rgba(124,58,237,0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--grad)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.border = "1px solid transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(124,58,237,0.05)";
                e.currentTarget.style.color = "var(--g2)";
                e.currentTarget.style.border = "1px solid var(--g2)";
              }}
            >
              {showAll ? "Show Less" : `View All ${filteredRest.length} Projects`}
              <ArrowRight size={13} />
            </motion.button>
          </div>
        )}

      </div>
    </motion.div>
  );
}