import { useEffect, useMemo, useRef, useState } from "react";

const clamp = (value) => Math.min(Math.max(value, 0), 1);

const splitText = (text, className) =>
  text
    .split(" ")
    .filter(Boolean)
    .map((word) => ({ word, className }));

export default function ScrollWords({
  as: Tag = "span",
  text,
  parts,
  className,
  children,
}) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const words = useMemo(() => {
    if (parts) {
      return parts.flatMap((part) =>
        splitText(typeof part === "string" ? part : part.text, part.className)
      );
    }

    return splitText(text ?? "", undefined);
  }, [parts, text]);

  useEffect(() => {
    const updateProgress = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const travel = window.innerHeight * 0.62 + rect.height;
      const nextProgress = (window.innerHeight * 0.86 - rect.top) / travel;

      setProgress(clamp(nextProgress));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`scroll-parallax-header${className ? ` ${className}` : ""}`}
      style={{ "--header-shift": `${((progress - 0.5) * 2.5).toFixed(2)}px` }}
    >
      {children}
      <span className="scroll-words-inner">
        {words.map((item, index) => {
          const wordProgress = clamp(progress * 1.08 - index * 0.045);

          return (
            <span
              key={`${item.word}-${index}`}
              className={`scroll-word${item.className ? ` ${item.className}` : ""}`}
              style={{
                "--word-progress": wordProgress,
                "--word-x": `${((1 - wordProgress) * -8).toFixed(2)}px`,
              }}
            >
              {item.word}
              {index < words.length - 1 ? "\u00a0" : ""}
            </span>
          );
        })}
      </span>
    </Tag>
  );
}
