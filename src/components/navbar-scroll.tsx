'use client'

import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from './link'
import { Logo } from './logo'
import { WhatsAppIcon } from './icons/social-icons'

const links = [
  { href: '/#sobre-nos', label: 'Sobre Nós' },
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#destaques', label: 'Especialidades' },
  { href: '/#contato', label: 'Contato' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center gap-1">
      {links.map(({ href, label }) => (
        <div key={label} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-5 py-2.5 text-sm font-extrabold text-zinc-955 hover:text-primary-dark transition-all duration-300 relative group"
          >
            {label}
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </Link>
        </div>
      ))}
    </nav>
  )
}

function MobileNavButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex size-12 items-center justify-center rounded-lg hover:bg-black/5 lg:hidden text-zinc-955 transition-all duration-300 z-50 relative"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="menu"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Bars2Icon className="size-6" />
          </motion.div>
        ) : (
          <motion.div
            key="close"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <XMarkIcon className="size-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  )
}

function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const scrollToSection = (href: string) => {
    onClose()
    setTimeout(() => {
      const id = href.replace('/#', '')
      const element = document.getElementById(id)
      if (element) {
        const offset = 80
        const bodyRect = document.body.getBoundingClientRect().top
        const elementRect = element.getBoundingClientRect().top
        const elementPosition = elementRect - bodyRect
        const offsetPosition = elementPosition - offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-amber-400/90 backdrop-blur-xl"
            onClick={onClose}
          />
          <div className="relative h-full flex flex-col items-center justify-center px-6 bg-gradient-to-b from-amber-400/95 to-amber-500/95 backdrop-blur-xl">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-16"
            >
              <Link href="/" onClick={onClose}>
                <Logo className="h-16" />
              </Link>
            </motion.div>
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {links.map(({ href, label }, index) => (
                <motion.button
                  key={label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    duration: 0.4,
                  }}
                  exit={{ y: 20, opacity: 0 }}
                  onClick={() => scrollToSection(href)}
                  className="text-2xl font-black text-zinc-955 hover:text-primary-dark transition-colors py-2 px-8 w-full text-center"
                >
                  {label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-12 flex gap-4"
            >
              <a
                href="https://wa.me/5585991390194"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary text-white hover:bg-primary-dark transition-all duration-300 rounded-full shadow-lg"
              >
                <WhatsAppIcon className="size-6" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function NavbarScroll({ banner }: { banner?: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  const opacity = useTransform(scrollY, [0, 100], [1, 0.98])
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(8px)'])
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(251, 191, 36, 0)', 'rgba(251, 191, 36, 1)']) // Solid amber-400 (251,191,36) on scroll

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const direction = currentScrollY > lastScrollY ? 'down' : 'up'

      if (Math.abs(currentScrollY - lastScrollY) > 10) {
        setScrollDirection(direction)
        setLastScrollY(currentScrollY)
      }

      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const shouldHide = scrollDirection === 'down' && isScrolled && !mobileMenuOpen

  return (
    <>
      <motion.header
        style={{
          y: shouldHide ? '-100%' : '0%',
          opacity,
          backdropFilter: backdropBlur,
          backgroundColor,
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-zinc-950/5 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-6">
              <Link href="/" title="Home" onClick={() => setMobileMenuOpen(false)}>
                <Logo className="h-14" />
              </Link>
              {banner && (
                <div className="hidden lg:flex items-center">
                  {banner}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <DesktopNav />
              <MobileNavButton
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          className="h-px bg-gradient-to-r from-transparent via-primary-dark/30 to-transparent origin-left"
        />
      </motion.header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="h-20" />
    </>
  )
}
