import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

export const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});
