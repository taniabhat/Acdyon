import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import TravelIllustration from './TravelIllustration'

const TABS = ['Hotel', 'Flight', 'Packages']

export default function Hero({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Hotel')
  const [location, setLocation] = useState('Eystrahorn, Iceland')
  const [checkIn, setCheckIn] = useState('05 June 2026')
  const [checkOut, setCheckOut] = useState('08 June 2026')
  const [guests, setGuests] = useState('03 Persons')
  const [searching, setSearching] = useState(false)
  const [searchFeedback, setSearchFeedback] = useState('')

  const revealRef = useScrollReveal()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setSearching(true)
    setSearchFeedback('')
    setTimeout(() => {
      setSearching(false)
      setSearchFeedback(`Found 18 ${activeTab.toLowerCase()} options for ${location}!`)
      setTimeout(() => setSearchFeedback(''), 4500)
    }, 700)
  }

  const handleStartPlanning = () => {
    if (onNavigate) {
      onNavigate('showcase')
    } else {
      document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="hero-page-section relative overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14 px-4 sm:px-8 bg-[#FFF5EE] dark:bg-[#0B0F17] text-[var(--text-primary)] transition-colors duration-300 min-h-screen flex flex-col justify-between"
      aria-label="Way.farer Home Hero"
    >
      {/* Faint World Map Watermark Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.08] bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 500'%3E%3Cpath fill='%230F172A' d='M150 120 Q 200 80 300 130 T 450 110 T 600 140 T 800 100 T 950 150 Q 900 250 800 300 T 600 280 T 400 320 T 200 270 Z'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      {/* Floating Toast Notification */}
      {searchFeedback && (
        <div className="fixed top-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-rose-600 px-6 py-2.5 text-xs font-bold text-white shadow-2xl backdrop-blur animate-bounce">
          ✨ {searchFeedback}
        </div>
      )}

      <div className="mx-auto max-w-5xl relative z-10 text-center">
        {/* Main Display Headline (100% High Contrast Text in Light & Dark Mode) */}
        <div ref={revealRef} className="reveal max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-[var(--text-primary)] sm:text-6xl lg:text-[4rem]">
            Discover Your Life, Travel Where You Want
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] font-medium sm:text-lg">
            Way.farer brings flights, stays, and day-by-day plans into a single, calm workspace—so you spend less time tab-hopping and more time exploring.
          </p>
        </div>

        {/* HERO FLOATING SEARCH CARD (Matching Reference Screenshot 2 UI) */}
        <div className="mt-8 mx-auto max-w-4xl">
          <div className="rounded-[2.2rem] bg-[var(--card-bg)] text-[var(--text-primary)] p-4 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-[var(--border-default)] transition-all">
            {/* Top Tabs: Hotel / Flight / Packages */}
            <div className="flex items-center gap-6 border-b border-[var(--border-default)] pb-3 px-2 sm:px-4">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`text-xs font-extrabold uppercase tracking-wider pb-2 border-b-2 transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'border-rose-500 text-rose-500'
                      : 'border-transparent text-[var(--text-muted)] hover:text-rose-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form Fields Row */}
            <form onSubmit={handleSearchSubmit} className="mt-4 flex flex-col lg:flex-row items-center justify-between gap-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full flex-1">
                {/* Field 1: Location */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--bg-muted)] px-4 py-3 border border-transparent hover:border-rose-500/40 transition-colors">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-500/10 text-rose-500">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <label htmlFor="hero-loc" className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                      Location
                    </label>
                    <input
                      id="hero-loc"
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-[var(--text-primary)] outline-none truncate"
                      placeholder="Where are you going?"
                    />
                  </div>
                </div>

                {/* Field 2: Check in */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--bg-muted)] px-4 py-3 border border-transparent hover:border-rose-500/40 transition-colors">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <label htmlFor="hero-in" className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                      Check in
                    </label>
                    <input
                      id="hero-in"
                      type="text"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-[var(--text-primary)] outline-none truncate"
                    />
                  </div>
                </div>

                {/* Field 3: Check out */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--bg-muted)] px-4 py-3 border border-transparent hover:border-rose-500/40 transition-colors">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <label htmlFor="hero-out" className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                      Check out
                    </label>
                    <input
                      id="hero-out"
                      type="text"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-[var(--text-primary)] outline-none truncate"
                    />
                  </div>
                </div>

                {/* Field 4: Guest */}
                <div className="flex items-center gap-3 rounded-2xl bg-[var(--bg-muted)] px-4 py-3 border border-transparent hover:border-rose-500/40 transition-colors">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-500">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <label htmlFor="hero-guests" className="block text-[10px] font-bold uppercase tracking-wider text-[var(--text-subtle)]">
                      Guest
                    </label>
                    <input
                      id="hero-guests"
                      type="text"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent text-xs font-bold text-[var(--text-primary)] outline-none truncate"
                    />
                  </div>
                </div>
              </div>

              {/* Rose Search Button */}
              <button
                type="submit"
                disabled={searching}
                className="flex h-12 w-full lg:w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-500 text-white shadow-lg shadow-rose-500/30 hover:bg-rose-600 transition-all cursor-pointer transform hover:scale-105"
                aria-label="Search trips"
              >
                {searching ? (
                  <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="10" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Action CTA Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleStartPlanning}
            className="rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 text-xs font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
          >
            <span>Start Planning Free</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* BOTTOM ILLUSTRATION: Travel Camper Van, Open Book & Landmarks */}
      <div className="mt-4 relative z-10">
        <TravelIllustration />
      </div>
    </section>
  )
}
