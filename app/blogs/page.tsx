import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample blog data
const blogs = [
  {
    id: 1,
    title: "10 Tips for Modern Web Design",
    snippet: "Learn the essential principles that make websites stand out in 2023.",
    date: "May 2, 2023",
    category: "Design",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "The Future of React Development",
    snippet: "Exploring the latest features and best practices in React 18.",
    date: "April 15, 2023",
    category: "Development",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Optimizing Website Performance",
    snippet: "Strategies to improve loading times and user experience.",
    date: "March 28, 2023",
    category: "Performance",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    title: "Creating Accessible Web Applications",
    snippet: "How to ensure your websites are usable by everyone.",
    date: "March 10, 2023",
    category: "Accessibility",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    title: "Introduction to 3D Web Animations",
    snippet: "Learn how to incorporate Three.js and WebGL into your projects.",
    date: "February 22, 2023",
    category: "Animation",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    title: "The Power of Tailwind CSS",
    snippet: "Why Tailwind is becoming the go-to framework for modern websites.",
    date: "February 5, 2023",
    category: "CSS",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Blog</h1>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>

          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {["All", "Design", "Development", "Performance", "Animation"].map((category) => (
              <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link href={`/blogs/${blog.id}`} key={blog.id} className="group">
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
                    {blog.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">{blog.snippet}</p>
                </CardContent>
                <CardFooter className="text-sm text-muted-foreground">{blog.date}</CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((page) => (
              <Button key={page} variant={page === 1 ? "default" : "outline"} size="icon" className="w-10 h-10">
                {page}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
