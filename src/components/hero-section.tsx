'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { Button } from './button'
import { StarIcon, ClockIcon, HeartIcon, ArrowDownIcon, ArrowRightIcon, WhatsAppIcon } from './icons/social-icons'


import { BackgroundSlideshow } from './background-slideshow'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 sm:pb-24 overflow-hidden">
      <BackgroundSlideshow />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <motion.img
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              src="/logo-gastro.png"
              alt="Abell's Gastroburger"
              className="h-32 sm:h-40 lg:h-48 w-auto mx-auto drop-shadow-2xl filter brightness-110"
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.1]"
          >
            <span className="block">O Sabor que</span>
            <span className="block">
              <span className="text-red-500">Define</span>
              <span className="text-amber-500"> Flecheiras</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Hambúrgueres artesanais, ingredientes premium e uma experiência
            gastronômica que vai além da expectativa.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="#destaques"
              className="px-8 py-4 text-base sm:text-lg font-semibold bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Cardápio Completo
                <ArrowDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            <a
              href="https://wa.me/5585985497108"
              target="_blank"
              className="inline-flex justify-center px-8 py-4 rounded-full text-base sm:text-lg font-semibold border-2 border-green-500 text-green-400 bg-green-500/10 backdrop-blur-sm transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Fale Conosco
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-amber-500" />
              <span>4.9★ Avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-green-500" />
              <span>Entrega em 30min</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-red-500" />
              <span>Feito com amor</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-gray-400"
        >
          <ArrowDownIcon className="w-6 h-6 mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  )
}
