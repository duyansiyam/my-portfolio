import { useState } from "react";
import {
  AtSign,
  Code2,
  Globe,
  Mail,
  MessageCircle,
  Sparkle,
} from "lucide-react";
import aboutPortrait from "../assets/Portfolio.png";

const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <AtSign />,
  },
  {
    label: "GitHub",
    href: "https://github.com/duyansiyam",
    icon: <Code2 />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/im_jaja9/",
    icon: <Globe />,
  },
  {
    label: "Email",
    href: "mailto:duyanjanine@gmail.com",
    icon: <Mail />,
  },
  {
    label: "Message",
    href: "mailto:duyanjanine@gmail.com",
    icon: <MessageCircle />,
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
     const response = await fetch("/api/contact", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error ?? "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Message sent. I'll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(error.message);
    }
  };

  return (
    <main className="contact-page page-bg">
      <section className="contact-shell reveal is-visible">
        <div className="contact-form-panel">
          <p className="section-kicker">
            <Sparkle size={22} />
            Connect With Me
          </p>

          <h1>Let's start a project together</h1>

          <form className="contact-form" onSubmit={sendMessage}>
            <label>
              <span>Full Name</span>
              <input name="name" type="text" autoComplete="name" required />
            </label>

            <label>
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>

            <button
              type="submit"
              className="fill-button fill-button-compact"
              disabled={status === "sending"}
            >
              <span>{status === "sending" ? "Sending..." : "Submit"}</span>
            </button>

            {statusMessage && (
              <p className={`contact-status contact-status-${status}`}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>

        <aside className="contact-info-card">
          <p className="availability-badge">
            <span />
            Available for work
          </p>

          <img
            src={aboutPortrait}
            alt="Janine Duyan"
            className="contact-avatar"
          />

          <p className="contact-note">
            My inbox is always open. Whether you have a project or just want to
            say hi, I would love to hear from you. Feel free to contact me and
            I'll get back to you.
          </p>

          <div className="contact-socials">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
