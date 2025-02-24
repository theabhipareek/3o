import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { GraduationCap, BookOpen, PencilRuler, Users } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 shadow-xl bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-tr from-primary to-secondary p-2 rounded-lg">
              <GraduationCap className="text-2xl text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Edxtra
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#courses" icon={<BookOpen className="w-4 h-4" />} text="Courses" />
            <NavLink href="#exams" icon={<PencilRuler className="w-4 h-4" />} text="Exams" />
            <NavLink href="#community" icon={<Users className="w-4 h-4" />} text="Community" />
          </div>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button>
              <GraduationCap className="mr-2 h-4 w-4" /> Start Learning
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center space-x-2 text-muted-foreground hover:text-primary">
      {icon}
      <span>{text}</span>
    </Link>
  )
}

