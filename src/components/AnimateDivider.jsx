"use client";

import { motion } from "framer-motion";

export default function AnimateDivider({
  trigger = null,
  color = "bg-black",
  duration = 0.55,
  delay = 0,
  className = "",
}) {
  const commonProps = {
    initial: { scaleX: 0 },
    style: { transformOrigin: "left" },
    transition: {
      duration,
      delay,
      ease: [0.1, 0.25, 0.36, 1],
    },
    className: `absolute left-0 top-0 h-[0.5px] w-full ${color} ${className}`,
  };

  if (trigger === null) {
    return <motion.span {...commonProps} animate={{ scaleX: 1 }} />;
  }

  return (
    <motion.span
      {...commonProps}
      whileInView={{ scaleX: 1 }}
      viewport={{
        once: true,
        margin: "-20% 0px",
      }}
    />
  );
}
