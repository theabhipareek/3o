import { Button } from "@/components/ui/button"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export function WhatsAppSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-400 to-teal-500" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block p-4 bg-white/10 rounded-full backdrop-blur-sm">
          <WhatsappIcon className="text-6xl text-white pulse-icon" />
        </div>
        <h2 className="text-4xl font-bold mt-8 mb-4 text-white">Join 1L+ CBSE Champions</h2>
        <p className="text-xl text-white/90 mb-8">24/7 Doubt Solving • Exam Updates • Peer Learning</p>
        <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
          <WhatsappIcon className="mr-2 h-5 w-5" /> Join Now
        </Button>
      </div>
    </section>
  )
}

