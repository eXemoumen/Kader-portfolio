import { Hero } from "@/components/component/hero";
import { About } from "@/components/component/about";
import Image from "next/image";
import { Service } from "@/components/component/service";
import { Project } from "@/components/component/project";
import { Contact } from "@/components/component/contact";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}
