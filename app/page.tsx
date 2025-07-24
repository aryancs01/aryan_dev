import ContactUs from "./_components/Contactus";
import Header from "./_components/Header";
import Projects from "./_components/Projects";
import Separator from "./_components/Seperator";
import TechStack from "./_components/TechStack";
import WorkExperience from "./_components/WorkExperience";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Separator/>
      <WorkExperience/>
      <Separator/>
      <Projects/>
      <Separator/>
      <TechStack/>
      <Separator/>
      <ContactUs/>
    </div>
  )
}
