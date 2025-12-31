"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Test({ text, as: Tag = "p", className }) {
  const textRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    let split;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;

        hasAnimated.current = true;

        split = new SplitText(element, {
          type: "lines",
          linesClass: "inner-text",
        });

        split.lines.forEach((line) => {
          const span = document.createElement("span");
          span.className = "line-span";
          span.innerHTML = line.innerHTML;
          line.innerHTML = "";
          line.appendChild(span);
        });

        const lines = element.querySelectorAll(".line-span");

        gsap.set(lines, { y: 20, opacity: 0 });

        gsap.to(lines, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
        });

        observer.disconnect();
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      split?.revert();
    };
  }, []);

  return (
    <Tag ref={textRef} className={`reveal-on-hover ${className}`}>
      {text}
    </Tag>
  );
}
