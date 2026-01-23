import { Hero } from "@/components/Hero/Hero"
import MainHeader from "../components/MainHeader/MainHeader"
import { Projects } from "@/components/ProjectsSection/Projects"
import { Experience } from "@/components/Experience/Experience"
import { Contact } from "@/components/Contact/Contact"

export default function Home() {
  return (
    <div>
      {/* <MainHeader /> */}
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}
