'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { Subheading, Heading } from './text'
import { MenuCarousel } from './menu-carousel'
import type { MenuItem } from './menu-carousel'
import { StarIcon, ClockIcon } from './icons/social-icons'

interface HighlightsSectionProps {
  onProductClick: (product: MenuItem) => void
}

const highlights = [
  { img: '/milkshake.png', name: 'Milkshake Gourmet', price: 'R$ 18,00', description: 'Milkshake cremoso 400ml com diversos sabores.', category: 'Bebida', delay: 0.5, height: 'h-[360px]', bgClass: 'bg-black/40 ring-white/10' },
  { img: '/burger-smash-super.png', name: 'Super Smash', price: 'R$ 42,00', description: 'Triplo smash, cheddar triplo e bacon crocante.', category: 'Smash', delay: 0.3, height: 'h-[420px]', bgClass: 'bg-black/40 ring-white/10' },
  { img: '/burger-nordestino.png', name: 'Nordestino', price: 'R$ 40,00', description: 'Carne de sol, queijo coalho, alface, tomate, cebola caramelizada e molho de rapadura.', category: 'Hambúrguer', delay: 0.1, height: 'h-[500px]', bgClass: 'bg-amber-500/10 ring-amber-500/50 shadow-amber-500/20 shadow-2xl' },
  { img: '/dog-lampiao.png', name: 'Dog Lampião', price: 'R$ 35,00', description: 'Carne de sol, cheddar, batata palha e cebola caramelizada.', category: 'Hotdog', delay: 0.2, height: 'h-[420px]', bgClass: 'bg-black/40 ring-white/10' },
  { img: '/pizza-nordestina.png', name: 'Nordestina', price: 'G: R$ 80,00', description: 'Muçarela, carne do sol puxada na manteiga da terra, queijo coalho em cubo e cebola.', category: 'Pizza', delay: 0.4, height: 'h-[360px]', bgClass: 'bg-black/40 ring-white/10' },
]

import { clsx } from 'clsx'

export function HighlightsSection({ onProductClick }: HighlightsSectionProps) {
  return (
    <section id="destaques" className="relative py-16 sm:py-24 scroll-mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-500 text-sm font-semibold mb-4"
          >
            <StarIcon className="w-4 h-4" />
            Mais Pedidos
          </motion.span>
          <Subheading>Escolha dos Clientes</Subheading>
          <Heading as="h2" className="mt-2 text-4xl sm:text-5xl lg:text-6xl">
            Nossos <span className="text-amber-500">Destaques</span>
          </Heading>
        </motion.div>
      </Container>

      <div className="block lg:hidden">
        <MenuCarousel
          id="destaques-carousel"
          subheading=""
          title=""
          items={highlights}
          onProductClick={onProductClick}
        />
      </div>

      <Container className="hidden lg:block">
        <div className="flex items-end justify-center gap-4 lg:gap-6 mt-16 h-[550px]">
          {highlights.map((item) => (
             <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                className={clsx("relative w-64 lg:w-72 rounded-3xl overflow-hidden ring-1 group flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-4", item.height, item.bgClass)}
                onClick={() => onProductClick(item as MenuItem)}
              >
                <div className="h-[60%] w-full overflow-hidden bg-white/5 relative">
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </div>
                <div className="h-[40%] flex flex-col justify-center items-center px-4 pt-4 pb-6 text-center bg-black/60 backdrop-blur-md relative">
                  <div className="transition-transform duration-300 group-hover:-translate-y-4 flex flex-col items-center w-full">
                    <span className="text-amber-500 font-black text-xs mb-1 block uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                    <div className="flex justify-center gap-1 my-1.5">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={`star-${i}`} className="w-3.5 h-3.5 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-md font-bold text-gray-300">{item.price}</p>
                  </div>
                  <button
                    className="absolute bottom-4 w-[calc(100%-2rem)] flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold py-2 rounded-xl transition-all active:scale-95 text-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 left-1/2 -translate-x-1/2"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </motion.div>
          ))}
        </div>
      </Container>

      <Container className="mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 text-gray-400 text-sm"
        >
          <ClockIcon className="w-4 h-4 text-amber-500" />
          <span>Atualizado com base nos pedidos da semana</span>
        </motion.div>
      </Container>
    </section>
  )
}
