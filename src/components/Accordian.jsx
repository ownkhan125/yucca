"use client";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex justify-between items-center"
        aria-expanded={open}
      >
        <h6>{title}</h6>
        <span>{open ? "-" : "+"}</span>
      </button>

      {/* Content */}
      {open && <div className="pb-4">{children}</div>}
    </div>
  );
}
