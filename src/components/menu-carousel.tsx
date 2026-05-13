'use client'

import { useEffect } from 'react'
import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import { StarIcon } from './icons/social-icons'
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
      onClick={onProductClick}
      className="relative flex w-36 sm:w-48 shrink-0 snap-center flex-col overflow-hidden rounded-2xl group ring-1 ring-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-white/5">
        <img
          alt={name}
          src={img}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-2 left-2 bg-emerald-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-md">
          -10%
        </div>
        <div className="absolute bottom-2 right-2 bg-amber-500 text-black p-1 rounded-full shadow-md">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4"/></svg>
        </div>
      </div>
      <div className="p-3 flex flex-col gap-1">
        <p className="text-sm font-bold text-emerald-400">{price}</p>
        <h4 className="text-xs font-bold text-white truncate">{name}</h4>
        <div className="flex items-center gap-1 text-[10px] text-gray-400 mt-1">
          <StarIcon className="w-3 h-3 text-amber-400" />
          <span>5.0 • 30 Min</span>
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
  let [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    if (scrollRef.current) {
      let gap = 32
      let width = (scrollRef.current.children[0] as HTMLElement).offsetWidth
      scrollRef.current.scrollTo({ left: (width + gap) * 1, behavior: 'auto' })
    }
  }, [])

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
      <Container className="mt-8 hidden sm:block">
        <div className="flex justify-end items-center">
          <div className="flex gap-2">
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
