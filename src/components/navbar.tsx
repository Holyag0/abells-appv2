'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars2Icon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import { Link } from './link'
import { Logo } from './logo'
import { PlusGrid, PlusGridItem, PlusGridRow } from './plus-grid'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '/cardapio', label: 'Cardápio Completo' },
  { href: '/#cardapio', label: 'Destaques' },
  { href: '/#contato', label: 'Endereço' },
  { href: '/#contato', label: 'Contato' },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={label} className="relative flex">
          <Link
            href={href}
            className="flex items-center px-4 py-3 text-base font-medium text-white/90 hover:text-amber-500 transition-colors"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg hover:bg-white/10 lg:hidden text-white transition-colors"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden absolute left-0 right-0 top-full z-50 mt-4 px-4">
      <div className="flex flex-col gap-6 py-6 px-6 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: 'easeInOut',
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={label}
          >
            <Link href={href} className="text-lg font-medium text-white/90 hover:text-amber-500 block">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>

    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="relative pt-6 sm:pt-10 z-50">
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            <DesktopNav />
            <MobileNavButton />
          </div>
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </Disclosure>
  )
}
