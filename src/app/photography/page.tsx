import type { Metadata } from 'next'
import PhotoGrid from '@/components/PhotoGrid'
import { fullPortfolio } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Photography — Loki Zorrilla',
  description: 'Photography portfolio by Loki Zorrilla.',
}

export default function PhotographyPage() {
  return (
    <div className="fade-in-page">
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-wide italic">
          Photography
        </h1>
        <p className="mt-5 text-muted text-sm md:text-base tracking-wide">
          A selection of recent work
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-8 pb-28">
        <PhotoGrid photos={fullPortfolio} />
      </section>
    </div>
  )
}
