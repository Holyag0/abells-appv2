'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import type { MenuItem } from './menu-carousel'
import { WhatsAppIcon } from './icons/social-icons'

interface ProductDrawerProps {
  open: boolean
  setOpen: (open: boolean) => void
  product: MenuItem | null
}

export function ProductDrawer({ open, setOpen, product }: ProductDrawerProps) {
  if (!product) return null

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/45 backdrop-blur-sm" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16 p-2 sm:p-4">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="relative flex h-full flex-col overflow-y-auto bg-white dark:bg-gray-900 shadow-2xl rounded-[2.5rem] sm:rounded-[3.5rem] ring-1 ring-black/5 dark:ring-white/10 transition-colors">
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                      Detalhes do Serviço
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-400 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        <span className="sr-only">Fechar</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative h-64 sm:h-80 bg-gray-100 dark:bg-gray-800">
                    <img
                      alt={product.name}
                      src={product.img}
                      className="absolute size-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-8 px-4 sm:px-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-accent uppercase tracking-widest leading-none">
                        {product.price}
                      </p>
                    </div>
                    
                    <div className="mt-8 space-y-6">
                      <div>
                        <dt className="text-xs font-semibold text-gray-450 dark:text-gray-400 uppercase tracking-widest">Informações</dt>
                        <dd className="mt-2 text-base text-gray-700 dark:text-gray-255 leading-relaxed">
                          {product.description}
                        </dd>
                      </div>

                      <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                        <button
                          onClick={() => {
                            const message = `Olá! Gostaria de agendar ou tirar dúvidas sobre o serviço: ${product.name} (${product.price}).`
                            window.open(`https://wa.me/5585991390194?text=${encodeURIComponent(message)}`, '_blank')
                          }}
                          className="w-full border-2 border-green-500 text-green-600 dark:text-green-400 bg-green-500/10 hover:bg-green-500/20 font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                          <WhatsAppIcon className="w-5 h-5" />
                          Agendar no WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
