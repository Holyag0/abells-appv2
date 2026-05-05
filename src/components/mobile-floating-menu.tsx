'use client'

import { motion } from 'framer-motion'
import { Link } from './link'
import { HomeIcon } from '@heroicons/react/24/solid'

const menuItems = [
  { id: 'home', label: 'Início', href: '/#', icon: <HomeIcon className="size-6 text-blue-500" /> },
  { id: 'burgers', label: 'Burgers', href: '/cardapio?cat=hamburgueres', icon: <span className="text-2xl">🍔</span> },
  { id: 'pizzas', label: 'Pizzas', href: '/cardapio?cat=pizzas', icon: <span className="text-2xl">🍕</span> },
  { id: 'hotdogs', label: 'Dogs', href: '/cardapio?cat=hotdogs', icon: <span className="text-2xl">🌭</span> },
  { id: 'milkshake', label: 'Drinks', href: '/cardapio?cat=bebidas', icon: <span className="text-2xl">🥤</span> },
]

export function MobileFloatingMenu() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden"
    >
      <div className="flex items-center gap-1 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-black/5 dark:border-white/10 ring-1 ring-black/5">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            scroll={false}
            className="flex flex-col items-center justify-center size-14 rounded-full transition-all active:scale-90 hover:bg-black/5 dark:hover:bg-white/5"
          >
            {item.icon}
            <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400">{item.label}</span>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
