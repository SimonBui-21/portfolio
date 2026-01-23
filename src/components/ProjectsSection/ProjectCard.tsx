import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  link?: string
}

export function ProjectCard({
  title,
  description,
  tech,
  link,
}: ProjectCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge
              key={t}
              variant="secondary">
              {t}
            </Badge>
          ))}
        </div>

        {link && (
          <Button
            variant="link"
            className="px-0"
            asChild>
            <a
              href={link}
              target="_blank">
              View on GitHub →
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
