"use client";
import BgDesk from "../../../public/assets/crew/background-crew-desktop.jpg";
import BgTablet from "../../../public/assets/crew/background-crew-tablet.jpg";
import BgMobile from "../../../public/assets/crew/background-crew-mobile.jpg";
import { useEffect } from "react";

export default function CrowLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

  return <div className="max-w-screen-2xl mx-auto">{children}</div>;
}
