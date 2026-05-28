'use client'

import { useState } from 'react'

/**
 * Web3Forms access key.
 * Get yours at https://web3forms.com — enter your email, paste the key here.
 * Falls back to NEXT_PUBLIC_WEB3FORMS_KEY env var if set on Vercel.
 */
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '0780c24d-2e91-43af-948d-eef274054a9d'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')

  const handle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const fd = new FormData(form)
    fd.append('access_key', ACCESS_KEY)
    fd.append('subject', `Website message from ${fd.get('name')}`)
    fd.append('from_name', 'lokizorrilla.info contact form')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: fd,
      })
      const data = await res.json()
      if (data?.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
        setErrorMsg(data?.message || 'Something went wrong. Try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="text-center space-y-4">
        <p className="font-display text-xl md:text-2xl italic text-terracotta">
          Thanks — I&apos;ll be in touch.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="text-xs tracking-[0.2em] uppercase border-b border-ink pb-0.5 hover:text-terracotta hover:border-terracotta"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handle} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-base"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-base"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-muted mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full bg-transparent border-b border-line focus:border-ink outline-none py-2 text-base resize-none"
        />
      </div>

      {/* honeypot — bots fill this, humans don't */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {status === 'error' && (
        <p className="text-sm text-terracotta text-center">{errorMsg}</p>
      )}

      <div className="pt-2 text-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="text-sm tracking-[0.2em] uppercase border border-ink px-8 py-3 hover:bg-ink hover:text-sand transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </div>
    </form>
  )
}
