'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  let transition = {
    duration: 0.5,
    ease: 'easeInOut' as const,
  }

  return (
    <motion.div
      className={clsx(className, 'flex items-center gap-2 text-amber-600 dark:text-amber-500 font-bold text-2xl')}
      initial="idle"
      whileHover="active"
    >
      <img
        src="/logo-gastro.png"
        alt=""
        className="size-10 object-contain"
      />
      <span className="tracking-tight whitespace-nowrap text-red-600 dark:text-red-500">
        Abell&apos;s <span className="text-amber-500 font-black">Gastroburger</span>
      </span>
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img src="/logo-gastro.png" alt="" className={className} />
  )
}
