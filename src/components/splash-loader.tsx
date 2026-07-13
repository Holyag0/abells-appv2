'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SplashLoaderProps {
  onComplete: () => void
}

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  // Percent loader ticker
  useEffect(() => {
    const duration = 2400 // 2.4 seconds total loader
    const intervalTime = 20
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          // Initiate fadeout
          setTimeout(() => {
            setShow(false)
            setTimeout(onComplete, 500) // Delay parent update for smooth exit animation
          }, 400)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [onComplete])

  // Canvas molecular/medical pulse graphics loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight
      }
    }
    window.addEventListener('resize', handleResize)

    // Particle nodes definition
    interface Particle {
      x: number
      y: number
      targetX: number
      targetY: number
      radius: number
      color: string
      speed: number
      angle: number
      distance: number
    }

    const particles: Particle[] = []
    const particleCount = 110

    // Setup molecular nodes flowing to form a medical cross and heart in the center
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * 250 + 100
      
      // Target coordinates: form a cross or a pulsing nucleus in the center
      let tx = width / 2
      let ty = height / 2

      // Distribute half to form horizontal line, half vertical line of a clinical cross
      if (i < particleCount * 0.3) {
        // Horizontal bar of cross
        tx = width / 2 + (Math.random() - 0.5) * 120
        ty = height / 2 + (Math.random() - 0.5) * 35
      } else if (i < particleCount * 0.6) {
        // Vertical bar of cross
        tx = width / 2 + (Math.random() - 0.5) * 35
        ty = height / 2 + (Math.random() - 0.5) * 120
      } else {
        // Swirling orbiting particles
        const orbitAngle = Math.random() * Math.PI * 2
        tx = width / 2 + Math.cos(orbitAngle) * 90
        ty = height / 2 + Math.sin(orbitAngle) * 90
      }

      particles.push({
        x: width / 2 + Math.cos(angle) * distance * 1.5,
        y: height / 2 + Math.sin(angle) * distance * 1.5,
        targetX: tx,
        targetY: ty,
        radius: Math.random() * 2.5 + 1.2,
        color: i % 2 === 0 ? 'rgba(24, 130, 60, 0.75)' : 'rgba(245, 193, 46, 0.85)', // Green and yellow
        speed: Math.random() * 0.04 + 0.015,
        angle: Math.random() * Math.PI * 2,
        distance: Math.random() * 3 + 1
      })
    }

    let pulseScale = 1
    let pulseDirection = 1

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.18)' // Dark background trails
      ctx.fillRect(0, 0, width, height)

      // Pulsing effect
      pulseScale += 0.006 * pulseDirection
      if (pulseScale > 1.08 || pulseScale < 0.92) {
        pulseDirection *= -1
      }

      // Draw connection wires (constellation effect)
      ctx.strokeStyle = 'rgba(245, 193, 46, 0.05)'
      ctx.lineWidth = 0.8
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 65) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Update and draw particles
      particles.forEach((p, idx) => {
        // Move towards target in center
        const lerpX = p.targetX * pulseScale
        const lerpY = p.targetY * pulseScale

        p.x += (lerpX - p.x) * p.speed
        p.y += (lerpY - p.y) * p.speed

        // Add subtle local wiggle/float
        p.x += Math.cos(p.angle) * 0.35
        p.y += Math.sin(p.angle) * 0.35
        p.angle += 0.03

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        
        // Add neon glow effect to nodes
        ctx.shadowBlur = idx % 3 === 0 ? 8 : 0
        ctx.shadowColor = p.color
        
        ctx.fill()
        ctx.shadowBlur = 0 // Reset shadow
      })

      // Draw glowing background hub
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 5, width / 2, height / 2, 130)
      gradient.addColorStop(0, 'rgba(24, 130, 60, 0.08)')
      gradient.addColorStop(0.5, 'rgba(245, 193, 46, 0.04)')
      gradient.addColorStop(1, 'transparent')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(width / 2, height / 2, 130, 0, Math.PI * 2)
      ctx.fill()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 overflow-hidden"
        >
          {/* Canvas Rendering Background */}
          <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

          {/* Loader Overlay Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-3 rounded-2xl shadow-2xl border border-accent/25"
            >
              <img
                src="/images/logo.jpg"
                alt="Dr. Brasil Logo"
                className="h-16 w-auto object-contain"
              />
            </motion.div>

            <div className="space-y-2">
              <h2 className="text-xl font-bold uppercase tracking-widest text-white leading-tight font-display">
                Clínica Dr. Brasil
              </h2>
              <p className="text-xs text-gray-400 uppercase tracking-widest leading-none font-semibold">
                Inicializando o Sistema
              </p>
            </div>

            {/* Percentage Bar & Counter */}
            <div className="w-48 space-y-2.5">
              <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-accent"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm font-black text-accent tracking-widest leading-none">
                {Math.round(progress)}%
              </p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
