import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useRevealAll } from "@/hooks/useReveal";
import {
  FaLaptopCode,  
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiRedux, SiTailwindcss } from "react-icons/si";
/* ── TYPING HOOK ── */
function useTyping(words) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 42 : 78;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

/* ── SERVICES DATA ── */
const services = [
  {
    color: "#7C3AED",
    title: "Full Stack Development",
    desc: "End-to-end Java + React apps built for scale and performance.",
    icon: <FaLaptopCode size={20} />,
  },
  {
    color: "#2563EB",
    title: "REST API Design",
    desc: "Scalable, documented Spring Boot APIs with JWT security.",
    icon: <FaServer size={20} />,
  },
  {
    color: "#06B6D4",
    title: "Responsive UI",
    desc: "Pixel-perfect, mobile-first React & Tailwind CSS interfaces.",
    icon: <FaMobileAlt size={20} />,
  },
  {
    color: "#7C3AED",
    title: "Database Architecture",
    desc: "Optimized MySQL schemas, queries & Hibernate ORM integration.",
    icon: <FaDatabase size={20} />,
  },
  {
    color: "#2563EB",
    title: "Secure Authentication",
    desc: "JWT, Spring Security & role-based access control systems.",
    icon: <FaShieldAlt size={20} />,
  },
  {
    color: "#06B6D4",
    title: "Performance Tuning",
    desc: "Query optimization, lazy loading & Lighthouse 95+ scores.",
    icon: <FaTachometerAlt size={20} />,
  },
];

const techPills = [
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Redux",
    icon: SiRedux,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
];

const stats = [
  { num: "8+", label: "Projects Built" },
  { num: "1.5yrs", label: "Years Coding" },
  { num: "600+", label: "GitHub Commits" },
  { num: "200+", label: "DSA Problems" },
];

function ServiceCard({ icon, title, desc, color }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="shrink-0 w-45 md:w-55 rounded-2xl md:rounded-3xl p-4 md:p-5 relative overflow-hidden cursor-default"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
      }}
    >
      <div
        className="absolute -top-8 -right-8 w-20 h-20 rounded-full opacity-[0.06]"
        style={{ background: "var(--grad)" }}
      />
      <div
        className="w-9 h-9 md:w-11 md:h-11 rounded-[10px] md:rounded-xl flex items-center justify-center mb-3"
        style={{
          background: `linear-gradient(135deg, ${color}14, ${color}22)`,
          color,
        }}
      >
        {icon}
      </div>
      <h4 className="text-[13px] md:text-[14px] font-bold mb-1.5" style={{ color: "var(--text)" }}>
        {title}
      </h4>
      <p className="text-[11px] md:text-[12px] leading-relaxed" style={{ color: "var(--soft)" }}>
        {desc}
      </p>
    </motion.div>
  );
}

