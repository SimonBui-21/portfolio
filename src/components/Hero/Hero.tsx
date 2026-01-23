import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BackgroundRippleEffect } from "../ui/background-ripple-effect"
import "./Hero.css"

export function Hero() {
  return (
    <section className="py-24 w-screen">
      <div className="hero w-full max-w-3xl mx-auto text-center">
        <BackgroundRippleEffect />
        <Badge className="mb-4 ">Software Engineer Intern</Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I’m Nhan (Simon) Bui.
          <br />
          Software Engineer & Data Science Student.
        </h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Software Developer (Student Worker) at Missouri State University with
          experience building full-stack web applications, RESTful APIs, and
          AI-powered systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Badge variant="secondary">Python</Badge>
          <Badge variant="secondary">Django / FastAPI</Badge>
          <Badge variant="secondary">React / Next.js</Badge>
          <Badge variant="secondary">AWS</Badge>
          <Badge variant="secondary">RAG / LLMs</Badge>
        </div>

        <div className="mt-10 flex gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button
            variant="outline"
            asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
