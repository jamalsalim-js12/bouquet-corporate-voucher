import React from "react";
import { ComponentLayout } from "../component-layout";
import Image from "next/image";
import { ProblemImg, ProblemImgMobile } from "@/assets";

export const Problem = () => {
  return (
    <ComponentLayout className="mt-30 lg:mt-0">
      <div className="w-full h-[350px] lg:h-[370px] flex flex-col lg:flex-row overflow-hidden rounded-xl">
        {/* First Container */}
        <div className="bg-[#005550] order-2 lg:order-2 lg:w-1/2 h-full flex flex-col pt-4 lg:pt-[82px] gap-y-2 px-3 lg:px-10">
          <div className="w-fit rounded-full border border-[#64CCC5] py-1 px-3 lg:px-4">
            <p className="text-xs lg:text-sm leading-none text-[#64CCC5] font-medium">
              The problem
            </p>
          </div>

          <h2 className="text-white text-[22px] lg:text-[32px] leading-none font-semibold">
            Cash vanishes. Hampers waste. Staff don’t feel valued.
          </h2>
          <span className="text-sm lg:text-lg text-white leading-none">
            <p className="inline">True appreciation is deeply personal. </p>
            <p className="inline lg:block">
              It reflects our unique experiences and connections.
            </p>
          </span>
        </div>

        {/* Second Container */}

        <div className="lg:w-1/2 order-1 lg:order-2 h-full">
          <div className="hidden h-full lg:block">
            <Image
              className="size-full object-cover"
              src={ProblemImg}
              alt="Problem"
            />
          </div>
          <div className="lg:hidden">
            <Image
              className="size-full object-bottom"
              src={ProblemImgMobile}
              alt="Problem"
            />
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};
