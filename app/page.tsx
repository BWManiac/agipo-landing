import {
  Navigation,
  HeroSection,
  ProblemStatement,
  SolutionOverview,
  HowItWorks,
  TechnicalArchitecture,
  MemorySystem,
  AccountabilityLoop,
  VisionMarketplace,
  CompetitiveComparison,
  CallToAction,
  Footer
} from "@/components/landing_page"

export default function Home() {
  return (
        <div className="min-h-screen bg-background w-full">
      <Navigation />
      <HeroSection />
      <ProblemStatement />
      <SolutionOverview />
      <HowItWorks />
      <TechnicalArchitecture />
      <MemorySystem />
      <AccountabilityLoop />
      <VisionMarketplace />
      <CompetitiveComparison />
      <CallToAction />
      <Footer />
    </div>
  );
}
