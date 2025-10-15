import React from "react";
import { ComponentLayout } from "../component-layout";
import { HeroTopPattern } from "./hero-top-pattern";
import { HeroBottomPattern } from "./hero-bottom-pattern";
import { HeroTopLeftPattern } from "./hero-top-left-pattern";
import { HeroBottomLeftPattern } from "./hero-bottom-left-pattern";
import HeroBottomRightPattern from "./hero-bottom-right-pattern";
import Image from "next/image";
import { HeroImg } from "@/assets";
import { Button } from "../ui/button";
import Link from "next/link";

export const Hero = () => {
  return (
    <ComponentLayout className="h-[100dvh] lg:h-dvh relative">
      <div>
        <TopPattern />
        <TopLeftPattern />
        <BottomLeftPattern />
        <BottomPattern />
      </div>
      <div className="relative z-20 w-full h-full flex flex-col gap-y-[74px] lg:flex-row justify-center  items-center">
        {/* Left Side */}
        <div className="lg:flex-1 flex flex-col items-center lg:items-start gap-y-3 lg:gap-y-2">
          <div className="w-fit rounded-full mb-1 border border-[#91E7E1] py-2 px-3 lg:px-5">
            <p className="text-xs lg:text-sm leading-none text-[#005550] font-medium">
              Corporate Appreciation Reimagined
            </p>
          </div>
          <h1 className="text-[30px] text-center lg:text-start lg:text-[40px] xl:text-[60px] font-bold leading-[120%] text-[#005550]">
            Employee Appreciation Done Right
          </h1>
          <p className="text-sm text-center lg:text-start lg:text-base xl:text-lg leading-[120%] text-[#005550]">
            Allow your employees to select the bonuses that are most meaningful
            to them. This empowers them to prioritize what they value.
          </p>
          <Button asChild size="lg" className="w-full mt-2 lg:w-fit lg:px-8">
            <Link href="tel:+233542084677">Talk to Us</Link>
          </Button>
        </div>

        {/* Right Side */}
        <div className="lg:w-[500px] lg:h-[414px]">
          <Image className="size-full" src={HeroImg} alt="Hero image" />
        </div>
      </div>
    </ComponentLayout>
  );
};

const TopPattern = () => {
  return (
    <div className="absolute top-0">
      <HeroTopPattern />
    </div>
  );
};

const BottomPattern = () => {
  return (
    <div className="absolute bottom-0">
      <HeroBottomPattern />
    </div>
  );
};

export const TopLeftPattern = () => {
  return (
    <div className="absolute top-0 left-0">
      <HeroTopLeftPattern />
    </div>
  );
};

export const BottomLeftPattern = () => {
  return (
    <div className="absolute bottom-0 left-0">
      <HeroBottomLeftPattern />
    </div>
  );
};

export const BottomRightPattern = () => {
  return (
    <div className="absolute bottom-50 right-0">
      <HeroBottomRightPattern />
    </div>
  );
};
