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

      <section className="mx-auto max-w-2xl px-6 md:px-10 pb-32">
        <ContactForm />
      </section>
    </div>
  )
}
