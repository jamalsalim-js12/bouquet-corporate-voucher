import { VoucherDesktop, VoucherMobile } from "@/assets";
import Image from "next/image";
import React from "react";
import { ComponentLayout } from "../component-layout";
import { Button } from "../ui/button";
import Link from "next/link";

export const Voucher = () => {
  return (
    <ComponentLayout className="relative rounded-lg overflow-hidden h-[1004px] md:h-[322px] lg:h-[428px] flex justify-center">
      <VoucherBg />
      <VoucherBgMobile />

      <div className="relative z-20 h-full flex flex-col lg:justify-center w-full">
        <div className="md:w-[440px] lg:w-[560px] md:pl-6 lg:pl-10 xl:w-[672px] text-center md:text-start mt-[172px] md:mt-12 xl:mt-8 flex flex-col items-center md:items-start gap-y-3">
          <h3
            className="text-[38px] md:text-[32px] lg:text-[38px] xl:text-[48px] font-bold leading-tight"
            style={{
              background:
                "linear-gradient(95.23deg, #FFD600 -4.4%, #00FFEE 62.03%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}>
            This year, show appreciation the right way.
          </h3>
          <p className="text-[#91E7E1] text-lg font-medium">
            Companies using our voucher are getting great results, join them
            today!
          </p>
          <Button asChild size="lg" className="w-fit lg:mt-2 bg-[#00A095]">
            <Link href="tel:+233542084677">Talk to Us</Link>
          </Button>
        </div>
      </div>
    </ComponentLayout>
  );
};

const VoucherBg = () => {
  return (
    <div className="absolute px-[14px] md:px-10 lg:px-20 xl:px-[100px] 2xl:px-[200px] w-full h-full md:h-fit lg:h-full hidden md:block">
      <Image
        className="size-full object-contain rounded-lg 2xl:object-cover"
        src={VoucherDesktop}
        alt="Voucher background"
      />
    </div>
  );
};

const VoucherBgMobile = () => {
  return (
    <div className="absolute h-full overflow-hidden w-full md:hidden">
      <Image
        className="size-full object-cover"
        src={VoucherMobile}
        alt="Voucher background"
      />
    </div>
  );
};
