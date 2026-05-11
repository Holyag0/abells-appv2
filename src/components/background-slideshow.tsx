'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/galeria/IMG_5601.jpg',
  '/galeria/IMG_5663.jpg',
  '/galeria/IMG_5719.jpg',
  '/galeria/IMG_5764-1.jpg'
]

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // 3 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black rounded-[2rem] sm:rounded-[3rem] mx-2 sm:mx-4 mt-8">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 size-full object-cover"
          alt="Background"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
    </div>
  )
}