export default function Home() {
  useRevealAll();
  const roleText = useTyping(["Java Full Stack Developer", "Software Developer"]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ── HERO ── */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-6 pt-24 md:pt-28 pb-16 md:pb-20">

        {/* Left floating code card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="code-card absolute hidden lg:block rounded-2xl p-4 w-75 h-47.5"
          style={{
            left: "7%",
            top: "15%",
            transform: "translateY(-50%)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            animation: "floatY 6s ease-in-out infinite",
          }}
        >
          <div
            className="text-[10px] font-semibold uppercase tracking-widest mb-2 pb-2"
            style={{
              color: "var(--softer)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            React · Component
          </div>

          <div>
            <span className="kw">const</span> dev = {"{"}
          </div>
          <div>
            &nbsp;&nbsp;name: <span className="str">'Rithick'</span>,
          </div>
          <div>
            &nbsp;&nbsp;role: <span className="str">'Java Full Stack'</span>,
          </div>
          <div>
            &nbsp;&nbsp;stack: [
            <span className="fn">'Spring Boot'</span>,
            <span className="fn"> 'React'</span>],
          </div>
          <div>
            &nbsp;&nbsp;openToWork: <span className="kw">true</span>
          </div>
          <div>{"}"}</div>
        </motion.div>

        {/* Right floating code card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="code-card absolute hidden lg:block rounded-2xl p-4 w-75 h-48.5"
          style={{
            right: "5%",
            top: "15%",
            transform: "translateY(-50%)",
            background: "var(--card)",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow)",
            animation: "floatY 6s ease-in-out infinite 1.2s",
          }}
        >
          <div
            className="text-[10px] font-semibold uppercase tracking-widest mb-2 pb-2"
            style={{
              color: "var(--softer)",
              borderBottom: "1px solid var(--border)",
            }}
          >
            Spring Boot · API
          </div>

          <div>
            <span className="kw">@RestController</span>
          </div>
          <div>
            <span className="kw">public class</span>{" "}
            <span className="fn">Developer</span> {"{"}
          </div>
          <div>
            &nbsp;&nbsp;<span className="kw">@GetMapping</span>(
            <span className="str">"/portfolio"</span>)
          </div>
          <div>
            &nbsp;&nbsp;<span className="fn">String</span> getProfile() {"{"}
          </div>
          <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="kw">return</span>{" "}
            <span className="str">"Building Scalable Apps"</span>;
          </div>
          <div>&nbsp;&nbsp;{"}"}</div>
          <div>{"}"}</div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative w-38 h-38 sm:w-45.5 sm:h-45.5 mb-6"
        >
          {/* Spinning ring */}
          <div
            className="profile-ring absolute rounded-full"
            style={{ inset: "-5px", animation: "spin 8s linear infinite", opacity: 0.45 }}
          />
          {/* Glow */}
          <div
            className="absolute rounded-full"
            style={{
              inset: "-18px",
              background: "var(--grad)",
              filter: "blur(28px)",
              opacity: 0.28,
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
          />
          {/* Frame */}
          <div
            className="absolute rounded-full flex items-center justify-center overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <img src="/Rithick.png" className="object-cover rounded-full" />
          </div>
        </motion.div>

        {/* Role badge — fixed width to prevent cutoff */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full mb-4 md:mb-5"
          style={{
            color: "var(--g2)",
            background: "rgba(124,58,237,0.07)",
            border: "1px solid rgba(124,58,237,0.14)",
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            maxWidth: "90vw",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "var(--g2)", animation: "blink 1.8s ease-in-out infinite" }}
          />
          <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{roleText}</span>
          <span
            className="inline-block w-0.5 h-3.5 align-middle shrink-0"
            style={{ background: "var(--g2)", animation: "blink 0.8s step-end infinite" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display font-extrabold leading-[1.07] tracking-tight mb-4 md:mb-5 px-2"
          style={{ fontSize: "clamp(28px, 6vw, 64px)", color: "var(--text)" }}
        >
          Creating{" "}
          <span className="grad-text">enterprise‑grade</span>
          <br />
          solutions that bridge
          <br />
          <span className="grad-text">business &amp; technology.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[13px] md:text-[15px] leading-[1.75] max-w-120 mb-7 md:mb-8 px-2"
          style={{ color: "var(--soft)" }}
        >
          Java Full Stack Developer passionate about building secure, scalable, and
          user-centric applications with{" "}
          <strong style={{ color: "var(--text)" }}>Java, Spring Boot, React,</strong>{" "}
          and <strong style={{ color: "var(--text)" }}>MySQL.</strong>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-3 flex-wrap justify-center mb-7 md:mb-9"
        >
          <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full text-[13px] md:text-[14px] font-bold text-white no-underline"
              style={{
                background: "var(--grad)",
                boxShadow: "0 6px 24px -6px rgba(124,58,237,0.55)",
              }}
            >
              View Projects <ArrowRight size={14} />
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 rounded-full text-[13px] md:text-[14px] font-bold no-underline transition-all duration-300"
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
              <MessageCircle size={14} /> Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex gap-2 flex-wrap justify-center px-2"
        >
          {techPills.map(({ name, icon: Icon }) => (
            <motion.span
              key={name}
              whileHover={{
                y: -2,
                borderColor: "var(--g2)",
                color: "var(--text)",
              }}
              className="text-[12px] font-semibold px-4 py-2 rounded-full cursor-default transition-all duration-250 flex items-center gap-2"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--soft)",
                boxShadow: "var(--shadow)",
              }}
            >
              <Icon className="w-4 h-4" />
              {name}
            </motion.span>
          ))}
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="relative z-10 px-4 md:px-6 pb-16 md:pb-20">
        <div className="max-w-215 mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map(({ num, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl md:rounded-3xl p-4 md:p-6 text-center relative overflow-hidden"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                className="font-display font-extrabold tracking-tight mb-1 grad-text"
                style={{ fontSize: "clamp(22px, 5vw, 36px)" }}
              >
                {num}
              </div>
              <div
                className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.07em]"
                style={{ color: "var(--soft)" }}
              >
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVICES MARQUEE ── */}
      <section className="relative z-10 pb-20 md:pb-24">
        <div className="max-w-215 mx-auto px-4 md:px-6 mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] mb-3"
              style={{ color: "var(--g2)" }}
            >
              <span className="w-5 h-px opacity-50" style={{ background: "var(--g2)" }} />
              What I Can Provide
            </div>
            <h2
              className="font-display font-extrabold tracking-tight mb-2 md:mb-3"
              style={{ fontSize: "clamp(22px, 4vw, 40px)", color: "var(--text)" }}
            >
              Services I <span className="grad-text">Offer</span>
            </h2>
            <p
              className="text-[13px] md:text-[14px] leading-[1.7] max-w-100"
              style={{ color: "var(--soft)" }}
            >
              End-to-end solutions from architecture to deployment
            </p>
          </motion.div>
        </div>

        <div className="marquee-wrap">
          <div className="marquee-track py-2 md:py-3">
            {[...services, ...services].map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}