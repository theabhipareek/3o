import type React from "react"
import { Clock, BookOpen, Users, TrendingUp } from "lucide-react"

const stats = [
  { icon: Clock, number: "24/7", text: "Live Interactive Classes" },
  { icon: BookOpen, number: "10M+", text: "Practice Questions" },
  { icon: Users, number: "500K+", text: "Happy Learners" },
  { icon: TrendingUp, number: "99%", text: "Success Rate" },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} number={stat.number} text={stat.text} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  number,
  text,
  delay,
}: { icon: React.ElementType; number: string; text: string; delay: number }) {
  return (
    <div
      className="bg-card/50 p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white">
        <Icon className="w-10 h-10" />
      </div>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-muted-foreground">{text}</div>
    </div>
  )
}

