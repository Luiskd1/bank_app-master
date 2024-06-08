'use client'
import {
  AlignJustify,
  Bell,
  CircleUserRound,
  FileClock,
  HandCoins,
  Home,
  Search,
  Settings,
} from "lucide-react";
import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { GetOut } from "@/app/auth/actions"
import { Separator } from "./ui/separator";
import { useQuery } from "@tanstack/react-query";
import useApi from '@/hooks/useApi';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import Link from "next/link";
import SwitchTheme from "./switchTheme";
import Hbutton from "./other/hbutton";
import { siteConfig } from "./config/site";
import { useSidebar } from "@/hooks/useSideBar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menubar, MenubarContent, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

const Header = () => {
  const { data, refetch } = useApi();
  const handleLogout = () => {
    GetOut();
    refetch();
  };
  return (
    <div>
      {data?.data.session && (
        <div className="flex gap-8 justify-between pt-3 pr-10 h-[59px] ">
          <div className="block ml-3  sm:hidden">
            <Sheet key={"left"}>
              <SheetTrigger asChild >
                <Button variant="outline">
                  <AlignJustify />
                </Button>
              </SheetTrigger>
              <SheetContent side={"left"} className="pb-16">
                <div className="flex justify-center items-center w-full ">
                  <Image src="logo.png" className='rounded-full mr-3 dark:invert' height={40} width={40} alt="logoheader"/>
                  <h1>
                    <strong>Bank</strong> Dev
                  </h1>
                </div>
                <ul className="mx-4 my-2 flex flex-col gap-2">
                  {siteConfig.navMenuItems.map((item, index) => (
                    <Button variant={'link'} key={`${item}-${index}`}>
                      <SheetClose asChild>
                        <Link href={item.href}>
                          {item.label}
                        </Link>
                      </SheetClose>
                    </Button>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>

          </div>

          <div className=" hidden sm:block relative ml-auto flex-1 md:grow-0">
            <Search className=" absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-full bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>

          <div className="flex">
            <SwitchTheme />
          </div>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="overflow-hidden rounded-full"
              >
                <Bell />
              </Button>
            </HoverCardTrigger>

            <HoverCardContent className="w-80">
              NO HAY NOTIFICACIONES...
            </HoverCardContent>
          </HoverCard>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="https://avatar.iran.liara.run/public/35"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <button onClick={() => handleLogout()}>Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      <Separator orientation="horizontal" />
    </div>

  );
};
export default Header;
