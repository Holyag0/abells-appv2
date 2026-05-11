'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon, XCircleIcon, InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

interface ToastProps extends Toast {
  onClose: (id: string) => void
}

const toastIcons = {
  success: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
  error: <XCircleIcon className="w-6 h-6 text-red-500" />,
  warning: <ExclamationCircleIcon className="w-6 h-6 text-amber-500" />,
  info: <InformationCircleIcon className="w-6 h-6 text-blue-500" />,
}

const toastColors = {
  success: 'border-green-500/50 bg-green-500/10',
  error: 'border-red-500/50 bg-red-500/10',
  warning: 'border-amber-500/50 bg-amber-500/10',
  info: 'border-blue-500/50 bg-blue-500/10',
}

function ToastItem({ id, type, title, message, duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id)
    }, duration)
    return () => clearTimeout(timer)
  }, [id, duration, onClose])

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: 100, y: 0 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      className={`relative flex items-start gap-3 p-4 rounded-xl border ${toastColors[type]} backdrop-blur-sm shadow-lg max-w-sm`}
    >
      <div className="flex-shrink-0 mt-0.5">
        {toastIcons[type]}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-white">{title}</h4>
        {message && (
          <p className="mt-1 text-sm text-gray-300">{message}</p>
        )}
      </div>
      <button
        onClick={() => onClose(id)}
        className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
        aria-label="Fechar"
      >
        <XMarkIcon className="w-5 h-5" />
      </button>
    </motion.div>
  )
}

const toastsContext = {
  toasts: [] as Toast[],
  listeners: new Set<(toasts: Toast[]) => void>(),
  add(toast: Omit<Toast, 'id'>) {
    const newToast: Toast = { ...toast, id: Math.random().toString(36).substr(2, 9) }
    this.toasts = [...this.toasts, newToast]
    this.notify()
  },
  remove(id: string) {
    this.toasts = this.toasts.filter(t => t.id !== id)
    this.notify()
  },
  clear() {
    this.toasts = []
    this.notify()
  },
  notify() {
    this.listeners.forEach(listener => listener(this.toasts))
  },
}

export function toast(type: ToastType, title: string, message?: string, duration?: number) {
  toastsContext.add({ type, title, message, duration })
}

export const toastSuccess = (title: string, message?: string, duration?: number) => toast('success', title, message, duration)
export const toastError = (title: string, message?: string, duration?: number) => toast('error', title, message, duration)
export const toastWarning = (title: string, message?: string, duration?: number) => toast('warning', title, message, duration)
export const toastInfo = (title: string, message?: string, duration?: number) => toast('info', title, message, duration)

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const updateToasts = (newToasts: Toast[]) => setToasts(newToasts)
    toastsContext.listeners.add(updateToasts)
    return () => {
      toastsContext.listeners.delete(updateToasts)
    }
  }, [])

  const handleClose = (id: string) => {
    toastsContext.remove(id)
  }

  return (
    <div className="fixed top-20 right-4 z-[60] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastItem {...toast} onClose={handleClose} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  )
}
