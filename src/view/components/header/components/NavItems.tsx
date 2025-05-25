'use client'

import { cn } from "@/app/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  label: string;
  href: string;
}


export function NavItems({label, href}: NavItemsProps) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link href={href} className={cn(
      "text-gray-400 flex justify-center items-center font-medium",
      isActive && "text-gray-50",
    )}>
      <span className="text-blue-500">
        #
      </span>
      <span>
        {label}
      </span>
    </Link>
  )
}
