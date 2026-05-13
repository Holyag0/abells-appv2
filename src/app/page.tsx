'use client'

import { useState, useEffect } from 'react'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { NavbarScroll } from '@/components/navbar-scroll'
import { CardapioSection } from '@/components/cardapio-section'
import { Heading, Subheading } from '@/components/text'
import { motion } from 'framer-motion'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons/social-icons'
import { MapPinIcon, LightningIcon } from '@/components/icons/contact-icons'
import { ProductDrawer } from '@/components/product-drawer'
import type { MenuItem } from '@/components/menu-carousel'
import { HeroSection } from '@/components/hero-section'
import { HighlightsSection } from '@/components/highlights-section'
import { GalleryLightbox } from '@/components/gallery-lightbox'

function ContactAndAddressSection() {
  return (
    <div id="contato" className="py-32 relative border-t border-white/10 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <Subheading>Fale Conosco</Subheading>
            <Heading as="h2" className="text-4xl">Onde o sabor acontece.</Heading>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500">
                  <InstagramIcon className="size-6" />
                </div>
                <div>
                  <p className="font-bold">Instagram</p>
                  <a href="https://instagram.com/abellsgastroburguer" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 transition">@abellsgastroburguer</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500">
                  <WhatsAppIcon className="size-6" />
                </div>
                <div>
                  <p className="font-bold">Telefone / WhatsApp</p>
                  <a href="https://wa.me/5585985497108" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 transition">(85) 98549-7108</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500/10 rounded-xl text-amber-600 dark:text-amber-500">
                  <MapPinIcon className="size-6" />
                </div>
                <div>
                  <p className="font-bold">Endereço</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Abells+Gastroburguer" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 transition">R. São Pedro, 150 - Fleicheiras, Trairi - CE, 62690-000</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-600 dark:text-green-500">
                  <LightningIcon className="size-6" />
                </div>
                <div>
                  <p className="font-bold">Delivery Super Rápido</p>
                  <p className="text-gray-300">Entrega quente e veloz para toda Flecheiras! 🚀</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-4xl overflow-hidden shadow-2xl ring-1 ring-black/5 dark:ring-white/10 min-h-[400px]">
             <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5200424298955!2d-39.27129568240203!3d-3.21980171766142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c1090001426fab%3A0x8e8abc432577a3f6!2sAbells%20Gastroburguer!5e0!3m2!1spt-BR!2sbr!4v1778600133872!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  )
}

const Hero = HeroSection

function AboutSection() {
  return (
    <div id="sobre-nos" className="py-32 relative border-t border-white/10 scroll-mt-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-[1.2] relative w-full max-w-lg mx-auto lg:mr-auto lg:-ml-12">
            <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[4/5] lg:aspect-square rounded-4xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <img
                src="/testimonial-2.png"
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
                O <strong>Abell's Gastroburger</strong> nasceu de um desejo simples: elevar o conceito de hambúrguer artesanal a uma experiência gastronômica completa.
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
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
    <div id="galeria" className="pt-32 pb-16 relative border-t border-white/10 scroll-mt-24">
      <Container>
        <div className="space-y-8 mb-16 text-center">
          <Subheading>Nossa Galeria</Subheading>
          <Heading as="h2" className="text-4xl sm:text-5xl">Conheça nosso espaço e pratos.</Heading>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {galleryImages.map((src, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              key={src}
              className="relative aspect-square rounded-2xl overflow-hidden ring-1 ring-white/10 group cursor-pointer"
              onClick={() => window.dispatchEvent(new CustomEvent('open-lightbox', { detail: { index: idx } }))}
            >
              <img src={src} alt={`Galeria ${idx + 1}`} className="size-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
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

  useEffect(() => {
    const handleOpenLightbox = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number }>
      setLightboxIndex(customEvent.detail.index)
      setLightboxOpen(true)
    }
    window.addEventListener('open-lightbox', handleOpenLightbox)
    return () => window.removeEventListener('open-lightbox', handleOpenLightbox)
  }, [])

  const handleOpenDrawer = (product: MenuItem) => {
    setSelectedProduct(product)
    setDrawerOpen(true)
  }

  return (
    <div className="transition-colors duration-300">
      <NavbarScroll />
      <Hero />

      <div className="bg-zinc-950 relative z-10 border-t border-white/10 mt-8">
        <AboutSection />
        <GallerySection />
        <main>
          <Container>
            <div className="pt-0">
              <HighlightsSection onProductClick={handleOpenDrawer} />
              <CardapioSection onProductClick={handleOpenDrawer} />
            </div>
          </Container>
        </main>
        
        <ContactAndAddressSection />
      </div>

      <Footer />
      <ProductDrawer open={drawerOpen} setOpen={setDrawerOpen} product={selectedProduct} />
      <GalleryLightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </div>
  )
}
