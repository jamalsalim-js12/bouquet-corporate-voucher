import FooterLogo from "@/assets/svg/footer-logo.svg";
import Image from "next/image";
import { InstagramIcon } from "@/assets/icons";
import { FacebookIcon } from "@/assets/icons";
import { XIcon } from "@/assets/icons";

import Link from "next/link";
import { Fragment } from "react";
export const Footer = () => {
  const socialsList = [InstagramIcon, FacebookIcon, XIcon];

  const cta = [
    {
      label: "Become a vendor",
      url: "#",
    },
    {
      label: "Terms and Conditions",
      url: "#",
    },
    {
      label: "Privacy and Policy",
      url: "#",
    },
  ];
  return (
    <footer className="mt-20 bg-[#005550] px-6 md:px-14 lg:px-[100px] py-[30px] flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-between">
      <div className="flex flex-col gap-y-3 md:gap-y-[25px]">
        <Image width={80} height={22} src={FooterLogo} alt="Bouquet Logo" />
        <p className="hidden text-sm text-white md:block">Copyright Bouquet</p>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <h3 className="font-sans text-xl font-semibold text-white">
          Connect with us
        </h3>
        <div className="flex gap-x-[31px]">
          {socialsList.map((list, idx) => (
            <Fragment key={idx}>{list()}</Fragment>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-y-2 md:gap-y-[14px] text-white lg:w-[307px]">
        {cta.map((c) => (
          <Link key={c.label} href={c.url} className="text-sm">
            {c.label}
          </Link>
        ))}
      </div>
      <p className="block text-sm text-white md:hidden">Copyright Bouquet</p>
    </footer>
  );
};
