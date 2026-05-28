import Link from 'next/link'
import { InstagramIcon, MusicIcon, YoutubeIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 mt-10 py-14 px-6 text-center">
      <Link
        href="/"
        className="font-display text-2xl md:text-3xl italic tracking-wide hover:text-terracotta"
      >
        Loki Zorrilla
      </Link>

      <ul className="mt-6 flex justify-center items-center gap-7">
        <li>
          <a
            href="https://instagram.com/capturedby.loki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Photography Instagram (@capturedby.loki)"
            className="text-ink-soft hover:text-terracotta transition-colors"
          >
            <InstagramIcon className="w-5 h-5" />
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
            <MusicIcon className="w-5 h-5" />
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
            <YoutubeIcon className="w-5 h-5" />
          </a>
        </li>
      </ul>

      <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted">
        © {new Date().getFullYear()} Loki Zorrilla
      </p>
    </footer>
  )
}
