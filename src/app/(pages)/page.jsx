import AnimateDivider from "@/components/AnimateDivider";
import Button from "@/components/buttons/Button";
import FoodCard from "@/components/FoodCard";
import ProductCard from "@/components/ProductCard";
import FoodSection from "@/components/sections/FoodSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Test from "@/components/Test";
import Image from "next/image";
import Link from "next/link";
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

      <section className="solution-section py-90 bg-green relative">
        <div className="container relative">
          <div className="w-2/3 mb-16">
            <p className="mb-7 text-white!">Custom Solutions</p>
            <Test
              as="h2"
              text="Brands that thrive invest in custom-designed packaging. Let us help bring your vision to life."
              className={"text-white!"}
            />
          </div>
          {/* image-absolute */}
          <div className="absolute top-0 -right-[20%] img-wrapper w-[750px] h-[380px] overflow-hidden">
            <Image
              src={"/asset/images/menu.webp"}
              alt="Solution Image"
              width={722}
              height={411}
              className="w-full! h-full! object-cover"
            />
          </div>
          {/* image-absolute */}
        </div>
        <div className="border-y border-[#FEFEFE] py-45">
          <div className="marquee marquee-left">
            <div className="marquee-track">
              <Link href={"/"} className="flex flex-row gap-2">
                <div>
                  <h2 className="text-white!">
                    Not sure what's possible? Get in touch to find out.
                  </h2>
                </div>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.2318 20.2935C57.9245 19.8361 58.8666 19.9137 59.4764 20.5236C60.0863 21.1334 60.1639 22.0755 59.7065 22.7682L59.4764 23.047L22.5235 60L20 57.4765L56.953 20.5236L57.2318 20.2935Z"
                    fill="white"
                  ></path>
                  <path
                    d="M56.4295 23.5691H20.7383V20H59.9986V59.2603H56.4295V23.5691Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <Link href={"/"} className="flex flex-row gap-2">
                <div>
                  <h2 className="text-white!">
                    Not sure what's possible? Get in touch to find out.
                  </h2>
                </div>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.2318 20.2935C57.9245 19.8361 58.8666 19.9137 59.4764 20.5236C60.0863 21.1334 60.1639 22.0755 59.7065 22.7682L59.4764 23.047L22.5235 60L20 57.4765L56.953 20.5236L57.2318 20.2935Z"
                    fill="white"
                  ></path>
                  <path
                    d="M56.4295 23.5691H20.7383V20H59.9986V59.2603H56.4295V23.5691Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <Link href={"/"} className="flex flex-row gap-2">
                <div>
                  <h2 className="text-white!">
                    Not sure what's possible? Get in touch to find out.
                  </h2>
                </div>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.2318 20.2935C57.9245 19.8361 58.8666 19.9137 59.4764 20.5236C60.0863 21.1334 60.1639 22.0755 59.7065 22.7682L59.4764 23.047L22.5235 60L20 57.4765L56.953 20.5236L57.2318 20.2935Z"
                    fill="white"
                  ></path>
                  <path
                    d="M56.4295 23.5691H20.7383V20H59.9986V59.2603H56.4295V23.5691Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <Link href={"/"} className="flex flex-row gap-2">
                <div>
                  <h2 className="text-white!">
                    Not sure what's possible? Get in touch to find out.
                  </h2>
                </div>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M57.2318 20.2935C57.9245 19.8361 58.8666 19.9137 59.4764 20.5236C60.0863 21.1334 60.1639 22.0755 59.7065 22.7682L59.4764 23.047L22.5235 60L20 57.4765L56.953 20.5236L57.2318 20.2935Z"
                    fill="white"
                  ></path>
                  <path
                    d="M56.4295 23.5691H20.7383V20H59.9986V59.2603H56.4295V23.5691Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
