import type { Metadata } from 'next'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import MusicPlayer from '@/components/MusicPlayer'
import { louTracks } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Once Was Lou',
  description:
    'Once Was Lou — electronic and cinematic music for film, television, and sync licensing.',
}

export default function OnceWasLouPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section
        className="pt-32 pb-24 px-8 md:px-16 lg:px-24"
        style={{ background: '#090c0f' }}
      >
        <p className="section-label text-lou-dim mb-6">
          Electronic · Cinematic · Sync Licensing
        </p>
        <h1
          className="font-intimate font-light text-warm-white leading-none mb-8"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 10rem)' }}
        >
          Once Was Lou
        </h1>
        <p className="font-sans text-base text-secondary leading-relaxed max-w-xl">
          Music made for the spaces between words. Electronic and atmospheric — designed for picture,
          built from memory, texturally precise. A sound that lives in the margins of things.
        </p>
      </section>

      {/* Identity Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-lou-dark/20">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <p className="section-label text-lou-dim mb-8">
              About the Project
            </p>
            <div className="flex flex-col gap-5 font-sans text-base text-secondary leading-relaxed">
              <p>
                Once Was Lou began as an outlet for music that didn&apos;t fit the acoustic framework
                of the Loki Zorrilla work — pieces that were more concerned with texture and
                atmosphere than melody and lyric. Named after no one and everyone, the alias gave
                permission to disappear into sound.
              </p>
              <p>
                The catalog is explicitly cinematic. Each track is designed to serve a scene, to
                expand a moment, to give emotional context to images. The influences are
                wide — ambient music, modern classical, post-rock, early electronic music — but the
                intention is singular: create space for the viewer to feel something that can&apos;t
                be said.
              </p>
              <p>
                Three albums in, Once Was Lou has found a home in sync licensing, with tracks
                placed in independent film, documentary work, and advertising campaigns across
                Europe and North America.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <ImagePlaceholder
              aspectRatio="4/3"
              label="[ ONCE WAS LOU ]"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section
        className="py-20 px-8 md:px-16 lg:px-24"
        style={{ background: '#090c0f' }}
      >
        <p className="section-label text-lou-dim mb-8">
          Selected Tracks
        </p>
        <h2 className="font-intimate text-4xl font-light text-warm-white mb-10">Listen</h2>
        <MusicPlayer tracks={louTracks} accentColor="lou" />
      </section>

      {/* Sync & Licensing Callout */}
      <section className="py-20 px-8 md:px-16 lg:px-24 border-t border-border">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <p className="section-label text-lou-dim mb-6">
              Sync Licensing
            </p>
            <h2 className="font-intimate text-4xl font-light text-warm-white mb-6 leading-tight">
              Music for Moving Image
            </h2>
            <div className="flex flex-col gap-4 font-sans text-sm text-secondary leading-relaxed">
              <p>
                The Once Was Lou catalog is available for sync licensing across all formats —
                non-exclusive licenses for independent projects through to custom compositions for
                advertising briefs.
              </p>
              <p>
                Every track is fully cleared and broadcast ready. Delivery in all required formats.
                Fast turnaround for time-sensitive campaigns.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Film', description: 'Feature and short form' },
                { label: 'Television', description: 'Drama, documentary, commercial' },
                { label: 'Advertising', description: 'Brand campaigns, social' },
                { label: 'Interactive', description: 'Games, installations, web' },
              ].map((category) => (
                <div
                  key={category.label}
                  className="p-5 border border-border hover:border-lou-dim transition-colors duration-300"
                >
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-lou mb-2">
                    {category.label}
                  </p>
                  <p className="font-sans text-xs text-muted">{category.description}</p>
                </div>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-lou text-lou font-sans text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:bg-lou hover:text-base"
            >
              Licensing Inquiries →
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-surface">
        <p className="section-label text-lou-dim mb-8">
          Visual Identity
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImagePlaceholder aspectRatio="4/3" label="[ VISUAL 01 ]" />
          <ImagePlaceholder aspectRatio="4/3" label="[ VISUAL 02 ]" />
          <ImagePlaceholder aspectRatio="4/3" label="[ VISUAL 03 ]" />
        </div>
      </section>
    </main>
  )
}
