import { Card, CardContent } from "@/components/ui/card"

export function SolutionOverview() {
  const features = [
    {
      title: "Natural Language Interface",
      description: "Describe workflows in plain English"
    },
    {
      title: "Code-First Nodes",
      description: "AI-generated code with full ecosystem access"
    },
    {
      title: "Browser-Native Execution",
      description: "Workflows run entirely in your browser with full ecosystem access"
    },
    {
      title: "Human Accountability",
      description: "Every decision is inspectable and modifiable"
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The Platform for Workflow Digitalization
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Agipo is a platform for expert, white-collar workers to build, manage, and monetize automated workflows that capture their unique processes.
                  </p>
                </div>

                {/* Central IPO Diagram - Vertical */}
                <div className="flex flex-col items-center mb-12">
                  <Card className="w-full max-w-md shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center space-y-6">
                        <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-center w-full">
                          Input
                        </div>
                        <div className="text-2xl text-primary font-bold">↓</div>
                        <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-center w-full">
                          Process
                        </div>
                        <div className="text-2xl text-primary font-bold">↓</div>
                        <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-center w-full">
                          Output
                        </div>
                      </div>
                      <p className="text-center text-muted-foreground italic mt-6">
                        Every workflow follows the IPO principle
                      </p>
                    </CardContent>
                  </Card>
                </div>

        {/* Feature Orbit */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-primary">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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
