"use client";

import { useState } from "react";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import { pixelifySans } from "../font";
import { cn } from "@/lib/utils";
import { ArrowLeftRight } from "lucide-react";

export function TabContent() {
  const [activeTab, setActiveTab] = useState<"workExperience" | "projects">("projects");

  return (
    <div className={`w-full ${pixelifySans.className}`}>
      <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-10 text-xl mb-6 relative">
        <button
          onClick={() => setActiveTab("workExperience")}
          className={cn(
            "text-md md:text-lg lg:text-2xl border border-md py-2 px-2 rounded-md w-fit",
            activeTab === "workExperience" && "text-blue-400"
          )}
        >
          Work Experience
        </button>

        {/* Animated arrow */}
        <div
          className={cn(
            "transition-transform duration-500",
            activeTab === "projects" ? "translate-x-3" : "-translate-x-3"
          )}
        >
          <ArrowLeftRight className="text-blue-400" />
        </div>

        <button
          onClick={() => setActiveTab("projects")}
          className={cn(
            "text-md md:text-lg lg:text-2xl border border-md py-2 px-2 rounded-md w-fit",
            activeTab === "projects" && "text-blue-400"
          )}
        >
          Projects
        </button>
      </div>

      <div>
        {activeTab === "workExperience" && <WorkExperience />}
        {activeTab === "projects" && <Projects />}
      </div>
    </div>
  );
}
