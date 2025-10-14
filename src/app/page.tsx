import { Freedom, Problem } from "@/components";
import { BottomRightPattern, Hero } from "@/components/hero";

export default function Home() {
  return (
    <section className="w-full flex flex-col gap-y-20 lg:gap-y-30">
      <div className="relative">
        <div>
          <BottomRightPattern />
        </div>
        <Hero />
        <Problem />
      </div>
      <Freedom />
    </section>
  );
}
