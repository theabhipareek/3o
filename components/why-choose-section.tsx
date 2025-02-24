import type React from "react"
import { Brain, ClapperboardIcon as ChalkboardTeacher, Infinity, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Learning System",
    description:
      "Adaptive learning paths powered by machine learning algorithms that analyze your performance and create personalized study plans for maximum efficiency.",
    tags: ["Smart Analytics", "Performance Tracking"],
  },
  {
    icon: ChalkboardTeacher,
    title: "Expert-Curated Content",
    description:
      "Study material developed by IIT/NIT alumni and experienced educators, strictly aligned with CBSE/ICSE syllabus and latest examination patterns.",
    tags: ["Syllabus Aligned", "Exam Focused"],
  },
  {
    icon: Infinity,
    title: "Comprehensive Learning Ecosystem",
    description:
      "End-to-end learning solution with live classes, mock tests, doubt resolution, and progress tracking - all integrated in one platform.",
    tags: ["All-in-One", "24/7 Support"],
  },
]

export function WhyChooseSection() {
  return (
    <section
      className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute inset-0 quote-pattern"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Why Choose Edxtra?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 100} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-800/30 to-blue-800/30 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            CBSE/ICSE Learning Redefined
          </h3>
          <p className="text-gray-300 mb-4">
            Edxtra stands as India's premier digital learning platform for CBSE Class 9-12 and ICSE students. Our
            data-driven approach combines cutting-edge technology with pedagogical expertise to deliver:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <ListItem>100% Syllabus Coverage with NCERT-aligned Content</ListItem>
            <ListItem>Daily Live Classes & Recorded Lectures</ListItem>
            <ListItem>Chapter-wise Mock Tests & Previous Year Papers</ListItem>
            <ListItem>Personalized Progress Reports & Analytics</ListItem>
          </ul>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  tags,
  delay,
}: {
  icon: React.ElementType
  title: string
  description: string
  tags: string[]
  delay: number
}) {
  return (
    <div className="feature-card p-8 rounded-2xl" data-aos="fade-up" data-aos-delay={delay}>
      <div className="w-20 h-20 gradient-border rounded-full flex items-center justify-center mb-6">
        <Icon className="text-3xl text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex space-x-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-primary/30 text-primary rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center space-x-2">
      <CheckCircle className="text-primary" />
      <span>{children}</span>
    </li>
  )
}

