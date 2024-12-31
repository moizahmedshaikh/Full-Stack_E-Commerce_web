"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import {ShoppingBag} from "lucide-react"
import { useShoppingCart } from "use-shopping-cart";

const links = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "MEN",
    href: "/Men",
  },
  {
    name: "WOMEN",
    href: "/Women",
  },
  {
    name: "TEEN",
    href: "/Teen",
  },
];

const Navbar = () => {

  const {handleCartClick} = useShoppingCart();


  const pathName = usePathname();

  return (
    <header className=" border-b fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex items-center   justify-between mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6">
        <Link href="/">
          <h1 className=" text-2xl md:text-4xl font-bold">
            Moiz <span className="text-primary">Ahmed</span>{" "}
          </h1>
        </Link>
        <nav className="hidden lg:flex gap-12 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  href={link.href}
                  className="text-base font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-base font-semibold text-gray-600 transition duration-200 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l">
            <Button onClick={()=>handleCartClick()} variant={"outline"} className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
                <ShoppingBag/>
                <span className="hidden text-xs font-semibold text-gray-500 sm:block">Cart</span>
            </Button>
        </div>


      </div>
    </header>
  );
};

export default Navbar;
