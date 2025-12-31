import AnimateDivider from "@/components/AnimateDivider";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";

import FoodCard from "@/components/FoodCard";
import FoodSection from "@/components/sections/FoodSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Test from "@/components/Test";
import React from "react";

const page = () => {
  return (
    <>
      <section className={"hero-section "}>
        <div className="container">
          <div className="w-3/5">
            <Test
              as="h1"
              text="Packaging that Performs. Innovated for Industry Leaders."
              className="mb-12"
            />
          </div>

          <div className="flex flex-row  gap-5">
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </section>

      <MarqueeSection />

      <section className="help-section bg-primary  py-160">
        <div className="container">
          <div className="w-3/5 mx-auto">
            <Test
              as="h5"
              className="text-center mb-9"
              text={
                "Set the standard for packaging excellence in your industry. Let us help you make your products memorable."
              }
            />
            <div className="w-fit mx-auto">
              <ButtonPrimary />
            </div>
          </div>
        </div>
      </section>

      <FoodSection />

      <section className="committed-section py-90">
        <div className="container">
          <div className="flex flex-row justify-between pb-90">
            <div className="w-[51%]">
              <Test as="h2" text="Committed to Excellence, always Innovating" />
            </div>
            <div className="w-2/5">
              <p className="mb-7">
                Remarkable packaging is our promise to you. What doesn’t meet
                Yucca standards is refined until it does.
              </p>
              <ButtonPrimary text="About us" className={"w-fit"} />
            </div>
          </div>

          <AnimateDivider trigger={"committed-section"} />
        </div>
      </section>
    </>
  );
};

export default page;
