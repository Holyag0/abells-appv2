'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon, MagnifyingGlassPlusIcon, MagnifyingGlassMinusIcon } from '@heroicons/react/24/solid'
import { useSwipeable } from 'react-swipeable'

interface LightboxProps {
  images: string[]
  initialIndex?: number
  open: boolean
  onClose: () => void
}

export function GalleryLightbox({ images, initialIndex = 0, open, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    resetZoom()
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    resetZoom()
  }, [images.length])

  const resetZoom = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom((prev) => Math.max(prev - 0.5, 1))
      if (zoom - 0.5 <= 1) {
        setPosition({ x: 0, y: 0 })
      }
    }
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!open) return
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      case 'ArrowLeft':
        goToPrevious()
        break
      case 'ArrowRight':
        goToNext()
        break
      case '+':
      case '=':
        handleZoomIn()
        break
      case '-':
        handleZoomOut()
        break
    }
  }, [open, onClose, goToPrevious, goToNext])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true,
  })

  if (!open) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      >
        <div className="absolute inset-0" {...handlers} />

        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          aria-label="Fechar"
        >
          <XMarkIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>

        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation()
            goToPrevious()
          }}
          className="absolute left-2 sm:left-4 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          aria-label="Imagem anterior"
        >
          <ChevronLeftIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>

        <motion.button
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 20, opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation()
            goToNext()
          }}
          className="absolute right-2 sm:right-4 z-50 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
          aria-label="Próxima imagem"
        >
          <ChevronRightIcon className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.button>

        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(idx)
                resetZoom()
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-amber-500 w-6' : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ir para imagem ${idx + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex gap-2">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation()
              handleZoomOut()
            }}
            disabled={zoom <= 1}
            className={`p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all ${
              zoom <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
            }`}
            aria-label="Diminuir zoom"
          >
            <MagnifyingGlassMinusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => {
              e.stopPropagation()
              handleZoomIn()
            }}
            disabled={zoom >= 3}
            className={`p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all ${
              zoom >= 3 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110'
            }`}
            aria-label="Aumentar zoom"
          >
            <MagnifyingGlassPlusIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          <span className="flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
            {Math.round(zoom * 100)}%
          </span>
        </div>

        <motion.div
          key={currentIndex}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full max-w-7xl max-h-[90vh] p-4 sm:p-8 flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            src={images[currentIndex]}
            alt={`Galeria ${currentIndex + 1} de ${images.length}`}
            animate={{
              scale: zoom,
              x: position.x,
              y: position.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="max-w-full max-h-full object-contain rounded-lg cursor-zoom-in select-none"
            onClick={() => zoom === 1 ? handleZoomIn() : resetZoom()}
            draggable={false}
          />
        </motion.div>

        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 text-white/60 text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
