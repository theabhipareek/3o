import type React from "react"
import { FlaskRoundIcon as Flask, Smartphone, Beaker, Laptop } from "lucide-react"

const features = [
  { icon: Flask, title: "edXtra Shop", description: "Shop" },
  { icon: Smartphone, title: "Xamine", description: "The Test Portal" },
  { icon: Beaker, title: "Xtra", description: "By edxtra" },
  { icon: Laptop, title: "edXtra.Tech", description: "The next gen tech solutions" },
]

export function FeaturesSection() {
  return (
    <section className="py-20 pattern-grid" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          From The House Of edXtra
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  delay,
}: { icon: React.ElementType; title: string; description: string; delay: number }) {
  return (
    <div
      className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-8 rounded-2xl hover-scale"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <Icon className="text-4xl mb-4 text-primary" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

