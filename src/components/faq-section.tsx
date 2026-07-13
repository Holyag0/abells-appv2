'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './container'
import { Subheading, Heading } from './text'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Qual o horário da coleta de exames?',
    answer: 'A nossa coleta laboratorial se inicia logo cedo, a partir das 7h da manhã, de segunda a sábado. O jejum recomendado para a maioria dos exames de sangue varia de 8 a 12 horas. Entre em contato para orientações específicas sobre o seu exame.'
  },
  {
    question: 'Como posso agendar uma consulta ou exame?',
    answer: 'Você pode realizar o seu agendamento de forma prática clicando em qualquer botão de contato/WhatsApp do site ou enviando uma mensagem direta para (85) 99139-0194. Nossa equipe responderá informando os horários disponíveis.'
  },
  {
    question: 'Quais especialidades atendem na clínica?',
    answer: 'Reunimos atendimentos em Odontologia Geral e Estética, Nutrologia, Geriatria, Cardiologia, Ultrassonografia Digital (exames de imagem gerais e com doppler), Nutrição Clínica e Clínica Geral.'
  },
  {
    question: 'Quais convênios e parcerias a clínica possui?',
    answer: 'Trabalhamos com consultas particulares e possuímos parcerias de descontos especiais com sindicatos regionais, associações de servidores públicos e planos de benefícios familiares locais. Entre em contato para consultar as tabelas vigentes.'
  },
  {
    question: 'A estrutura física possui acessibilidade?',
    answer: 'Sim, a Clínica Dr. Brasil foi projetada com rampas de acesso, banheiros adaptados e corredores amplos para oferecer total acessibilidade e conforto a cadeirantes, idosos e pessoas com mobilidade reduzida.'
  }
]

const partners = [
  'Sindicatos Regionais',
  'Associações Públicas',
  'Planos Familiares Locais',
  'Parcerias de Desconto',
  'Particular Acessível'
]

function FAQAccordionItem({ question, answer, isOpen, onClick }: FAQItem & { isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-zinc-950/10 py-5">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left font-extrabold text-zinc-950 text-base sm:text-lg focus:outline-none hover:text-primary-dark transition-colors py-2"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-4 text-primary-dark flex-shrink-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-zinc-800 font-semibold text-sm sm:text-base leading-relaxed pr-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq-convenios" className="py-24 relative border-t border-zinc-955/5 scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title and Partnerships List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <Subheading className="text-primary-dark font-extrabold">Dúvidas & Benefícios</Subheading>
              <Heading as="h2" className="text-4xl sm:text-5xl font-black text-zinc-955 dark:text-zinc-950 leading-tight">
                Perguntas Frequentes e Convênios.
              </Heading>
              <p className="text-zinc-900 font-semibold text-sm sm:text-base leading-relaxed">
                Tire suas principais dúvidas sobre exames e consultas, e conheça os convênios e sindicatos parceiros da nossa clínica.
              </p>
            </div>

            {/* Partnerships badges block */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-zinc-950 leading-none">
                Parcerias & Convênios Atendidos:
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="inline-flex items-center px-4 py-2 rounded-2xl bg-white/40 border border-white/60 text-xs sm:text-sm font-bold text-zinc-900 shadow-sm"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <p className="text-xs font-bold text-zinc-700 italic">
                * Para checar a cobertura de exames laboratoriais específicos, fale diretamente com a recepção.
              </p>
            </div>
          </div>

          {/* Right Column: FAQ Accordion component */}
          <div className="lg:col-span-7 bg-white/30 border border-white/50 backdrop-blur-md rounded-4xl p-6 sm:p-10 shadow-lg">
            <div className="divide-y divide-zinc-950/10">
              {faqs.map((faq, index) => (
                <FAQAccordionItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
