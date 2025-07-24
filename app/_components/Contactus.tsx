import Link from "next/link";
import { monoSpace } from "../font";
import PlanetAnimation from "./PlanetAnimation";

export default function ContactUs(){
    return (
        <div className="flex flex-col gap-20">
            <div className={`${monoSpace.className} flex flex-col gap-7`}>
                <h3 className="text-2xl font-semibold">Contact Me</h3>
                <div className="flex flex-col items-center md:flex-row justify-center md:gap-5 md:text-lg">
                <div>
                    --{" "}<Link className="hover:underline hover:text-blue-400" href="mailto:aryan1032saxena@gmail.com" target="_blank">aryan1032saxena@gmail.com</Link>
                </div>
                    //
                    <div>
                    --{" "}<Link className="hover:underline hover:text-blue-400" href="https://x.com/aryandev_" target="_blank">twitter</Link>
                    </div>
                    //
                    <div>
                    --{" "}<Link className="hover:underline hover:text-blue-400" href="https://www.linkedin.com/in/aryan-saxena12/" target="_blank">Linkedin</Link>
                    </div>
                </div>
            </div> 
            <PlanetAnimation/>
        </div>   
    )
}