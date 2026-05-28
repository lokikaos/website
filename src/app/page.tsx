import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PhotoGrid from '@/components/PhotoGrid'
import { homeHero, homeGrid } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Loki Zorrilla — Photography & Music',
  description: 'Photography and music by Loki Zorrilla. Based in Bend, Oregon.',
}

export default function HomePage() {
  return (
    <div className="fade-in-page">
      {/* hero */}
      <section className="relative w-full h-[78vh] md:h-[88vh] overflow-hidden">
        <Image
          src={homeHero.src}
          alt={homeHero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-sand/40" />
      </section>

      {/* intro */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-32 text-center">
        <h1 className="font-display text-3xl md:text-5xl tracking-wide leading-tight">
          I photograph people <span className="italic text-terracotta">and</span> places.
        </h1>
        <p className="mt-6 text-ink-soft text-base md:text-lg max-w-xl mx-auto">
          Based in Bend, Oregon. Available for portraits, lifestyle, editorial,
          and event work across the Pacific Northwest.
        </p>
      </section>

      {/* grid */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-20">
        <PhotoGrid photos={homeGrid} />
      </section>

      {/* cta */}
      <section className="mx-auto max-w-3xl px-6 md:px-10 pb-28 text-center">
        <p className="font-display text-2xl md:text-3xl italic tracking-wide">
          Have a project in mind?
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block text-sm tracking-[0.2em] uppercase border-b border-ink pb-1 hover:text-terracotta hover:border-terracotta"
        >
          Get in touch
        </Link>
      </section>
    </div>
  )
}
