'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { Button } from './button'
import { StarIcon, ClockIcon, HeartIcon, ArrowDownIcon, WhatsAppIcon } from './icons/social-icons'
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

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-black/30 to-black/90" />

      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto"
        >
          {/* Logo container styled for white background logo */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-block bg-white p-3 rounded-2xl shadow-xl ring-2 ring-accent/30">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                src="/images/logo.jpg"
                alt="Dr. Brasil"
                className="h-16 sm:h-20 w-auto mx-auto object-contain"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.2]"
          >
            <span className="block">Sua Saúde e seu Sorriso</span>
            <span className="block mt-2">
              <span className="text-primary-light">em boas</span>
              <span className="text-accent"> mãos.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Atendimento médico humanizado, odontologia avançada e exames rápidos. Tudo integrado no centro de Apuiarés - CE.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              href="#servicos"
              className="px-8 py-4 text-base sm:text-lg font-bold bg-primary text-white hover:bg-primary-light shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Conheça nossos Serviços
                <ArrowDownIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            
            <a
              href="https://wa.me/5585991390194"
              target="_blank"
              className="inline-flex justify-center px-8 py-4 rounded-full text-base sm:text-lg font-bold border-2 border-accent text-accent bg-accent/10 backdrop-blur-sm transition-all duration-300 group hover:bg-accent hover:text-black"
            >
              <span className="flex items-center gap-2">
                Agendar no WhatsApp
                <WhatsAppIcon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </span>
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-gray-400 font-semibold"
          >
            <div className="flex items-center gap-2">
              <StarIcon className="w-5 h-5 text-accent" />
              <span>Médicos & Dentistas</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-5 h-5 text-emerald-400" />
              <span>Exames a partir das 7h</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartIcon className="w-5 h-5 text-red-500 fill-current" />
              <span>Estrutura Acessível</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
