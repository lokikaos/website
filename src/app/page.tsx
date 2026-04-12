import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Loki Zorrilla',
}

export default function HomePage() {
  return (
    <main className="page">
      <div className="loading-screen">
        <span className="loading-text">Loading</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </div>

      {/* ── top left: name ── */}
      <div className="corner-name">
        <h1 className="site-title">LOKI<br />ZORRILLA</h1>
        <p className="name-sub">Music Technology @ University of Oregon</p>
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
      <p className="copyright">&copy; 2025 Loki Zorrilla</p>

      {/* ── centre: portfolio ── */}
      <div className="portfolio">
        <p className="deco">- - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <p className="portfolio-label">[ portfolio ]</p>
        <p className="deco">- - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <ul className="portfolio-list">
          <li><span className="p-year">2026 – present</span> Loki Zorrilla, Once Was Lou <span className="p-desc">— production, composition, mixing &amp; mastering, artwork &amp; videography</span></li>
          <li><span className="p-year">2026</span> Skywatcher Stories <span className="p-desc">— vocal processing, mixing</span></li>
          <li><span className="p-year">2024 – 2025</span> lokikaos &amp; mrekk <span className="p-desc">— production, mixing, mastering &amp; vocals</span></li>
          <li><span className="p-year">2023</span> dokiww <span className="p-desc">— closing soundtrack for issue 27</span></li>
        </ul>
        <p className="scroll-hint">▼ scroll</p>
        <p className="deco" style={{ marginBottom: 0 }}>- - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <span className="cursor blink">_</span>
      </div>

      {/* ── bottom left: socials ── */}
      <div className="social-block">
        <p className="block-label">[ socials ]</p>
        <p className="block-heading">instagram</p>
        <a className="social-link" href="https://instagram.com/lokizorrilla" target="_blank" rel="noopener noreferrer">&gt; @lokizorrilla</a>
        <a className="social-link lou-orange" href="https://instagram.com/oncewaslou" target="_blank" rel="noopener noreferrer">&gt; @oncewaslou</a>
        <p className="block-heading" style={{ marginTop: '4px' }}>youtube</p>
        <a className="social-link" href="https://youtube.com/@lokizorrilla" target="_blank" rel="noopener noreferrer">&gt; @lokizorrilla</a>
        <a className="social-link lou-orange" href="https://youtube.com/@oncewaslou" target="_blank" rel="noopener noreferrer">&gt; @oncewaslou</a>
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
            <p className="music-artist lou-orange">once was lou</p>
            <audio controls>
              <source src="/audio/once-was-lou.mp3" type="audio/mpeg" />
              <source src="/audio/once-was-lou.wav" type="audio/wav" />
            </audio>
            <span className="spotify-link lou-orange">&gt; spotify — coming soon</span>
          </div>
        </div>
      </div>

      {/* ── bottom right: contact ── */}
      <div className="contact-fixed">
        <p className="block-label">[ contact ]</p>
        <p className="contact-line">
          <a href="mailto:lokizorrillaofficial@gmail.com">lokizorrillaofficial@gmail.com</a>
        </p>
        <p className="contact-sub">mixing &amp; mastering / general inquiries</p>
      </div>

    </main>
  )
}
