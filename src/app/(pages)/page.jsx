import CheckGsap from "@/components/CheckGsap";
import FoodCard from "@/components/FoodCard";
import Test from "@/components/Test";
import React from "react";

const page = () => {
  return (
    <>
      <section className="hero-section bg-green-200">
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

      <section className="second bg-green-200">
        <div className="container ">
          <div className="w-3/5">
            <Test
              as="h2"
              text="Packaging that Performs. Innovated for Industry Leaders."
              className="mb-12"
            />
          </div>
        </div>
      </section>

      <CheckGsap />
    </>
  );
};

export default page;
