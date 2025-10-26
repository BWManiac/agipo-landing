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
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Human-in-the-Loop Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every workflow follows a continuous cycle where human expertise guides AI, ensuring accountability and continuous improvement.
          </p>
        </div>

        <div className="flex justify-center items-center relative max-w-4xl mx-auto py-8 overflow-hidden" style={{ minHeight: '500px' }}>
          {/* Central Hub */}
          <div className="bg-primary text-primary-foreground w-36 h-36 rounded-full flex items-center justify-center font-semibold text-center z-20 relative shadow-lg">
            <div>
              <div className="text-lg font-bold">Human</div>
              <div className="text-lg font-bold">Expert</div>
            </div>
          </div>

          {/* Workflow Steps - Positioned in Circle */}
          {workflowSteps.map((step, index) => {
            const radius = 200 // Further reduced to prevent overflow
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
                <Card className="w-44 h-18 shadow-sm hover:shadow-md transition-all hover:scale-105">
                  <CardContent className="p-3 flex flex-col items-center justify-center text-center">
                    {/* Step number and arrow */}
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.step}
                      </div>
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 12 12" 
                        className="text-primary/60"
                        style={{
                          transform: `rotate(${step.angle + 180}deg)`
                        }}
                      >
                        <path 
                          d="M6 1L10 6L6 11L2 6L6 1Z" 
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground leading-tight">
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
