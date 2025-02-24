import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8" data-aos="fade-right">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Elevate Your Learning with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                Bharat's Youngest
              </span>
              <br /> Educational Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Transform your educational journey with personalized learning paths, expert guidance, and comprehensive
              study materials designed for your success.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                <PlayCircle className="mr-2 h-5 w-5" /> Start Free Trial
              </Button>
            </div>
          </div>
          <div className="hidden md:block" data-aos="fade-left">
            <div className="relative w-96 h-96 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center">
              <div className="absolute inset-0 pattern-grid opacity-20"></div>
              <svg
                className="w-48 h-48 text-white opacity-75"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

