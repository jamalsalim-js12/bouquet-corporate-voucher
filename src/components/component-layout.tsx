import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ComponentLayoutProps = {
  children: ReactNode;
  className?: string;
};
export const ComponentLayout = ({
  children,
  className,
}: ComponentLayoutProps) => {
  return (
    <section
      className={cn(
        "px-[14px] md:px-10 lg:px-20 xl:px-[100px] 2xl:px-[200px]",
        className
      )}>
      {children}
    </section>
  );
};
