'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import type { MenuItem } from './menu-carousel'

const menuData = {
  hamburgueres: [
    { name: 'Tradicional', price: 'R$ 25,00', description: 'Burger 150g, alface, muçarela, tomate e molho barbecue.', img: '/burger-classic.png' },
    { name: 'Cupimbell', price: 'R$ 35,00', description: 'Cupim desfiado 150g, alface, tomate, muçarela e molho barbecue da casa.', img: '/burger-cupimbell.png' },
    { name: 'Classic', price: 'R$ 30,00', description: 'Burger 150g, cheddar cremoso, alface, tomate e cebola caramelizada.', img: '/burger-classic.png' },
    { name: 'Nordestino', price: 'R$ 40,00', description: 'Carne de sol, queijo coalho, alface, tomate, cebola caramelizada e molho de rapadura.', img: '/burger-nordestino.png' },
    { name: 'Insano', price: 'R$ 45,00', description: '02 Burgers 150g, muçarela, bacon, molho especial picante, cheddar cremoso, alface e tomate.', img: '/burger-insano.png' },
    { name: 'Hot', price: 'R$ 30,00', description: 'Burger 150g, molho especial picante, muçarela, alface e tomate.', img: '/burger-classic.png' },
  ],
  smashes: [
    { name: 'Smash Kids', price: 'R$ 17,00', description: 'Pão brioche, 1 smash 80g e cheddar cremoso.', img: '/burger-smash.png' },
    { name: 'Combo 01', price: 'R$ 25,00', description: 'Pão brioche, sh 80g, cheddar cremoso + batata + refrigerante 350ml.', img: '/burger-smash.png' },
    { name: 'Combo 02', price: 'R$ 32,00', description: '2 Pão brioche, ash 80g, cheddar cremoso + refrigerante 350ml.', img: '/burger-smash.png' },
    { name: 'Combo 03', price: 'R$ 37,00', description: '2 Pão brioche, ash 80g, cheddar cremoso + batata + refrigerante 350ml.', img: '/burger-smash.png' },
    { name: 'Combo 04', price: 'R$ 37,00', description: '2 Pão brioche, 2 cupim de, muçarela e molho barbecue + batata + refrigerante 350ml.', img: '/burger-smash.png' },
  ],
  hotdogs: [
    { name: 'Tradicional', price: 'R$ 30,00', description: 'Linguiça artesanal 300g, molho de tomate, ervilha, milho, batata palha, maionese, catchup e mostarda.', img: '/dog-lampiao.png' },
    { name: 'Especial', price: 'R$ 35,00', description: 'Linguiça artesanal 300g, molho de tomate, ervilha, milho, batata palha, maionese, catchup e mostarda e farofa de bacon.', img: '/dog-especial.png' },
    { name: 'Dog Lampião', price: 'R$ 35,00', description: 'Carne de sol, cheddar, batata palha e cebola caramelizado.', img: '/dog-lampiao.png' },
    { name: 'Dog Pork', price: 'R$ 35,00', description: 'Costelinha de porco, muçarela, molho barbecue, molho de tomate, milho, ervilha, batata palha, maionese e catchup.', img: '/dog-lampiao.png' },
  ],
  pizzas: [
    { name: 'Carne do Sol', price: 'R$ 80,00', description: 'Muçarela, carne do sol e cream cheese.', img: '/pizza-nordestina.png' },
    { name: 'Cupim', price: 'R$ 80,00', description: 'Muçarela, cupim defumado e desfiado.', img: '/pizza-portuguesa.png' },
    { name: 'Pepperoni', price: 'R$ 80,00', description: 'Muçarela e pepperoni selecionado.', img: '/pizza-calabresa.png' },
    { name: 'Portuguesa', price: 'R$ 50,00', description: 'Muçarela, presunto, ervilha, ovo, cebola e pimentão.', img: '/pizza-portuguesa.png' },
    { name: 'Calabresa', price: 'R$ 60,00', description: 'Muçarela, calabresa e cebola.', img: '/pizza-calabresa.png' },
    { name: 'Marguerita', price: 'R$ 50,00', description: 'Muçarela, tomate e manjericão.', img: '/pizza-calabresa.png' },
  ],
  bebidas: [
    { name: 'Milkshake Gourmet', price: 'R$ 18,00', description: 'Milkshake cremoso 400ml com diversos sabores.', img: '/milkshake.png' },
    { name: 'Caipirinha', price: 'R$ 18,00', description: 'A clássica brasileira com cachaça de qualidade.', img: '/caipirinha.png' },
    { name: 'Caipifruta', price: 'R$ 24,00', description: 'Mix de frutas frescas e destilado premium.', img: '/caipifruta.png' },
    { name: 'Refrigerante', price: 'R$ 6,00', description: 'Diversas opções de refrigerantes 400ml.', img: '/refrigerante.png' },
  ]
}

