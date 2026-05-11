'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HomeIcon } from '@heroicons/react/24/solid'

const BurgerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.46 9.54A8.5 8.5 0 0 0 12 3.5a8.5 8.5 0 0 0-7.46 6.04A2.5 2.5 0 0 0 2.5 12v1a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-1a2.5 2.5 0 0 0-2.04-2.46z" />
    <path d="M4.5 16h15a1 1 0 0 1 1 1v1.5a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3V17a1 1 0 0 1 1-1z" />
  </svg>
);

const PizzaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 1.5C8 1.5 4.5 3 2 5.5L12 22l10-16.5C19.5 3 16 1.5 12 1.5zM12 6c.8 0 1.5.7 1.5 1.5S12.8 9 12 9s-1.5-.7-1.5-1.5S11.2 6 12 6zm-2 6c-.8 0-1.5-.7-1.5-1.5S9.2 9 10 9s1.5.7 1.5 1.5S10.8 12 10 12zm5 1c-.8 0-1.5-.7-1.5-1.5S14.2 10 15 10s1.5.7 1.5 1.5S15.8 13 15 13z"/>
  </svg>
);

const DrinkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6 5v1h12V5H6zm1.5 3l1.5 14h6l1.5-14h-9zM15 2h-4v2h4V2z" />
  </svg>
);

const HotdogIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19 6C16 6 14.5 8 12 8S8 6 5 6C2.2 6 0 8.2 0 11v2c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-2c0-2.8-2.2-5-5-5z" />
  </svg>
);

const menuItems = [
  { id: 'home', category: 'home', icon: HomeIcon, color: 'text-amber-500' },
  { id: 'hamburgueres', category: 'hamburgueres', icon: BurgerIcon, color: 'text-orange-600' },
  { id: 'pizzas', category: 'pizzas', icon: PizzaIcon, color: 'text-red-500' },
  { id: 'hotdogs', category: 'hotdogs', icon: HotdogIcon, color: 'text-yellow-500' },
  { id: 'bebidas', category: 'bebidas', icon: DrinkIcon, color: 'text-cyan-500' },
]

export function MobileFloatingMenu() {
  const [activeItem, setActiveItem] = useState('home')

  useEffect(() => {
    const handleCategoryChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveItem(customEvent.detail);
    };
    window.addEventListener('change-category', handleCategoryChange);
    return () => window.removeEventListener('change-category', handleCategoryChange);
  }, []);

  const handleItemClick = (category: string) => {
    setActiveItem(category)
    if (category === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.dispatchEvent(new CustomEvent('change-category', { detail: category }))
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-lg rounded-t-2xl">
      <div className="flex justify-around items-center py-2 px-2">
        {menuItems.map((item) => {
          const isActive = activeItem === item.category
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.category)}
              className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all min-w-[64px] ${
                isActive ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
              aria-label={item.category}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={isActive ? 'active' : 'inactive'}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon className={`w-6 h-6 ${isActive ? item.color : 'text-gray-400'}`} />
                </motion.div>
              </AnimatePresence>
              <span className={`text-[10px] font-medium ${isActive ? item.color : 'text-gray-500'}`}>
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
