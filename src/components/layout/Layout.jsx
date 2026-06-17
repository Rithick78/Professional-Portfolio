import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";

export default function Layout() {
  return (
    <div className="relative min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* Fixed background layers */}
      <Background />

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}