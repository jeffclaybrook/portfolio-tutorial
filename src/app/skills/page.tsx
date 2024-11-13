import BackButton from "@/components/back-button"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"
import SkillsGrid from "@/components/skills-grid"

export default function Skills() {
 return (
  <>
   <Header image="/images/hero-3.webp">
    <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">Skills</h1>
    <p className="text-2xl text-slate-300">I&apos;m a <s>Jack</s> Jeff of all trades</p>
   </Header>
   <Main>
    <Section titleAlt="Skills" id="skills">
     <SkillsGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}