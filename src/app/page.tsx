import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Loki Zorrilla',
}

export default function HomePage() {
  return (
    <main className="page">

      {/* ── top left: name ── */}
      <div className="corner-name">
        <h1 className="site-title">LOKI<br />ZORRILLA</h1>
      </div>

      {/* ── top middle: image ── */}
      <div className="corner-logo">
        <Image
          src="/images/PolyArt.png"
          alt="Loki Zorrilla"
          width={110}
          height={110}
          className="site-logo"
          priority
        />
      </div>

      {/* ── top right: copyright ── */}
      <p className="copyright">&copy; 2025 loki zorrilla</p>

      {/* ── centre: portfolio ── */}
      <div className="portfolio">
        <p className="deco">- - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <p className="portfolio-label">[ portfolio ]</p>
        <p className="deco" style={{ marginBottom: 0 }}>- - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <span className="cursor blink">_</span>
      </div>

      {/* ── bottom left: socials ── */}
      <div className="social-block">
        <p className="block-label">[ socials ]</p>
        <p className="block-heading">instagram</p>
        <a className="social-link" href="https://instagram.com/lokizorrilla" target="_blank" rel="noopener noreferrer">&gt; loki zorrilla</a>
        <a className="social-link" href="https://instagram.com/oncewaslou" target="_blank" rel="noopener noreferrer">&gt; once was lou</a>
        <p className="block-heading" style={{ marginTop: '4px' }}>youtube</p>
        <a className="social-link" href="https://youtube.com/@lokizorrilla" target="_blank" rel="noopener noreferrer">&gt; loki zorrilla</a>
        <a className="social-link" href="https://youtube.com/@oncewaslou" target="_blank" rel="noopener noreferrer">&gt; once was lou</a>
      </div>

      {/* ── bottom middle: music ── */}
      <div className="music-block">
        <p className="block-label">[ music ]</p>
        <div className="music-row">
          <div className="music-col">
            <p className="music-artist">loki zorrilla</p>
            <audio controls>
              <source src="/audio/loki-zorrilla.mp3" type="audio/mpeg" />
              <source src="/audio/loki-zorrilla.wav" type="audio/wav" />
            </audio>
            <a className="spotify-link" href="https://open.spotify.com/artist/2uAk8V7VwXZrkdMglBZR3T" target="_blank" rel="noopener noreferrer">
              &gt; spotify
            </a>
          </div>
          <div className="music-col">
            <p className="music-artist">once was lou</p>
            <audio controls>
              <source src="/audio/once-was-lou.mp3" type="audio/mpeg" />
              <source src="/audio/once-was-lou.wav" type="audio/wav" />
            </audio>
            <span className="spotify-link" style={{ color: '#0a5c0a' }}>&gt; spotify — coming soon</span>
          </div>
        </div>
      </div>

      {/* ── bottom right: contact ── */}
      <div className="contact-fixed">
        <p className="block-label">[ contact ]</p>
        <p className="contact-line">
          <a href="mailto:lokizorrillaofficial@gmail.com">lokizorrillaofficial@gmail.com</a>
        </p>
        <p className="contact-sub">mixing &amp; mastering / sync licensing / general business</p>
      </div>

    </main>
  )
}
