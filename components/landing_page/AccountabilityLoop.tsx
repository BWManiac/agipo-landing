import { Card, CardContent } from "@/components/ui/card"

export function AccountabilityLoop() {
  const workflowSteps = [
    { text: "AI Generates Workflow", angle: 0, step: 1 },      // Top
    { text: "Human Reviews & Validates", angle: 60, step: 2 },   // Top-right
    { text: "AI Learns & Improves", angle: 120, step: 3 },      // Bottom-right
    { text: "Workflow Executes", angle: 180, step: 4 },          // Bottom
    { text: "10x Productivity", angle: 240, step: 5 },          // Bottom-left
    { text: "Continuous Feedback", angle: 300, step: 6 }        // Top-left
  ]

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Human-in-the-Loop Design
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every workflow follows a continuous cycle where human expertise guides AI, ensuring accountability and continuous improvement.
          </p>
        </div>

        {/* Desktop Circle Layout */}
        <div className="hidden md:flex justify-center items-center relative max-w-5xl mx-auto py-12 overflow-hidden" style={{ minHeight: '600px' }}>
          {/* Central Hub */}
          <div className="bg-primary text-primary-foreground w-40 h-40 rounded-full flex items-center justify-center font-semibold text-center z-20 relative shadow-lg">
            <div>
              <div className="text-xl font-bold">Human</div>
              <div className="text-xl font-bold">Expert</div>
            </div>
          </div>

          {/* Workflow Steps - Positioned in Circle */}
          {workflowSteps.map((step, index) => {
            const radius = 200
            const x = Math.cos((step.angle * Math.PI) / 180) * radius
            const y = Math.sin((step.angle * Math.PI) / 180) * radius
            
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <Card className="w-48 h-20 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <CardContent className="p-4 flex items-center justify-center text-center h-full">
                    <span className="text-sm font-medium text-muted-foreground leading-tight">
                      {step.text}
                    </span>
                  </CardContent>
                </Card>
              </div>
            )
          })}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            {workflowSteps.map((step, index) => {
              const radius = 200
              const x = Math.cos((step.angle * Math.PI) / 180) * radius
              const y = Math.sin((step.angle * Math.PI) / 180) * radius
              
              return (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={`calc(50% + ${x}px)`}
                  y2={`calc(50% + ${y}px)`}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                  className="text-primary/20"
                />
              )
            })}
          </svg>
        </div>

        {/* Mobile Vertical Layout */}
        <div className="md:hidden max-w-md mx-auto py-8">
          {/* Central Hub */}
          <div className="bg-primary text-primary-foreground w-24 h-24 rounded-full flex items-center justify-center font-semibold text-center mx-auto mb-8 shadow-lg">
            <div>
              <div className="text-sm font-bold">Human</div>
              <div className="text-sm font-bold">Expert</div>
            </div>
          </div>

          {/* Workflow Steps - Vertical List */}
          <div className="space-y-4">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <Card className="flex-1 shadow-sm">
                  <CardContent className="p-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      {step.text}
                    </span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Cycle Description */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
            This continuous loop ensures that AI-generated workflows are always validated by human experts, 
            learn from feedback, and improve over time while maintaining human accountability.
          </p>
        </div>
      </div>
    </section>
  )
}
