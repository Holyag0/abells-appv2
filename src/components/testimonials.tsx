'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { Heading, Subheading } from './text'

const reviews = [
  {
    name: 'Ricardo M.',
    title: 'Amante de Burgers Artesanais',
    quote: 'Experiência Incrível! O blend da carne é suculento e o pão brioche estava perfeito. É visível o cuidado com cada ingrediente. Com certeza um dos melhores que já provei e voltarei mais vezes!',
    img: '/testimonial-1.png',
  },
  {
    name: 'Julia S.',
    title: 'Entusiasta Gastronômica',
    quote: 'Melhor Hot-Dog da região, sem dúvidas! A linguiça artesanal faz toda a diferença no sabor. O ambiente é super descontraído e o atendimento foi nota 10. Recomendo o Dog Lampião!',
    img: '/testimonial-2.png',
  },
]

export function Testimonials() {
  return (
    <div id="depoimentos" className="overflow-hidden py-32 bg-gray-950 text-white transition-colors">
      <Container>
        <div className="text-center mb-24">
          <Subheading dark>O que dizem sobre nós</Subheading>
          <Heading as="h3" dark className="mt-2">
            A opinião de quem realmente importa: você.
          </Heading>
        </div>

        <div className="flex flex-col gap-32">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={clsx(
                'flex flex-col lg:flex-row items-center gap-12 lg:gap-24',
                index % 2 === 1 && 'lg:flex-row-reverse'
              )}
            >
              <div className="flex-1 space-y-6">
                <Heading as="h4" dark className="text-3xl lg:text-5xl font-light italic">
                  {review.name}
                </Heading>
                <p className="text-amber-500 font-medium uppercase tracking-widest text-sm">
                  {review.title}
                </p>
                <blockquote className="text-xl lg:text-2xl text-gray-400 font-light leading-relaxed">
                  "{review.quote}"
                </blockquote>
              </div>
              
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-amber-500/10 rounded-3xl blur-2xl group-hover:bg-amber-500/20 transition-all duration-500" />
                <div className="relative aspect-square lg:aspect-4/3 overflow-hidden rounded-4xl ring-1 ring-white/10 shadow-2xl">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-gray-950/60 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  )
}

import { clsx } from 'clsx'
