import React from "react";
import { PerfectBgPattern } from "./perfect-bg-pattern";
import {
  Cake,
  CalenderStar,
  Chart,
  Confetti,
  Medal,
  Trophy,
} from "@/assets/icons";

const items = [
  {
    icon: Trophy,
    text: "Employee of the Month / Quarter",
  },
  {
    icon: CalenderStar,
    text: "Work Anniversaries",
  },
  {
    icon: Cake,
    text: "Staff Birthdays",
  },
  {
    icon: Medal,
    text: "Spot Recognition",
  },
  {
    icon: Confetti,
    text: "Festive Bonuses (Eid, Christmas)",
  },
  {
    icon: Chart,
    text: "Performance Rewards",
  },
];

export const Perfect = () => {
  return (
    <div
      className="relative px-[14px] md:px-10 lg:px-20 xl:px-[100px] 2xl:px-[200px] lg:h-[608px] py-20 w-full flex flex-col lg:flex-row gap-x-[36px] gap-y-6"
      style={{
        background:
          "radial-gradient(301.59% 62.02% at 30.21% 45.89%, #016058 0%, #00302C 100%)",
      }}>
      <BgPattern />
      <div className="flex flex-col gap-y-3 text-white lg:w-[466px]">
        <h4 className="text-[22px] leading-none lg:text-[32px] font-semibold">
          Perfect for every occasion
        </h4>
        <p className="text-sm leading-none lg:text-lg lg:w-[420px]">
          A single versatile voucher opens up thrilling opportunities for
          redemption. Discover your options to get the most out of your
          purchase!
        </p>
      </div>

      <div className="lg:flex-1 h-full grid grid-cols-1 lg:grid-cols-2 gap-3">
        {items.map((item) => (
          <div
            key={item.text}
            className="rounded-lg border-[0.5px] border-[#CFDEE8] bg-[#00847B4D] flex flex-col gap-y-3 px-3 py-5">
            {item.icon()}
            <p className="text-white text-[21px] font-semibold">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BgPattern = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <PerfectBgPattern />
    </div>
  );
};
