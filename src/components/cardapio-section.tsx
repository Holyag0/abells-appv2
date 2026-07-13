'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import type { MenuItem } from './menu-carousel'

const servicesData = {
  consultas: [
    { name: 'Clínico Geral', price: 'Consulta Médica', description: 'Atendimento preventivo primário para toda a família e encaminhamentos especializados.', img: '/images/recepcao.png' },
    { name: 'Cardiologia', price: 'Consulta Médica', description: 'Eletrocardiograma digital, avaliação pré-operatória e acompanhamento da saúde do coração.', img: '/images/recepcao-natal.png' },
    { name: 'Neurologia', price: 'Consulta Médica', description: 'Diagnósticos e tratamento de cefaleias, tremores, epilepsia e distúrbios neurológicos.', img: '/images/ambiente-corredor.png' },
    { name: 'Ginecologia', price: 'Consulta Médica', description: 'Saúde integral da mulher, exames preventivos periódicos e acompanhamento ginecológico.', img: '/images/recepcao-frontal.png' },
    { name: 'Geriatria', price: 'Consulta Médica', description: 'Abordagem médica voltada para o envelhecimento ativo com alta qualidade de vida.', img: '/images/ceos.jpg' },
    { name: 'Dermatologia', price: 'Consulta Médica', description: 'Tratamento de acne, manchas, doenças dermatológicas em pele, cabelos e unhas.', img: '/images/recepcao-natal.png' },
    { name: 'Psiquiatria', price: 'Consulta Médica', description: 'Acompanhamento médico especializado em ansiedade, depressão e transtornos de humor.', img: '/images/recepcao.png' },
  ],
  odontologia: [
    { name: 'Clínica Geral & Limpeza', price: 'Serviço Odontológico', description: 'Avaliação preventiva, remoção de tártaro e polimento profilático para a saúde bucal.', img: '/images/recepcao.png' },
    { name: 'Restaurações Estéticas', price: 'Serviço Odontológico', description: 'Reconstrução funcional e estética de dentes com resinas fotopolimerizáveis modernas.', img: '/images/recepcao-frontal.png' },
    { name: 'Clareamento Dental', price: 'Serviço Odontológico', description: 'Clareamento dental a laser de alta eficiência para um sorriso rejuvenescido e brilhante.', img: '/images/recepcao-natal.png' },
    { name: 'Próteses Dentárias', price: 'Serviço Odontológico', description: 'Soluções de reabilitação oral com próteses fixas e móveis de alta qualidade e durabilidade.', img: '/images/fachada.jpg' },
    { name: 'Tratamento de Canal', price: 'Serviço Odontológico', description: 'Tratamento endodôntico especializado para alívio imediato da dor e salvamento dentário.', img: '/images/ambiente-corredor.png' },
  ],
  estetica: [
    { name: 'Botox Facial', price: 'Procedimento Estético', description: 'Aplicação de toxina botulínica para suavização de rugas de expressão e marcas na testa.', img: '/images/ceos.jpg' },
    { name: 'Preenchimento Labial', price: 'Procedimento Estético', description: 'Definição de contorno e volume dos lábios com ácido hialurônico de alta pureza.', img: '/images/recepcao-natal.png' },
    { name: 'Harmonização Facial', price: 'Procedimento Estético', description: 'Procedimentos estéticos faciais personalizados para valorizar seus traços naturais com equilíbrio.', img: '/images/recepcao.png' },
    { name: 'Limpeza de Pele Profunda', price: 'Procedimento Estético', description: 'Remoção de impurezas, cravos e células mortas para uma pele saudável e rejuvenescida.', img: '/images/ambiente-corredor.png' },
  ],
  exames: [
    { name: 'Ultrassonografia Geral', price: 'Exame de Imagem', description: 'Exames de ultrassom de abdômen, vias urinárias, tireoide, obstétrico e tecidos moles.', img: '/images/fachada.jpg' },
    { name: 'Eletrocardiograma (ECG)', price: 'Exame de Diagnóstico', description: 'Registro digital da atividade elétrica do coração para diagnósticos cardiológicos rápidos.', img: '/images/recepcao-natal.png' },
    { name: 'Coletas Laboratoriais', price: 'Exame de Laboratório', description: 'Exames de sangue, urina e preventivos com coleta rápida e segura a partir das 7h da manhã.', img: '/images/recepcao.png' },
  ]
}

const categories = [
  { id: 'consultas', label: 'Consultas Médicas' },
  { id: 'odontologia', label: 'Odontologia' },
  { id: 'estetica', label: 'Estética & Botox' },
  { id: 'exames', label: 'Exames & Diagnósticos' },
]

export function CardapioSection({ onProductClick }: { onProductClick: (product: MenuItem) => void }) {
  const [activeCategory, setActiveCategory] = useState('consultas')

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

  return (
    <div id="servicos" className="scroll-mt-24 w-full py-16 sm:py-24">
      <div className="flex flex-col mb-8 mt-4 pt-4 pb-2 mx-[-1rem] px-[1rem] sm:mx-0 sm:px-0">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-white">Nossos <span className="text-accent">Serviços</span></h2>
        <p className="text-gray-400 text-center max-w-xl mx-auto text-base sm:text-lg">Oferecemos uma ampla gama de exames, consultas e procedimentos odontológicos integrados no mesmo espaço físico.</p>
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
              {servicesData[category.id as keyof typeof servicesData].map((item) => (
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
                    <div className="relative size-20 sm:size-24 flex-none">
                      <img alt={item.name} src={item.img} className="size-full rounded-2xl bg-white/5 object-cover ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-300 object-top" />
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
                      <p className="mt-2 text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider">
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
                        className="rounded-full bg-accent px-5 py-2 text-sm font-black text-black hover:bg-accent-light transition-all active:scale-95 shadow-lg relative z-10"
                      >
                        Saber Mais
                      </button>
                      <div className="mt-3 flex items-center gap-x-1.5 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-0.5">
                          <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>
                        <p className="text-[10px] font-extrabold text-emerald-450 uppercase tracking-widest">Disponível</p>
                      </div>
                    </div>
                    <div className="sm:hidden flex items-center justify-center">
                      <ChevronRightIcon className="size-6 text-gray-500 group-hover:text-accent transition-colors" />
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
