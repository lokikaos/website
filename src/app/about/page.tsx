import type { Metadata } from 'next'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Loki Zorrilla — singer-songwriter, producer, and the person behind Once Was Lou.',
}

export default function AboutPage() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <h1 className="font-display font-light text-warm-white leading-none" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
            About
          </h1>
          <p className="font-intimate italic text-secondary text-xl md:text-2xl max-w-xs text-right leading-relaxed">
            &ldquo;Songs as documents of living.&rdquo;
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="divider" />
      </div>

      {/* Bio Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Text 3/5 */}
          <div className="lg:w-3/5">
            <p className="section-label mb-8">Background</p>
            <div className="flex flex-col gap-6 font-sans text-base text-secondary leading-relaxed">
              <p>
                Loki Zorrilla is a singer-songwriter, producer, and multi-instrumentalist who has
                spent the better part of a decade building a body of work that refuses easy
                categorization. Beginning with stripped-back folk recordings made in borrowed rooms,
                Loki&apos;s music has gradually expanded to incorporate rock arrangements, electronic
                textures, and a production philosophy that values atmosphere over polish.
              </p>
              <p>
                Raised on a steady diet of Townes Van Zandt, Nick Drake, and late-night radio, Loki
                found early on that the most interesting songs lived in the tension between
                restraint and eruption — the quiet verse that suddenly opens into something vast.
                That tension has remained a constant throughout three albums and countless
                unrecorded songs still living in notebooks.
              </p>
              <p>
                Under the alias Once Was Lou, a separate creative dimension opens up: electronic
                music designed for cinema, for the space between scenes, for the feeling of a city
                seen from a moving vehicle at night. The Once Was Lou project has found a home in
                sync licensing — placing tracks in film, television, and advertising — and
                represents a different kind of storytelling, one that happens in texture and
                atmosphere rather than words.
              </p>
              <p>
                In addition to personal work, Loki offers professional mixing and mastering services
                for independent artists and labels. The studio practice informs the music directly:
                every production decision made in service of other people&apos;s songs sharpens the ear
                for what&apos;s essential.
              </p>
            </div>
          </div>

          {/* Image 2/5 */}
          <div className="lg:w-2/5">
            <ImagePlaceholder
              aspectRatio="3/4"
              label="[ PORTRAIT ]"
              className="w-full"
            />
            <div className="mt-6 flex flex-col gap-2">
              <p className="font-sans text-xs text-muted">Based in</p>
              <p className="font-sans text-sm text-secondary">Somewhere between cities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="py-20 px-8 md:px-16 lg:px-24 bg-surface">
        <div className="max-w-4xl">
          <p className="section-label mb-8">Artist Statement</p>
          <blockquote className="border-l-4 border-gold pl-8 md:pl-12">
            <p className="font-display italic font-light text-warm-white leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}>
              &ldquo;I make music to understand things that can&apos;t otherwise be understood. Sometimes
              that means a song with words. Sometimes it means an eight-minute drone that gradually
              shifts frequency. Both are honest. Both are necessary.&rdquo;
            </p>
            <footer className="mt-6 font-sans text-sm text-muted">— Loki Zorrilla</footer>
          </blockquote>
        </div>
      </section>

      {/* Background / Details */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <p className="section-label mb-12">Approach & Influences</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-gold mb-6">
              Influences
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-secondary">
              {[
                'Townes Van Zandt',
                'Nick Drake',
                'Arthur Russell',
                'Grouper',
                'Talk Talk',
                'Joni Mitchell',
                'Low',
                'Bill Callahan',
              ].map((name) => (
                <li key={name} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-border-light flex-shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-gold mb-6">
              Instruments
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-sm text-secondary">
              {[
                'Acoustic & Electric Guitar',
                'Piano & Synthesizers',
                'Lap Steel',
                'Bass Guitar',
                'Drum Programming',
                'Field Recording',
                'Tape Manipulation',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-border-light flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs tracking-[0.15em] uppercase text-gold mb-6">
              Approach
            </h3>
            <div className="flex flex-col gap-4 font-sans text-sm text-secondary leading-relaxed">
              <p>
                Songs before sound. The emotional logic of a piece must be established before any
                production decisions are made.
              </p>
              <p>
                Imperfection as signal. A slightly off-kilter phrase, a room that breathes, a take
                that almost falls apart — these carry information that perfect performances erase.
              </p>
              <p>
                Long form over single-driven. Albums are an argument. Each song must justify its
                place in the sequence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
