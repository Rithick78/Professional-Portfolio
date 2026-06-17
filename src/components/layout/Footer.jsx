import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Rithick78",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rithickjackson/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rithick.jackson/",
    icon: FaInstagram,
  },
  {
    label: "Email",
    href: "mailto:rithickjacksonv@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/Rithick-jackson/",
    icon: SiLeetcode,
  },
];

export default function Footer() {
  return (
    <footer
      className="relative z-10 px-4 md:px-6 pb-3 md:pb-5"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-215 mx-auto flex flex-col md:flex-row items-center justify-between py-5 md:py-7 gap-4">
        <p
          className="text-[12px] md:text-[13px] text-center md:text-left"
          style={{ color: "var(--soft)" }}
        >
          Designed &amp; Developed by{" "}
          <span className="grad-text font-bold">Rithick Jackson</span> · 2026
        </p>

        <div className="flex items-center gap-2 justify-center">
          {socials.map(({ label, icon: Icon, href, svg }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              aria-label={label}
              className="w-8 h-8 md:w-9 md:h-9 rounded-full flex items-center justify-center no-underline transition-colors duration-300"
              style={{
                border: "1px solid var(--border)",
                background: "var(--card)",
                color: "var(--soft)",
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
              {<Icon size={14} />}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}