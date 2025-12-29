"use client";

import { motion } from "framer-motion";
import Test from "./Test";

export default function FoodActiveCard({ title, text, isActive, onActivate }) {
  return (
    <motion.div
      initial="initial"
      animate={isActive ? "hover" : "initial"}
      onMouseEnter={onActivate}
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
            width: "100%",
          },
          hover: {
            backdropFilter: "blur(0px)",
            backgroundColor: "#FFFDF5",
            width: "100%",
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
          <Test className="fs-18" text={text} />

          {/* BOTTOM */}
          <div className="relative pt-3">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.55,
                ease: [0.1, 0.25, 0.36, 1],
              }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 top-0 h-px w-full bg-black"
            />

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
