import { ProjectCard } from "./ProjectCard"

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20">
      <h2 className="mb-8 text-3xl font-semibold">Projects</h2>

      <div className="grid gap-6 sm:grid-cols-2">
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
      </div>
    </section>
  )
}
