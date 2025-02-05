"use client";
import { useEffect } from "react";
import { barlowCondensed, bellefair, barlow } from "../../public/fonts/page";
import BgDesk from "../../public/assets/home/background-home-desktop.jpg";
import BgTablet from "../../public/assets/home/background-home-tablet.jpg";
import BgMobile from "../../public/assets/home/background-home-mobile.jpg";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const setBgImage = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        document.body.style.backgroundImage = `url(${BgDesk.src})`;
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        document.body.style.backgroundImage = `url(${BgTablet.src})`;
      } else {
        document.body.style.backgroundImage = `url(${BgMobile.src})`;
      }
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundSize = "cover";
    };

    setBgImage(); // Set initial background image
    window.addEventListener("resize", setBgImage); // Update background image on resize

    return () => {
      window.removeEventListener("resize", setBgImage); // Cleanup event listener on component unmount
    };
  }, []);

  return (
    <main className="px-6 sm:px-10 lg:px-[10.31rem] mt-12 sm:pt-[6.63rem] flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-between lg:gap-[15rem]">
      <div className="flex flex-col items-center justify-center text-center gap-y-4 lg:text-left lg:items-start ">
        <h1
          className={`uppercase font-normal text-base tracking-normal leading-[0.16875rem] text-[#D0D6F9] sm:text-xl sm:tracking-[0.21094rem] ${barlowCondensed.className}`}
        >
          SO, YOU WANT TO TRAVEL TO
        </h1>
        <h2
          className={`uppercase font-normal text-[5rem] leading-[100px] text-white sm:text-[9.375rem] sm:leading-[9.375rem] ${bellefair.className}`}
        >
          SPACE
        </h2>
        <p
          className={`text-[0.9375rem] text-base leading-[1.5625rem] w-[20.4375rem] sm:w-[27.75rem] text-[#D0D6F9] sm:text-base sm:leading-[1.75rem] ${barlow.className}`}
        >
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <div className="size-[15.375rem] sm:size-[22.125rem] lg:size-[28.125rem] rounded-full hover:bg-white/10 hover:backdrop-blur-xs flex items-center justify-center">
        <div className="lg:size-[17.125rem] sm:size-[15.125rem] size-[9.375rem] rounded-full bg-white flex items-center justify-center">
          <Link
            href="/destination"
            className="text-[#0B0D17] text-xl font-normal leading-normal tracking-[0.07813rem] sm:text-[2rem] sm:tracking-[0.125rem]"
          >
            EXPLORE
          </Link>
        </div>
      </div>
    </main>
  );
}
