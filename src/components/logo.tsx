'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      className="inline-block bg-white px-3 py-1 rounded-xl shadow-md border border-accent/20"
    >
      <img
        src="/images/logo.jpg"
        alt="Dr. Brasil"
        className={clsx(className, 'object-contain h-8 md:h-9 w-auto')}
      />
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <div className="inline-block bg-white p-1 rounded-lg">
      <img src="/images/logo.jpg" alt="Dr. Brasil" className={clsx(className, 'object-contain')} />
    </div>
  )
}
