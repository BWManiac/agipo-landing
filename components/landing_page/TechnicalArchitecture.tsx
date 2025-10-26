import { Card, CardContent } from "@/components/ui/card"

export function TechnicalArchitecture() {
  const traditionalApproach = [
    "Server-based execution",
    "High infrastructure costs",
    "Data privacy concerns",
    "Limited ecosystem access",
    "Scaling bottlenecks"
  ]

  const agipoApproach = [
    "Browser-native execution",
    "No infrastructure costs",
    "Complete privacy",
    "Full ecosystem access",
    "Scales with users"
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Browser-Native Power
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Traditional Approach */}
          <Card className="border-2 border-destructive shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-destructive mb-6">
                Traditional Approach
              </h3>
              <ul className="space-y-3">
                {traditionalApproach.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="text-destructive font-bold mr-2">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Agipo's Approach */}
          <Card className="border-2 border-chart-2 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-chart-2 mb-6">
                Agipo's Approach
              </h3>
              <ul className="space-y-3">
                {agipoApproach.map((item, index) => (
                  <li key={index} className="text-muted-foreground flex items-start">
                    <span className="text-chart-2 font-bold mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
