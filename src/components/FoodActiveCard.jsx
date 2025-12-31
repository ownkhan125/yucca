"use client";

import { motion } from "framer-motion";
import Test from "./Test";
import AnimateDivider from "./AnimateDivider";

export default function FoodActiveCard({ title, text, isActive, onActivate }) {
  return (
    <motion.div
      layout
      initial="initial"
      animate={isActive ? "hover" : "initial"}
      onMouseEnter={onActivate}
      transition={{
        layout: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      }}
      className={`relative ${
        isActive ? "w-2/5" : "w-1/3"
      } aspect-square rounded-2xl overflow-hidden cursor-pointer mx-auto`}
    >
      {/* BACKGROUND */}
      <motion.div
        variants={{
          initial: {
            backdropFilter: "blur(14px)",
            backgroundColor: "rgba(255,255,255,0.18)",
          },
          hover: {
            backdropFilter: "blur(0px)",
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
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 flex h-full items-center justify-center"
      >
        <h5>{title}</h5>
      </motion.div>

      {/* ACTIVE CONTENT */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 z-10 flex flex-col justify-between p-5"
        >
          <div>
            <Test className="mb-6" as="h3" text={title} />
            <Test className="fs-18" text={text} />
          </div>
          {/* BOTTOM */}
          <div className="relative pt-3">
            <AnimateDivider />

            <div className="flex items-center justify-between text-sm pt-3">
              <h6>
                <span>Tell me more</span>
              </h6>
              <span>
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6923 17.6155L12.9845 16.8963L17.073 12.8078H5V11.8078H17.073L12.9845 7.71925L13.6923 7L19 12.3078L13.6923 17.6155Z"
                    fill="#1D1D1B"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
