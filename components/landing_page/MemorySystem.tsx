import { Card, CardContent } from "@/components/ui/card"

export function MemorySystem() {
  const features = [
    {
      title: "Shared Context",
      description: "Multiple workflows read from/write to single source"
    },
    {
      title: "Style Reference",
      description: "Upload past work for consistent tone and style"
    },
    {
      title: "Foundation for Apps",
      description: "Backend/process-first architecture"
    },
    {
      title: "Vector Storage",
      description: "RAG (Retrieval-Augmented Generation) capabilities"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Your Workflow's Memory
          </h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
            Data as a First-Class Citizen
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
