'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/images/recepcao.png',
  '/images/recepcao-natal.png',
  '/images/ambiente-corredor.png',
  '/images/fachada.jpg'
]

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4500) // Slightly longer slideshow interval for medical calm

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-zinc-950 rounded-[2rem] sm:rounded-[3rem] mx-2 sm:mx-4 mt-8">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0 size-full object-cover"
          alt="Clínica Dr. Brasil"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/65 backdrop-blur-[2px]" />
    </div>
  )
}
