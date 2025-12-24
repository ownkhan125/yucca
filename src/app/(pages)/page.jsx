import ButtonPrimary from "@/components/buttons/ButtonPrimary";

import FoodCard from "@/components/FoodCard";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Test from "@/components/Test";
import React from "react";

const page = () => {
  return (
    <>
      <section className={"hero-section "}>
        <div className="container ">
          <div className="w-3/5">
            <Test
              as="h1"
              text="Packaging that Performs. Innovated for Industry Leaders."
              className="mb-12"
            />
          </div>

          <div className="grid grid-cols-4 gap-5">
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
    </>
  );
};

export default page;
