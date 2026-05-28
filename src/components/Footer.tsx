import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 mt-10 py-14 px-6 text-center">
      <Link
        href="/"
        className="font-display text-2xl md:text-3xl italic tracking-wide hover:text-terracotta"
      >
        Loki Zorrilla
      </Link>

      <ul className="mt-6 flex justify-center gap-x-8 gap-y-2 flex-wrap text-sm tracking-wide text-ink-soft">
        <li>
          <a
            href="https://instagram.com/capturedby.loki"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta"
          >
            Instagram (photo)
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/lokizorrilla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta"
          >
            Instagram (music)
          </a>
        </li>
        <li>
          <a
            href="https://youtube.com/@lokizorrilla"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-terracotta"
          >
            YouTube
          </a>
        </li>
      </ul>

      <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted">
        © {new Date().getFullYear()} Loki Zorrilla
      </p>
    </footer>
  )
}
