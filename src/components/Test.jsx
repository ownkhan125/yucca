"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Test({ text, as: Tag = "p", className = "" }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
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

    const lines = textRef.current.querySelectorAll(".line-span");

    gsap.set(lines, {
      y: 20,
      opacity: 0,
    });

    gsap.to(lines, {
      y: 0,
      opacity: 1,
      duration: 0.1,
      stagger: 0.02,
      ease: "power3.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <Tag ref={textRef} className={`reveal-on-hover ${className}`}>
      {text}
    </Tag>
  );
}
