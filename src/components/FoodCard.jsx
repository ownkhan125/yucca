"use client";

import { motion } from "framer-motion";

import Test from "./Test";

/* -------------------- */
/* FOOD CARD */
/* -------------------- */

export default function FoodCard() {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-full aspect-square rounded-2xl overflow-hidden cursor-pointer"
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
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.05 }}
        className="absolute inset-0 z-10 flex flex-col justify-between p-5"
      >
        {/* TOP PARAGRAPH */}

        <Test
          text={
            "Your food service packaging is an extension of your brand experience. Have functional and on-brand items like cups, tubs, bowls, and more readily available for takeout, catering, and deli food. Choose standard containers, customised or designed from scratch"
          }
        />

        {/* BOTTOM */}
        <div className="relative pt-3">
          {/* BORDER LEFT → RIGHT */}
          <motion.span
            variants={{
              initial: { scaleX: 0 },
              hover: { scaleX: 1 },
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 top-0 h-px w-full bg-black"
          />

          <div className="flex items-center justify-between text-sm pt-3">
            Left Text Right Text
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
