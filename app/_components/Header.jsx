"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TfiMenu, TfiAngleDown } from "react-icons/tfi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header() {
  return (
    <div className="relative w-full flex h-[80px] items-center justify-center">
      <Navbar className="top-0 bg-brand " />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const pathname = usePathname(); // Get the current path
  const [active, setActive] = useState(null);
  const [showLogo, setShowLogo] = useState(false);
  const router = useRouter()
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight / 2) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-full rounded-full bg-brand md:mx-5 z-50",
        className
      )}
    >
      <Menu
        setActive={setActive}
        className="bg-brand flex flex-row lg:gap-6 justify-between"
      >
        <div className="flex-row lg:gap-20 gap-2 md:gap-10 hidden md:flex">
          <Link href="/">
            <MenuItem
              setActive={setActive}
              item="Home"
              className={cn({
                "text-blue-500": pathname === "/",
                "text-white": pathname !== "/",
              })}
              path={pathname}
              activePath={"/"}
            />
          </Link>
          <Link href="/about">
            <MenuItem
              setActive={setActive}
              item="About Us"
              className={cn({
                "text-blue-500": pathname === "/about",
                "text-white": pathname !== "/about",
              })}
              path={pathname}
              activePath={"/about"}
            />
          </Link>
          <Link href="/services">
            <MenuItem
              setActive={setActive}
              item="Services"
              className={cn({
                "text-blue-500": pathname === "/services",
                "text-white": pathname !== "/services",
              })}
              path={pathname}
              activePath={"/services"}
            />
          </Link>
        </div>

        {/* Logo */}
        <div
          className={cn(
            "transition-opacity duration-500 ease-in-out",
            showLogo ? "opacity-100" : "md:opacity-0 opacity-100"
          )}
        >
          <Image
            src="/logowhite.png"
            alt="Logo"
            className="h-12 w-auto"
            width={50}
            height={50}
          />
        </div>

        <div className="md:flex hidden flex-row lg:gap-20 gap-2 md:gap-10">
          <Link href="/contact">
            <MenuItem
              setActive={setActive}
              item="Contact"
              className={cn({
                "text-blue-500": pathname === "/contact",
                "text-white": pathname !== "/contact",
              })}
              path={pathname}
              activePath={"/contact"}
            />
          </Link>
          <Link href="/career">
            <MenuItem
              setActive={setActive}
              item="Career"
              className={cn({
                "text-blue-500": pathname === "/career",
                "text-white": pathname !== "/career",
              })}
              path={pathname}
              activePath={"/career"}
            />
          </Link>
          <Link href="/#our-clients">
            <MenuItem
              setActive={setActive}
              item="Our Clients"
              className={cn({
                "text-blue-500": pathname === "/career",
                "text-white": pathname !== "/career",
              })}
              path={pathname}
              activePath={"#our-clients"}
              
            />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex p-4 py-2 bg-white rounded-md bg-opacity-5 justify-center items-center cursor-pointer">
                <TfiMenu className="text-2xl" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-brand">
              <SheetHeader>
                <SheetTitle className="text-white">
                  Zager Digital Services
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <Link href="/">
                  <MenuItem
                    setActive={setActive}
                    item="Home"
                    className={cn({
                      "text-blue-500": pathname === "/",
                      "text-white": pathname !== "/",
                    })}
                    path={pathname}
                    activePath={"/"}
                  />
                </Link>
                <Link href="/about">
                  <MenuItem
                    setActive={setActive}
                    item="About Us"
                    className={cn({
                      "text-blue-500": pathname === "/about",
                      "text-white": pathname !== "/about",
                    })}
                    path={pathname}
                    activePath={"/about"}
                  />
                </Link>
                <Link href="/services">
                  <MenuItem
                    setActive={setActive}
                    item="Services"
                    className={cn({
                      "text-blue-500": pathname === "/services",
                      "text-white": pathname !== "/services",
                    })}
                    path={pathname}
                    activePath={"/services"}
                  />
                </Link>
                <Link href="/contact">
                  <MenuItem
                    setActive={setActive}
                    item="Contact"
                    className={cn({
                      "text-blue-500": pathname === "/contact",
                      "text-white": pathname !== "/contact",
                    })}
                    path={pathname}
                    activePath={"/contact"}
                  />
                </Link>
                <Link href="/career">
                  <MenuItem
                    setActive={setActive}
                    item="Career"
                    className={cn({
                      "text-blue-500": pathname === "/career",
                      "text-white": pathname !== "/career",
                    })}
                    path={pathname}
                    activePath={"/career"}
                  />
                </Link>
                <Link href="/#our-clients">
                  <MenuItem
                    setActive={setActive}
                    item="Our Client"
                    className={cn({
                      "text-blue-500": pathname === "/career",
                      "text-white": pathname !== "/career",
                    })}
                    path={pathname}
              activePath={"#our-clients"}
                  />
                </Link>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Close Menu</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </Menu>
    </div>
  );
}

function DropdownMenuComponent({ title, links }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-1 cursor-pointer hover:text-blue-500 transition-all duration-300">
          {title}
          <TfiAngleDown />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-brand text-white">
        <DropdownMenuLabel></DropdownMenuLabel>
        {links.map((link) => (
          <DropdownMenuItem asChild key={link.href}>
            <Link href={link.href} className="w-full px-2 py-1">
              {link.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
