import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Music — Loki Zorrilla',
  description: 'Music by Loki Zorrilla and Once Was Lou.',
}

const portfolio = [
  {
    year: '2026 — present',
    title: 'Loki Zorrilla, Once Was Lou',
    desc: 'production, composition, mixing & mastering, artwork & videography',
  },
  {
    year: '2026',
    title: 'Skywatcher Stories',
    desc: 'vocal processing, mixing',
  },
  {
    year: '2024 — 2025',
    title: 'lokikaos & mrekk',
    desc: 'production, mixing, mastering & vocals',
  },
  {
    year: '2023',
    title: 'dokiww',
    desc: 'closing soundtrack for issue 27',
  },
]

type Project = {
  name: string
  blurb: string
  spotify: string
  instagram: string
  youtube: string
  audio: string
  accent?: string
}

const projects: Project[] = [
  {
    name: 'Loki Zorrilla',
    blurb:
      'Ambient, electronic, and acoustic work released under my own name.',
    spotify: 'https://open.spotify.com/artist/2uAk8V7VwXZrkdMglBZR3T',
    instagram: 'https://instagram.com/lokizorrilla',
    youtube: 'https://youtube.com/@lokizorrilla',
    audio: '/audio/loki-zorrilla.mp3',
  },
  {
    name: 'Once Was Lou',
    blurb:
      'A second project — looser, warmer, and more pop-leaning.',
    spotify: 'https://open.spotify.com/artist/64YZqY2yXyhkjewwm8kVbz',
    instagram: 'https://instagram.com/oncewaslou',
    youtube: 'https://youtube.com/@oncewaslou',
    audio: '/audio/once-was-lou.mp3',
    accent: 'terracotta',
  },
]

export default function MusicPage() {
  return (
    <div className="fade-in-page">
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-wide italic">
          Music
        </h1>
        <p className="mt-5 text-muted text-sm md:text-base tracking-wide">
          Two projects, both ongoing.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 md:px-10 pb-24 space-y-20 md:space-y-28">
        {projects.map((p) => (
          <div key={p.name}>
            <h2 className="font-display text-3xl md:text-4xl tracking-wide">
              {p.name}
            </h2>
            <p className="mt-3 text-ink-soft max-w-xl">{p.blurb}</p>

            <audio
              controls
              className="mt-6 w-full max-w-md"
              preload="none"
            >
              <source src={p.audio} type="audio/mpeg" />
            </audio>

            <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2 text-sm tracking-wide">
              <a
                href={p.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
              >
                Spotify ↗
              </a>
              <a
                href={p.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
              >
                Instagram ↗
              </a>
              <a
                href={p.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-transparent hover:border-terracotta hover:text-terracotta pb-0.5"
              >
                YouTube ↗
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* portfolio credits */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-4xl px-6 md:px-10 py-20 md:py-28">
          <h3 className="font-display text-2xl md:text-3xl tracking-wide italic mb-10">
            Production credits
          </h3>
          <ul className="space-y-7">
            {portfolio.map((p) => (
              <li key={p.year} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8">
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
