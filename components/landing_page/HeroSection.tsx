import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmailCapture } from "@/components/ui/email-capture"

export function HeroSection() {
  return (
            <section className="min-h-screen bg-gradient-to-br from-muted to-background flex items-center py-8 md:py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Turn Your Workflows Into Sellable Digital Assets
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-6">
              Automate your expertise. Scale your impact. Monetize your knowledge.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Transform your unique processes into AI-generated workflows that run entirely in your browser. Stop doing repetitive work. Start building a portfolio of automated workflows that execute your-approved processes for paying customers.
            </p>
            
            <div className="mb-8">
              <EmailCapture 
                placeholder="Enter your email for early access..."
                buttonText="Join Waitlist"
                source="hero-section"
                context="Hero section email capture"
                className="mb-4"
              />
            </div>
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
