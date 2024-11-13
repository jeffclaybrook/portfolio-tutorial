import AboutGrid from "@/components/about-grid"
import BackButton from "@/components/back-button"
import Bio from "@/components/bio"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"

export default function About() {
 return (
  <>
   <Header image="/images/hero-2.webp">
    <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">About</h1>
    <p className="text-2xl text-slate-300">A little bit about me and what I bring to the party</p>
   </Header>
   <Main>
    <Section titleAlt="About" id="about">
     <Bio />
     <AboutGrid />
     <BackButton />
    </Section>
   </Main>
  </>
 )
}