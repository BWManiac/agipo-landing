import { Button } from "@/components/ui/button"
import { EmailCapture } from "@/components/ui/email-capture"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">
            Agipo
          </div>
          <div className="hidden sm:block">
            <EmailCapture 
              placeholder="Enter email..."
              buttonText="Get Early Access"
              source="navigation"
              context="Navigation header email capture"
              variant="inline"
              className="max-w-md"
            />
          </div>
          <div className="sm:hidden">
            <Button size="sm">
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
