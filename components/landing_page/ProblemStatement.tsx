import { Card, CardContent } from "@/components/ui/card"

export function ProblemStatement() {
  const problems = [
    {
      icon: "🔒",
      title: "Expert Knowledge is Trapped",
      description: "Most valuable white-collar workers are bottlenecks. Their unique \"way of thinking\" can't be replicated or scaled."
    },
    {
      icon: "🔧",
      title: "Tools Force You to Think Like Them",
      description: "Existing automation platforms force conformity. Users must adapt thinking to tool constraints, limiting adoption."
    },
    {
      icon: "❓",
      title: "Current AI is a \"Black Box\"",
      description: "Generative AI creates content but isn't accountable. Businesses can't trust autonomous agents."
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Expert Knowledge is Trapped & Unscalable
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The most valuable white-collar workers are bottlenecks. Their unique "way of thinking" and complex processes can't be easily replicated, scaled, or sold.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-8 p-6 border-l-4 border-primary relative">
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full"></div>
                <div className="text-4xl min-w-[4rem] text-center">
                  {problem.icon}
                </div>
                <Card className="flex-1 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-destructive mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
