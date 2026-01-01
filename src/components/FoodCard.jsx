"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Test from "./Test";
import AnimateDivider from "./AnimateDivider";

export default function FoodCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative min-h-[320px] min-w-[330px] rounded-2xl overflow-hidden cursor-pointer"
      data-aos="zoom-out-up"
      data-aos-duration="1000" // optional override
      data-aos-once="true" // optional: animate only once
    >
      {/* BACKGROUND */}
      <motion.div
        variants={{
          initial: {
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            backgroundColor: "rgba(255,255,255,0.18)",
          },
          hover: {
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
            backgroundColor: "#FFFDF5",
          },
        }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* DEFAULT TEXT */}
      <motion.div
        variants={{
          initial: { opacity: 1, y: 0 },
          hover: { opacity: 0, y: -25 },
        }}
        transition={{
          duration: 0.35,
          delay: 0.04,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <h5>Food Services</h5>
      </motion.div>

      {/* HOVER CONTENT */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
          className="absolute inset-0 z-10 flex flex-col gap-5 justify-between p-5"
        >
          {/* TOP PARAGRAPH */}
          <div>
            <Test
              as="p"
              className="fs-18"
              text="Your food service packaging is an extension of your brand experience."
            />
          </div>

          {/* BOTTOM */}
          <div className="relative pt-3">
            <AnimateDivider />

            <div className="flex items-center justify-between text-sm pt-3">
              <span className="fs-18">Tell me more</span>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6923 17.6155L12.9845 16.8963L17.073 12.8078H5V11.8078H17.073L12.9845 7.71925L13.6923 7L19 12.3078L13.6923 17.6155Z"
                    fill="#1D1D1B"
                  />
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
