import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#050504] border-t border-border">
      <div className="px-8 md:px-16 lg:px-24 pt-16 pb-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-12 pb-12">
          {/* Left: Logo + Tagline */}
          <div className="max-w-xs">
            <Link
              href="/"
              className="font-display text-xl tracking-[0.2em] text-warm-white hover:text-gold transition-colors duration-300"
            >
              LOKI ZORRILLA
            </Link>
            <p className="mt-3 text-sm text-muted font-sans leading-relaxed">
              Folk, rock, and electronic music. Personal and cinematic. Based somewhere between the
              city and the open road.
            </p>
          </div>

          {/* Right: Nav Columns */}
          <div className="flex gap-16 md:gap-24">
            <div>
              <p className="section-label mb-6">Pages</p>
              <nav className="flex flex-col gap-3">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/projects', label: 'Projects' },
                  { href: '/music', label: 'Music' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-secondary hover:text-warm-white transition-colors duration-200 font-sans"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="section-label mb-6">Work</p>
              <nav className="flex flex-col gap-3">
                {[
                  { href: '/services', label: 'Services' },
                  { href: '/journal', label: 'Journal' },
                  { href: '/contact', label: 'Contact' },
                  { href: '/projects/once-was-lou', label: 'Once Was Lou' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-secondary hover:text-warm-white transition-colors duration-200 font-sans"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-muted font-sans tracking-wide">
            &copy; 2025 Loki Zorrilla. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted font-sans tracking-[0.1em]">lokizorrilla.com</span>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-xs text-muted hover:text-secondary transition-colors duration-200 font-sans tracking-[0.1em] uppercase"
              >
                Spotify
              </a>
              <a
                href="#"
                className="text-xs text-muted hover:text-secondary transition-colors duration-200 font-sans tracking-[0.1em] uppercase"
              >
                Bandcamp
              </a>
              <a
                href="#"
                className="text-xs text-muted hover:text-secondary transition-colors duration-200 font-sans tracking-[0.1em] uppercase"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
