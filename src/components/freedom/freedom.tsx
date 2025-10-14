import React from "react";
import { ComponentLayout } from "../component-layout";
import Image from "next/image";
import { FreedomImg, PackagesImg } from "@/assets";

export const Freedom = () => {
  return (
    <ComponentLayout className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-[117px] lg:h-[351px]">
      {/* First Container */}
      <div className="lg:w-[506px] flex flex-col justify-between lg:h-full">
        <div className="text-[#005550] flex flex-col gap-y-3">
          <h3 className="text-[22px] lg:text-[32px] leading-none font-semibold">
            Give staff the freedom to choose what matters most to them.
          </h3>
          <p className="text-sm lg:text-lg">
            One versatile voucher offers you exciting ways to redeem it. Explore
            your options to maximize your purchase!
          </p>
        </div>

        <div>
          <Image
            className="object-cover size-full"
            src={PackagesImg}
            alt="Packages Image"
          />
        </div>
      </div>

      {/* Second Container */}
      <div className="lg:flex-1 rounded-xl overflow-hidden">
        <Image
          className="size-full object-cover"
          src={FreedomImg}
          alt="Woman holding Bouquet Voucher"
        />
      </div>
    </ComponentLayout>
  );
};
