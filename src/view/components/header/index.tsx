import Image from "next/image";
import Link from "next/link";
import { NavItems } from "./components/NavItems";
import { navItems } from "./components/header";

export function Header() {

  return (
    <header className="absolute top-0 w-full z-10 h-22 bg-red-500">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            width={180}
            height={110}
            src="/images/DevRoot.svg"
            alt="logo next"
            />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-5">
          {navItems.map(item => (
            <NavItems {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
}
