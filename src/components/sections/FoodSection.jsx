"use client";

import { useState } from "react";
import FoodActiveCard from "../FoodActiveCard";
const CARDS = [
  {
    id: 0,
    title: "Food Services",
    text: "Your food service packaging is an extension of your brand experience. Retail packaging that strengthens brand presence.",
    bg: "/asset/images/background1.jpg",
  },
  {
    id: 1,
    title: "Retail",
    text: "Retail packaging that strengthens brand presence.Retail packaging that strengthens brand presence.Retail packaging that strengthens brand presence.Retail packaging that strengthens brand presence.",
    bg: "/asset/images/background2.jpg",
  },
  {
    id: 2,
    title: "E-commerce",
    text: "Packaging designed for shipping & unboxing.",
    bg: "/asset/images/background3.jpg",
  },
];

export default function FoodSection() {
  const [activeId, setActiveId] = useState(0);

  return (
    <section
      className="food-section relative py-32 transition-all duration-500 "
      style={{
        backgroundImage: `url(${CARDS[activeId].bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[1200px] mx-auto">
        <div className="relative z-10 flex flex-row items-center justify-between gap-6">
          {CARDS.map((card) => (
            <FoodActiveCard
              key={card.id}
              title={card.title}
              text={card.text}
              isActive={activeId === card.id}
              onActivate={() => setActiveId(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
