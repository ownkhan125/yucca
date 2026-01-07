import React from "react";
import Test from "./Test";

const BulletHeading = ({ heading }) => {
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <span data-aos="zoom-in" className="dot" aria-hidden="true"></span>

        <h5>
          <Test as="span" text={heading} />
        </h5>
      </div>
    </>
  );
};

export default BulletHeading;
