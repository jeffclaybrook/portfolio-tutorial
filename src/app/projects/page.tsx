import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import ProjectsGrid from "@/components/projects-grid"
import Section from "@/components/section"

export default function About() {
 return (
  <>
   <Header image="/images/hero-4.webp">
    <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">Projects</h1>
    <p className="text-2xl text-slate-300">A few sample projects you can demo</p>
   </Header>
   <Main>
    <Section titleAlt="Projects" id="projects">
     <ProjectsGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}