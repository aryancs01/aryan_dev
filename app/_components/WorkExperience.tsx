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
                   <BulletPoints text="Led the development of a full-fledged slot booking system using Next.js and Firebase, integrating Razorpay payments, email notifications, and real-time updates."/>
                    <BulletPoints text="Enhanced and debugged Next.js and HTML UI components, implemented pagination, and optimized for SEO, improving performance and discoverability."/>
                    <BulletPoints text="Dynamically developed websites, with a strong focus on  responsive UI using Next.js and Tailwind CSS."/>
                    <BulletPoints text="Embedded a Remix application into Shopify Admin to create custom product collections, gaining hands-on experience with Shopify app development and metafields integration."/>
                    <BulletPoints text="Integrated Prometheus, Grafana, and Loki for real-time server monitoring and system log analysis, improving system reliability and observability."/>
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