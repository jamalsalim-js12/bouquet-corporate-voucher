import {
  MobileTestimonialsImg,
  TestimonialPattern,
  TestimonialsImg,
} from "@/assets";
import Image from "next/image";
import React from "react";
import { ComponentLayout } from "../component-layout";

export const Testimonials = () => {
  return (
    <ComponentLayout className="relative overflow-hidden pt-[132px]">
      <div>
        <Pattern />
      </div>
      <div className="relative flex  flex-col gap-y-8 lg:flex-row z-20">
        <div className="flex justify-center">
          <h3 className="w-[17ch] text-[22px] text-center lg:text-start lg:text-[32px] leading-none font-semibold text-[#005550]">
            Freedom for staff Time saved for HR Uplift for your brand
          </h3>
        </div>
        <div className="lg:flex-1 md:h-[380px] lg:h-full">
          <Image
            className="hidden lg:block size-full"
            src={TestimonialsImg}
            alt="testimonials"
          />
          <Image
            className="lg:hidden size-full object-contain"
            src={MobileTestimonialsImg}
            alt="testimonials"
          />
        </div>
      </div>
    </ComponentLayout>
  );
};

const Pattern = () => {
  return (
    <div className="absolute top-0">
      <Image src={TestimonialPattern} alt="pattern" />
    </div>
  );
};
