import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

const normalizePath = (value) => {
  const normalized = value.replace(/\/+$/, "");
  return normalized || "/";
};

function App() {
  const [path, setPath] = useState(normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setPath(normalizePath(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    const nextPath = normalizePath(to);

    if (nextPath === path) return;

    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <Navbar currentPath={path} onNavigate={navigate} />
      {path === "/about" ? (
        <About onNavigate={navigate} />
      ) : path === "/projects" ? (
        <Projects />
      ) : path === "/contact" ? (
        <Contact />
      ) : (
        <Home onNavigate={navigate} />
      )}
    </>
  );
}

export default App;
