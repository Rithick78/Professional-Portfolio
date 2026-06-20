import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Briefcase } from "lucide-react";
import { FaJava, FaReact, FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiSpringboot, SiMysql, SiRedux, SiTailwindcss,
  SiPostman, SiApachemaven, SiIntellijidea, SiLeetcode,
} from "react-icons/si";
import { FaCertificate } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { label: "Java", icon: FaJava, color: "#2563EB" },
  { label: "Spring Boot", icon: SiSpringboot, color: "#7C3AED" },
  { label: "React", icon: FaReact, color: "#06B6D4" },
  { label: "MySQL", icon: SiMysql, color: "#2563EB" },
  { label: "Redux", icon: SiRedux, color: "#7C3AED" },
  { label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Git", icon: FaGitAlt, color: "#7C3AED" },
  { label: "Postman", icon: SiPostman, color: "#06B6D4" },
  { label: "Maven", icon: SiApachemaven, color: "#2563EB" },
  { label: "VS Code", icon: VscVscode, color: "#7C3AED" },
  { label: "IntelliJ", icon: SiIntellijidea, color: "#06B6D4" },
];

const timeline = [
  {
    year: "Sep 2025 — Mar 2026",
    role: "Software Developer Intern",
    company: "Exordium DCA",
    desc: "Developed and maintained scalable React.js applications, delivering reusable UI components, seamless API integrations, and collaborating effectively with a team of 3 developers using GitLab-based workflows.",
  },
];

const certifications = [
  {
    title: "Frontend Developer",
    issuer: "Green's Technology Chennai · 2024",
    icon: FaCertificate,
    color: "#2563EB",
  },
  {
    title: "LeetCode 150+",
    issuer: "Data Structures & Algorithms",
    icon: SiLeetcode,
    color: "#F89F1B",
  },
  {
    title: "Striver A-Z Sheet",
    issuer: "200+ Problems Solved",
    icon: MdAnalytics,
    color: "#7C3AED",
  },
];

const infoCards = [
  { icon: GraduationCap, label: "Education", value: "BCA · 2024" },
  { icon: Briefcase, label: "Experience", value: "6+ months" },
];

