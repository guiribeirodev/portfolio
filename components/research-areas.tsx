import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const researchAreas = [
  {
    title: "Desenvolvimento FullStack",
    description: "Desenvolvimento ponta a ponta",
  },
  // {
  //   title: "Chemistry",
  //   description: "Brief description of the research interest",
  // },
]

export function ResearchAreas() {
  return (
    <section id="research" className="mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-6">Áreas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchAreas.map((area) => (
          <Card key={area.title} className="bg-card">
            <CardHeader>
              <CardTitle className="text-card-foreground">{area.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground">{area.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
