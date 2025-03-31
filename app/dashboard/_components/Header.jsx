"use client";

import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/themetoggle";

export const Header = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc = currentTheme === "dark" ? "/prepmaster-logo-r.png" : "/prepmaster-logo-dark.png";

  return (
    <div className="flex p-4 items-center justify-between dark:bg-darkCard shadow-sm">
      {mounted && (
        <Image
          src={logoSrc}
          alt="logo"
          width={160}
          height={100}
          priority
          className="transition-opacity duration-300"
        />
      )}

      <ul className="hidden md:flex gap-6">
        <li className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer">
          Dashboard
        </li>
        <li className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer">
          Questions
        </li>
        <li className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer">
          Upgrade
        </li>
        <li className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer">
          How it works?
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <ThemeToggle /> {/* Theme Switch Button */}
        <UserButton />
      </div>
    </div>
  );
};