export default function About() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll(".t-item");
      items?.forEach((item, i) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            delay: i * 0.1,
          }
        );
      });
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 pt-24 pb-16 px-4 md:px-6"
    >
      <div className="max-w-225 mx-auto">

        {/* ── HEADER ── */}
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
            About Me
          </div>
          <h1
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(22px,5vw,52px)", color: "var(--text)" }}
          >
            The Developer <span className="grad-text">Behind the Code</span>
          </h1>
          <p
            className="text-[13px] md:text-[15px] leading-relaxed max-w-125"
            style={{ color: "var(--soft)" }}
          >
            Passionate about building scalable solutions that make a real impact.
          </p>
        </motion.div>

        {/* ── BIO + IMAGE ── */}
        <div className="grid md:grid-cols-[1.2fr_1.7fr] gap-6 md:gap-10 mb-10 md:mb-16 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-4xl md:rounded-[32px] overflow-hidden mx-4 md:mx-8"
              style={{
                aspectRatio: "3/4",
                background: "linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.14),rgba(6,182,212,0.08))",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: "radial-gradient(ellipse at 50% 30%, rgba(124,58,237,0.3), transparent 70%)",
                }}
              />
              <img src="/Rithick.png" className="w-full h-full object-cover" alt="Rithick Jackson" />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: "linear-gradient(to top, rgba(124,58,237,0.1), transparent)" }}
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] mb-3"
              style={{ color: "var(--g2)" }}
            >
              <span className="w-4 h-px opacity-50" style={{ background: "var(--g2)" }} />
              Java Full Stack Developer
            </div>
            <h2
              className="font-display font-extrabold tracking-tight mb-4 md:mb-5"
              style={{ fontSize: "clamp(18px,3vw,30px)", color: "var(--text)" }}
            >
              Rithick Jackson
            </h2>

            <p
              className="text-[13px] md:text-[14px] leading-[1.85] mb-4"
              style={{ color: "var(--soft)" }}
            >
              <strong style={{ color: "var(--text)" }}>Java Full Stack Developer</strong> specializing
              in building scalable, high-performance web applications using{" "}
              <strong style={{ color: "var(--text)" }}>
                Java, Spring Boot, React, and MySQL
              </strong>
              . Experienced in designing secure RESTful APIs, developing responsive user interfaces,
              and implementing efficient database solutions.
            </p>
            <p
              className="text-[13px] md:text-[14px] leading-[1.85] mb-5 md:mb-7"
              style={{ color: "var(--soft)" }}
            >
              Passionate about delivering robust, maintainable software through clean architecture,
              modern development practices, and continuous learning.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-2 md:gap-3 mb-5 md:mb-7">
              {infoCards.map(({ icon: Icon, label, value, green }) => (
                <div
                  key={label}
                  className="rounded-[14px] p-2.5 md:p-3.5"
                  style={{ background: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={13} style={{ color: "var(--g2)" }} />
                    <span
                      className="text-[10px] md:text-[10.5px] font-bold uppercase tracking-[0.08em]"
                      style={{ color: "var(--softer)" }}
                    >
                      {label}
                    </span>
                  </div>
                  <div
                    className="text-[12px] md:text-[13px] font-semibold"
                    style={{ color: green ? "#059669" : "var(--text)" }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Trait pills */}
            <div className="flex gap-2 flex-wrap">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail Oriented"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] md:text-[12px] font-semibold px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                  style={{
                    background: "rgba(124,58,237,0.07)",
                    border: "1px solid rgba(124,58,237,0.15)",
                    color: "var(--g2)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── TECH STACK MARQUEE ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <div
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] mb-4 md:mb-6"
            style={{ color: "var(--g2)" }}
          >
            <span className="w-5 h-px opacity-50" style={{ background: "var(--g2)" }} />
            Tech Stack
          </div>

          {/* Row 1 — scrolls left */}
          <div className="marquee-wrap mb-3">
            <div className="marquee-track" style={{ animation: "marquee 50s linear infinite" }}>
              {[...techStack, ...techStack].map(({ label, icon: Icon, color }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="shrink-0 flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-full cursor-default"
                  style={{
                    background: `${color}10`,
                    border: `1px solid ${color}28`,
                    color,
                    fontSize: "12px",
                    fontWeight: "600",
                  }}
                >
                  <Icon size={14} />
                  <span style={{ color: "var(--text)" }}>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className="marquee-wrap">
            <div
              className="marquee-track"
              style={{ animation: "marquee 50s linear infinite reverse" }}
            >
              {[...techStack]
                .reverse()
                .concat([...techStack].reverse())
                .map(({ label, icon: Icon, color }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="shrink-0 flex items-center gap-2 px-4 md:px-5 py-2 md:py-3 rounded-full cursor-default"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}28`,
                      color,
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    <Icon size={14} />
                    <span style={{ color: "var(--text)" }}>{label}</span>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>

        {/* ── EXPERIENCE TIMELINE ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
          ref={timelineRef}
        >
          <div
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] mb-5 md:mb-8"
            style={{ color: "var(--g2)" }}
          >
            <span className="w-5 h-px opacity-50" style={{ background: "var(--g2)" }} />
            Experience Timeline
          </div>
          <div className="relative pl-8">
            <div
              className="absolute left-1.75 top-0 bottom-0 w-px"
              style={{ background: "var(--border2)" }}
            />
            {timeline.map(({ year, role, company, desc }, i) => (
              <div key={i} className="t-item relative mb-8 last:mb-0">
                <div
                  className="absolute -left-6.25 top-1 w-3 h-3 rounded-full"
                  style={{ border: "2px solid var(--g2)", background: "var(--bg)" }}
                />
                <span
                  className="inline-block text-[11px] font-bold px-3 py-1 rounded-full mb-2"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    color: "var(--soft)",
                  }}
                >
                  {year}
                </span>
                <h4
                  className="text-[14px] md:text-[15px] font-bold mb-1"
                  style={{ color: "var(--text)" }}
                >
                  {role}
                </h4>
                <div
                  className="text-[12px] font-semibold mb-2"
                  style={{ color: "var(--g2)" }}
                >
                  {company}
                </div>
                <p
                  className="text-[12px] md:text-[13px] leading-relaxed"
                  style={{ color: "var(--soft)" }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── CERTIFICATIONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] mb-5 md:mb-6"
            style={{ color: "var(--g2)" }}
          >
            <span className="w-5 h-px opacity-50" style={{ background: "var(--g2)" }} />
            Certifications &amp; Achievements
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {certifications.map(({ title, issuer, icon: Icon, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl p-3 md:p-4 flex gap-3 items-start"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.12))",
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <h4
                    className="text-[12px] md:text-[13px] font-bold mb-0.5"
                    style={{ color: "var(--text)" }}
                  >
                    {title}
                  </h4>
                  <p
                    className="text-[11px] md:text-[11.5px]"
                    style={{ color: "var(--soft)" }}
                  >
                    {issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}