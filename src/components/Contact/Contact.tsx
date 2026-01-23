import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 text-center">
      <h2 className="text-3xl font-semibold">Get in Touch</h2>

      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        I’m actively seeking software engineering and AI-focused internship
        opportunities. Open to backend, full-stack, and applied AI roles.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <Button asChild>
          <a href="mailto:simonbui.official@gmail.com">Email Me</a>
        </Button>
        <Button
          variant="outline"
          asChild>
          <a
            href="https://github.com/SimonBui-21"
            target="_blank">
            GitHub
          </a>
        </Button>
        <Button
          variant="outline"
          asChild>
          <a
            href="https://www.linkedin.com/in/nhantrongbui/"
            target="_blank">
            LinkedIn
          </a>
        </Button>
      </div>
    </section>
  )
}
