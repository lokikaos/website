import type { Metadata } from 'next'
import Link from 'next/link'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Two musical identities: Loki Zorrilla (folk & rock) and Once Was Lou (electronic & cinematic).',
}

export default function ProjectsPage() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <h1
          className="font-display font-light text-warm-white leading-none mb-8"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          Projects
        </h1>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-sans text-base text-secondary leading-relaxed max-w-lg">
            Two distinct musical identities, each with its own voice, visual language, and purpose.
            Different approaches to the same fundamental question: how do you tell the truth in sound?
          </p>
          <p className="section-label">Two Identities</p>
        </div>
      </section>

      {/* Loki Zorrilla Portal Card */}
      <section className="px-8 md:px-16 lg:px-24 pb-4">
        <div className="border border-border hover:border-gold-dim transition-colors duration-500 group">
          <ImagePlaceholder
            aspectRatio="16/6"
            label="[ LOKI ZORRILLA ]"
            className="w-full"
          />
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="section-label text-gold-dim mb-4">Folk · Rock · Singer-Songwriter</p>
              <h2 className="font-display text-5xl md:text-6xl font-light text-warm-white leading-none mb-4">
                Loki Zorrilla
              </h2>
              <p className="font-sans text-sm text-secondary leading-relaxed max-w-md">
                Three albums of honest folk and rock songwriting. Songs about roads, distances,
                the slow accumulation of experience. Music made for the long drive home.
              </p>
            </div>
            <Link
              href="/projects/loki-zorrilla"
              className="btn-primary flex-shrink-0"
            >
              Explore →
            </Link>
          </div>
        </div>
      </section>

      {/* Once Was Lou Portal Card */}
      <section className="px-8 md:px-16 lg:px-24 pt-8 pb-24">
        <div className="border border-border hover:border-lou-dim transition-colors duration-500 group bg-lou-dark/30">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-end">
              <p className="section-label text-lou-dim mb-4">
                Electronic · Cinematic · Sync
              </p>
              <h2 className="font-intimate text-5xl md:text-6xl font-light text-warm-white leading-none mb-4">
                Once Was Lou
              </h2>
              <p className="font-sans text-sm text-secondary leading-relaxed max-w-md mb-8">
                Electronic and cinematic music for picture. Atmospheric, textural, designed to serve
                the image. Three albums and a growing sync catalog spanning film, television, and
                advertising.
              </p>
              <Link
                href="/projects/once-was-lou"
                className="w-fit inline-flex items-center gap-2 px-6 py-3 border border-lou text-lou font-sans text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:bg-lou hover:text-base"
              >
                Explore →
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-full" style={{ minHeight: '300px' }}>
                <ImagePlaceholder
                  aspectRatio="4/3"
                  label="[ ONCE WAS LOU ]"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
