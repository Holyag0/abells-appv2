'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HomeIcon } from '@heroicons/react/24/solid'

const ConsultasIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.8 2.3A10.4 10.4 0 0 0 2 10a10.4 10.4 0 0 0 10 10a10.4 10.4 0 0 0 10-10a10.4 10.4 0 0 0-2.8-7.7"/>
    <path d="M12 10V6"/>
    <path d="M8 10h8"/>
  </svg>
);

const OdontoIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 2 6 2 9c0 2 .5 3 4 3s4-1 4-3c0-3 2-5.5 2-9c0-3.5-2.5-6-6-6z"/>
    <path d="M9 13.5c1.5 1 4.5 1 6 0"/>
  </svg>
);

const EsteticaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18"/>
    <path d="M3 12h18"/>
    <path d="M12 3l4 4-4 4-4-4 4-4z"/>
    <path d="M12 13l4 4-4 4-4-4 4-4z"/>
  </svg>
);

const ExamesIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
  </svg>
);

const menuItems = [
  { id: 'home', category: 'home', label: 'Início', icon: HomeIcon, color: 'text-accent' },
  { id: 'consultas', category: 'consultas', label: 'Consultas', icon: ConsultasIcon, color: 'text-primary-light' },
  { id: 'odontologia', category: 'odontologia', label: 'Odonto', icon: OdontoIcon, color: 'text-accent' },
  { id: 'estetica', category: 'estetica', label: 'Estética', icon: EsteticaIcon, color: 'text-primary-light' },
  { id: 'exames', category: 'exames', label: 'Exames', icon: ExamesIcon, color: 'text-accent' },
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

  useEffect(() => {
    const handleScroll = () => {
      const categoriesToCheck = ['exames', 'estetica', 'odontologia', 'consultas'];
      let foundCategory = 'home';
      
      const triggerPoint = window.innerHeight / 3;

      for (const cat of categoriesToCheck) {
        const el = document.getElementById(`category-${cat}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            foundCategory = cat;
            break;
          }
        }
      }

      setActiveItem(foundCategory);
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleItemClick = (category: string) => {
    setActiveItem(category)
    if (category === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.dispatchEvent(new CustomEvent('change-category', { detail: category }))
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-white/10 shadow-lg rounded-t-2xl">
      <div className="flex justify-around items-center py-2 px-2">
        {menuItems.map((item) => {
          const isActive = activeItem === item.category
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => handleItemClick(item.category)}
              className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-all min-w-[60px] ${
                isActive ? 'bg-white/5' : 'hover:bg-white/5'
              }`}
              aria-label={item.label}
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={isActive ? 'active' : 'inactive'}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                >
                  <Icon className={`w-5 h-5 ${isActive ? item.color : 'text-gray-500'}`} />
                </motion.div>
              </AnimatePresence>
              <span className={`text-[9px] font-bold ${isActive ? item.color : 'text-gray-500'}`}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
