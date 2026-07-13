'use client'

import { useState, useEffect } from 'react'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { NavbarScroll } from '@/components/navbar-scroll'
import { Heading, Subheading } from '@/components/text'
import { motion } from 'framer-motion'
import { InstagramIcon, WhatsAppIcon } from '@/components/icons/social-icons'
import { MapPinIcon, LightningIcon } from '@/components/icons/contact-icons'
import { ProductDrawer } from '@/components/product-drawer'
import type { MenuItem } from '@/components/menu-carousel'
import { HeroSection } from '@/components/hero-section'
import { HighlightsSection } from '@/components/highlights-section'
import { GalleryLightbox } from '@/components/gallery-lightbox'
import { SplashLoader } from '@/components/splash-loader'
import { TeamSection } from '@/components/team-section'
import { FaqSection } from '@/components/faq-section'

function ContactAndAddressSection() {
  return (
    <div id="contato" className="py-32 relative border-t border-zinc-950/10 scroll-mt-24">
      <Container>
        {/* Row 1: Contacts & Opening Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Column 1: Contacts info */}
          <div className="space-y-8">
            <Subheading className="text-primary-dark font-extrabold">Fale Conosco</Subheading>
            <Heading as="h2" className="text-4xl font-black text-zinc-955 dark:text-zinc-950">Fale Conosco ou Faça-nos uma Visita.</Heading>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/40 border border-white/50 rounded-xl text-zinc-900 shadow-sm">
                  <InstagramIcon className="size-6" />
                </div>
                <div>
                  <p className="font-extrabold text-zinc-950">Instagram</p>
                  <a href="https://www.instagram.com/dr.brasilapuiares/" target="_blank" className="text-zinc-900 hover:text-primary-dark transition font-semibold">@dr.brasilapuiares</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/40 border border-white/50 rounded-xl text-zinc-900 shadow-sm">
                  <WhatsAppIcon className="size-6" />
                </div>
                <div>
                  <p className="font-extrabold text-zinc-950">Telefone / WhatsApp</p>
                  <a href="https://wa.me/5585991390194" target="_blank" className="text-zinc-900 hover:text-primary-dark transition font-semibold">(85) 99139-0194</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/40 border border-white/50 rounded-xl text-zinc-900 shadow-sm">
                  <MapPinIcon className="size-6" />
                </div>
                <div>
                  <p className="font-extrabold text-zinc-950">Endereço</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Rua+Gomes+da+Silva+47+Centro+Apuiares+CE" target="_blank" className="text-zinc-900 hover:text-primary-dark transition font-semibold">Rua Gomes da Silva, nº 47 - Centro, Apuiarés - CE, CEP: 62630-000</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary-dark border border-primary/20 shadow-sm">
                  <LightningIcon className="size-6" />
                </div>
                <div>
                  <p className="font-extrabold text-zinc-950">Atendimento Humanizado</p>
                  <p className="text-zinc-800 font-semibold">Coleta laboratorial logo cedo a partir das 7h da manhã! 🚀</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Weekly Schedule Opening Hours */}
          <div className="bg-white/40 border border-white/50 backdrop-blur-md rounded-4xl p-6 sm:p-10 shadow-lg space-y-6">
            <h3 className="text-xl font-extrabold text-zinc-950 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Horários de Atendimento
            </h3>
            <div className="divide-y divide-zinc-950/10">
              <div className="flex justify-between py-3.5 font-semibold text-sm sm:text-base text-zinc-900">
                <span className="font-extrabold text-zinc-955">Segunda a Sexta</span>
                <span>07:00 às 17:00</span>
              </div>
              <div className="flex justify-between py-3.5 font-semibold text-sm sm:text-base text-zinc-900">
                <span className="font-extrabold text-zinc-955">Sábado</span>
                <span>07:00 às 12:00</span>
              </div>
              <div className="flex justify-between py-3.5 font-semibold text-sm sm:text-base text-zinc-900">
                <span className="font-extrabold text-zinc-955">Domingo</span>
                <span className="text-primary-dark font-extrabold">Fechado</span>
              </div>
            </div>
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl shadow-inner">
              <p className="text-xs font-bold text-primary-dark leading-relaxed">
                * Coleta laboratorial para exames de sangue e exames gerais de Segunda a Sábado a partir das 07:00 da manhã.
              </p>
            </div>
          </div>

        </div>

        {/* Row 2: Full-width Map Card */}
        <div className="relative rounded-4xl overflow-hidden shadow-2xl ring-1 ring-zinc-955/10 h-[450px] w-full mt-16 border border-white/50">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.852445853292!2d-39.444988771146746!3d-3.8785461750247672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c1e3b6eb4e8c63%3A0xe54fb7a0c102a0a2!2sApuiar%C3%A9s%20-%20CE%2C%2062630-000!5e0!3m2!1spt-BR!2sbr!4v1719234567890!5m2!1spt-BR!2sbr"
            width="400"
            height="300"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </Container>
    </div>
  )
}

const Hero = HeroSection

