import type { Metadata } from 'next'
import { MusicIcon, YoutubeIcon, SpotifyIcon } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Music — Loki Zorrilla',
  description: 'Music by Loki Zorrilla.',
}

const portfolio = [
  {
    year: '2026 — present',
    title: 'Loki Zorrilla',
    desc: 'production, composition, mixing & mastering, artwork & videography',
  },
  {
    year: '2026',
    title: 'Skywatcher Stories',
    desc: 'vocal processing, mixing',
  },
  {
    year: '2026',
    title: 'Peaking Down',
    desc: 'vocalist',
  },
  {
    year: '2024 — 2025',
    title: 'lokikaos & mrekk',
    desc: 'production, mixing, mastering & vocals',
  },
]

const links = {
  spotify: 'https://open.spotify.com/artist/2uAk8V7VwXZrkdMglBZR3T',
  instagram: 'https://instagram.com/lokizorrilla',
  youtube: 'https://youtube.com/@lokizorrilla',
}

export default function MusicPage() {
  return (
    <div className="fade-in-page">
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-wide italic">
          Music
        </h1>
        <p className="mt-3 font-display text-xl md:text-2xl italic text-ink-soft">
          By Loki Zorrilla
        </p>
      </section>

      {/* featured video + text + socials */}
      <section className="mx-auto max-w-4xl px-6 md:px-10 pb-24">
        <div className="relative w-full aspect-video overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/sxdg0K9YQsg"
            title="Loki Zorrilla — featured music video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <p className="mt-10 text-ink-soft text-base md:text-lg leading-relaxed text-center max-w-2xl mx-auto">
          My acoustic &amp; electronic audio art. A passion I&apos;ve had since
          youth.
        </p>

        <div className="mt-8 flex items-center justify-center gap-7">
          <a
            href={links.spotify}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Loki Zorrilla on Spotify"
            className="text-ink-soft hover:text-terracotta transition-colors"
          >
            <SpotifyIcon className="w-6 h-6" />
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Loki Zorrilla on Instagram"
            className="text-ink-soft hover:text-terracotta transition-colors"
          >
            <MusicIcon className="w-6 h-6" />
          </a>
          <a
            href={links.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Loki Zorrilla on YouTube"
            className="text-ink-soft hover:text-terracotta transition-colors"
          >
            <YoutubeIcon className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* portfolio credits */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <h3 className="font-display text-2xl md:text-3xl tracking-wide italic mb-10">
            Production credits
          </h3>
          <ul className="space-y-7">
            {portfolio.map((p) => (
              <li key={p.year + p.title} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
                <span className="text-muted text-sm tracking-[0.15em] uppercase pt-1">
                  {p.year}
                </span>
                <div>
                  <p className="font-display text-xl md:text-2xl">{p.title}</p>
                  <p className="text-ink-soft text-sm md:text-base mt-1">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
