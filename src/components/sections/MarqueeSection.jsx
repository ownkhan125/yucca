"use client";
import React, { useEffect } from "react";
import Test from "../Test";

const MarqueeSection = () => {
  useEffect(() => {
    const section = document.querySelector(".marquee-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("animate");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="marquee-section py-160">
      <div className="marquee marquee-left mb-10">
        <div className="marquee-track">
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
        </div>
      </div>
      <div className="marquee marquee-right">
        <div className="marquee-track">
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
          <Test as="h2" text="Branding" />
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
