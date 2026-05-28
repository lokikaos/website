import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { homeGrid, EMPTY_PREVIEW_TILES } from '@/lib/photos'
import { InstagramIcon, MusicIcon, YoutubeIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Loki Zorrilla — Photographer & Musician',
  description: 'Photography and music by Loki Zorrilla. Based in Oregon.',
}

export default function HomePage() {
  const previewPhotos = homeGrid.slice(0, 3)

  return (
    <div className="fade-in-page">
      {/* ───── hero: split panel ───── */}
      <section className="mx-auto max-w-7xl px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-center">
          {/* left: intro image */}
          <div className="relative w-full aspect-[4/5] bg-sand-deep">
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
              Photographer &amp; Musician
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
                  aria-label="Photography Instagram (@capturedby.loki)"
                  className="text-ink-soft hover:text-terracotta transition-colors"
                >
                  <InstagramIcon className="w-6 h-6" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/lokizorrilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Music Instagram (@lokizorrilla)"
                  className="text-ink-soft hover:text-terracotta transition-colors"
                >
                  <MusicIcon className="w-6 h-6" />
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
          <div className="flex items-end justify-between mb-3">
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
          <p className="text-ink-soft text-base md:text-lg mb-10">
            The world through my lens — people &amp; places.
          </p>

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
        </div>
      </section>

      {/* ───── music preview ───── */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-28 pb-10 md:pb-14">
          <div className="flex items-end justify-between mb-3">
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

          <div className="mt-10 flex flex-col items-center text-center">
            {/* video thumbnail link */}
            <Link
              href="/music"
              aria-label="Watch on the Music page"
              className="group relative block w-full max-w-3xl aspect-video overflow-hidden"
            >
              <Image
                src="/images/thumbnail.png"
                alt="Music video thumbnail"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-sand/90 text-ink shadow-lg group-hover:bg-sand group-hover:scale-105 transition-all">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-7 h-7 md:w-8 md:h-8 translate-x-0.5"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </span>
              </div>
            </Link>

            {/* blurb under video */}
            <p className="mt-8 text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
              My acoustic &amp; electronic audio art. A passion I&apos;ve had
              since youth.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
