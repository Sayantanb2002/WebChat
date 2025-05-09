/* this is known as the client directive -> allow to use client components
    This marks a boundary b/w the Server-Side components and the Client Side
    By Default: All the components in NextJS are Server-Side  
    the using the "use client" directive -> we send pre-rendered components also we can use hooks and browser API
    
    @refer -> https://nextjs.org/docs/app/building-your-application/rendering/client-components
*/

"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils"; // this function allows us to assign multiple and dynamical className
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname(); // states which path we are currently on

  return (
    <section
      className="sticky left-0 top-0 flex h-screen w-fit flex-col 
    justify-between bg-[#1C1F2E] p-6 pt-28 text-white max-sm:hidden lg:w-[264px]"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((link) => {
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`);

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  "bg-blue-500": isActive,
                }
              )}
            >
              <Image
                src={link.imgUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
