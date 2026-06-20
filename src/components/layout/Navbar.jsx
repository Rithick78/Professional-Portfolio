import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/App";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="w-full max-w-215 flex items-center justify-between px-4 py-2.5 rounded-full"
        style={{
          background: "var(--glass)",
          border: "1px solid var(--glass-b)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          boxShadow: "var(--shadow)",
        }}
      >
        {/* Logo */}
        <NavLink to="/" className="mt-2 ml-2">
          { dark ? <img src="/R7.png" alt="Logo" className="sm:w-9 sm:h-9 w-7 h-7 "/> :
              <img src="/R7L.png" alt="Logo" className="sm:w-9 sm:h-9 w-7 h-7"/> 
          }
          
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-[13px] font-medium px-4 py-2 rounded-full transition-all duration-200 no-underline ${
                  isActive
                    ? "text-(--g2) bg-[rgba(124,58,237,0.08)]"
                    : "text-(--soft) hover:text-(--text) hover:bg-(--border)"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            whileHover={{ rotate: 20 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
            style={{
              border: "1px solid var(--border2)",
              background: "transparent",
              color: "var(--soft)",
            }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.button>

          {/* Resume */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex text-[13px] font-bold px-5 py-2 rounded-full no-underline transition-all duration-300"
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
            Resume ↗
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              border: "1px solid var(--border2)",
              color: "var(--soft)",
              background: "transparent",
            }}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-4 right-4 rounded-3xl p-4 flex flex-col gap-1"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
              zIndex: 99,
            }}
          >
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `text-[14px] font-medium px-4 py-3 rounded-2xl transition-all no-underline ${
                    isActive
                      ? "text-(--g2) bg-[rgba(124,58,237,0.08)]"
                      : "text-(--soft)"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="#"
              className="mt-2 text-center text-[13px] font-bold px-4 py-3 rounded-2xl no-underline"
              style={{
                background: "var(--grad)",
                color: "#fff",
              }}
            >
              Resume ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}