import type { Metadata } from 'next'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import MusicPlayer from '@/components/MusicPlayer'
import { lokiTracks } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Loki Zorrilla',
  description:
    'Loki Zorrilla — folk and rock singer-songwriter. Three albums of honest songs about roads, distances, and the space between.',
}

export default function LokiZorrillaPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="pt-32 pb-24 px-8 md:px-16 lg:px-24 bg-surface-2">
        <p className="section-label text-gold-dim mb-6">Folk · Rock · Singer-Songwriter</p>
        <h1
          className="font-display font-light text-warm-white leading-none mb-8"
          style={{ fontSize: 'clamp(4rem, 12vw, 11rem)' }}
        >
          Loki Zorrilla
        </h1>
        <p className="font-sans text-base text-secondary leading-relaxed max-w-lg">
          Songs built from the inside out. Folk arrangements, rock electricity, and the kind of
          honesty that requires distance to achieve.
        </p>
      </section>

      {/* Identity Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <p className="section-label mb-8">The Work</p>
            <div className="flex flex-col gap-5 font-sans text-base text-secondary leading-relaxed">
              <p>
                The Loki Zorrilla catalog began as a collection of notebooks — observations, half-remembered
                conversations, geographical impressions. Songs came later, as a way of giving those
                notes a form that could be shared.
              </p>
              <p>
                Three albums in, the approach has remained consistent: start with acoustic guitar
                and voice, add only what the song demands. Sometimes that means leaving everything
                out. Sometimes a full band is the only honest answer.
              </p>
              <p>
                The songs tend toward specificity. A particular highway, a particular time of year,
                the way light falls in a certain kind of room. The specific, it turns out, is the
                most reliable path to the universal.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <ImagePlaceholder
              aspectRatio="4/3"
              label="[ ARTIST PHOTO ]"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-surface">
        <p className="section-label mb-8">Selected Tracks</p>
        <h2 className="font-display text-4xl font-light text-warm-white mb-10">Listen</h2>
        <MusicPlayer tracks={lokiTracks} accentColor="gold" />
      </section>

      {/* Gallery */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <p className="section-label mb-8">Gallery</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ImagePlaceholder aspectRatio="4/3" label="[ LIVE ]" />
          <ImagePlaceholder aspectRatio="4/3" label="[ STUDIO ]" />
          <ImagePlaceholder aspectRatio="4/3" label="[ PRESS ]" />
        </div>
      </section>

      {/* Selected Works */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-surface">
        <p className="section-label mb-12">Selected Works</p>

        <div className="flex flex-col gap-0">
          {[
            {
              number: '01',
              title: 'Before the Rain',
              type: 'Album',
              year: '2024',
              tracks: '10 tracks',
            },
            {
              number: '02',
              title: 'Fault Lines',
              type: 'Album',
              year: '2023',
              tracks: '9 tracks',
            },
            {
              number: '03',
              title: 'Open Country',
              type: 'Album',
              year: '2022',
              tracks: '11 tracks',
            },
            {
              number: '04',
              title: 'Amber & Dust',
              type: 'Single',
              year: '2024',
              tracks: '1 track',
            },
            {
              number: '05',
              title: 'Highway South',
              type: 'Single',
              year: '2023',
              tracks: '1 track',
            },
          ].map((work) => (
            <div
              key={work.number}
              className="flex items-center gap-6 py-5 border-b border-border last:border-b-0 group cursor-default"
            >
              <span className="font-sans text-xs text-muted tabular-nums w-8">{work.number}</span>
              <div className="flex-1">
                <p className="font-display text-xl text-warm-white group-hover:text-gold transition-colors duration-200">
                  {work.title}
                </p>
              </div>
              <span className="font-sans text-xs text-muted hidden md:block">{work.type}</span>
              <span className="font-sans text-xs text-muted hidden md:block">{work.tracks}</span>
              <span className="font-sans text-xs text-muted tabular-nums">{work.year}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
