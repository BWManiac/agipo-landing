import { Card, CardContent } from "@/components/ui/card"

export function VisionMarketplace() {
  const perspectives = [
    {
      title: "For Creators",
      description: "Stop selling courses on \"how to do your job.\" Sell the actual automated workflow that does the job. Build once, sell 1,000 times.",
      benefits: [
        "Monetize your expertise directly",
        "Scale without scaling your time",
        "Build recurring revenue streams"
      ]
    },
    {
      title: "For Companies",
      description: "Stop hiring full-time people for single, repetitive processes. \"Hire\" pre-built, expert-trained automated workflows.",
      benefits: [
        "Access expert processes instantly",
        "Reduce hiring and training costs",
        "Scale operations efficiently"
      ]
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-chart-1/10 to-chart-1/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            The Workflow Marketplace
          </h2>
          <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
            Foundation for a new economy of automated expertise
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {perspectives.map((perspective, index) => (
            <Card key={index} className="border-l-4 border-chart-1 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-chart-1 mb-4">
                  {perspective.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {perspective.description}
                </p>
                <ul className="space-y-2">
                  {perspective.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-muted-foreground flex items-start">
                      <span className="text-chart-1 font-bold mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
