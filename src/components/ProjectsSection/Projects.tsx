import { ProjectCard } from "./ProjectCard"
import { projectsData } from "../../content/project-data"

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20">
      <h2 className="mb-8 text-3xl font-semibold text-center">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 px-8 md:px-12 mx-auto max-w-6xl">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}


