'use client'

import { useState } from 'react'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { MenuCarousel } from '@/components/menu-carousel'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import type { Metadata } from 'next'

const LeafletMap = dynamic(() => import('@/components/leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      <p className="text-gray-500 italic">Carregando mapa interativo...</p>
    </div>
  ),
})

import { ProductDrawer } from '@/components/product-drawer'
import type { MenuItem } from '@/components/menu-carousel'

function ContactAndAddressSection() {
  return (
    <div id="contato" className="py-32 relative border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Subheading>Fale Conosco</Subheading>
            <Heading as="h2" className="text-4xl">Onde o sabor acontece.</Heading>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Instagram</p>
                  <a href="https://instagram.com/abellsgastroburguer" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 transition">@abellsgastroburguer</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Telefone / WhatsApp</p>
                  <a href="https://wa.me/5585985497108" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 transition">(85) 98549-7108</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Endereço</p>
                  <p className="text-gray-300">R. São Pedro, 150 - Fleicheiras, Trairi - CE, 62690-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-600 dark:text-green-500">
                  <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <div>
                  <p className="font-bold">Delivery Super Rápido</p>
                  <p className="text-gray-300">Entrega quente e veloz para toda Flecheiras! 🚀</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-4xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 min-h-[400px]">
             <LeafletMap />
          </div>
        </div>
      </Container>
    </div>
  )
}

function Hero() {
  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <div className="flex flex-col items-center gap-16 pt-16 pb-24 lg:flex-row lg:items-center lg:py-32">
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
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-white sm:text-8xl/[0.8]">
              <span className="text-red-600 dark:text-red-500">Abell's</span> <span className="text-amber-500">Gastroburger</span>
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-200 sm:text-2xl/8 mx-auto lg:mx-0">
              O sabor autêntico do hambúrguer artesanal. Ingredientes premium e uma experiência gastronômica inigualável.
            </p>
            <div className="mt-12 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row lg:justify-start justify-center">
              <Button href="#pedir">Pedir Agora</Button>
              <Button variant="secondary" href="/cardapio">
                Ver Cardápio Completo
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-24 right-8 hidden lg:flex items-center gap-6 bg-black/40 backdrop-blur-md p-4 rounded-full ring-1 ring-white/10">
          <div className="flex gap-2">
            <a href="https://www.instagram.com/abells_burger/" target="_blank" className="p-2 bg-amber-500/10 rounded-full text-amber-600 dark:text-amber-500 hover:bg-amber-500/20 transition-colors">
              <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://wa.me/5585985497108" target="_blank" className="p-2 bg-green-500/10 rounded-full text-green-600 dark:text-green-500 hover:bg-green-500/20 transition-colors">
              <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </a>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <p className="text-xs font-bold text-gray-300">Terça a domingo | 17h às 23h</p>
        </div>
      </Container>
    </div>
  )
}

