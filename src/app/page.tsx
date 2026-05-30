import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { homeGrid, EMPTY_PREVIEW_TILES } from '@/lib/photos'
import { InstagramIcon, YoutubeIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Loki Zorrilla — Photographer',
  description: 'Photography by Loki Zorrilla. Based in Oregon.',
}

export default function HomePage() {
  const previewPhotos = homeGrid.slice(0, 3)

  return (
    <div className="fade-in-page">
      {/* ───── hero: split panel ───── */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          {/* left: intro image */}
          <div className="relative w-full aspect-[4/5] bg-sand-deep photo-frame">
            <Image
              src="/images/intro.jpeg"
              alt="Loki Zorrilla"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          {/* right: name + role + socials */}
          <div className="md:pl-4">
            <h1 className="font-display text-4xl md:text-6xl tracking-wide leading-tight">
              Loki Zorrilla
            </h1>
            <p className="mt-4 font-display text-2xl md:text-3xl italic text-ink-soft">
              Photographer
            </p>
            <p className="mt-2 text-sm md:text-base tracking-[0.2em] uppercase text-terracotta">
              Based in Oregon
            </p>

            <ul className="mt-10 flex items-center gap-6">
              <li>
                <a
                  href="https://instagram.com/capturedby.loki"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram (@capturedby.loki)"
                  className="text-ink-soft hover:text-terracotta transition-colors"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@lokizorrilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-ink-soft hover:text-terracotta transition-colors"
                >
                  <YoutubeIcon className="w-6 h-6" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ───── photography preview ───── */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-4xl tracking-wide italic text-center mb-10">
            Photography
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {previewPhotos.length > 0
              ? previewPhotos.map((p, i) => (
                  <div
                    key={p.src + i}
                    className="relative w-full aspect-[4/5] overflow-hidden bg-sand-deep photo-frame"
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
                    className="w-full aspect-[4/5] bg-sand-deep photo-frame"
                    aria-hidden
                  />
                ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/photography"
              className="text-sm tracking-[0.2em] uppercase text-ink-soft border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
            >
              See more
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
