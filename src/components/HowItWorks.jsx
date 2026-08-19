import { useScrollReveal } from '../hooks/useScrollReveal'

const STEPS = [
  {
    step: '01',
    title: 'Sketch the route',
    description: 'Pick dates and destinations. Way.farer lays out a day-by-day canvas automatically.',
  },
  {
    step: '02',
    title: 'Fill in the details',
    description: 'Add flights, stays, and activities. Attach confirmations or enter them in seconds.',
  },
  {
    step: '03',
    title: 'Travel with clarity',
    description: 'Share, export, or open your timeline on the go. Everything stays in sync.',
  },
]

export default function HowItWorks() {
  const revealRef = useScrollReveal()

  return (
    <section id="how-it-works" className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div ref={revealRef} className="reveal mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Three steps to a trip you trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            From rough idea to boarding pass—without rebuilding your plan in three different apps.
          </p>
        </div>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-6">
          {STEPS.map((item) => (
            <li key={item.step} className="relative">
              <div>
                <span className="font-display text-5xl font-bold text-[var(--accent)]/20">{item.step}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
