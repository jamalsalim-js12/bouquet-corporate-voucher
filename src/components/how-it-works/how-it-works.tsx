import React from "react";
import { ComponentLayout } from "../component-layout";
import { Users, FileText, Ticket, Store, Truck, BarChart3 } from "lucide-react";

const items = [
  {
    icon: <Users className="w-10 h-10 gradient-icon" />,
    text: "HR submits staff list and voucher allocations",
  },
  {
    icon: <FileText className="w-10 h-10 gradient-icon" />,
    text: "Bouquet issues invoice and sends to firm for payment",
  },
  {
    icon: <Ticket className="w-10 h-10 gradient-icon" />,
    text: "Voucher codes are generated based on list",
  },
  {
    icon: <Store className="w-10 h-10 gradient-icon" />,
    text: "Staff redeems on Bouquet at their convenience",
  },
  {
    icon: <Truck className="w-10 h-10 gradient-icon" />,
    text: "Staff orders are delivered to their preferred location",
  },
  {
    icon: <BarChart3 className="w-10 h-10 gradient-icon" />,
    text: "HR receives transparent usage reports",
  },
];

export const HowItWorks = () => {
  return (
    <ComponentLayout className="flex flex-col gap-y-10">
      {/* Header */}
      <div className="flex flex-col gap-y-2">
        <h3 className="text-[#00302C] text-[22px] lg:text-[32px] font-semibold leading-none">
          How it works
        </h3>
        <p className="text-sm lg:text-lg font-medium leading-none text-[#008E82]">
          Get started in minutes with our simple process
        </p>
      </div>

      {/* Step cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center bg-[#B7DAD7]/40 rounded-xl p-6 border border-[#01FFEE] shadow-sm hover:shadow-md transition-all duration-200">
            {/* Step number in background */}
            <span className="absolute top-2 right-4 text-[90px] font-extrabold text-[#00302C]/5 leading-none select-none">
              {index + 1}
            </span>

            {/* Icon + Text */}
            <div className="relative z-10 flex flex-col gap-y-3">
              <div className="flex items-center justify-center w-12 h-12">
                {item.icon}
              </div>
              <p className="text-[#00544E] text-start max-w-[309px] text-sm md:text-base lg:text-[22px] font-medium leading-snug">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ComponentLayout>
  );
};
