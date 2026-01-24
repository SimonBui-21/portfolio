import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BackgroundRippleEffect } from "../ui/background-ripple-effect"
import "./Hero.css"
import { EncryptedText } from "../ui/encrypted-text"

export function Hero() {
  return (
    <section className="hero w-full py-24 text-white flex items-center justify-center">
      <div className="mx-auto flex max-w-7xl max-h-7xl flex-col items-center justify-center px-6 text-center">
        {/* <BackgroundRippleEffect /> */}
        <Badge className="mb-4 text-white">Software Engineer Intern</Badge>

        <h1 className="text-4xl tracking-tight sm:text-5xl dark:text-white">
          <EncryptedText
            text="Hi, I’m Nhan (Simon) Bui."
            encryptedClassName="text-neutral-500"
            revealedClassName="dark:text-white text-black"
            revealDelayMs={50}
          />
          <br />
          <EncryptedText
            text="Software Engineer & Data Science Student."
            encryptedClassName="text-neutral-500"
            revealedClassName="dark:text-white text-black"
            revealDelayMs={50}
          />
        </h1>

        {/* <p className="mt-6 text-lg text-muted-foreground">
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
        </div> */}
      </div>
    </section>
  )
}
