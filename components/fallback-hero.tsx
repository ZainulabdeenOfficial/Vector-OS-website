"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FallbackHero() {
  // Simplified animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  }

  return (
    <section className="relative w-full h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h1 className="font-bold leading-tight mb-6">
              <span className="gradient-text">Crafting Next-Gen Tech</span> — Open, Beautiful, and Built for Impact
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-xl text-muted-foreground mb-8">
              We build innovative open source projects across multiple domains, from operating systems to developer
              tools, AI solutions, and more.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300"
              asChild
            >
              <Link href="/projects">
                Explore Our Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-primary/20 hover:border-primary/50 transition-all duration-300"
              asChild
            >
              <Link href="https://github.com/Vector-OS" target="_blank" rel="noopener noreferrer">
                <GitBranch className="mr-2 h-4 w-4" /> Contribute
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Simplified background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>
    </section>
  )
}
