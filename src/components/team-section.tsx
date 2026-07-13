'use client'

import { motion } from 'framer-motion'
import { Container } from './container'
import { Subheading, Heading } from './text'
import { WhatsAppIcon } from './icons/social-icons'

interface Member {
  name: string
  role: string
  registry: string
  image: string
  whatsappMsg: string
}

const team: Member[] = [
  {
    name: 'Dr. Pedro Henrique Galvão',
    role: 'Nutrologia & Geriatria (Diretor Técnico)',
    registry: 'CRM 23412-CE',
    image: '/images/team/pedro-henrique-galvao.png',
    whatsappMsg: 'Olá, gostaria de agendar uma consulta em Nutrologia ou Geriatria com o Dr. Pedro Henrique.'
  },
  {
    name: 'Dra. Amanda Galvão',
    role: 'Farmácia Estética & Harmonização Facial',
    registry: 'CRF 12345-CE',
    image: '/images/team/amanda-galvao.png',
    whatsappMsg: 'Olá, gostaria de agendar uma avaliação estática ou aplicação de Botox com a Dra. Amanda Galvão.'
  },
  {
    name: 'Dr. Artur Gadelha',
    role: 'Odontologia Integral & Prótese Dentária',
    registry: 'CRO 9876-CE',
    image: '/images/team/artur-gadelha.png',
    whatsappMsg: 'Olá, gostaria de agendar uma consulta odontológica com o Dr. Artur Gadelha.'
  },
  {
    name: 'Dra. Layla Menezes',
    role: 'Cardiologia & Avaliação Cardiovascular',
    registry: 'CRM 18452-CE',
    image: '/images/team/layla-menezes.png',
    whatsappMsg: 'Olá, gostaria de agendar uma consulta ou check-up cardiológico com a Dra. Layla Menezes.'
  },
  {
    name: 'Dr. Eduardo Soares',
    role: 'Ultrassonografia Digital & Diagnósticos',
    registry: 'CRM 15632-CE',
    image: '/images/team/eduardo-soares.png',
    whatsappMsg: 'Olá, gostaria de agendar um exame de Ultrassonografia com o Dr. Eduardo Soares.'
  },
  {
    name: 'Dra. Renata Braga',
    role: 'Nutrição Clínica & Emagrecimento',
    registry: 'CRN 9821-CE',
    image: '/images/team/renata-braga.png',
    whatsappMsg: 'Olá, gostaria de agendar uma consulta de nutrição com a Dra. Renata Braga.'
  },
  {
    name: 'Dra. Sherliane Furtado',
    role: 'Odontopediatria & Tratamento Infantil',
    registry: 'CRO 10243-CE',
    image: '/images/team/sherliane-furtado.png',
    whatsappMsg: 'Olá, gostaria de agendar um atendimento infantil com a Dra. Sherliane Furtado.'
  },
  {
    name: 'Dra. Romênia Oliveira',
    role: 'Clínica Geral & Medicina Preventiva',
    registry: 'CRM 14902-CE',
    image: '/images/team/romenia-oliveira.png',
    whatsappMsg: 'Olá, gostaria de agendar uma consulta de clínica geral com a Dra. Romênia Oliveira.'
  }
]

export function TeamSection() {
  return (
    <section id="equipe" className="py-24 relative border-t border-zinc-950/10 scroll-mt-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Subheading className="text-primary-dark font-extrabold">Corpo Clínico</Subheading>
          <Heading as="h2" className="mt-2 text-4xl sm:text-5xl font-black text-zinc-955 dark:text-zinc-950">
            Nossos <span className="text-primary-dark">Especialistas</span>
          </Heading>
          <p className="mt-4 text-zinc-900 font-semibold max-w-lg mx-auto text-sm sm:text-base">
            Profissionais qualificados e registrados prontos para oferecer atendimento de alto padrão humano e ético.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/40 border border-white/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col items-center p-6 text-center"
            >
              {/* Profile Image container */}
              <div className="relative size-32 rounded-full overflow-hidden border-2 border-primary/20 bg-white/50 mb-4 flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="size-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to placeholder if file error
                    (e.target as HTMLImageElement).src = '/images/team/photo-mock.jpg'
                  }}
                />
              </div>

              {/* Text content details */}
              <div className="flex-1 flex flex-col justify-between w-full">
                <div>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold bg-primary/20 text-primary-dark border border-primary/10 mb-2">
                    {member.registry}
                  </span>
                  <h3 className="text-base font-extrabold text-zinc-950 leading-tight mb-1">{member.name}</h3>
                  <p className="text-xs font-semibold text-zinc-800 tracking-wide uppercase mb-4">{member.role}</p>
                </div>

                <a
                  href={`https://wa.me/5585991390194?text=${encodeURIComponent(member.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-extrabold py-2.5 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 text-xs shadow-md border border-primary-dark"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
