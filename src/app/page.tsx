import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { homeGrid, EMPTY_PREVIEW_TILES } from '@/lib/photos'

export const metadata: Metadata = {
  title: 'Loki Zorrilla — Photography & Music',
  description: 'Photography and music by Loki Zorrilla. Based in Oregon.',
}

const PERFORMANCE_IMG = '/images/performance.jpg'
// TODO: Add performance.jpg to /public/images/ — live shot of Loki on stage
const HAS_PERFORMANCE_IMG = false

export default function HomePage() {
  const previewPhotos = homeGrid.slice(0, 3)

  return (
    <div className="fade-in-page">
      {/* ───── hero: split panel ───── */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          {/* left: performance image */}
          <div className="relative w-full aspect-[4/5] bg-sand-deep">
            {HAS_PERFORMANCE_IMG ? (
              <Image
                src={PERFORMANCE_IMG}
                alt="Loki performing live"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            ) : (
              /* Clean placeholder — no stock image. Replace when /public/images/performance.jpg exists. */
              <div className="absolute inset-0" aria-hidden />
            )}
          </div>

          {/* right: quote + socials */}
          <div className="md:pl-4">
            <p className="font-display text-3xl md:text-5xl leading-snug tracking-wide">
              I photograph people <span className="italic">and</span> make music.{' '}
              <span className="italic text-terracotta">Based in Oregon.</span>
            </p>

            <ul className="mt-10 space-y-3 text-sm tracking-wide">
              <li>
                <a
                  href="https://instagram.com/capturedby.loki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
                >
                  Instagram — @capturedby.loki (photography)
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lokizorrilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
                >
                  Instagram — @lokizorrilla (music)
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@lokizorrilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
                >
                  YouTube — @lokizorrilla
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───── photography preview ───── */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide italic">
              Photography
            </h2>
            <Link
              href="/photography"
              className="text-sm tracking-[0.2em] uppercase text-ink-soft border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
            >
              See more
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {previewPhotos.length > 0
              ? previewPhotos.map((p, i) => (
                  <div
                    key={p.src + i}
                    className="relative w-full aspect-[4/5] overflow-hidden bg-sand-deep"
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ))
              : Array.from({ length: EMPTY_PREVIEW_TILES }).map((_, i) => (
                  /* TODO: Replace with real photo previews from /public/images/ */
                  <div
                    key={i}
                    className="w-full aspect-[4/5] bg-sand-deep"
                    aria-hidden
                  />
                ))}
          </div>

          <p className="mt-8 text-ink-soft text-base md:text-lg max-w-xl">
            Portraits, people, and places — captured in Bend, Oregon and beyond.
          </p>
        </div>
      </section>

      {/* ───── music preview ───── */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display text-3xl md:text-4xl tracking-wide italic">
              Music
            </h2>
            <Link
              href="/music"
              className="text-sm tracking-[0.2em] uppercase text-ink-soft border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
            >
              See more
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h3 className="font-display text-2xl md:text-3xl tracking-wide">
                Loki Zorrilla
              </h3>
              <p className="mt-3 text-ink-soft max-w-md">
                Ambient, electronic, and acoustic work released under my own name.
              </p>
              <a
                href="https://open.spotify.com/artist/2uAk8V7VwXZrkdMglBZR3T"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm tracking-wide border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
              >
                Spotify ↗
              </a>
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl tracking-wide">
                Once Was Lou
              </h3>
              <p className="mt-3 text-ink-soft max-w-md">
                A second project — looser, warmer, and more pop-leaning.
              </p>
              <a
                href="https://open.spotify.com/artist/64YZqY2yXyhkjewwm8kVbz"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm tracking-wide border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
              >
                Spotify ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
