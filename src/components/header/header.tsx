import React from "react";
import { ComponentLayout } from "../component-layout";
import { HeaderLogo, MobileLogo } from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="h-[72px] w-full">
      <ComponentLayout className="h-full flex justify-between items-center">
        <div className="hidden lg:block">
          <Image src={HeaderLogo} alt="Header logo" />
        </div>

        <div className="block lg:hidden">
          <Image src={MobileLogo} alt="Header logo" />
        </div>

        <Button size="lg">Visit Bouquet</Button>
      </ComponentLayout>
    </header>
  );
};
