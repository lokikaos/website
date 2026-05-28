'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

export type Photo = {
  src: string
  alt: string
  width: number
  height: number
}

type Props = {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: Props) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // scroll reveal
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [photos])

  const current = activeIdx !== null ? photos[activeIdx] : null

  if (photos.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* TODO: Add real photos to /public/images/ and populate src/lib/photos.ts */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-full aspect-[4/5] bg-sand-deep"
            aria-hidden
          />
        ))}
      </div>
    )
  }

  return (
    <>
      <div
        ref={containerRef}
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6"
      >
        {photos.map((p, i) => (
          <button
            key={p.src + i}
            onClick={() => setActiveIdx(i)}
            className="reveal block w-full mb-4 md:mb-6 break-inside-avoid overflow-hidden group cursor-pointer"
            style={{ transitionDelay: `${(i % 6) * 80}ms` }}
          >
            <div className="relative w-full" style={{ aspectRatio: `${p.width} / ${p.height}` }}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
          </button>
        ))}
      </div>

      {current && activeIdx !== null && (
        <Lightbox
          src={current.src}
          alt={current.alt}
          onClose={() => setActiveIdx(null)}
          onPrev={() =>
            setActiveIdx((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
          }
          onNext={() => setActiveIdx((i) => (i === null ? null : (i + 1) % photos.length))}
        />
      )}
    </>
  )
}
