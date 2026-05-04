import { useEffect } from "react";
import {
  ArrowUpRight,
  Code2,
  PenLine,
  ShieldCheck,
  Sparkle,
  Wand2,
} from "lucide-react";
import aboutPortrait from "../assets/Portfolio.png";

const experience = [
  {
    role: "TAARA Pet Adoption Application",
    company: "@TAARA",
    date: "2025",
    logo: "TA",
  },
  {
    role: "Web Developer",
    company: "@Soul FM",
    date: "April 2026",
    logo: "SF",
  },
  {
    role: "Web Developer",
    company: "@Freelance Projects",
    date: "2026 - Present",
    logo: "WD",
  },
];

const processSteps = [
  {
    title: "01. Discover",
    text: "I clarify the goal, audience, and must-have features before moving into design.",
    icon: <Sparkle />,
  },
  {
    title: "02. Wireframe",
    text: "I map the structure first so the experience feels clear before visual polish begins.",
    icon: <PenLine />,
  },
  {
    title: "03. Design",
    text: "I shape the interface with hierarchy, spacing, colors, and responsive behavior in mind.",
    icon: <Wand2 />,
  },
  {
    title: "04. Development",
    text: "I turn the design into clean, responsive code with smooth interactions.",
    icon: <Code2 />,
  },
  {
    title: "05. Quality Assurance",
    text: "I check performance, responsiveness, accessibility, and details before launch.",
    icon: <ShieldCheck />,
  },
];

const awards = [
  {
    title: "UI/UX Project Recognition",
    description: "Recognized for excellence in UI/UX design",
  },
  {
    title: "AI_DEAS",
    description: "Selected as a Top 10 Finalist",
  },
  {
    title: "PITA START UP",
    description:
      "Top 2 in the Polytechnic Institute of Tabaco Startup Competition",
  },
];

export default function About({ onNavigate }) {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const openContactPage = (event) => {
    event.preventDefault();
    onNavigate?.("/contact");
  };

  return (
    <main className="about-page page-bg">
      <section className="about-hero reveal">
        <div className="about-portrait">
          <img
            src={aboutPortrait}
            alt="Janine Duyan portrait"
          />

          <a
            href="/contact"
            onClick={openContactPage}
            className="talk-badge"
            aria-label="Let's talk"
          >
            <svg className="talk-ring" viewBox="0 0 120 120" aria-hidden="true">
              <defs>
                <path
                  id="talk-circle"
                  d="M 60, 60 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
                />
              </defs>
              <text>
                <textPath href="#talk-circle">
                  Lets talk - Lets talk - Lets talk -
                </textPath>
              </text>
            </svg>
            <ArrowUpRight size={22} />
          </a>
        </div>

        <div className="about-hero-copy">
          <h1>
            A <span>creative full stack</span> web developer
          </h1>
          <p>
            I collaborate with brands and teams to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>
          <a
            href="/Resume_Duyab.pdf"
            target="_blank"
            rel="noreferrer"
            className="fill-button fill-button-compact"
          >
            <span>My Resume</span>
          </a>
        </div>
      </section>

      <section className="about-split reveal">
        <div>
          <p className="section-kicker">
            <Sparkle size={22} />
            Work History
          </p>
          <h2>Experience</h2>
          <p className="section-copy">
            I have worked on web, design, and system projects focused on
            thoughtful experiences and clean implementation.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.role}-${item.company}`} className="experience-row">
              <div className="experience-logo">{item.logo}</div>
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <time>{item.date}</time>
            </article>
          ))}
        </div>
      </section>

      <section className="about-process reveal">
        <p className="section-kicker">
          <Sparkle size={22} />
          Steps I Follow
        </p>
        <h2>My Design Process</h2>
        <p className="section-copy">
          A simple, repeatable workflow that keeps projects focused from first
          idea to final launch.
        </p>

        <div className="process-track">
          {processSteps.map((step) => (
            <article key={step.title} className="process-card">
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-split awards-section reveal">
        <div>
          <p className="section-kicker">
            <Sparkle size={22} />
            Awards
          </p>
          <h2>Awards &amp; Recognition</h2>
        </div>

        <div className="awards-list">
          {awards.map((award) => (
            <article key={award.title} className="award-row">
              <div>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="about-footer reveal">
        <div className="footer-cta">
          <p className="availability-badge">
            <span />
            Available for work
          </p>

          <h2 className="mx-auto mt-7 max-w-2xl text-center text-4xl font-medium leading-tight md:text-6xl">
            Let's create your next big idea.
          </h2>

          <a href="/contact" onClick={openContactPage} className="fill-button mt-10">
            <span>Contact Me</span>
          </a>
        </div>
      </section>
    </main>
  );
}
