import { Card, CardContent } from "@/components/ui/card"

export function AccountabilityLoop() {
  const workflowSteps = [
    { text: "AI Generates Workflow", angle: 0 },      // Top
    { text: "Human Reviews & Validates", angle: 60 },   // Top-right
    { text: "AI Learns & Improves", angle: 120 },      // Bottom-right
    { text: "Workflow Executes", angle: 180 },          // Bottom
    { text: "10x Productivity", angle: 240 },          // Bottom-left
    { text: "Continuous Feedback", angle: 300 }        // Top-left
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Human-in-the-Loop Design
          </h2>
        </div>

        <div className="flex justify-center items-center relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <div className="bg-primary text-primary-foreground w-40 h-40 rounded-full flex items-center justify-center font-semibold text-center z-10 relative shadow-lg">
            <div>
              <div className="text-lg font-bold">Human</div>
              <div className="text-lg font-bold">Expert</div>
            </div>
          </div>

          {/* Workflow Steps - Positioned in Circle */}
          {workflowSteps.map((step, index) => {
            const radius = 200 // Distance from center
            const x = Math.cos((step.angle * Math.PI) / 180) * radius
            const y = Math.sin((step.angle * Math.PI) / 180) * radius
            
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                }}
              >
                <Card className="w-48 h-20 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-center text-center">
                    <span className="text-sm font-medium text-muted-foreground leading-tight">
                      {step.text}
                    </span>
                  </CardContent>
                </Card>
                
                {/* Arrow pointing to center */}
                <div 
                  className="absolute w-8 h-8 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${step.angle + 180}deg)`
                  }}
                >
                  <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-primary/30"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
