// src/sections/Home.jsx

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Braces,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  FileCode,
  Flame,
  GitBranch,
  Hand,
  Layers,
  PenTool,
  Palette,
  Sparkle,
  Workflow,
} from "lucide-react";
import portfolioCover from "../assets/Portfolio.png";
import taaraCover from "../assets/taara.png";

const highlightText =
  "I'm Janine Duyan, with experience in design & development and a strong focus on producing high quality & impactful digital experiences. I create clean interfaces, smooth interactions, and meaningful websites that help brands and businesses grow online.";
const highlightWords = highlightText.split(" ");

const projects = [
  {
    title: "Soul FM Website",
    year: "2026",
    tags: [
      "React",
      "HTML5",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "GoDaddy",
      "Git",
    ],
    bg: "bg-[#9f3f2f]",
    preview: "audio",
    url: "https://www.soulfmlive.com/",
  },
  {
    title: "TAARA Pet Adoption Application",
    year: "2025",
    tags: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "iProg SMS",
      "Node",
      "Vercel",
      "Git",
    ],
    bg: "bg-[#c6d2ff]",
    preview: "dashboard",
    image: taaraCover,
    url: "https://taara-pet-adoption-app.vercel.app/",
  },
  {
    title: "JDI Entertainment",
    year: "2026",
    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "GoDaddy",
      "Git",
    ],
    bg: "bg-[#fff0b8]",
    preview: "media",
    status: "Currently working",
  },
  {
    title: "Portfolio Website",
    year: "2026",
    tags: ["React", "HTML5", "Tailwind CSS", "Node.js", "Git", "Vercel"],
    bg: "bg-[#bdeee6]",
    preview: "portfolio",
    image: portfolioCover,
    url: "https://duyanjanine.vercel.app/",
  },
];

const skills = [
  { name: "Firebase", icon: <Flame />, color: "#ffca28" },
  { name: "Framer Motion", icon: <Layers />, color: "#a855f7" },
  { name: "Figma", icon: <PenTool />, color: "#f24e1e" },
  { name: "Tailwind CSS", icon: <Workflow />, color: "#38bdf8" },
  { name: "Git", icon: <GitBranch />, color: "#f05032" },
  { name: "JavaScript", icon: <Braces />, color: "#f7df1e" },
  { name: "Node.js", icon: <Database />, color: "#83cd29" },
  { name: "CMS", icon: <FileCode />, color: "#a6ff4d" },
];

const expertise = [
  {
    title: "Development",
    icon: <Code2 size={22} />,
    text: "Building responsive websites that feel fast, polished, and comfortable across every device and screen size.",
  },
  {
    title: "UI/UX Design",
    icon: <PenTool size={22} />,
    text: "Designing clear user flows, accessible layouts, and interfaces that make digital products easier to understand.",
  },
  {
    title: "Branding",
    icon: <Palette size={22} />,
    text: "Creating visual systems, web direction, and brand details that help projects feel memorable and consistent.",
  },
];

