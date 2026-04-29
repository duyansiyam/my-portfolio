import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Search, Sparkle } from "lucide-react";
import soulFmCover from "../assets/SoulFm.png";
import sourceCover from "../assets/source.png";
import taaraCover from "../assets/taara.png";

const projects = [
  {
    title: "Soul FM Website",
    category: "Development",
    year: "2026",
    tone: "project-rust",
    mockup: "phones",
    image: soulFmCover,
    url: "https://www.soulfmlive.com/",
  },
  {
    title: "Code Screenshot",
    category: "Development",
    year: "2024",
    tone: "project-pink",
    mockup: "code",
    image: sourceCover,
  },
  {
    title: "TAARA Pet Adoption Application",
    category: "Development",
    year: "2025",
    tone: "project-blue",
    mockup: "dashboard",
    image: taaraCover,
    url: "https://taara-pet-adoption-app.vercel.app/",
  },
  {
    title: "JDI Entertainment",
    category: "Development",
    year: "2026",
    tone: "project-mint",
    mockup: "brand",
    status: "Currently working",
  },
];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProjects = projects.filter((project) => {
    const searchableText = [
      project.title,
      project.category,
      project.year,
      project.mockup,
      project.status,
    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(normalizedSearch);
  });

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  const closeSearch = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
    searchInputRef.current?.blur();
  };

  return (
    <main className="projects-page page-bg">
      <section className="projects-hero reveal is-visible">
        <p className="section-kicker">
          <Sparkle size={22} />
          My Work
        </p>
        <h1>Creating next level digital products</h1>

        <div className={`projects-toolbar ${isSearchOpen ? "is-searching" : ""}`}>
          <button
            type="button"
            className="project-search-trigger"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={21} />
            Search
          </button>

          <div />
        </div>
      </section>

      <section className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.title} className="project-tile">
            <div className={`project-page-preview ${project.tone}`}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} cover`}
                  className="project-cover-image"
                />
              ) : (
                <ProjectVisual type={project.mockup} />
              )}
            </div>

            <div className="project-tile-meta">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2>{project.title}</h2>
                  {project.status && (
                    <span className="project-status">{project.status}</span>
                  )}
                </div>
                <p>{project.category}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span>{project.year}</span>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Visit <ArrowUpRight size={15} />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </section>

      {filteredProjects.length === 0 && (
        <p className="projects-empty">
          No projects found for "{searchTerm}". Try another keyword.
        </p>
      )}

      {isSearchOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true">
          <button
            type="button"
            className="search-backdrop"
            aria-label="Close search"
            onClick={closeSearch}
          />

          <div className="search-command">
            <div className="search-command-top">
              <Search size={24} />
              <input
                ref={searchInputRef}
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") {
                    closeSearch();
                  }
                }}
                placeholder="Search"
                aria-label="Search projects"
              />
              <button type="button" className="search-esc" onClick={closeSearch}>
                ESC
              </button>
            </div>

            <div className="search-command-bottom">
              <div className="search-tabs">
                <span className="active">All</span>
                <span>Projects</span>
              </div>
              <p>↑↓ navigate</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function ProjectVisual({ type }) {
  if (type === "phones") {
    return (
      <div className="phone-pair">
        <div className="phone-mockup">
          <span />
          <strong>Aora</strong>
          <div />
          <p>Discover possibilities</p>
        </div>
        <div className="phone-mockup phone-secondary">
          <span />
          <strong>Janine</strong>
          <div />
          <p>Trending videos</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-device">
      <div className="project-browser">
        <div className="project-dots">
          <span />
          <span />
          <span />
        </div>
        <p>Preview</p>
      </div>
      <div className={`project-screen ${type === "code" ? "project-screen-dark" : "project-screen-light"}`}>
        <div className={type === "brand" ? "project-poster" : "project-gradient-card"} />
        <div className="project-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