const categories = [
  { id: 'hamburgueres', label: 'Hambúrgueres' },
  { id: 'smashes', label: 'Smashes' },
  { id: 'hotdogs', label: 'Hot-Dogs' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'bebidas', label: 'Bebidas' },
]

export function CardapioSection({ onProductClick }: { onProductClick: (product: MenuItem) => void }) {
  const [activeCategory, setActiveCategory] = useState('hamburgueres')

  useEffect(() => {
    const handleCategoryChange = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setActiveCategory(customEvent.detail);
      const el = document.getElementById(`category-${customEvent.detail}`);
      if (el) {
        const offset = 120;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };
    window.addEventListener('change-category', handleCategoryChange);
    return () => window.removeEventListener('change-category', handleCategoryChange);
  }, []);

  const changeCategory = (cat: string) => {
    setActiveCategory(cat);
    window.dispatchEvent(new CustomEvent('change-category', { detail: cat }));
  }

  return (
    <div id="cardapio-section" className="scroll-mt-24 w-full">
      <div className="flex flex-col mb-8 mt-4 pt-4 pb-2 mx-[-1rem] px-[1rem] sm:mx-0 sm:px-0">
        <h2 className="text-4xl font-bold text-center mb-8 text-white hidden sm:block">Nosso <span className="text-amber-500">Cardápio</span></h2>
      </div>

      <div className="flex flex-col gap-16 pb-12">
        {categories.map((category) => (
          <div key={category.id} id={`category-${category.id}`} className="scroll-mt-40">
            <h3 className="text-2xl font-bold text-white mb-6 lg:max-w-4xl mx-auto px-4 lg:px-0 flex items-center gap-4">
              {category.label}
              <div className="flex-1 h-px bg-white/10" />
            </h3>
            <ul
              role="list"
              className="divide-y divide-white/10 overflow-hidden bg-white/5 shadow-xl ring-1 ring-white/10 rounded-2xl lg:max-w-4xl mx-auto"
            >
              {menuData[category.id as keyof typeof menuData].map((item, idx) => (
                <motion.li 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "100px" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  key={item.name} 
                  className="relative flex justify-between gap-x-4 sm:gap-x-6 px-4 py-5 hover:bg-white/5 sm:px-6 transition-colors group cursor-pointer"
                  onClick={() => onProductClick(item as MenuItem)}
                >
                  <div className="flex min-w-0 gap-x-4 sm:gap-x-6 w-full">
                    <div className="relative size-20 sm:size-28 flex-none">
                      <img alt={item.name} src={item.img} className="size-full rounded-2xl bg-white/5 object-cover ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute -bottom-1 -right-1 flex sm:hidden items-center justify-center bg-zinc-900 rounded-full p-1">
                        <div className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-auto flex flex-col justify-center">
                      <p className="text-lg sm:text-xl font-bold text-white">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-gray-400 line-clamp-2 pr-2">
                        {item.description}
                      </p>
                      <p className="mt-2 text-md sm:text-lg font-bold text-amber-500">
                        {item.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-x-4 sm:gap-x-6">
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onProductClick(item as MenuItem);
                        }}
                        className="rounded-full bg-amber-500 px-5 py-2 text-sm font-black text-black hover:bg-amber-400 transition-all active:scale-95 shadow-lg relative z-10"
                      >
                        Ver Detalhes
                      </button>
                      <div className="mt-3 flex items-center gap-x-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-0.5">
                          <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">Disponível</p>
                      </div>
                    </div>
                    <div className="sm:hidden flex items-center justify-center">
                      <ChevronRightIcon className="size-6 text-gray-500 group-hover:text-amber-500 transition-colors" />
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
