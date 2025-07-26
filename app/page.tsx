"use client"
import ContactUs from "./_components/Contactus";
import Header from "./_components/Header";
import Separator from "./_components/Seperator";
import TechStack from "./_components/TechStack";
import { TabContent } from "./_components/TabContent";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Separator/>
      <TabContent/>
      <Separator/>
      <TechStack/>
      <Separator/>
      <ContactUs/>
    </div>
  )
}
