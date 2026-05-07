'use client'

import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'
import { Container } from './container'
import { Link } from './link'
import { Heading, Subheading } from './text'

export interface MenuItem {
  img: string
  name: string
  price: string
  description: string
}

export function MenuCard({
  name,
  price,
  img,
  bounds,
  scrollX,
  onProductClick,
  ...props
}: {
  img: string
  name: string
  price: string
  bounds: RectReadOnly
  scrollX: MotionValue<number>
  onProductClick: () => void
} & HTMLMotionProps<'div'>) {
  let [element, setElement] = useState<HTMLDivElement | null>(null)
  let computeOpacity = useCallback(() => {
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [element, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={setElement}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-[4/5] w-[75vw] sm:aspect-3/4 sm:w-96 shrink-0 snap-center flex-col justify-end overflow-hidden rounded-3xl group ring-1 ring-white/10"
    >
      <img
        alt={name}
        src={img}
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/80 from-20% via-black/40 to-transparent ring-1 ring-gray-950/10 ring-inset"
      />
      <div className="relative p-8">
        <div className="flex justify-between items-end">
          <div className="flex-1 min-w-0">
            <h4 className="text-2xl font-bold text-white truncate">{name}</h4>
            <div className="mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onProductClick()
                }}
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-black text-black hover:bg-amber-400 transition-all active:scale-95 shadow-lg"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
          <p className="text-xl font-black text-amber-500 whitespace-nowrap ml-4">
            {price}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function MenuCarousel({
  title,
  subheading,
  items,
  id,
  onProductClick,
}: {
  title: string
  subheading: string
  items: MenuItem[]
  id?: string
  onProductClick: (product: MenuItem) => void
}) {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    if (!scrollRef.current || scrollRef.current.children.length === 0) return
    const childWidth = (scrollRef.current.children[0] as HTMLElement).offsetWidth || 300
    setActiveIndex(Math.floor(x / childWidth))
  })

  function scrollTo(index: number) {
    if (!scrollRef.current) return
    let gap = 32
    let width = (scrollRef.current.children[0] as HTMLElement).offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div id={id} className="overflow-hidden py-24 relative first:pt-32 last:pb-32 border-t border-white/5">
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>{subheading}</Subheading>
          <Heading as="h3" className="mt-2 text-balance">
            {title}
          </Heading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-4 sm:gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {items.map((item, index) => (
          <MenuCard
            key={index}
            name={item.name}
            price={item.price}
            img={item.img}
            bounds={bounds}
            scrollX={scrollX}
            onProductClick={() => onProductClick(item)}
          />
        ))}
        <div className="w-2xl shrink-0 sm:w-216" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-between items-center">
          <p className="max-w-sm text-sm/6 text-gray-300">
            Arraste para ver todas as opções desta categoria.
          </p>
          <div className="hidden sm:flex sm:gap-2">
            {items.map((_, index) => (
              <Headless.Button
                key={index}
                onClick={() => scrollTo(index)}
                data-active={activeIndex === index ? true : undefined}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-white/20 transition',
                  'data-active:bg-amber-500 data-hover:bg-white/40',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
