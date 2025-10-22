"use client";
import { toast } from "sonner";
import { pixelifySans } from "../font";
import Link from "next/link";
import { useState } from "react";

export function HireMe() {
  const [hovered, setHovered] = useState<"hire" | "resume" | null>(null);

  const getRotation = () => {
    if (hovered === "hire") return "-rotate-12";
    if (hovered === "resume") return "rotate-12";
    return "rotate-0";
  };

  return (
    <div
      className={`flex gap-5 justify-center items-center text-md md:text-lg lg:text-xl ${pixelifySans.className}`}
    >
      <button
        className="flex gap-x-4 items-center tracking-widest not-first:w-fit border-2 border-gray-100 p-2 rounded-lg hover:bg-[#222] hover:text-blue-400 transition-all cursor-pointer"
        onMouseEnter={() => setHovered("hire")}
        onMouseLeave={() => setHovered(null)}
        onClick={() => {
          navigator.clipboard.writeText("aryan1032saxena@gmail.com");
          toast("Email copied to clipboard!!");
        }}
      >
        Hire me
              <svg
        className={`size-6 md:size-8 text-gray-800 dark:text-white transition-transform duration-300 ${getRotation()}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.35709 16V5.78571c0-.43393.34822-.78571.77777-.78571H18.5793c.4296 0 .7778.35178.7778.78571V16M5.35709 16h-1c-.55229 0-1 .4477-1 1v1c0 .5523.44771 1 1 1H20.3571c.5523 0 1-.4477 1-1v-1c0-.5523-.4477-1-1-1h-1M5.35709 16H19.3571M9.35709 8l2.62501 2.5L9.35709 13m4.00001 0h2"
        />
      </svg>
      </button>
 
    </div>
  );
}
