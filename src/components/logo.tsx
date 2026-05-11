'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
    >
      <img
        src="/logo-gastro.png"
        alt="Abell's Gastroburger"
        className={clsx(className, 'object-contain')}
      />
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img src="/logo-gastro.png" alt="" className={className} />
  )
}
