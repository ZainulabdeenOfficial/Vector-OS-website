"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, GitBranch } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Environment } from "@react-three/drei"
import { Suspense, useRef, useState, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import FallbackHero from "./fallback-hero"
import { useFrame } from "@react-three/fiber"
import { motion } from "framer-motion"
import type * as THREE from "three"
import Link from "next/link"

// Simplified sphere component to reduce WebGL context loss
function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  // Optimize frame updates to prevent performance issues
  useFrame(() => {
    if (meshRef.current) {
      // Reduced rotation speed for better performance
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x += 0.0005

      // Simplified scaling animation
      if (hovered) {
        meshRef.current.scale.setScalar(1.05)
      } else {
        meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.5}
          roughness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.1}
        />
      </mesh>

      <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.1, 16, 32]} />
        <meshStandardMaterial
          color="#d8b4fe"
          metalness={0.5}
          roughness={0.2}
          emissive="#d8b4fe"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  )
}

// Simplified scene with fewer components
function Scene() {
  return (
    <Suspense fallback={null}>
      <AnimatedSphere />
      <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={0.3} />
      <Environment preset="sunset" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        enableDamping
        dampingFactor={0.1}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
      />
    </Suspense>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return (
    <ErrorBoundary FallbackComponent={FallbackHero}>
      <section className="relative w-full h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>

        {/* Reduced number of particles for better performance */}
        <div className="absolute inset-0 z-0">
          {mounted &&
            Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-primary/20"
                style={{
                  width: Math.random() * 12 + 5,
                  height: Math.random() * 12 + 5,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * -60 - 30],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: Math.random() * 6 + 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 3,
                }}
              />
            ))}
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h1 className="font-bold leading-tight mb-6">
                <span className="gradient-text">Crafting Next-Gen Tech</span> — Open, Beautiful, and Built for Impact
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We build innovative open source projects across multiple domains, from operating systems to developer
              tools, AI solutions, and more.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="flex-1 h-[500px] w-full"
          >
            {mounted && (
              <Canvas
                className="h-full w-full"
                dpr={[1, 1.5]} // Reduced DPR for better performance
                gl={{
                  antialias: false, // Disable antialiasing for performance
                  alpha: true,
                  powerPreference: "default",
                  preserveDrawingBuffer: true, // Helps prevent context loss
                }}
                camera={{ position: [0, 0, 6], fov: 50 }}
                frameloop="demand" // Only render when needed
              >
                <Scene />
              </Canvas>
            )}
          </motion.div>
        </div>

        {/* Simplified scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>
    </ErrorBoundary>
  )
}
