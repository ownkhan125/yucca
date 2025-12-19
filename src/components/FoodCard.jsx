"use client";

import { motion } from "framer-motion";

/* -------------------- */
/* REVEAL WRAPPER */
/* -------------------- */
function RevealOnHover({ children }) {
  return (
    <span className="relative inline-block overflow-hidden leading-tight">
      <motion.span
        variants={{
          initial: { scaleY: 0 },
          hover: { scaleY: 1 },
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "bottom" }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

/* -------------------- */
/* FOOD CARD */
/* -------------------- */
export default function FoodCard() {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="relative w-[320px] h-[200px] rounded-2xl overflow-hidden cursor-pointer"
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

      {/* DEFAULT TEXT (STATIC) */}
      <motion.div
        variants={{
          initial: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="relative z-10 flex h-full items-center justify-center text-xl font-semibold text-white"
      >
        Default Text
      </motion.div>

      {/* HOVER TEXT (REVEAL ONLY) */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeInOut", delay: 0.05 }}
        className="absolute inset-0 z-10 flex items-center justify-center text-xl font-semibold text-black"
      >
        <RevealOnHover>Hover Text</RevealOnHover>
      </motion.div>
    </motion.div>
  );
}
