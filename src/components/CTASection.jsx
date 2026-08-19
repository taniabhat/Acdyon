import { useScrollReveal } from '../hooks/useScrollReveal'

export default function CTASection() {
  const revealRef = useScrollReveal()

  return (
    <section id="cta" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div
          ref={revealRef}
          className="reveal card-shadow relative overflow-hidden rounded-3xl border border-default bg-elevated px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
              Ready to plan your next trip?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Start with a blank itinerary today. Upgrade when you need team features—no
              pressure, no fake urgency timers.
            </p>

            <form
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@email.com"
                className="flex-1 rounded-xl border border-default bg-muted px-4 py-3.5 text-base text-primary outline-none transition-colors placeholder:text-subtle focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--glow)]"
                autoComplete="email"
              />
              <button
                type="submit"
                className="btn-primary shrink-0 rounded-xl px-6 py-3.5 text-base font-semibold"
              >
                Start Planning Free
              </button>
            </form>

            <p className="mt-4 text-xs text-subtle">
              We&apos;ll only email about your account. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
