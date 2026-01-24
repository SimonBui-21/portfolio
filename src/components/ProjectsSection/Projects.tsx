import { HeroParallax } from "../ui/hero-parallax"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20">
      {/* <h2 className="mb-8 text-3xl font-semibold">Projects</h2> */}
      <HeroParallax products={products} />
      {/* <div className="grid gap-6 sm:grid-cols-2">
        <ProjectCard
          title="Voting Assistance AI Chatbot for Greene County"
          description="AI-powered chatbot using a Retrieval-Augmented Generation (RAG) pipeline to help users navigate voting information, polling locations, and election FAQs."
          tech={[
            "Python",
            "FastAPI",
            "RAG",
            "Vector Database",
            "Prompt Engineering",
          ]}
        />

        <ProjectCard
          title="Personal AI Study Assistant"
          description="Local RAG-based study assistant that indexes notes and generates summaries and practice questions using semantic search and LLMs."
          tech={[
            "FastAPI",
            "ChromaDB",
            "SentenceTransformers",
            "LLMs",
            "HTML/JS",
          ]}
          link="https://github.com/SimonBui-21/Simon-personal-AI-assisstant"
        />

        <ProjectCard
          title="Student Residence Life Management System"
          description="Production web application supporting 5,000+ students. Built RESTful APIs and frontend features in an Agile team environment."
          tech={["Django Rest Framework", "HTML", "CSS", "jQuery", "Pytest"]}
        />

        <ProjectCard
          title="Enterprise Web Application (Mekong Solutions)"
          description="Full-stack enterprise web application developed in a professional team environment, focusing on API design, UI implementation, and database optimization."
          tech={["Java", "Spring MVC", "SQL", "Unit Testing"]}
        />
      </div> */}
    </section>
  )
}

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
]
