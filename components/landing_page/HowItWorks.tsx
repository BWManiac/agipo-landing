import { Card, CardContent } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      title: "Step 1: Capture Your Process",
      items: [
        "Screen Recording: Record your screen and talk through your task",
        "Context Ingestion: Connect tools (Slack, G-Drive, Email)",
        "AI Context Manager: AI asks the right questions to get sufficient context"
      ]
    },
    {
      title: "Step 2: AI Generates Your Workflow",
      items: [
        "Code-First Nodes: AI-generated code, not pre-built blocks",
        "Zod Validation: Automatic input/output schema generation",
        "Full Ecosystem: Access to complete development ecosystem"
      ]
    },
    {
      title: "Step 3: Refine & Deploy",
      items: [
        "Scannable Workflows: Immediately graspable by anyone",
        "Review & Critique: See mistakes? Critique directly in chat",
        "Continuous Improvement: AI learns from your feedback"
      ]
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Build, Capture & Iterate
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-chart-2 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center gap-8 relative ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-5 h-5 bg-chart-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>
                
                {/* Content Card */}
                <Card className="flex-1 max-w-md shadow-sm">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-chart-2 mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
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
