import type { Metadata } from 'next'
import MusicPlayer from '@/components/MusicPlayer'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { allTracks, albums } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Music',
  description: 'Music by Loki Zorrilla and Once Was Lou — albums, singles, and complete discography.',
}

export default function MusicPage() {
  return (
    <main className="pt-16">
      {/* Page Header */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <h1
          className="font-display font-light text-warm-white leading-none mb-6"
          style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
        >
          Music
        </h1>
        <p className="font-sans text-base text-secondary max-w-md leading-relaxed">
          All music by Loki Zorrilla and Once Was Lou. Stream on Spotify and Bandcamp, or listen
          here.
        </p>
      </section>

      {/* Music Player */}
      <section className="px-8 md:px-16 lg:px-24 pb-24">
        <MusicPlayer tracks={allTracks} accentColor="gold" />
      </section>

      {/* Discography */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="section-label mb-4">Discography</p>
            <h2 className="font-display text-4xl font-light text-warm-white">Albums</h2>
          </div>

          {/* Filter Tabs (visual only) */}
          <div className="flex items-center gap-1">
            {['All', 'Loki Zorrilla', 'Once Was Lou'].map((filter, i) => (
              <button
                key={filter}
                className={`px-4 py-2 font-sans text-xs tracking-[0.1em] uppercase transition-colors duration-200 ${
                  i === 0
                    ? 'bg-border-light text-warm-white'
                    : 'text-muted hover:text-secondary'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album) => (
            <div key={album.id} className="group cursor-default">
              <div className="relative">
                <ImagePlaceholder
                  aspectRatio="1/1"
                  label={`[ ${album.title.toUpperCase()} ]`}
                  className="w-full"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`font-sans text-xs tracking-[0.15em] uppercase px-2 py-1 ${
                      album.label === 'LZ'
                        ? 'bg-gold/20 text-gold border border-gold/30'
                        : 'bg-lou/20 text-lou border border-lou/30'
                    }`}
                  >
                    {album.label}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl text-warm-white group-hover:text-gold transition-colors duration-200">
                  {album.title}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  <span className="font-sans text-xs text-muted">{album.year}</span>
                  <span className="font-sans text-xs text-muted">{album.trackCount} tracks</span>
                  <span
                    className={`font-sans text-xs ${album.label === 'LZ' ? 'text-gold-dim' : 'text-lou-dim'}`}
                  >
                    {album.artist === 'loki-zorrilla' ? 'Loki Zorrilla' : 'Once Was Lou'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Streaming Links */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <p className="section-label mb-8">Stream & Purchase</p>
        <div className="flex flex-wrap gap-4">
          {[
            { name: 'Spotify', url: '#' },
            { name: 'Apple Music', url: '#' },
            { name: 'Bandcamp', url: '#' },
            { name: 'SoundCloud', url: '#' },
          ].map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              className="btn-outline"
            >
              {platform.name} ↗
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
