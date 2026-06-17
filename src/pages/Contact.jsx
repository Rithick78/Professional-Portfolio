import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rithickjacksonv@email.com",
    href: "mailto:rithickjacksonv@email.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai,TN",
    href: null,
  },
];

const socials = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Rithick78", color: "#0F172A" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rithickjackson/", color: "#2563EB" },
  { icon: FaInstagram, label: "Instagram", href: "https://www.instagram.com/rithick.jackson/", color: "#E1306C" },
  { icon: Mail, label: "Email", href: "mailto:rithickjacksonv@gmail.com", color: "#7C3AED" },
  { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/Rithick-jackson/", color: "#F59E0B" },
];

const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8719ce28-118e-4e3d-8b16-d53f2182a36c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_kgmbxqe",
        "template_lkotjwu",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "wzvagj_6ZgsjxUj0d"
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const getInputStyle = (focused) => ({
    width: "100%",
    background: "var(--bg)",
    border: `1px solid ${focused ? "var(--g2)" : "var(--border2)"}`,
    borderRadius: "12px",
    padding: "11px 14px",
    fontSize: "13px",
    color: "var(--text)",
    outline: "none",
    fontFamily: "inherit",
    boxShadow: focused ? "0 0 0 3px rgba(124,58,237,0.08)" : "none",
    transition: "border-color 0.25s, box-shadow 0.25s",
  });

  const [focused, setFocused] = useState({});
  const handleFocus = (name) => setFocused((p) => ({ ...p, [name]: true }));
  const handleBlur = (name) => setFocused((p) => ({ ...p, [name]: false }));

  const labelStyle = {
    display: "block",
    fontSize: "11px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--softer)",
    marginBottom: "6px",
  };

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
            Get In Touch
          </div>
          <h1
            className="font-display font-extrabold tracking-tight mb-3"
            style={{ fontSize: "clamp(24px, 5vw, 52px)", color: "var(--text)" }}
          >
            Let's <span className="grad-text">Connect</span>
          </h1>
          <p
            className="text-[13px] md:text-[15px] leading-relaxed max-w-120"
            style={{ color: "var(--soft)" }}
          >
            Have a project in mind, want to collaborate, or just want to say hi?
            Drop me a message — I'll get back within 24 hours.
          </p>
        </motion.div>

        {/* ── TWO COLUMN ── */}
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-5 md:gap-8 items-start">

          {/* LEFT */}
          <div className="flex flex-col gap-3 md:gap-5">

            {/* Contact info cards */}
            {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.55 }}
                className="flex items-center gap-3 p-3 md:p-4 rounded-2xl"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="w-9 h-9 md:w-11 md:h-11 rounded-[10px] md:rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg,rgba(37,99,235,0.08),rgba(124,58,237,0.13))",
                    color: "var(--g2)",
                  }}
                >
                  <Icon size={16} />
                </div>
                <div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.08em] mb-0.5"
                    style={{ color: "var(--softer)" }}
                  >
                    {label}
                  </div>
                  {href ? (

                    <a href={href}
                      className="text-[13px] md:text-[14px] font-semibold no-underline transition-colors duration-200"
                      style={{ color: "var(--text)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--g2)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                    >
                      {value}
                    </a>
                  ) : (
                    <span
                      className="text-[13px] md:text-[14px] font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      {value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="p-3 md:p-4 rounded-2xl"
              style={{
                background: "rgba(5,150,105,0.05)",
                border: "1px solid rgba(5,150,105,0.2)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    background: "#059669",
                    boxShadow: "0 0 6px #059669",
                    animation: "blink 1.8s ease-in-out infinite",
                  }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "#059669" }}
                >
                  Available for work
                </span>
              </div>
              <p className="text-[12px] md:text-[13px]" style={{ color: "var(--soft)" }}>
                Open to full-time roles, internships &amp; freelance projects.
              </p>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.55 }}
              className="p-3 md:p-5 rounded-[18px]"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <p
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--softer)" }}
              >
                Find me on
              </p>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {socials.map(({ icon: Icon, label, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label={label}
                    className="w-10 h-10 rounded-[11px] flex items-center justify-center no-underline"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                      color: color,
                    }}
                  >
                    <Icon size={17} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-[22px] p-4 md:p-7"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <h2
              className="font-display font-bold text-[16px] md:text-[20px] mb-5"
              style={{ color: "var(--text)" }}
            >
              Send a Message
            </h2>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">

              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label style={labelStyle}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Rithick"
                    style={getInputStyle(focused.name)}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@email.com"
                    style={getInputStyle(focused.email)}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={labelStyle}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  style={getInputStyle(focused.subject)}
                  onFocus={() => handleFocus("subject")}
                  onBlur={() => handleBlur("subject")}
                />
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or just say hi..."
                  style={{
                    ...getInputStyle(focused.message),
                    resize: "vertical",
                    minHeight: "110px",
                  }}
                  onFocus={() => handleFocus("message")}
                  onBlur={() => handleBlur("message")}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-[13px] md:text-[14px] font-bold text-white cursor-pointer"
                style={{
                  background: status === "sending" ? "var(--softer)" : "var(--grad)",
                  border: "none",
                  boxShadow: status === "sending" ? "none" : "0 6px 20px rgba(124,58,237,0.35)",
                  transition: "all 0.3s",
                }}
              >
                {status === "sending" ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} /> Send Message
                  </>
                )}
              </motion.button>

              {/* Status */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-2.5 px-4 rounded-xl text-[12px] md:text-[13px] font-semibold"
                  style={{
                    background: "rgba(5,150,105,0.08)",
                    border: "1px solid rgba(5,150,105,0.2)",
                    color: "#059669",
                  }}
                >
                  ✅ Message sent! I'll reply within 24 hours.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-2.5 px-4 rounded-xl text-[12px] md:text-[13px] font-semibold"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    border: "1px solid rgba(239,68,68,0.2)",
                    color: "#EF4444",
                  }}
                >
                  ❌ Something went wrong. Try emailing directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}