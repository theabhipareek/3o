import Image from "next/image"
import { Star, StarHalf, Clock } from "lucide-react"

const testimonials = [
  {
    name: "Abhi Pareek",
    role: "CBSE'24 (AIR 1)",
    image: "/cbse.jpg",
    badge: "COMPUTER XPERT",
    quote: '"EDXTRA IS THE BEST"',
    rating: 4.5,
    hours: 450,
  },
  {
    name: "Ishita Metkar",
    role: "AIR 1 CBSE'25",
    image: "/science-student.jpg",
    badge: "Xpert Learner",
    quote: '"edXtra helped me achieve my love-Aishani Thakur"',
    rating: 4.5,
    hours: 100,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 quote-pattern"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
  name,
  role,
  image,
  badge,
  quote,
  rating,
  hours,
  delay,
}: {
  name: string
  role: string
  image: string
  badge: string
  quote: string
  rating: number
  hours: number
  delay: number
}) {
  return (
    <div
      className="perspective-1000 transition-transform duration-300 ease-out hover:scale-105"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="testimonial-inner relative transform-style-preserve-3d bg-card border-2 border-border rounded-3xl shadow-lg p-8 overflow-hidden transition-transform duration-600">
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>

        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md mr-4">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-xl">{name}</h4>
            <p className="text-muted-foreground text-sm mb-2">{role}</p>
            <div className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded inline-block transform -skew-x-10">
              {badge}
            </div>
          </div>
        </div>

        <div className="relative mb-6 pl-4 border-l-4 border-primary">
          <p className="text-muted-foreground italic">{quote}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-yellow-400">
            {Array.from({ length: Math.floor(rating) }).map((_, i) => (
              <Star key={i} className="w-4 h-4" />
            ))}
            {rating % 1 !== 0 && <StarHalf className="w-4 h-4" />}
          </div>
          <div className="text-primary text-sm font-semibold flex items-center">
            <Clock className="w-4 h-4 mr-1" /> {hours}+ Learning Hours
          </div>
        </div>
      </div>
    </div>
  )
}

