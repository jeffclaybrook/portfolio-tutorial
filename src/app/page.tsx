"use client"

import Link from "next/link"
import AboutGrid from "@/components/about-grid"
import ArtboardsCarousel from "@/components/artboards-carousel"
import Faqs from "@/components/faqs"
import Form from "@/components/form"
import ForwardButton from "@/components/forward-button"
import Header from "@/components/header"
import Main from "@/components/main"
import ProjectsGrid from "@/components/projects-grid"
import Section from "@/components/section"
import SkillsGrid from "@/components/skills-grid"
import Testimonial from "@/components/testimonial"
import { useTypewriter } from "react-simple-typewriter"
import { Button } from "@/components/ui/button"
import { Github, Resume } from "@/components/icons"
import { testimonials } from "@/lib/data"

const words = [
  "product manager.",
  "frontend developer.",
  "UX/UI designer.",
  "content creator.",
  "QA & debugger.",
  "technical writer."
]

export default function Home() {
  const [text] = useTypewriter({
    words: words,
    loop: 0,
    typeSpeed: 125,
    deleteSpeed: 50,
    delaySpeed: 2050
  })

  return (
    <>
      <Header image="images/hero-1.webp">
        <h1 className="text-4xl lg:text-5xl font-light text-slate-300 mb-2">
          Hi, my name is <strong className="font-bold text-slate-50">Jeff</strong>
        </h1>
        <p className="text-2xl text-slate-300 mb-4">
          and I&apos;m a <strong className="font-bold text-slate-50">{text}</strong>
        </p>
        <div className="flex gap-4">
          <Button variant="custom" size="lg" asChild>
            <Link href="/Jeff_Claybrook_Resume.pdf" aria-label="My resume">
              <Resume className="mr-2" />
              My Resume
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="https://github.com/jeffclaybrook" target="_blank" rel="noreferrer" aria-label="My GitHub">
              <Github className="mr-2" />
              My GitHub
            </a>
          </Button>
        </div>
      </Header>
      <Main>
        <Section title="About" id="about" subtitle="A little bit about me and what I bring to the party">
          <AboutGrid />
          <ForwardButton href={"/about"} label="More About Me" />
        </Section>
        <Testimonial
          quote={testimonials[0].quote}
          name={testimonials[0].name}
          title={testimonials[0].title}
          image={testimonials[0].image}
        />
        <Section title="Skills" id="skills" subtitle="I'm a Jeff of all trades">
          <SkillsGrid />
          <ForwardButton href={"/skills"} label="More Skills" />
        </Section>
        <Testimonial
          quote={testimonials[1].quote}
          name={testimonials[1].name}
          title={testimonials[1].title}
          image={testimonials[1].image}
        />
        <Section title="Projects" id="projects" subtitle="A few sample projects you can demo">
          <ProjectsGrid />
          <ForwardButton href={"/projects"} label="More Projects" />
        </Section>
        <Testimonial
          quote={testimonials[2].quote}
          name={testimonials[2].name}
          title={testimonials[2].title}
          image={testimonials[2].image}
        />
        <Section title="Artboards" id="artboards" subtitle="Getting the most out of every pixel">
          <ArtboardsCarousel />
          <ForwardButton href={"/artboards"} label="More Artboards" />
        </Section>
        <Section title="FAQs" id="faqs" subtitle="Frequently asked questions">
          <Faqs />
        </Section>
        <Testimonial
          quote={testimonials[3].quote}
          name={testimonials[3].name}
          title={testimonials[3].title}
          image={testimonials[3].image}
        />
        <Section title="Contact" id="contact" subtitle="Let's get in touch!">
          <Form />
        </Section>
      </Main>
    </>
  )
}