function AboutSection() {
  return (
    <div id="sobre-nos" className="py-32 relative border-t border-white/10">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-[1.2] relative w-full max-w-lg mx-auto lg:mr-auto lg:-ml-12">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] lg:aspect-square rounded-4xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <img
                src="/sobre-nos.png"
                alt="Abell's Gastroburger Passion"
                className="size-full object-cover object-top"
              />
            </motion.div>
          </div>
          
          <div className="flex-[1.5] space-y-8 text-center lg:text-left">
            <Subheading>Nossa História</Subheading>
            <Heading as="h2" className="text-4xl sm:text-5xl lg:text-6xl">
              Paixão pelo sabor em cada detalhe.
            </Heading>
            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                O **Abell's Gastroburger** nasceu de um desejo simples: elevar o conceito de hambúrguer artesanal a uma experiência gastronômica completa. 
              </p>
              <p>
                Localizados no coração de Flecheiras, unimos a tradição dos melhores blends de carne com o toque regional que só a nossa terra tem. Cada lanche que sai da nossa cozinha carrega não apenas ingredientes frescos, mas a nossa alma e o compromisso de fazer você sorrir a cada mordida.
              </p>
              <p className="font-bold text-amber-500 italic">
                "Não é apenas comida, é o momento mais gostoso do seu dia."
              </p>
            </div>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button href="#cardapio" className="px-8 py-4 text-lg">
                Conheça nosso Cardápio
              </Button>
            </div>
          </div>

          <div className="flex-[1.2] relative w-full max-w-lg mx-auto lg:ml-auto lg:-mr-12">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] lg:aspect-square rounded-4xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <img
                src="/testimonial-1.png"
                alt="Todo mundo ama"
                className="size-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function GallerySection() {
  const galleryImages = [
    '/galeria/IMG_5583.jpg',
    '/galeria/IMG_5604.jpg',
    '/galeria/IMG_5610.jpg',
    '/galeria/IMG_5615.jpg',
    '/galeria/IMG_5646.jpg',
    '/galeria/IMG_5649.jpg',
    '/galeria/IMG_5689.jpg',
    '/galeria/IMG_5693.jpg',
  ]
  return (
    <div id="galeria" className="py-32 relative border-t border-white/10">
      <Container>
        <div className="space-y-8 mb-16 text-center">
          <Subheading>Nossa Galeria</Subheading>
          <Heading as="h2" className="text-4xl sm:text-5xl">Conheça nosso espaço e pratos.</Heading>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={src}
              className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 group"
            >
              <img src={src} alt={`Galeria ${idx + 1}`} className="size-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

const burgers = [
  { img: '/burger-classic.png', name: 'Tradicional', price: 'R$ 25,00', description: 'Burger 150g, alface, muçarela, tomate e molho barbecue.' },
  { img: '/burger-cupimbell.png', name: 'Cupimbell', price: 'R$ 35,00', description: 'Cupim desfiado 150g, alface, tomate, muçarela e molho barbecue da casa.' },
  { img: '/burger-classic.png', name: 'Classic', price: 'R$ 30,00', description: 'Burger 150g, cheddar cremoso, alface, tomate e cebola caramelizada.' },
  { img: '/burger-nordestino.png', name: 'Nordestino', price: 'R$ 40,00', description: 'Carne de sol, queijo coalho, alface, tomate, cebola caramelizada e molho de rapadura.' },
  { img: '/burger-insano.png', name: 'Insano', price: 'R$ 45,00', description: '02 Burgers 150g, muçarela, bacon, molho especial picante, cheddar cremoso, alface e tomate.' },
  { img: '/burger-classic.png', name: 'Hot', price: 'R$ 30,00', description: 'Burger 150g, molho especial picante, muçarela, alface e tomate.' },
]

const smashes = [
  { img: '/burger-smash.png', name: 'Smash Kids', price: 'R$ 17,00', description: 'Pão brioche, 1 smash 80g e cheddar cremoso.' },
  { img: '/burger-smash.png', name: 'Combo 01', price: 'R$ 25,00', description: 'Pão brioche, sh 80g, cheddar cremoso + batata + refrigerante 350ml.' },
  { img: '/burger-smash.png', name: 'Combo 02', price: 'R$ 32,00', description: '2 Pão brioche, ash 80g, cheddar cremoso + refrigerante 350ml.' },
  { img: '/burger-smash.png', name: 'Combo 03', price: 'R$ 37,00', description: '2 Pão brioche, ash 80g, cheddar cremoso + batata + refrigerante 350ml.' },
  { img: '/burger-smash.png', name: 'Combo 04', price: 'R$ 37,00', description: '2 Pão brioche, 2 cupim de, muçarela e molho barbecue + batata + refrigerante 350ml.' },
  { img: '/burger-smash-super.png', name: 'Super Smash', price: 'R$ 42,00', description: 'Triplo smash, cheddar triplo e bacon crocante.' },
]

const hotdogs = [
  { img: '/dog-lampiao.png', name: 'Tradicional', price: 'R$ 30,00', description: 'Linguiça artesanal 300g, molho de tomate, ervilha, milho, batata palha.' },
  { img: '/dog-especial.png', name: 'Especial', price: 'R$ 35,00', description: 'Linguiça artesanal 300g, farofa de bacon e molho especial.' },
  { img: '/dog-lampiao.png', name: 'Dog Lampião', price: 'R$ 35,00', description: 'Carne de sol, cheddar, batata palha e cebola caramelizada.' },
  { img: '/dog-lampiao.png', name: 'Dog Pork', price: 'R$ 35,00', description: 'Costelinha de porco, muçarela, molho barbecue e milho.' },
  { img: '/dog-especial.png', name: 'Dog Bacon', price: 'R$ 38,00', description: 'Dose extra de bacon crocante e queijo derretido.' },
  { img: '/dog-lampiao.png', name: 'Dog Cheddar', price: 'R$ 36,00', description: 'Muito cheddar cremoso e batata palha.' },
]

const pizzas = [
  { img: '/pizza-calabresa.png', name: 'Calabresa', price: 'G: R$ 60,00', description: 'Muçarela, calabresa e cebola.' },
  { img: '/pizza-portuguesa.png', name: 'Portuguesa', price: 'G: R$ 50,00', description: 'Muçarela, presunto, ervilha, ovo, cebola e pimentão.' },
  { img: '/pizza-nordestina.png', name: 'Nordestina', price: 'G: R$ 80,00', description: 'Muçarela, carne do sol puxada na manteiga da terra, queijo coalho em cubo e cebola.' },
  { img: '/pizza-calabresa.png', name: 'Carne do Sol', price: 'G: R$ 80,00', description: 'Muçarela, carne do sol e cream cheese.' },
  { img: '/pizza-portuguesa.png', name: 'Cupim', price: 'G: R$ 80,00', description: 'Muçarela, cupim defumado e desfiado.' },
  { img: '/pizza-calabresa.png', name: 'Pepperoni', price: 'G: R$ 80,00', description: 'Muçarela e pepperoni selecionado.' },
]

const desserts = [
  { img: '/milkshake.png', name: 'Milkshake Gourmet', price: 'R$ 18,00', description: 'Milkshake cremoso 400ml com diversos sabores.' },
  { img: '/milkshake.png', name: 'Caipirinha', price: 'R$ 18,00', description: 'A clássica brasileira com cachaça de qualidade.' },
  { img: '/milkshake.png', name: 'Caipifruta', price: 'R$ 24,00', description: 'Mix de frutas frescas e destilado premium.' },
  { img: '/milkshake.png', name: 'Sucos Naturais', price: 'R$ 10,00', description: 'Frutas da estação preparadas na hora.' },
  { img: '/milkshake.png', name: 'Refrigerante', price: 'R$ 6,00', description: 'Diversas opções de refrigerantes 400ml.' },
  { img: '/milkshake.png', name: 'Sobremesa do Dia', price: 'R$ 15,00', description: 'Consulte as opções doces disponíveis.' },
]

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleOpenDrawer = (product: MenuItem) => {
    setSelectedProduct(product)
    setDrawerOpen(true)
  }

  return (
    <div className="transition-colors duration-300">
      <Hero />
      
      <div className="bg-black/40 backdrop-blur-xl rounded-[2.5rem] sm:rounded-[3.5rem] mt-12 mb-12 mx-2 sm:mx-4 relative z-10 shadow-2xl ring-1 ring-white/10 border-t border-white/10">
        <main>
          <Container>
            <div id="cardapio" className="pt-20">
              <MenuCarousel id="burgers" subheading="Cardápio" title="Hambúrgueres Artesanais" items={burgers} onProductClick={handleOpenDrawer} />
              <MenuCarousel id="smashes" subheading="Cardápio" title="Smashes & Combos" items={smashes} onProductClick={handleOpenDrawer} />
              <MenuCarousel id="hotdogs" subheading="Cardápio" title="Hot-Dogs Gourmet" items={hotdogs} onProductClick={handleOpenDrawer} />
              <MenuCarousel id="pizzas" subheading="Cardápio" title="Pizzas Especiais" items={pizzas} onProductClick={handleOpenDrawer} />
              <MenuCarousel id="sobremesas" subheading="Cardápio" title="Sobremesas & Bebidas" items={desserts} onProductClick={handleOpenDrawer} />
            </div>
          </Container>
        </main>
        
        {/* <Testimonials /> */}
        <GallerySection />
        <AboutSection />
        <ContactAndAddressSection />
      </div>

      <Footer />
      <ProductDrawer open={drawerOpen} setOpen={setDrawerOpen} product={selectedProduct} />
    </div>
  )
}
