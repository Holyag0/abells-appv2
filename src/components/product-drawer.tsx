'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import type { MenuItem } from './menu-carousel'

interface ProductDrawerProps {
  open: boolean
  setOpen: (open: boolean) => void
  product: MenuItem | null
}

export function ProductDrawer({ open, setOpen, product }: ProductDrawerProps) {
  if (!product) return null

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

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
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Detalhes do Produto
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative rounded-md text-gray-400 hover:text-gray-500 focus-visible:outline-2 focus-visible:outline-amber-600"
                      >
                        <span className="sr-only">Fechar</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="relative h-64 sm:h-80">
                    <img
                      alt={product.name}
                      src={product.img}
                      className="absolute size-full object-cover"
                    />
                  </div>
                  <div className="mt-8 px-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-black italic text-gray-900 dark:text-white">
                        {product.name}
                      </h3>
                      <p className="text-2xl font-black text-amber-600 dark:text-amber-500">
                        {product.price}
                      </p>
                    </div>
                    
                    <div className="mt-8 space-y-6">
                      <div>
                        <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-widest">Descrição</dt>
                        <dd className="mt-2 text-lg text-gray-900 dark:text-gray-100">
                          {product.description}
                        </dd>
                      </div>

                      <div className="pt-8 border-t border-gray-100 dark:border-white/5">
                        <button
                          onClick={() => {
                            const message = `Olá! Gostaria de pedir o ${product.name} (${product.price}).`
                            window.open(`https://wa.me/5585985497108?text=${encodeURIComponent(message)}`, '_blank')
                          }}
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95"
                        >
                          Pedir Agora no WhatsApp
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