const testimonials = [
  {
    name: "Jeremiah Tardy",
    role: "Just Doin' It Entertainment owner",
    handle: "",
    initials: "JT",
    shortText:
      "I have had the pleasure of meeting and working with this young lady on several occasions. However, there is one project that stands out. Ms. Duyan recreated my website called Soul FM. In a matter of days she fixed...",
    fullText:
      "I have had the pleasure of meeting and working with this young lady on several occasions. However, there is one project that stands out. Ms. Duyan recreated my website called Soul FM. In a matter of days she fixed, managed, launched my site and had it running correctly. Her professionalism, willingness to provide a high standard of quality of service is outstanding.",
  },
  {
    name: "Ednalyn De Lara",
    role: "TAARA Chairperson",
    handle: "",
    initials: "ED",
    shortText: [
      "TAIL WAGS AND SNUGGLES GALORE! 🐶💗",
      "As a heartfelt appreciation to our generous donors for making a difference in the lives of our rescues, we proudly present the faces of TAARA...",
    ],
    fullText: [
      "TAIL WAGS AND SNUGGLES GALORE! 🐶💗",
      "As a heartfelt appreciation to our generous donors for making a difference in the lives of our rescues, we proudly present the faces of TAARA. 🐾💕",
      "From our rescues' wagging hearts to yours - thank you, thank you, THANK YOU!",
      "Your kindness creates a truly pawsitive impact in the lives of our beloved animals. 🐶🐱🐾",
      "We would also like to extend our sincere gratitude to Ms. Janine Duyan, Polytechnic Institute of Tabaco, for her valuable contribution in developing the TAARA application, helping improve our adoption process and support system for our rescues. 💻🐾",
    ],
  },
  {
    name: "Kim Ian Sabalberino",
    role: "Quanby Solutions - WordPress Supervisor",
    handle: "",
    initials: "KS",
    shortText:
      "Janine Duyan demonstrates strong skills in WordPress development, with a solid understanding of both design and functionality. As a WordPress Developer Intern, she effectively built and customized responsive websites...",
    fullText: [
      "Janine Duyan demonstrates strong skills in WordPress development, with a solid understanding of both design and functionality. As a WordPress Developer Intern, she effectively built and customized responsive websites, ensuring user-friendly interfaces and optimized performance.",
      "Her work reflects attention to detail, problem-solving ability, and a commitment to delivering quality results aligned with client and user needs. She also shows initiative in learning new tools and continuously improving her development workflow throughout her internship.",
    ],
  },
];

const socialLinks = [
  {
    label: "Indeed",
    href: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage",
  },
  { label: "GitHub", href: "https://github.com/duyansiyam" },
  { label: "Instagram", href: "https://www.instagram.com/im_jaja9/" },
  {
    label: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=duyanjanine@gmail.com",
  },
];
const marqueeItems = [
  "Designing",
  "Graphics",
  "Development",
  "UI/UX",
  "Website",
];

