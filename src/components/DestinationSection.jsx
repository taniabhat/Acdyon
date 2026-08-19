import SearchWidget from './SearchWidget'
import SocialRail from './SocialRail'

function Sparkles() {
  return (
    <div className="flex items-center justify-center gap-3 py-3" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <svg key={i} className="h-3 w-3 text-white/90" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l1.5 7.5L21 9l-7.5 1.5L12 18l-1.5-7.5L3 9l7.5-1.5L12 0z" />
        </svg>
      ))}
    </div>
  )
}

export default function DestinationSection({ destination, isActive, onNavigateNext, onNavigateHome }) {
  const letters = destination.name.split('')

  return (
    <section
      id={destination.id}
      className="destination-section"
      aria-label={`${destination.name} — ${destination.location}`}
    >
      <div
        className="destination-bg"
        style={{ backgroundImage: `url(${destination.image})` }}
        aria-hidden="true"
      />
      <div className="destination-overlay" aria-hidden="true" />

      {/* Top Quick Home Bar */}
      <div className="absolute top-20 left-6 z-20 hidden md:flex items-center gap-3">
        <button
          type="button"
          onClick={onNavigateHome}
          className="rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-semibold text-white/90 backdrop-blur hover:bg-black/60 transition-colors cursor-pointer"
        >
          ← Back to Hero
        </button>
      </div>

      <div className="destination-content">
        <p className="destination-tag">{destination.tagline}</p>

        {/* Professional Single-Line Animated Destination Title */}
        <h2
          className="destination-title flex items-center justify-center whitespace-nowrap flex-nowrap pointer-events-none select-none"
          style={{ fontFamily: destination.fontFamily }}
          aria-hidden="true"
        >
          {letters.map((char, index) => (
            <span
              key={`${destination.id}-${index}-${char}`}
              className={`inline-block transition-all duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isActive
                  ? `letter-reveal-active letter-type-${destination.animationType}`
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 0.05}s`,
              }}
            >
              {char === ' ' ? '\u00A0\u00A0' : char}
            </span>
          ))}
        </h2>

        <div className="destination-foreground">
          <h2 className="sr-only">{destination.name}</h2>
          <p className="destination-location font-display">{destination.location}</p>
          <Sparkles />
        </div>
      </div>

      <SocialRail description={destination.description.slice(0, 40)} />

      <div className="destination-footer">
        <div className="flex items-center gap-4">
          <p className="journey-label hidden sm:flex">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            Find your journey
          </p>

          {onNavigateNext && (
            <button
              type="button"
              onClick={onNavigateNext}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/30 px-3.5 py-1 text-xs font-semibold text-white hover:bg-black/50 transition-colors cursor-pointer"
            >
              <span>Next Destination</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          )}
        </div>

        <div className={`w-full transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <SearchWidget destinationName={destination.location.split(' ')[0]} />
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span className="scroll-hint-line" />
      </div>
    </section>
  )
}
