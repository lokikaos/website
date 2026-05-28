import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Loki Zorrilla',
  description: 'Get in touch with Loki Zorrilla — photography and music.',
}

export default function ContactPage() {
  return (
    <div className="fade-in-page">
      <section className="mx-auto max-w-3xl px-6 md:px-10 py-20 md:py-28 text-center">
        <h1 className="font-display text-4xl md:text-6xl tracking-wide italic">
          Contact
        </h1>
        <p className="mt-5 text-muted text-sm md:text-base tracking-wide">
          Reach out for shoots, music inquiries, or anything in between.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 md:px-10 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
            Photography
          </p>
          <a
            href="mailto:photos@lokizorrilla.info"
            className="font-display text-lg md:text-xl border-b border-transparent hover:border-terracotta hover:text-terracotta"
          >
            photos@lokizorrilla.info
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
            Music & general
          </p>
          <a
            href="mailto:lokizorrillaofficial@gmail.com"
            className="font-display text-lg md:text-xl border-b border-transparent hover:border-terracotta hover:text-terracotta break-all"
          >
            lokizorrillaofficial@gmail.com
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">
            Tips & support
          </p>
          <a
            href="https://venmo.com/lokikaos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-lg md:text-xl border-b border-transparent hover:border-terracotta hover:text-terracotta"
          >
            @lokikaos
          </a>
          <p className="mt-1 text-sm text-muted italic">Pay what you feel.</p>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 md:px-10 pb-32">
        <div className="border-t border-line pt-14">
          <h2 className="font-display text-2xl md:text-3xl tracking-wide italic text-center mb-10">
            Or send a message
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