export default function Home({ onNavigate }) {
  const [aboutProgress, setAboutProgress] = useState(0);
  const [activeExpertise, setActiveExpertise] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialExpanded, setIsTestimonialExpanded] = useState(false);
  const [isWaving, setIsWaving] = useState(false);
  const testimonial = testimonials[activeTestimonial];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home-highlight");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.35);

      const clamped = Math.min(Math.max(progress * 0.74 + 0.14, 0), 1);
      setAboutProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const showPreviousTestimonial = () => {
    setIsTestimonialExpanded(false);
    setActiveTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNextTestimonial = () => {
    setIsTestimonialExpanded(false);
    setActiveTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const openAboutPage = (event) => {
    event.preventDefault();
    onNavigate?.("/about");
  };

  const openContactPage = (event) => {
    event.preventDefault();
    onNavigate?.("/contact");
  };

  const waveHand = () => {
    setIsWaving(false);
    requestAnimationFrame(() => setIsWaving(true));
  };

  return (
    <main className="page-bg">
      {/* HERO HEADER */}
      <section
        id="home"
        className="min-h-[92vh] px-6 pt-32 pb-10 md:px-10 lg:px-16 xl:px-28 flex items-center"
      >
        <div className="reveal mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3 text-base font-medium md:text-lg">
            <button
              type="button"
              onClick={waveHand}
              onAnimationEnd={() => setIsWaving(false)}
              className={`wave-hand ${isWaving ? "is-waving" : ""}`}
              aria-label="Wave hello"
            >
              <Hand size={28} strokeWidth={2.4} />
            </button>
            <span>Hey! It's me Janine,</span>
          </div>

          <h1 className="mt-10 max-w-5xl text-4xl font-medium leading-[1.08] md:text-6xl lg:text-7xl">
            Crafting{" "}
            <span className="text-accent">web solutions</span> that{" "}
            <span className="text-accent">build, connect</span> &amp; grow.
          </h1>

          <div className="mt-16 grid gap-8 border-t border-soft pt-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium uppercase text-muted md:text-base">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 hover:text-[var(--text)] transition"
                >
                  {link.label}
                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
                I create responsive, user-friendly, and functional websites
                that help businesses improve their online presence and deliver
                smooth digital experiences.
              </p>

              <a
                href="/about"
                onClick={openAboutPage}
                className="fill-button fill-button-compact"
              >
                <span>Know me better</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-shell border-y border-soft">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="marquee-item">
              {item}
              <Sparkle className="marquee-star" size={32} strokeWidth={1.8} />
            </span>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT TEXT */}
      <section id="home-highlight" className="min-h-[102vh] overflow-hidden border-b border-soft px-6">
        <div className="sticky top-0 flex min-h-screen items-center justify-center py-28">
          <div className="reveal mx-auto w-full max-w-6xl text-center">
            <p className="mb-8 inline-flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-normal text-accent md:text-lg">
              <Sparkle size={24} strokeWidth={2.4} />
              About Me
            </p>

            <h2 className="mx-auto max-w-5xl whitespace-normal text-pretty text-center text-xl font-medium leading-[1.55] md:text-2xl lg:text-3xl">
              {highlightWords.map((word, i) => {
                const wordProgress = Math.min(
                  Math.max(aboutProgress * highlightWords.length - i, 0),
                  1
                );

                return (
                  <span
                    key={i}
                    className="about-word"
                    style={{
                      "--word-highlight": `${Math.round(wordProgress * 100)}%`,
                    }}
                  >
                    {word}{" "}
                  </span>
                );
              })}
            </h2>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 pb-12 pt-8 md:px-10 lg:pb-16 lg:pt-10">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-medium uppercase text-accent md:text-lg">
            <Sparkle size={22} strokeWidth={2.3} />
            My Work
          </p>

          <h2 className="max-w-3xl text-4xl font-medium leading-none md:text-5xl lg:text-6xl">
            Selected Projects
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Here's a curated selection showcasing my expertise and the achieved
            results.
          </p>
        </div>

        <div className="home-projects-grid mt-16 grid gap-12 md:grid-cols-2 lg:gap-20">
          {projects.map((p) => (
            <article
              key={p.title}
              className="reveal group md:even:mt-24"
            >
              <div
                className={`${p.bg} project-preview flex min-h-[18rem] items-center justify-center rounded-[28px] p-8 transition duration-500 group-hover:-translate-y-2 md:min-h-[25rem]`}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} cover`}
                    className={`project-cover-image ${p.imageClassName ?? ""}`}
                  />
                ) : (
                  <ProjectMockup type={p.preview} title={p.title} />
                )}
              </div>

              <div className="mt-7 flex items-end justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium md:text-2xl">{p.title}</h3>
                    {p.status && <span className="project-status">{p.status}</span>}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-card px-4 py-2 text-sm font-medium text-muted ring-1 ring-[var(--border)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 pb-2">
                  <p className="text-lg font-medium text-muted">{p.year}</p>
                  {p.url && (
                    <a
                      href={p.url}
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
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-20">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-3 text-sm font-medium uppercase text-accent md:text-lg">
            <Sparkle size={22} strokeWidth={2.3} />
            Speciality
          </p>

        <h2 className="text-3xl font-medium leading-none md:text-4xl lg:text-5xl">
            Areas of Expertise
          </h2>
        </div>

        <div className="reveal mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          <div className="space-y-5">
            {expertise.map((item, index) => {
              const isOpen = activeExpertise === index;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() =>
                    setActiveExpertise(isOpen ? null : index)
                  }
                  className={`expertise-card ${isOpen ? "expertise-card-open" : ""}`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 text-lg font-medium">
                      {item.icon}
                      {item.title}
                    </span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </span>

                  {isOpen && (
                    <span className="mt-5 block text-left text-base leading-7 text-muted">
                      {item.text}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="expertise-visual overflow-hidden rounded-[28px]">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
              alt="Laptop with code editor on a desk"
              className="h-full min-h-[22rem] w-full object-cover"
            />
          </div>
        </div>

        <div className="reveal tech-marquee mt-10 lg:mt-14">
          <div className="tech-marquee-track">
            {[...skills, ...skills].map((skill, index) => (
              <span key={`${skill.name}-${index}`} className="tech-pill">
                <span className="tech-pill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-20">
        <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.45fr] lg:items-start">
          <div className="testimonial-intro">
            <p className="mb-5 inline-flex items-center gap-3 text-sm font-medium uppercase text-accent md:text-lg">
              <Sparkle size={22} strokeWidth={2.3} />
              Testimonials
            </p>

              <h2 className="text-4xl font-medium leading-[1.08] md:text-5xl">
              What others say
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-muted">
              I've worked with some amazing people over the years, here is what
              they have to say about me.
            </p>
          </div>

          <div>
            <article
              className={`testimonial-card ${
                isTestimonialExpanded ? "testimonial-card-expanded" : ""
              }`}
            >
              <div className="testimonial-profile">
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">
                    {testimonial.role}
                    {testimonial.handle ? ` ${testimonial.handle}` : ""}
                  </p>
                </div>
              </div>

              <div className="testimonial-copy">
                {Array.isArray(
                  isTestimonialExpanded
                    ? testimonial.fullText
                    : testimonial.shortText
                ) ? (
                  (isTestimonialExpanded
                    ? testimonial.fullText
                    : testimonial.shortText
                  ).map((paragraph, index, paragraphs) => (
                    <p key={paragraph}>
                      {paragraph}
                      {index === paragraphs.length - 1 && (
                        <>
                          {" "}
                          <button
                            type="button"
                            className="testimonial-toggle"
                            onClick={() =>
                              setIsTestimonialExpanded((current) => !current)
                            }
                          >
                            {isTestimonialExpanded ? "show less" : "see more"}
                          </button>
                        </>
                      )}
                    </p>
                  ))
                ) : (
                  <p>
                    {isTestimonialExpanded
                      ? testimonial.fullText
                      : testimonial.shortText}{" "}
                    <button
                      type="button"
                      className="testimonial-toggle"
                      onClick={() =>
                        setIsTestimonialExpanded((current) => !current)
                      }
                    >
                      {isTestimonialExpanded ? "show less" : "see more"}
                    </button>
                  </p>
                )}
              </div>
            </article>

            <div className="mt-8 flex justify-end">
              <div className="flex items-center gap-4">
                <button
                  className="testimonial-arrow"
                  type="button"
                  onClick={showPreviousTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={20} />
                </button>
                <span className="text-base font-medium text-muted">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  className="testimonial-arrow"
                  type="button"
                  onClick={showNextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-8 pt-12 md:px-10">
        <div className="reveal footer-cta">
          <p className="availability-badge">
            <span />
            Available for work
          </p>

          <h2 className="mx-auto mt-7 max-w-2xl text-center text-3xl font-medium leading-tight md:text-5xl">
            Let's create your next big idea.
          </h2>

          <a
            href="/contact"
            onClick={openContactPage}
            className="fill-button mt-10"
          >
            <span>Contact Me</span>
          </a>
        </div>

        <div className="mt-8 flex flex-col gap-6 border-b border-soft pb-8 text-muted md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 Janine Duyan. All rights reserved.</p>

        </div>
      </section>
    </main>
  );
}

function ProjectMockup({ type, title }) {
  return (
    <div className="project-device">
      <div className="project-browser">
        <div className="project-dots">
          <span />
          <span />
          <span />
        </div>
        <p>{title}</p>
      </div>

      {type === "audio" && (
        <div className="project-screen project-screen-dark">
          <div className="project-gradient-card" />
          <div className="project-player">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {type === "dashboard" && (
        <div className="project-screen project-screen-light">
          <div className="project-chart" />
          <div className="project-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}

      {type === "media" && (
        <div className="project-screen project-screen-dark">
          <div className="project-poster" />
          <div className="project-lines">
            <span />
            <span />
          </div>
        </div>
      )}

      {type === "portfolio" && (
        <div className="project-screen project-screen-light">
          <div className="project-avatar" />
          <div className="project-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      )}
    </div>
  );
}
