import Form from "@/components/form"
import Header from "@/components/header"
import Main from "@/components/main"
import Section from "@/components/section"

export default function About() {
 return (
  <>
   <Header image="/images/hero-1.webp">
    <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">Contact</h1>
    <p className="text-2xl text-slate-300">Fill out the form below to get in touch!</p>
   </Header>
   <Main>
    <Section titleAlt="Contact" id="contact">
     <Form />
    </Section>
   </Main>
  </>
 )
}