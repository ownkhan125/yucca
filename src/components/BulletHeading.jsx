import React from "react";
import Test from "./Test";

const BulletHeading = ({ heading }) => {
  return (
    <>
      <span data-aos="zoom-in" className="dot" aria-hidden="true"></span>

      <h5>
        <Test as="span" text={heading} />
      </h5>
    </>
  );
};

export default BulletHeading;
