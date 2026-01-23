import { Card, CardContent } from "@/components/ui/card"

export function Experience() {
  return (
    <section className="py-20">
      <h2 className="mb-8 text-3xl font-semibold">Experience</h2>

      <div className="space-y-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <h3 className="font-medium">
                Software Developer (Student Worker)
              </h3>
              <span className="text-sm text-muted-foreground">
                Jul 2025 – Present
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Missouri State University — Developed RESTful APIs using Django
              Rest Framework for a web application serving 5,000+ students.
              Implemented frontend features and wrote unit tests with pytest
              while collaborating in Agile workflows.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between">
              <h3 className="font-medium">Software Developer Intern</h3>
              <span className="text-sm text-muted-foreground">
                Dec 2023 – May 2024
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Mekong Solutions — Worked as a full-stack developer in a 7-member
              team. Implemented backend features using Java Spring MVC, designed
              APIs, optimized database schemas, and performed unit testing.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