function AboutSection() {
  return (
    <div id="sobre-nos" className="py-32 relative border-t border-zinc-955/5 scroll-mt-24">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left image container - CEOs Portrait format */}
          <div className="flex-[1.2] relative w-full max-w-lg mx-auto lg:mr-auto lg:-ml-12">
            <div className="absolute -inset-4 bg-accent/25 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/2] rounded-4xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <img
                src="/images/ceos.jpg"
                alt="Dr. Pedro Henrique Galvão e Dra. Amanda Galvão"
                className="size-full object-cover object-top"
              />
            </motion.div>
          </div>
          
          <div className="flex-[1.5] space-y-8 text-center lg:text-left">
            <Subheading className="text-primary-dark font-extrabold">Nossa História</Subheading>
            <Heading as="h2" className="text-4xl sm:text-5xl lg:text-6xl font-black text-zinc-955 dark:text-zinc-950 leading-tight">
              Saúde integrada com compromisso e dedicação.
            </Heading>
            <div className="space-y-4 text-base sm:text-lg text-zinc-900 leading-relaxed font-semibold">
              <p>
                A <strong>Clínica Dr. Brasil</strong> nasceu em Apuiarés - CE com o propósito de aproximar a medicina de excelência e a odontologia moderna da nossa comunidade.
              </p>
              <p>
                Sob a coordenação técnica do <strong>Dr. Pedro Henrique Galvão</strong> (Nutrologia e Geriatria) e da <strong>Dra. Amanda Galvão</strong> (Farmácia Estética e Botox), reunimos profissionais dedicados a tratar cada paciente como um todo, priorizando a prevenção, a recuperação da saúde bucal e a autoestima.
              </p>
              <p className="font-extrabold text-primary-dark italic text-lg text-shadow-yellow">
                "Cuidar de você em todas as etapas da vida, com o acolhimento que você merece."
              </p>
            </div>
            <div className="pt-4 flex justify-center lg:justify-start">
              <Button href="https://wa.me/5585991390194" target="_blank" className="px-8 py-4 text-base sm:text-lg font-bold bg-primary hover:bg-primary-dark text-white rounded-full">
                Agendar Consulta no WhatsApp
              </Button>
            </div>
          </div>

          {/* Right image container - Reception */}
          <div className="flex-[1.2] relative w-full max-w-lg mx-auto lg:ml-auto lg:-mr-12">
            <div className="absolute -inset-4 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-[3/4] rounded-4xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            >
              <img
                src="/images/recepcao.png"
                alt="Recepção Clínica Dr. Brasil"
                className="size-full object-cover object-top"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function GallerySection({ images, onImageClick }: { images: string[]; onImageClick: (idx: number) => void }) {
  const doubledImages = [...images, ...images] // Infinite rolling marquee clone array

  return (
    <div id="galeria" className="pt-32 pb-16 relative border-t border-zinc-955/5 scroll-mt-24 overflow-hidden">
      <Container>
        <div className="space-y-8 mb-12 text-center">
          <Subheading className="text-primary-dark font-extrabold">Nossa Clínica</Subheading>
          <Heading as="h2" className="text-4xl sm:text-5xl font-extrabold text-zinc-955 dark:text-zinc-950">Conheça nossa Estrutura Física.</Heading>
          <p className="text-zinc-900 font-semibold max-w-md mx-auto text-sm sm:text-base">Imagens reais das instalações da Dr. Brasil em Apuiarés - CE. Passe o mouse para pausar a rolagem.</p>
        </div>
      </Container>

      {/* Hardware-accelerated continuous infinite marquee row */}
      <div className="w-full overflow-hidden py-6 select-none relative">
        <div className="animate-marquee flex gap-6">
          {doubledImages.map((src, idx) => {
            const originalIdx = idx % images.length
            return (
              <div
                key={idx}
                onClick={() => onImageClick(originalIdx)}
                className="relative w-80 sm:w-[420px] aspect-[16/10] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] border border-white/40 cursor-pointer flex-shrink-0 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Estrutura ${originalIdx + 1}`}
                  className="size-full object-cover object-top pointer-events-none"
                  loading="lazy"
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  
  const galleryImages = [
    '/images/recepcao.png',
    '/images/ambiente-corredor.png',
    '/images/recepcao-frontal.png',
    '/images/recepcao-natal.png',
    '/images/fachada.jpg',
    '/images/fachada-detalhe.png'
  ]

  useEffect(() => {
    const handleOpenLightbox = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number }>
      setLightboxIndex(customEvent.detail.index)
      setLightboxOpen(true)
    }
    window.addEventListener('open-lightbox', handleOpenLightbox)

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      if (href.startsWith('#') || href.startsWith('/#')) {
        const id = href.replace('/#', '').replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          e.preventDefault()
          const offset = 90
          const bodyRect = document.body.getBoundingClientRect().top
          const elementRect = element.getBoundingClientRect().top
          const elementPosition = elementRect - bodyRect
          const offsetPosition = elementPosition - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })

          window.history.pushState(null, '', href)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      window.removeEventListener('open-lightbox', handleOpenLightbox)
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  const handleOpenDrawer = (product: MenuItem) => {
    setSelectedProduct(product)
    setDrawerOpen(true)
  }

  const handleGalleryImageClick = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 text-zinc-955 min-h-screen relative">
      {/* Splash screen Canvas app loader */}
      {loading && <SplashLoader onComplete={() => setLoading(false)} />}

      <NavbarScroll />
      <Hero />

      <div className="relative z-10 mt-8">
        <AboutSection />
        <GallerySection images={galleryImages} onImageClick={handleGalleryImageClick} />
        
        <main>
          <Container>
            <div className="pt-0">
              <HighlightsSection onProductClick={handleOpenDrawer} />
            </div>
          </Container>
        </main>
        
        <TeamSection />
        <FaqSection />
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
