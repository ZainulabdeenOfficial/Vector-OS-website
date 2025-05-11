import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with a sleek UI, shopping cart functionality, and payment integration.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A creative portfolio website for a photographer with image galleries and contact form.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Three.js", "GSAP", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Dashboard UI",
    description: "An admin dashboard with data visualization, user management, and analytics features.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Chart.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 4,
    title: "Mobile App",
    description: "A cross-platform mobile app for task management with real-time synchronization.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Firebase", "Redux", "Expo"],
  },
  {
    id: 5,
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support and SEO optimization.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
  },
  {
    id: 6,
    title: "Landing Page",
    description: "A high-converting landing page with animations and subscription form.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "GSAP", "Tailwind CSS", "Framer Motion"],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore our portfolio of web applications, websites, and digital experiences that showcase our expertise in
          design and development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href={`/projects/${project.id}`}>
                    <Button variant="secondary" size="sm" className="gap-2">
                      <Eye size={16} />
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
