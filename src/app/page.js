import { ThreeDCardDemo } from "@/components/3Dcard";
import { MeteorsDemo } from "@/components/AboutMegheGroup";
import { LayoutGridDemo } from "@/components/Gallery";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import { Testimonials } from "@/components/Testimonials";
import { BackgroundBeams } from "@/components/backgroun";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className=" h-svh w-full mb-2 background-gradient-main">
        {/* <BackgroundBeams /> */}
        <Header />
        <div></div>
        <div className="marquee mx-4 mt-2 ">
          <p className="text-xs">
            <span className="text-[#F6A602] font-semibold ">Notice :</span> Join
            us at the forefront of the digital revolution as we delve into the
            intricate world of computer technology, igniting curiosity,
            fostering collaboration, and paving the way for endless .
          </p>
        </div>
        
        <LandingPage />
        
      </div>
      <MeteorsDemo />
      <LayoutGridDemo />
      <Testimonials />
      <ThreeDCardDemo />
      Test
    </>
  );
}
