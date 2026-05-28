import type { Metadata } from 'next'
import Image from 'next/image'
import { InstagramIcon, MusicIcon, YoutubeIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'About — Loki Zorrilla',
  description: 'About Loki Zorrilla — photographer, musician, and producer based in Oregon.',
}

export default function AboutPage() {
  return (
    <div className="fade-in-page">
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* portrait */}
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto md:mx-0 bg-sand-deep overflow-hidden">
            <Image
              src="/images/about.jpeg"
              alt="Loki Zorrilla"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* bio */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl tracking-wide italic leading-tight">
              About
            </h1>

            <div className="mt-8 space-y-5 text-ink-soft text-base md:text-lg leading-relaxed max-w-xl">
              <p>
                I&apos;m Loki Zorrilla — a photographer, musician, and producer
                based in Oregon. I shoot people, places, and moments worth
                keeping.
              </p>
              <p>
                I also make music under my own name and as Once Was Lou,
                covering production, composition, mixing, and mastering. I
                study Music Technology at the University of Oregon.
              </p>
              <p>
                Most days I&apos;m somewhere between Eugene and Bend — chasing
                light, recording something, or both.
              </p>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-muted tracking-wide max-w-md">
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted/70">
                  Based in
                </span>
                <span className="text-ink">Eugene / Bend, OR</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted/70">
                  Studying
                </span>
                <span className="text-ink">Music Technology, UO</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted/70">
                  Shoots
                </span>
                <span className="text-ink">Portraits, lifestyle, editorial</span>
              </li>
              <li>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted/70">
                  Making
                </span>
                <span className="text-ink">Music as Loki Zorrilla & Once Was Lou</span>
              </li>
            </ul>

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
    </div>
  )
}
