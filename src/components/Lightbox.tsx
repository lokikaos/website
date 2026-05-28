'use client'

import { useEffect } from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ src, alt, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') onPrev()
      else if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center p-4 md:p-12 animate-fadeIn"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-6 text-sand text-2xl hover:text-terracotta"
      >
        ×
      </button>

      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 md:left-8 text-sand text-3xl hover:text-terracotta px-3"
      >
        ‹
      </button>

      <div
        className="relative w-full h-full max-w-6xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          priority
        />
      </div>

      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 md:right-8 text-sand text-3xl hover:text-terracotta px-3"
      >
        ›
      </button>
    </div>
  )
}
