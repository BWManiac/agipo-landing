import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-primary">
            Agipo
          </div>
          <Button>
            Get Early Access
          </Button>
        </div>
      </div>
    </nav>
  )
}
