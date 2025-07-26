import { monoSpace } from "../font";

export default function WorkExperience(){
    return <div className={`${monoSpace.className} flex flex-col gap-7 my-20`}>
        <h3 className="text-2xl font-semibold">Work Experience</h3>
        <div className="md:ml-10">
            <div className="flex flex-col  md:flex-row gap-2 md:items-center md:justify-between">
                <h2 className="text-sm md:text-xl">Software Developer Intern</h2>
                <p className="text-xs md:text-md">Compitcom Digital Solutions Pvt. Ltd.</p>
            </div>
            <div className="text-gray-400 md:ml-4 text-xs md:text-md">
                <p>2 month - June-July</p>
            </div>
            <div>
                <ul>
                   <BulletPoints text="Built a complete slot booking system with real-time updates, Razorpay integration, and email notifications using Next.js and Firebase."/>
                    <BulletPoints text="Created dynamic, responsive websites with a focus on clean UI, SEO, and performance using Next.js, Tailwind CSS, and HTML."/>
                    <BulletPoints text="Worked with Shopify app development using Remix and integrated monitoring tools like Prometheus, Grafana, and Loki for better system reliability."/>
                </ul>
            </div>
        </div>
    </div>
}

function BulletPoints({text}:{text:string}){
    return <div className="md:ml-5 my-4 flex items-start gap-4">
        <div className="size-4 mt-2 border-b-8 border-blue-300 animate-spin bg-white rounded-full"></div>
        <p className="w-[90%]">{text}</p>
    </div>
}