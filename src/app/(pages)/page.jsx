import AnimateDivider from "@/components/AnimateDivider";
import Button from "@/components/buttons/Button";
import FoodCard from "@/components/FoodCard";
import ProductCard from "@/components/ProductCard";
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
              <Button />
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
              <Button text="About us" className={"w-fit"} />
            </div>
          </div>
          <div className="relative">
            <AnimateDivider full={true} trigger={"committed-section"} />
          </div>
          <div className="flex flex-row justify-between py-90">
            <div className="w-2/5">
              <div className="flex flex-row items-center gap-2">
                <span
                  data-aos="zoom-in"
                  className="dot"
                  aria-hidden="true"
                ></span>

                <h5>
                  <Test as="span" text={"Our Mission"} />
                </h5>
              </div>
            </div>
            <div className="w-2/5">
              <Test
                as="p"
                text={
                  "We provide world-class, compliant packaging from trusted global partners to food service, food processing, and agricultural businesses across the globe."
                }
              />
            </div>
          </div>
          <div className="relative">
            <AnimateDivider full={true} trigger={"committed-section"} />
          </div>
          <div className="flex flex-row justify-between py-90">
            <div className="w-2/5">
              <div className="flex flex-row items-center gap-2">
                <span
                  data-aos="zoom-in"
                  className="dot"
                  aria-hidden="true"
                ></span>

                <h5>
                  <Test as="span" text={"Our Vision"} />
                </h5>
              </div>
            </div>
            <div className="w-2/5">
              <Test
                as="p"
                text={
                  "We provide world-class, compliant packaging from trusted global partners to food service, food processing, and agricultural businesses across the globe."
                }
              />
            </div>
          </div>
        </div>
      </section>

      <section className="product-section py-90">
        <div className="container">
          <div className="flex flex-row justify-between items-center gap-4 mb-11">
            <div className="w-2/4">
              <Test as="h4" text="New Products" />
            </div>
            <div className="w-2/4">
              <Button
                variant="btn-outline"
                className={"w-fit ms-auto"}
                text="Shop now"
              />
            </div>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
