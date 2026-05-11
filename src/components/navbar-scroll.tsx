'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from './link'
import { Logo } from './logo'
import { InstagramIcon, WhatsAppIcon } from './icons/social-icons'

const links = [
  { href: '/#destaques', label: 'Destaques' },
  { href: '/#cardapio', label: 'Cardápio' },
  { href: '/#galeria', label: 'Galeria' },
  { href: '/#sobre-nos', label: 'Sobre' },
  { href: '/#contato', label: 'Contato' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center gap-1">
      {links.map(({ href, label }, index) => (
        <div key={label} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-5 py-2.5 text-sm font-medium text-white/90 hover:text-amber-500 transition-all duration-300 relative group"
          >
            {label}
            <motion.span
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
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
      className="flex size-12 items-center justify-center rounded-lg hover:bg-white/10 lg:hidden text-white transition-all duration-300 z-50 relative"
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
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            onClick={onClose}
          />
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="mb-16"
            >
              <Link href="/" onClick={onClose}>
                <Logo className="h-24 md:h-32" />
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
                  className="text-2xl font-medium text-white/90 hover:text-amber-500 transition-colors py-2 px-8 w-full text-center"
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
                href="https://instagram.com/abellsgastroburguer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-amber-500 hover:text-black transition-all duration-300"
              >
                <InstagramIcon className="size-6" />
              </a>
              <a
                href="https://wa.me/5585985497108"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-full text-white hover:bg-green-500 hover:text-black transition-all duration-300"
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
  const { scrollY, scrollYProgress } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null)
  const [lastScrollY, setLastScrollY] = useState(0)


  const opacity = useTransform(scrollY, [0, 100], [1, 0.95])
  const backdropBlur = useTransform(scrollY, [0, 100], ['blur(0px)', 'blur(12px)'])
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)'])

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
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center gap-6">
              <Link href="/" title="Home" onClick={() => setMobileMenuOpen(false)}>
                <Logo className="h-16 md:h-20" />
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
          className="h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent origin-left"
        />
      </motion.header>

      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <div className="h-20" />
    </>
  )
}
