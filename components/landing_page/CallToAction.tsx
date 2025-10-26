import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-br from-chart-1 to-chart-1/80 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px),radial-gradient(circle_at_75%_75%,white_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Be the First to Experience the Future of Automated Workflows
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Join our waitlist to get early access when we launch. Be among the first to transform your expertise into automated workflows.
          </p>
          <div className="flex gap-4 justify-center mb-6">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Waitlist
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-chart-1">
              Learn More
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/80">
            No spam • Early access • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
