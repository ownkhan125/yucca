import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonSM from "./buttons/ButtonSM";

const ProductCard = () => {
  return (
    <>
      <div className="card w-full h-full overflow-hidden">
        <div className="relative w-full bg-[#F7F4E9] pb-[100%] rounded-lg overflow-hidden cursor-pointer mb-4 group">
          <Link
            href="#"
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <Image
              src="/asset/images/product.jpg"
              alt="Product Image"
              width={100}
              height={100}
              unoptimized
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.1]"
            />
          </Link>
          <div
            className="absolute bottom-0 left-0 w-full flex flex-row gap-2  p-4
                    translate-y-full  transition-all duration-500 ease-in-out 
                    group-hover:translate-y-0 group-hover:opacity-100"
          >
            <ButtonSM variant="btn-outline" className={"w-fit"} text="800ml" />
            <ButtonSM variant="btn-outline" className={"w-fit"} text="1000ml" />
          </div>
        </div>

        <Link href="#" className="fs-18 block mb-1">
          Kraft Portion 2/D Rectangular Bowl
        </Link>

        <span className="fs-18 font-medium!">
          From R3.68 {""}
          <span className="fs-16 font-light!">incl.vat</span>
        </span>
      </div>
    </>
  );
};

export default ProductCard;
