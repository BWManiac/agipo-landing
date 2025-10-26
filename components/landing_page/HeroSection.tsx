import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  return (
            <section className="min-h-screen bg-gradient-to-br from-muted to-background flex items-center py-8 md:py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Turn Your Expertise into Passive Monthly Revenue
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
              The smartest professionals are packaging their expertise into sellable AI workflows.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Your knowledge, automated. Your impact, multiplied. Your income, recurring.
            </p>
            
            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span className="text-muted-foreground">Stop trading time for money</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span className="text-muted-foreground">Build recurring revenue from your knowledge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span className="text-muted-foreground">Get paid for your expertise while you sleep</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="w-full sm:w-auto">
                Join Waitlist
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Coming Soon - Join the waitlist for early access
            </p>
          </div>

          {/* Right Column - Demo */}
          <div className="flex justify-center">
            <Card className="w-full max-w-md shadow-xl">
              <CardContent className="p-8">
                <div className="bg-muted rounded-lg p-6 mb-4 min-h-[200px] flex flex-col justify-center items-center">
                  <div className="flex gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                      Input
                    </div>
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                      Process
                    </div>
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                      Output
                    </div>
                  </div>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-input rounded-md text-sm bg-background"
                    placeholder="Turn customer feedback into roadmap items"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
