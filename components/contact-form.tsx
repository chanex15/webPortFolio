'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl glass p-8 md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" />
      </div>
      <div className="mt-5">
        <Field label="Subject" name="subject" placeholder="What's this about?" />
      </div>
      <div className="mt-5">
        <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full resize-none rounded-xl border border-input bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/30"
        />
      </div>
      <button
        type="submit"
        disabled={sent}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-aurora px-7 py-3.5 font-mono text-[0.62rem] uppercase tracking-[0.3em] text-primary-foreground transition-all hover:-translate-y-0.5 glow-teal disabled:opacity-70"
      >
        {sent ? (
          <>
            <Check size={15} />
            Message Sent
          </>
        ) : (
          <>
            Send Message
            <Send size={14} className="transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-white/[0.02] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-aurora/50 focus:ring-1 focus:ring-aurora/30"
      />
    </div>
  )
}
