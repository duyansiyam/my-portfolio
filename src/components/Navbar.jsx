// src/components/Navbar.jsx

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar({ currentPath = "/", onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  const goToPage = (event, path) => {
    event.preventDefault();
    onNavigate?.(path);
  };

  const isHome = currentPath === "/";
  const isAbout = currentPath === "/about";
  const isProjects = currentPath === "/projects";

  return (
    <header className="site-header fixed top-0 left-0 z-50 w-full px-4 py-4 md:px-5 md:py-5">
      <nav
        className={`
          smooth-theme mx-auto flex items-center justify-between
          bg-[var(--bg)]/80 backdrop-blur-xl border-soft
           transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            scrolled 
                ? "max-w-5xl rounded-full px-5 py-3 md:px-7 md:py-4 border shadow-[0_20px_80px_rgba(0,0,0,0.25)] translate-y-0"
        : "max-w-7xl rounded-none px-5 py-3 md:px-10 md:py-4 border-b shadow-none translate-y-0"
          }
        `}
      >
        <a href="/" onClick={(event) => goToPage(event, "/")} className="text-2xl font-medium">
          J.D
        </a>

        <div className="hidden md:flex items-center gap-8 text-base text-muted">
          <a
            href="/"
            onClick={(event) => goToPage(event, "/")}
            className={`nav-link flex items-center gap-2 ${isHome ? "is-active text-[var(--text)]" : "hover:text-[var(--text)]"}`}
          >
            {isHome && <span className="nav-dot h-2 w-2 rounded-full bg-[var(--accent)]"></span>}
            Home
          </a>
          <a
            href="/about"
            onClick={(event) => goToPage(event, "/about")}
            className={`nav-link flex items-center gap-2 ${isAbout ? "is-active text-[var(--text)]" : "hover:text-[var(--text)]"}`}
          >
            {isAbout && <span className="nav-dot h-2 w-2 rounded-full bg-[var(--accent)]"></span>}
            About
          </a>
          <a
            href="/projects"
            onClick={(event) => goToPage(event, "/projects")}
            className={`nav-link flex items-center gap-2 ${isProjects ? "is-active text-[var(--text)]" : "hover:text-[var(--text)]"}`}
          >
            {isProjects && <span className="nav-dot h-2 w-2 rounded-full bg-[var(--accent)]"></span>}
            Projects
          </a>
          <a href="/#contact" className="nav-link hover:text-[var(--text)]">
            Contact
          </a>
        </div>

        <button
          onClick={() => setLightMode(!lightMode)}
          className="grid place-items-center rounded-full text-[var(--text)] hover:text-[var(--accent)] transition"
          aria-label="Toggle theme"
        >
          {lightMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </nav>
    </header>
  );
}
