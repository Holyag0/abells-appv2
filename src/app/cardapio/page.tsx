'use client'

import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { motion, AnimatePresence } from 'framer-motion'
import { Suspense, useEffect, useState, useRef } from 'react'
import { ChevronRightIcon, ShoppingCartIcon } from '@heroicons/react/20/solid'
import { ProductDrawer } from '@/components/product-drawer'
import type { MenuItem } from '@/components/menu-carousel'
import { Link } from '@/components/link'

const menuData = {
  hamburgueres: [
    { name: 'Tradicional', price: 'R$ 25,00', description: 'Burger 150g, alface, muçarela, tomate e molho barbecue.', img: '/burger-classic.png' },
    { name: 'Cupimbell', price: 'R$ 35,00', description: 'Cupim desfiado 150g, alface, tomate, muçarela e molho barbecue da casa.', img: '/burger-cupimbell.png' },
    { name: 'Classic', price: 'R$ 30,00', description: 'Burger 150g, cheddar cremoso, alface, tomate e cebola caramelizada.', img: '/burger-classic.png' },
    { name: 'Nordestino', price: 'R$ 40,00', description: 'Carne de sol, queijo coalho, alface, tomate, cebola caramelizada e molho de rapadura.', img: '/burger-nordestino.png' },
    { name: 'Insano', price: 'R$ 45,00', description: '02 Burgers 150g, muçarela, bacon, molho especial picante, cheddar cremoso, alface e tomate.', img: '/burger-insano.png' },
    { name: 'Hot', price: 'R$ 30,00', description: 'Burger 150g, molho especial picante, muçarela, alface e tomate.', img: '/burger-classic.png' },
    { name: 'Pork', price: 'R$ 35,00', description: 'Costelinha de porco desossada 150g, muçarela, molho barbecue, alface e tomate.', img: '/burger-classic.png' },
    { name: 'Nacho', price: 'R$ 25,00', description: 'Burger 150g, cheddar cremoso, bacon, nacho, alface e tomate.', img: '/burger-classic.png' },
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
    { name: 'Caipirinha', price: 'R$ 18,00', description: 'A clássica brasileira com cachaça de qualidade.', img: '/milkshake.png' },
    { name: 'Caipifruta', price: 'R$ 24,00', description: 'Mix de frutas frescas e destilado premium.', img: '/milkshake.png' },
    { name: 'Refrigerante', price: 'R$ 6,00', description: 'Diversas opções de refrigerantes 400ml.', img: '/milkshake.png' },
  ]
}

const categories = [
  { id: 'hamburgueres', label: 'Hambúrgueres' },
  { id: 'smashes', label: 'Smashes' },
  { id: 'hotdogs', label: 'Hot-Dogs' },
  { id: 'pizzas', label: 'Pizzas' },
  { id: 'bebidas', label: 'Bebidas & Drinks' },
]

import { useSearchParams } from 'next/navigation'

import { Gradient } from '@/components/gradient'

function CardapioContent() {
  const searchParams = useSearchParams()
  const catParam = searchParams.get('cat')
  const [activeCategory, setActiveCategory] = useState('hamburgueres')
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (catParam && categories.some(c => c.id === catParam)) {
      setActiveCategory(catParam)
      // Pequeno delay para garantir que o layout renderizou
      setTimeout(() => {
        menuRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [catParam])

  const handleOpenDrawer = (product: MenuItem) => {
    setSelectedProduct(product)
    setDrawerOpen(true)
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="relative">
        <Container className="relative">
          <Navbar />
          <div className="flex flex-col items-center gap-12 pt-16 pb-24 lg:flex-row lg:items-center lg:py-24">
            <div className="relative flex-1 flex justify-center">
              <div className="relative size-80 sm:size-96 lg:size-[450px] shrink-0">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  src="/logo-gastro.png"
                  alt="Abell's Gastroburger Logo"
                  className="relative size-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="font-display text-6xl/[1] font-medium tracking-tight text-balance text-white sm:text-8xl/[0.9]">
                <span className="text-red-600 inline-block pb-1">Cardápio</span> <span className="text-amber-500">Completo</span>.
              </h1>
              <p className="mt-6 max-w-lg text-lg/7 font-medium text-gray-200 sm:text-xl/8 mx-auto lg:mx-0">
                Explore nossa variedade de burgers artesanais, pizzas e sobremesas. Tudo preparado com ingredientes selecionados.
              </p>
            </div>
          </div>
        </Container>
      </div>
      
      <div ref={menuRef} className="bg-black/40 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[3.5rem] mt-12 mb-12 mx-2 sm:mx-4 relative z-10 shadow-2xl ring-1 ring-white/10 border-t border-white/10">
        <main className="pt-24 pb-32">
          <Container>
            {/* Categorias - Floating Desktop (Hidden on Mobile) */}
            <div className="hidden md:flex sticky top-8 z-50 justify-center mb-12 pointer-events-none">
              <div className="flex overflow-x-auto gap-2 no-scrollbar p-2 bg-black/50 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 ring-1 ring-black/5 pointer-events-auto">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`?cat=${cat.id}`}
                    scroll={false}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                      activeCategory === cat.id 
                      ? 'bg-amber-500 text-black shadow-lg scale-105' 
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group relative bg-black/40 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-white/10"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-black ring-1 ring-white/20">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-6 h-10">
                        {item.description}
                      </p>
                      <button
                        onClick={() => handleOpenDrawer(item as MenuItem)}
                        className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-black py-3 rounded-xl transition-all active:scale-95 group/btn"
                      >
                        Ver Detalhes
                        <ChevronRightIcon className="size-5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Container>
        </main>
      </div>

      <Footer />
      <ProductDrawer open={drawerOpen} setOpen={setDrawerOpen} product={selectedProduct} />
    </div>
  )
}

export default function CardapioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center text-amber-500 font-bold">Carregando...</div>}>
      <CardapioContent />
    </Suspense>
  )
}
