import FoodCard from "@/components/FoodCard";
import React from "react";

const page = () => {
  return (
    <>
      <section className="hero-section bg-green-200">
        <div className="container ">
          <div className="w-2/4">
            <h1>
              {" "}
              <span>
                {" "}
                Packaging that Performs. Innovated for Industry Leaders.
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-5">
            <FoodCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
