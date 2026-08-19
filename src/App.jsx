import { useCallback, useState } from 'react'
import { DESTINATIONS } from './data/destinations'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import SideNav from './components/SideNav'
import DestinationSection from './components/DestinationSection'
import ScrollIndicator from './components/ScrollIndicator'
import { useActiveSection } from './hooks/useActiveSection'
import { useKonamiCode } from './hooks/useKonamiCode'
import { useTheme } from './hooks/useTheme'

const ALL_SECTIONS = [
  { id: 'home', name: 'Home' },
  { id: 'showcase', name: 'Showcase' },
  ...DESTINATIONS.map((d) => ({ id: d.id, name: d.name })),
]

const SECTION_IDS = ALL_SECTIONS.map((s) => s.id)

export default function App() {
  const { activeId, scrollTo } = useActiveSection(SECTION_IDS)
  const { theme, toggleTheme } = useTheme()
  const [adventureMode, setAdventureMode] = useState(false)
  const [logoHoverCount, setLogoHoverCount] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const activateAdventure = useCallback(() => {
    setAdventureMode(true)
    setShowHint(true)
    setTimeout(() => setShowHint(false), 5000)
  }, [])

  useKonamiCode(activateAdventure)

  const handleLogoHover = () => {
    setLogoHoverCount((c) => {
      const next = c + 1
      if (next >= 7 && !adventureMode) activateAdventure()
      return next
    })
  }

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>

      {/* Easter Egg Floating Toast Notification */}
      {showHint && (
        <div
          className="fixed bottom-28 left-1/2 z-50 -translate-x-1/2 rounded-full border border-amber-400/40 bg-[var(--bg-elevated)] px-6 py-3 text-sm font-bold text-[var(--text-primary)] shadow-2xl backdrop-blur animate-bounce flex items-center gap-2"
          role="status"
        >
          <span className="text-amber-400 text-lg">✦</span>
          <span>Adventure Mode Unlocked! Secret Compass Activated.</span>
        </div>
      )}

      <Header
        adventureMode={adventureMode}
        onLogoHover={handleLogoHover}
        theme={theme}
        toggleTheme={toggleTheme}
        onSelectHome={scrollTo}
      />

      <SideNav activeId={activeId} onSelect={scrollTo} />
      <ScrollIndicator sections={ALL_SECTIONS} activeId={activeId} onSelect={scrollTo} />

      <main className="snap-container" id="main">
        {/* Page 1: Dedicated Hero Section Page */}
        <Hero onNavigate={scrollTo} />

        {/* Page 2: Product Showcase Page ("Show, Don't Tell") */}
        <ProductShowcase onNavigate={scrollTo} />

        {/* Destination Snap Pages (Iceland, Norway, Patagonia, New Zealand, Faroe Islands) */}
        {DESTINATIONS.map((destination, index) => {
          const nextIndex = index + 1
          const nextId = nextIndex < DESTINATIONS.length ? DESTINATIONS[nextIndex].id : 'home'
          return (
            <DestinationSection
              key={destination.id}
              destination={destination}
              isActive={activeId === destination.id}
              onNavigateNext={() => scrollTo(nextId)}
              onNavigateHome={() => scrollTo('home')}
            />
          )
        })}
      </main>
    </>
  )
}
