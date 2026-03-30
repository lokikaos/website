import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Mixing & mastering for independent artists and sync licensing through Once Was Lou.',
}

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Page Hero */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div>
            <p className="section-label mb-6">Professional Services</p>
            <h1
              className="font-display font-light text-warm-white leading-none"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
            >
              Services
            </h1>
          </div>
          <p className="font-intimate italic text-secondary text-lg md:text-xl max-w-sm leading-relaxed lg:text-right">
            Every project deserves a mix that translates. Every sync placement requires music that
            travels. Both start with the same commitment: serve the work.
          </p>
        </div>
      </section>

      <div className="px-8 md:px-16 lg:px-24">
        <div className="divider" />
      </div>

      {/* Mixing & Mastering Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/5">
            <p className="section-label text-gold-dim mb-6">01 — Studio Services</p>
            <h2 className="font-display text-5xl font-light text-warm-white mb-6 leading-tight">
              Mixing & Mastering
            </h2>
            <p className="font-sans text-base text-secondary leading-relaxed mb-8">
              Professional mixing and mastering for independent artists, bands, and labels. From
              intimate acoustic recordings to complex electronic productions — every project gets
              the time and attention it requires.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Turnaround: 5–10 business days depending on project scope. Rush rates available.
              Remote-only.
            </p>
          </div>

          <div className="lg:flex-1">
            {/* Process Steps */}
            <div className="mb-12">
              <p className="section-label mb-8">The Process</p>
              <div className="flex flex-col gap-0">
                {[
                  {
                    number: '01',
                    title: 'Send Your Stems',
                    description:
                      'Submit organized stems via WeTransfer or Google Drive. I\'ll review everything and confirm receipt within 24 hours.',
                  },
                  {
                    number: '02',
                    title: 'Consultation',
                    description:
                      'A brief call or written exchange to align on reference tracks, target sound, and specific concerns you have about the project.',
                  },
                  {
                    number: '03',
                    title: 'Delivery & Revisions',
                    description:
                      'First mix delivered for review. Two rounds of revisions included in all packages. Final master delivered in all required formats.',
                  },
                ].map((step, idx) => (
                  <div
                    key={step.number}
                    className={`flex gap-8 py-8 ${idx < 2 ? 'border-b border-border' : ''}`}
                  >
                    <span className="font-display text-4xl font-light text-gold-dim flex-shrink-0 leading-none mt-1">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-sans text-sm font-medium text-warm-white mb-2 tracking-wide">
                        {step.title}
                      </h3>
                      <p className="font-sans text-sm text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rates */}
            <div>
              <p className="section-label mb-8">Rates</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    tier: 'Basic Mix',
                    features: ['Up to 24 stems', 'Single mix revision', 'Stereo delivery'],
                    price: 'Contact for rates',
                  },
                  {
                    tier: 'Full Mix + Master',
                    features: [
                      'Unlimited stems',
                      'Two mix revisions',
                      'Mastering included',
                      'All format delivery',
                    ],
                    price: 'Contact for rates',
                    featured: true,
                  },
                  {
                    tier: 'Stem Mastering',
                    features: ['Up to 8 stems', 'Mastering only', 'Streaming + vinyl masters'],
                    price: 'Contact for rates',
                  },
                ].map((tier) => (
                  <div
                    key={tier.tier}
                    className={`p-6 border ${tier.featured ? 'border-gold-dim bg-surface' : 'border-border'}`}
                  >
                    <h3
                      className={`font-sans text-xs tracking-[0.15em] uppercase mb-4 ${
                        tier.featured ? 'text-gold' : 'text-secondary'
                      }`}
                    >
                      {tier.tier}
                    </h3>
                    <ul className="flex flex-col gap-2 mb-6">
                      {tier.features.map((f) => (
                        <li key={f} className="font-sans text-xs text-muted flex items-center gap-2">
                          <span className="w-3 h-px bg-border-light flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className={`font-sans text-xs ${tier.featured ? 'text-gold' : 'text-muted'}`}>
                      {tier.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sync Licensing Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-lou-dark/30 border-t border-border">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-2/5">
            <p className="section-label text-lou-dim mb-6">
              02 — Sync & Licensing
            </p>
            <h2 className="font-intimate text-5xl font-light text-warm-white mb-6 leading-tight">
              Sync Licensing
            </h2>
            <p className="font-sans text-base text-secondary leading-relaxed mb-6">
              Through the Once Was Lou project, I license original music for film, television,
              advertising, and interactive media. Cinematic, atmospheric, and designed to serve
              the image.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed">
              All tracks fully cleared. Non-exclusive licenses available. Custom compositions
              considered for specific briefs.
            </p>
          </div>

          <div className="lg:flex-1">
            {/* Categories */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { label: 'Film', description: 'Feature, short form, documentary' },
                { label: 'Television', description: 'Drama, reality, news, advertising' },
                { label: 'Advertising', description: 'Brand campaigns, online video' },
                { label: 'Games', description: 'Interactive, installation, XR' },
              ].map((category) => (
                <div
                  key={category.label}
                  className="p-6 border border-border hover:border-lou-dim transition-colors duration-300"
                >
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-lou mb-2">
                    {category.label}
                  </p>
                  <p className="font-sans text-xs text-muted leading-relaxed">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-lou text-lou font-sans text-sm tracking-[0.1em] uppercase font-medium transition-all duration-300 hover:bg-lou hover:text-base"
            >
              Licensing Inquiries →
            </Link>
          </div>
        </div>
      </section>

      {/* Full-width CTA */}
      <section className="py-24 px-8 md:px-16 lg:px-24 bg-surface text-center">
        <p className="section-label mb-6 text-center">Ready to Start?</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-warm-white mb-8">
          Let&apos;s Work Together
        </h2>
        <p className="font-sans text-sm text-secondary mb-10 max-w-md mx-auto leading-relaxed">
          Whether you&apos;re looking for a mix that translates or music for your next project —
          I&apos;d like to hear what you&apos;re working on.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </main>
  )
}
