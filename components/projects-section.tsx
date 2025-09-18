import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Portfolio",
    description: "Meu portfolio pessoal",
    technologies: ["Astro", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/guiribeirodev/portfolio",
    liveUrl: "#",
    image: "/project-1.jpg"
  },
  // {
  //   title: "Portfolio Website",
  //   description: "Site pessoal responsivo com design moderno, showcasing projetos e experiências profissionais.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  //   githubUrl: "https://github.com/guiribeirodev",
  //   liveUrl: "#",
  //   image: "/project-2.jpg"
  // },
  // {
  //   title: "Task Management App",
  //   description: "Aplicação de gerenciamento de tarefas com funcionalidades avançadas de organização e colaboração.",
  //   technologies: ["React", "Node.js", "MongoDB", "Express"],
  //   githubUrl: "https://github.com/guiribeirodev",
  //   liveUrl: "#",
  //   image: "/project-3.jpg"
  // }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Aqui estão alguns dos meus projetos mais recentes, demonstrando minhas habilidades em desenvolvimento web e tecnologias modernas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {/* {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))} */}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    
                    {project.liveUrl !== "#" && (
                      <Button size="sm" asChild>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}