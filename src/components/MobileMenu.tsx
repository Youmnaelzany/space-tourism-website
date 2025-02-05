import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
const navItems = [
  { id: 1, label: "Home", href: "/", number: "00" },
  { id: 2, label: "Destination", href: "/destination", number: "01" },
  { id: 3, label: "Crew", href: "/crew", number: "02" },
  { id: 4, label: "Technology", href: "/technology", number: "03" },
];

export default function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" size={32} />
      </SheetTrigger>
      <SheetContent side="right" className="bg-white/10 backdrop-blur-lg">
        <nav className="pt-12">
          <ul className="flex flex-col gap-y-8">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="text-white uppercase text-sm tracking-[2.36px] leading-4 font-normal"
              >
                <Link href={item.href}>
                  <span className="font-bold pr-2">{item.number}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
