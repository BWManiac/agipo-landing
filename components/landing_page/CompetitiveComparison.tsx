import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function CompetitiveComparison() {
  const comparisons = [
    {
      competition: "Rigid Nodes (Tool-centric)",
      agipo: "Code-First Nodes (User-centric)"
    },
    {
      competition: "\"Black Box\" Process",
      agipo: "100% \"Scannable\" & Inspectable"
    },
    {
      competition: "Full Autonomy (Risky)",
      agipo: "Human-in-Loop (Accountable)"
    },
    {
      competition: "Stateless & Siloed",
      agipo: "\"Memory\" (Shared Data & Context)"
    },
    {
      competition: "Forces you to think like a tool",
      agipo: "Conforms to how *you* think"
    }
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Why We Win
                  </h2>
                </div>

                {/* Desktop Table */}
                <Card className="hidden md:block max-w-4xl mx-auto shadow-sm">
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="bg-muted font-semibold text-foreground">
                            Competition (N8N, Zapier, Relay)
                          </TableHead>
                          <TableHead className="bg-muted font-semibold text-foreground">
                            Agipo
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {comparisons.map((comparison, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-destructive font-medium">
                              <span className="text-destructive font-bold mr-2">✗</span>
                              {comparison.competition}
                            </TableCell>
                            <TableCell className="text-chart-2 font-medium">
                              <span className="text-chart-2 font-bold mr-2">✓</span>
                              {comparison.agipo}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Mobile Cards */}
                <div className="md:hidden max-w-md mx-auto space-y-4">
                  {comparisons.map((comparison, index) => (
                    <Card key={index} className="shadow-sm">
                      <CardContent className="p-4">
                        <div className="mb-3">
                          <div className="text-destructive font-medium text-sm mb-1">
                            <span className="text-destructive font-bold mr-2">✗</span>
                            Competition
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {comparison.competition}
                          </p>
                        </div>
                        <div>
                          <div className="text-chart-2 font-medium text-sm mb-1">
                            <span className="text-chart-2 font-bold mr-2">✓</span>
                            Agipo
                          </div>
                          <p className="text-muted-foreground text-sm">
                            {comparison.agipo}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
      </div>
    </section>
  )
}
