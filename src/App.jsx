import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    window.addEventListener("popstate", handlePopState);

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (to) => {
    if (to === path) return;

    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <Navbar currentPath={path} onNavigate={navigate} />
      {path === "/about" ? (
        <About />
      ) : path === "/projects" ? (
        <Projects />
      ) : (
        <Home onNavigate={navigate} />
      )}
    </>
  );
}

export default App;
