import Image from "next/image";
import { monoSpace } from "../font";
import Link from "next/link";

interface iAppProps {
  title: string;
  description: string;
  live: string;
  github: string;
  imageSrc: string;
}

export default function Header() {
  return (
    <div className={`flex flex-col gap-5 my-16 ${monoSpace.className}`}>
      <h3 className={`text-2xl font-semibold `}>Projects</h3>
      <div className="p-2 flex flex-col gap-y-5">
        <ShowProjects
          title="Skill Exchange"
          description="Skill Exchange is a platform that enables users to swap skills with others by scheduling meetings and connecting through peer-to-peer WebRTC technology. The project is currently in the development stage, focusing on seamless real-time interactions and collaboration."
          live="https://dev-learn-sandy.vercel.app/"
          github="https://github.com/aryancs01/dev.learn"
          imageSrc="/skillExchange.png"
        />
      </div>
    </div>
  );
}

function ShowProjects({
  title,
  description,
  live,
  github,
  imageSrc,
}: iAppProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 border border-gray-600 rounded-md hover:bg-[#1e1e1e]">
      <div className="md:w-[30%] flex items-center">
        <Image
          src={imageSrc}
          alt={title}
          width={1887}
          height={888}
          className="rounded-md object-contain w-full h-auto"
          quality={100}
          priority
        />
      </div>
      <div className="md:w-[80%] ">
        <div className="flex flex-col gap-y-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
            <div className="flex items-center gap-x-4">
               <div className="text-gray-400">
                    Coming soon...
                </div> 
              {/* <LinkSVG live={live} />
              <Github github={github} /> */}
            </div>
          </div>
          <p className="text-sm md:text-lg tracking-tighter">{description}</p>
        </div>
      </div>
    </div>
  );
}

function LinkSVG({ live }: { live: string }) {
  return (
    <Link className="cursor-pointer" target="_blank" href={live}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </svg>
    </Link>
  );
}

function Github({ github }: { github: string }) {
  return (
    <Link className="cursor-pointer" target="_blank" href={github}>
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </Link>
  );
}
