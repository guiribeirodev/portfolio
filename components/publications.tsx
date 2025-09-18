import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const publications = [
  {
    title: "Investigations on Radioactive Substances",
    journal: "Annales de Chimie et de Physique",
    year: "1904",
  },
  {
    title: "Radio-Activity",
    journal: "Philosophical Magazine",
    year: "1900",
  },
  {
    title: "The Radiation of Uranium Compounds",
    journal: "Comptes Rendus de l'Académie des Sciences",
    year: "1898",
  },
]

export function Publications() {
  return (
    <section id="papers" className="mb-12">
      <h2 className="text-3xl font-bold text-foreground mb-6">Recent Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index} className="bg-muted">
            <CardHeader>
              <CardTitle className="text-lg text-card-foreground">{pub.title}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {pub.journal} • {pub.year}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
