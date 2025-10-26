import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmailCapture } from "@/components/ui/email-capture"
import { ArrowRight, MessageSquare, Zap, FileText, User, Users } from "lucide-react"

export function HeroSection() {
  return (
            <section className="min-h-screen bg-gradient-to-br from-muted to-background flex items-center py-8 md:py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-lg">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Turn Your Workflows Into Income-Generating Assets
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-8">
              Automate what you do best. Monetize how you do it.
            </h2>
            
            {/* Parallel Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* For Professionals */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">For Professionals</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Run your workflows directly in your browser and own them as digital assets.
                </p>
                <p className="text-xs text-gray-600">
                  Every process you build becomes part of your portfolio — build once, earn indefinitely.
                </p>
              </div>

              {/* For Teams & Enterprises */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">For Teams & Enterprises</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                  Agipo captures how work gets done across your organization and turns it into shared, reusable automations.
                </p>
                <p className="text-xs text-gray-600">
                  Teams can document, deploy, and monetize best practices internally or externally — transforming institutional knowledge into a scalable, profitable asset library.
                </p>
              </div>
            </div>
            
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

          {/* Right Column - Interactive Workflow Demo */}
          <div className="flex justify-center">
            <Card className="w-full max-w-lg shadow-xl">
              <CardContent className="p-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 min-h-[300px] sm:min-h-[400px]">

                  {/* Desktop Workflow Layout */}
                  <div className="hidden sm:flex items-center justify-center mb-6">
                    {/* Input Node */}
                    <div className="bg-white border-2 border-green-200 rounded-lg p-4 shadow-sm w-32 h-32">
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-2">
                          <MessageSquare className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">Input</div>
                        <div className="text-xs text-gray-600">Slack Feedback</div>
                        <div className="text-xs text-gray-500">Customer messages</div>
                      </div>
                    </div>

                    {/* Arrow 1 */}
                    <ArrowRight className="w-4 h-4 text-gray-400 mx-3" />

                    {/* Process Node */}
                    <div className="bg-white border-2 border-purple-200 rounded-lg p-4 shadow-sm w-32 h-32">
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                          <Zap className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">Process</div>
                        <div className="text-xs text-gray-600">AI Analysis</div>
                        <div className="text-xs text-gray-500">Sentiment + Priority</div>
                      </div>
                    </div>

                    {/* Arrow 2 */}
                    <ArrowRight className="w-4 h-4 text-gray-400 mx-3" />

                    {/* Output Node */}
                    <div className="bg-white border-2 border-orange-200 rounded-lg p-4 shadow-sm w-32 h-32">
                      <div className="flex flex-col items-center text-center h-full justify-center">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                          <FileText className="w-4 h-4 text-orange-600" />
                        </div>
                        <div className="text-sm font-semibold text-gray-800 mb-1">Output</div>
                        <div className="text-xs text-gray-600">Roadmap Items</div>
                        <div className="text-xs text-gray-500">Prioritized tasks</div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Workflow Layout */}
                  <div className="sm:hidden mb-6">
                    <div className="space-y-4">
                      {/* Input Node */}
                      <div className="bg-white border-2 border-green-200 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <MessageSquare className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-800 mb-1">Input</div>
                            <div className="text-xs text-gray-600">Slack Feedback</div>
                            <div className="text-xs text-gray-500">Customer messages</div>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                      </div>

                      {/* Process Node */}
                      <div className="bg-white border-2 border-purple-200 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Zap className="w-5 h-5 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-800 mb-1">Process</div>
                            <div className="text-xs text-gray-600">AI Analysis</div>
                            <div className="text-xs text-gray-500">Sentiment + Priority</div>
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                      </div>

                      {/* Output Node */}
                      <div className="bg-white border-2 border-orange-200 rounded-lg p-4 shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-5 text-orange-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-800 mb-1">Output</div>
                            <div className="text-xs text-gray-600">Roadmap Items</div>
                            <div className="text-xs text-gray-500">Prioritized tasks</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Natural Language Input */}
                  <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <MessageSquare className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-800">Natural Language Input</span>
                    </div>
                    <div className="bg-gray-50 rounded-md p-3 mb-3">
                      <div className="text-sm text-gray-700 italic">
                        "Analyze Slack feedback and generate prioritized roadmap items"
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <ArrowRight className="w-3 h-3" />
                      <span>Generates TypeScript workflow with full npm ecosystem access</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
