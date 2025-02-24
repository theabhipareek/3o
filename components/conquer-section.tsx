import Image from "next/image"
import { ArrowRight } from "lucide-react"

const courses = [
  { board: "CBSE", class: "Class IX", logo: "/cbse.jpg" },
  { board: "CBSE", class: "Class X - AISSE", logo: "/cbse.jpg" },
  { board: "CBSE", class: "Class XII - AISSCE", logo: "/cbse.jpg" },
  { board: "CISCE", class: "ICSE Class X", logo: "/cisce.jpg" },
  { board: "CISCE", class: "ISC Class XII", logo: "/cisce.jpg" },
  { board: "CBSE", class: "Class XI", logo: "/cbse.jpg" },
]

export function ConquerSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Here To Conquer
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CourseCard({
  board,
  class: className,
  logo,
  delay,
}: { board: string; class: string; logo: string; delay: number }) {
  return (
    <div
      className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-8 rounded-3xl hover:scale-105 transform transition duration-300 shadow-lg overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>

      <div className="relative flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl text-white">{board}</h3>
          <p className="text-gray-200 text-lg">{className}</p>
        </div>
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-gray-300 shadow-md">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${board} Logo`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative flex justify-between items-center">
        <a href="#" className="text-white hover:text-gray-300 font-semibold text-lg">
          Explore {board} {className}
        </a>
        <ArrowRight className="text-white text-lg" />
      </div>
    </div>
  )
}

