import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Test({ text, className }) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitText(textRef.current, {
      type: "lines",
      linesClass: "inner-text",
    });

    gsap.set(split.lines, { y: 20, opacity: 0 });

    gsap.to(split.lines, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <p ref={textRef} className={`reveal-on-hover ${className}`}>
      {text}
    </p>
  );
}
