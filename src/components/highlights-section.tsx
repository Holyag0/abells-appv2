'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { Subheading, Heading } from './text'
import { MenuCarousel } from './menu-carousel'
import type { MenuItem } from './menu-carousel'
import { StarIcon, ClockIcon } from './icons/social-icons'
import { clsx } from 'clsx'

interface HighlightsSectionProps {
  onProductClick: (product: MenuItem) => void
}

const highlights = [
  { 
    img: '/images/recepcao-natal.png', 
    name: 'Cardiologia Preventiva', 
    price: 'Agende seu Check-up', 
    description: 'Eletrocardiograma e avaliação da saúde cardiovascular integral.', 
    category: 'Medicina', 
    delay: 0.5, 
    height: 'h-[360px]', 
    bgClass: 'bg-black/70 ring-white/10 shadow-2xl' 
  },
  { 
    img: '/images/ambiente-corredor.png', 
    name: 'Nutrologia & Longevidade', 
    price: 'Saúde Integrada', 
    description: 'Tratamentos de emagrecimento metabólico e envelhecimento ativo.', 
    category: 'Medicina', 
    delay: 0.3, 
    height: 'h-[420px]', 
    bgClass: 'bg-black/70 ring-white/10 shadow-2xl' 
  },
  { 
    img: '/images/recepcao.png', 
    name: 'Odontologia Integral', 
    price: 'Sorriso Saudável', 
    description: 'Clínica geral, restaurações estéticas e próteses modernas.', 
    category: 'Odontologia', 
    delay: 0.1, 
    height: 'h-[500px]', 
    bgClass: 'bg-primary/90 ring-accent/60 shadow-primary/40 shadow-2xl' 
  },
  { 
    img: '/images/ceos.jpg', 
    name: 'Farmácia Estética & Botox', 
    price: 'Harmonização Facial', 
    description: 'Toxina botulínica e procedimentos com foco em naturalidade.', 
    category: 'Estética', 
    delay: 0.2, 
    height: 'h-[420px]', 
    bgClass: 'bg-black/70 ring-white/10 shadow-2xl' 
  },
  { 
    img: '/images/fachada.jpg', 
    name: 'Ultrassom Digital', 
    price: 'Exames de Imagem', 
    description: 'Ultrassonografias gerais e com doppler colorido de alta precisão.', 
    category: 'Exames', 
    delay: 0.4, 
    height: 'h-[360px]', 
    bgClass: 'bg-black/70 ring-white/10 shadow-2xl' 
  },
]

export function HighlightsSection({ onProductClick }: HighlightsSectionProps) {
  return (
    <section id="destaques" className="relative scroll-mt-24 py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center lg:mb-12"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-dark font-extrabold text-sm mb-4 border border-primary/20"
          >
            <StarIcon className="w-4 h-4 fill-current" />
            Serviços de Destaque
          </motion.span>
          <Subheading className="text-primary-dark font-extrabold">Cuidado de Excelência</Subheading>
          <Heading as="h2" className="mt-2 text-4xl sm:text-5xl lg:text-6xl text-zinc-955 dark:text-zinc-950">
            Nossos <span className="text-primary-dark">Destaques</span>
          </Heading>
        </motion.div>
      </Container>

      <div className="block lg:hidden gap-2">
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
                <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-85" />
              </div>
              <div className="h-[40%] flex flex-col justify-center items-center px-4 pt-4 pb-6 text-center bg-black/80 backdrop-blur-md relative border-t border-white/5">
                <div className="transition-transform duration-300 group-hover:-translate-y-4 flex flex-col items-center w-full">
                  <span className="text-accent font-black text-xs mb-1 block uppercase tracking-wider">{item.category}</span>
                  <h3 className="text-base font-extrabold text-white leading-tight">{item.name}</h3>
                  <div className="flex justify-center gap-1 my-1.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={`star-${i}`} className="w-3.5 h-3.5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-bold text-gray-300">{item.price}</p>
                </div>
                <button
                  className="absolute bottom-4 w-[calc(100%-2rem)] flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-black font-extrabold py-2 rounded-xl transition-all active:scale-95 text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300 left-1/2 -translate-x-1/2 shadow-md"
                >
                  Saber Mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      <Container className="mt-6 sm:mt-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 text-zinc-950 text-sm font-bold"
        >
          <ClockIcon className="w-4 h-4 text-primary-dark" />
          <span>Atendimento com hora marcada para sua conveniência</span>
        </motion.div>
      </Container>
    </section>
  )
}
