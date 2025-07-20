"use client";

import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/themetoggle";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
export const Header = () => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const logoSrc =
    currentTheme === "dark"
      ? "/prepmaster-logo-r.png"
      : "/prepmaster-logo-dark.png";

  const fetchMockQuestions = async () => {
    try {
      const response = await fetch("/api/mock-questions"); // Replace with your actual API endpoint
      const data = await response.json();
      console.log("Mock Questions:", data);
      toast.success("Mock interview questions loaded!");
    } catch (error) {
      console.error("Error fetching mock questions:", error);
      toast.error("Failed to load questions.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="sticky top-0 z-10 bg-white dark:bg-black flex p-4 items-center justify-between dark:bg-darkCard shadow-sm border-b-2">
        {mounted && (
          <Image
            src={logoSrc}
            alt="logo"
            width={160}
            height={100}
            priority
            className="transition-opacity duration-300 cursor-pointer"
            onClick={() => router.push("/")}
          />
        )}

        <ul className="hidden md:flex gap-6">
          <li
            className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </li>
          <li
            className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer"
            onClick={() => router.push("/questions")}
          >
            Questions
          </li>
          <li
            className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer"
            onClick={() => toast.info("Coming Soon!")}
          >
            Upgrade
          </li>
          <li
            className="hover:text-primaryDark hover:font-bold transition-all cursor-pointer"
            onClick={() =>
              toast.info(
                "1. Select a job role 2. Start mock interview 3. Get feedback!"
              )
            }
          >
            How it works?
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle /> {/* Theme Switch Button */}
          <UserButton />
        </div>
      </div>
    </>
  );
};
