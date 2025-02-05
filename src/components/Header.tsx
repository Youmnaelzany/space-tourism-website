"use client";
import Image from "next/image";
import Logo from "../../public/assets/shared/logo.svg";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { usePathname } from "next/navigation";
import { bellefair, barlow, barlowCondensed } from "../../public/fonts/page";

const navItems = [
  { id: 1, label: "Home", href: "/", number: "00" },
  { id: 2, label: "Destination", href: "/destination", number: "01" },
  { id: 3, label: "Crew", href: "/crew", number: "02" },
  { id: 4, label: "Technology", href: "/technology", number: "03" },
];

interface NavItem {
  id: number;
  label: string;
  href: string;
  number: string;
}

const NavLink = ({ item }: { item: NavItem }) => {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <Link
      href={item.href}
      className={`relative hover:after:opacity-100 ${
        isActive ? "after:opacity-50" : "after:opacity-0"
      } after:duration-300 after:ease-in-out after:absolute after:-bottom-8 after:left-1/2 after:w-full after:h-0.5 after:bg-white after:transform after:-translate-x-1/2`}
    >
      <span className="font-bold pr-2 sm:hidden lg:inline">{item.number}</span>
      {item.label}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="flex items-center justify-between lg:pt-10">
      <div className="sm:pl-10 pl-6 pt-6 sm:pt-0">
        <Image src={Logo} alt="logo" width={48} height={48} />
      </div>
      <div className="hidden sm:block">
        <nav className="flex items-center justify-start sm:w-[28.125rem] lg:w-[42.875rem] sm:h-24 bg-white/10 backdrop-blur-xs lg:pl-20 sm:pl-12">
          <ul className="flex items-center justify-between font-normal gap-x-10">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`text-white uppercase text-[0.875rem] font-normal leading-normal tracking-[0.14763rem] lg:text-base lg:tracking-[0.16875rem] ${barlowCondensed.className}`}
              >
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="pt-6 pr-6 sm:hidden">
        <MobileMenu />
      </div>
    </header>
  );
}
