import * as Headless from '@headlessui/react'
import { clsx } from 'clsx'
import { Link } from './link'

const variants = {
  primary: clsx(
    'inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-red-600 shadow-md',
    'text-base font-medium whitespace-nowrap text-white',
    'data-disabled:bg-red-600 data-disabled:opacity-40 data-hover:bg-red-700 transition-colors',
  ),
  secondary: clsx(
    'relative inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)]',
    'rounded-full border border-transparent bg-white/50 dark:bg-white/10 shadow-md ring-1 ring-black/10 dark:ring-white/10',
    'after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_0_2px_1px_#ffffff4d]',
    'text-base font-medium whitespace-nowrap text-gray-950 dark:text-white',
    'data-disabled:opacity-40 data-hover:bg-white/70 dark:data-hover:bg-white/20 transition-colors',
  ),
  outline: clsx(
    'inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)]',
    'rounded-lg border border-transparent shadow-sm ring-1 ring-black/10',
    'text-sm font-medium whitespace-nowrap text-gray-950',
    'data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50',
  ),
  whatsapp: clsx(
    'inline-flex items-center justify-center px-5 py-[calc(--spacing(2)-1px)]',
    'rounded-full border-2 border-green-500 bg-green-500/10 text-green-400 backdrop-blur-sm shadow-md',
    'text-base font-semibold whitespace-nowrap transition-all duration-300 hover:bg-green-500/20 active:scale-95',
  ),
}

type ButtonProps = {
  variant?: keyof typeof variants
} & (
  | React.ComponentPropsWithoutRef<typeof Link>
  | (Headless.ButtonProps & { href?: undefined })
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(className, variants[variant])

  if (typeof props.href === 'undefined') {
    return <Headless.Button {...props} className={className} />
  }

  return <Link {...props} className={className} />
}
