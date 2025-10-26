import { Button } from "@/components/ui/button"
import { EmailCapture } from "@/components/ui/email-capture"

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
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                    Be the First to Experience the Future of Automated Workflows
                  </h2>
                  <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Join our waitlist to get early access when we launch. Be among the first to transform your expertise into automated workflows.
                  </p>
                  <div className="flex flex-col items-center gap-4 mb-6">
                    <EmailCapture 
                      placeholder="Enter your email for early access..."
                      buttonText="Join Waitlist"
                      source="call-to-action"
                      context="Call to action section email capture"
                      className="max-w-md"
                    />
                  </div>
          <p className="text-sm text-primary-foreground/80">
            No spam • Early access • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
