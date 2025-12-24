"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CheckGsap() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => {
          console.log(`Section ${index + 1} viewport me aa gaya`);

          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
          });
        },
      });
    });
  }, []);

  return (
    <div>
      {[1, 2, 3, 4].map((item, index) => (
        <section
          key={index}
          ref={(el) => (sectionsRef.current[index] = el)}
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            background: index % 2 === 0 ? "#1e1e1e" : "#333",
            color: "white",
            opacity: 0,
            transform: "translateY(100px)",
          }}
        >
          Section {item}
        </section>
      ))}
    </div>
  );
}
