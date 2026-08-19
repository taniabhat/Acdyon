import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const INITIAL_TRIP = {
  title: 'Lisbon & Porto Expedition',
  dates: 'Oct 12 – 18 · 7 days',
  travelers: 2,
  days: [
    {
      label: 'Day 1',
      date: 'Sat, Oct 12',
      items: [
        { id: 101, time: '09:40', title: 'Arrive LIS airport', detail: 'TAP Air Portugal · TP 432', type: 'flight', done: false },
        { id: 102, time: '12:00', title: 'Check in · Alfama Guesthouse', detail: '3 nights · Rua dos Remédios', type: 'stay', done: false },
        { id: 103, time: '15:30', title: 'Walking tour · Alfama district', detail: 'Self-guided · 2.5 hrs', type: 'activity', done: false },
        { id: 104, time: '19:00', title: 'Dinner · Time Out Market', detail: 'Table reservation confirmed', type: 'food', done: false },
      ],
    },
    {
      label: 'Day 2',
      date: 'Sun, Oct 13',
      items: [
        { id: 201, time: '08:00', title: 'Pastéis de Belém bakery', detail: 'Beat the queue · 45 min', type: 'food', done: false },
        { id: 202, time: '10:30', title: 'Belém Tower & Jerónimos', detail: 'Tickets saved in wallet', type: 'activity', done: false },
        { id: 203, time: '14:00', title: 'LX Factory creative hub', detail: 'Artisan shops & espresso', type: 'activity', done: false },
        { id: 204, time: '20:00', title: 'Fado live at Clube de Fado', detail: 'Table reserved for 2', type: 'food', done: false },
      ],
    },
    {
      label: 'Day 3',
      date: 'Mon, Oct 14',
      items: [
        { id: 301, time: '07:15', title: 'Scenic train to Porto', detail: 'CP · Alfa Pendular · 2h 58m', type: 'transit', done: false },
        { id: 302, time: '11:00', title: 'Check in · Porto Riverside Loft', detail: '4 nights · Ribeira waterfront', type: 'stay', done: false },
        { id: 303, time: '13:30', title: 'Port wine cellar tour & tasting', detail: 'Graham\'s Cellars · Booked', type: 'activity', done: false },
        { id: 304, time: '18:00', title: 'Sunset walk · Dom Luís Bridge', detail: 'Golden hour vantage point', type: 'activity', done: false },
      ],
    },
    {
      label: 'Day 4',
      date: 'Tue, Oct 15',
      items: [
        { id: 401, time: '09:00', title: 'Livraria Lello bookstore', detail: 'Priority admission pass', type: 'activity', done: false },
        { id: 402, time: '12:30', title: 'Lunch at Cantinho do Avillez', detail: 'Modern Portuguese cuisine', type: 'food', done: false },
        { id: 403, time: '16:00', title: 'Douro River sunset cruise', detail: 'Traditional rabelo boat · 1h', type: 'activity', done: false },
      ],
    },
  ],
}

const TYPE_COLORS = {
  flight: 'bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30',
  stay: 'bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/30',
  activity: 'bg-teal-500/15 text-teal-600 dark:text-teal-400 border-teal-500/30',
  food: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
  transit: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
}

function TypeDot({ type }) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${TYPE_COLORS[type] || 'bg-slate-500/15 text-slate-400'}`}
    >
      {type}
    </span>
  )
}

export default function ProductShowcase({ onNavigate }) {
  const [tripData, setTripData] = useState(INITIAL_TRIP)
  const [activeDay, setActiveDay] = useState(0)
  const [toastMessage, setToastMessage] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newTime, setNewTime] = useState('15:00')
  const [showAddForm, setShowAddForm] = useState(false)

  const revealRef = useScrollReveal()
  const day = tripData.days[activeDay]

  const triggerToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const toggleItemDone = (itemId) => {
    setTripData((prev) => {
      const nextDays = prev.days.map((d, i) => {
        if (i !== activeDay) return d
        return {
          ...d,
          items: d.items.map((it) => (it.id === itemId ? { ...it, done: !it.done } : it)),
        }
      })
      return { ...prev, days: nextDays }
    })
  }

  const handleAddActivity = (e) => {
    e.preventDefault()
    if (!newTitle.trim()) return

    const newItem = {
      id: Date.now(),
      time: newTime || '12:00',
      title: newTitle,
      detail: 'Custom itinerary item',
      type: 'activity',
      done: false,
    }

    setTripData((prev) => {
      const nextDays = prev.days.map((d, i) => {
        if (i !== activeDay) return d
        return {
          ...d,
          items: [...d.items, newItem].sort((a, b) => a.time.localeCompare(b.time)),
        }
      })
      return { ...prev, days: nextDays }
    })

    setNewTitle('')
    setShowAddForm(false)
    triggerToast(`Added "${newItem.title}" to ${day.label}!`)
  }

  return (
    <section
      id="showcase"
      className="showcase-page-section relative px-5 py-16 sm:px-8 sm:py-24"
      aria-label="Product Showcase"
    >
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div
          role="status"
          className="fixed top-20 left-1/2 z-50 -translate-x-1/2 rounded-full border border-teal-500/30 bg-[var(--bg-elevated)] px-6 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-2xl backdrop-blur-md transition-all animate-bounce"
        >
          ✨ {toastMessage}
        </div>
      )}

      <div className="mx-auto max-w-6xl">
        <div ref={revealRef} className="reveal mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            <span>Interactive Live Itinerary</span>
          </div>

          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            See your trip take shape in real time
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            This is a functional preview of the Way.farer trip workspace. Click items to check them off, switch days, or add custom activities live.
          </p>
        </div>

        {/* Dashboard Showcase Card */}
        <div className="reveal visible grid gap-8 lg:grid-cols-[1fr_320px] lg:items-start">
          <div className="card-shadow overflow-hidden rounded-3xl border border-[var(--border-default)] bg-[var(--bg-elevated)] shadow-2xl">
            {/* Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border-default)] px-6 py-5">
              <div>
                <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
                  {tripData.title}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-[var(--text-muted)]">
                  {tripData.dates}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-xl bg-[var(--bg-muted)] px-3.5 py-2 text-xs font-semibold text-[var(--text-muted)]">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  {tripData.travelers} Travelers
                </div>

                <button
                  type="button"
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="btn-primary rounded-xl px-3.5 py-2 text-xs font-bold transition-all"
                >
                  {showAddForm ? '✕ Close' : '+ Add Item'}
                </button>
              </div>
            </div>

            {/* Inline Add Activity Form */}
            {showAddForm && (
              <form
                onSubmit={handleAddActivity}
                className="flex flex-wrap items-center gap-3 border-b border-[var(--border-default)] bg-[var(--bg-muted)] px-6 py-3.5"
              >
                <input
                  type="text"
                  placeholder="Activity title (e.g. Sunset drinks)..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="flex-1 min-w-[200px] rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3.5 py-2 text-sm text-[var(--text-primary)] outline-none focus:ring-2 focus:ring-teal-500"
                  autoFocus
                />
                <input
                  type="time"
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-2 text-sm text-[var(--text-primary)] outline-none"
                />
                <button
                  type="submit"
                  className="btn-primary rounded-xl px-4 py-2 text-xs font-bold"
                >
                  Save Item
                </button>
              </form>
            )}

            {/* Day Switcher Tabs */}
            <div className="flex gap-2 overflow-x-auto px-6 py-4 border-b border-[var(--border-default)]" role="tablist" aria-label="Trip days">
              {tripData.days.map((d, i) => (
                <button
                  key={d.label}
                  type="button"
                  role="tab"
                  aria-selected={activeDay === i}
                  onClick={() => setActiveDay(i)}
                  className={`itinerary-tab shrink-0 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider border ${
                    activeDay === i
                      ? 'active border-transparent'
                      : 'border-[var(--border-default)] bg-[var(--bg-muted)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* Active Day Header */}
            <div className="flex items-center justify-between px-6 pt-4 pb-2">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-subtle)]">
                {day.date} — {day.items.length} items
              </p>
              <span className="text-[11px] text-[var(--text-subtle)]">Click item to toggle checkmark</span>
            </div>

            {/* Interactive Timeline List */}
            <div className="space-y-1.5 px-6 pb-6" role="tabpanel">
              {day.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggleItemDone(item.id)}
                  className={`itinerary-item flex items-start gap-4 py-3.5 cursor-pointer select-none rounded-xl border border-transparent ${
                    item.done ? 'opacity-50 line-through bg-emerald-500/5' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-all ${
                      item.done
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : 'border-[var(--border-default)] bg-[var(--bg-elevated)] text-transparent hover:border-teal-500'
                    }`}
                  >
                    ✓
                  </div>

                  {/* Time */}
                  <time className="w-14 shrink-0 pt-0.5 font-mono text-xs font-semibold text-[var(--text-subtle)]">
                    {item.time}
                  </time>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className={`font-bold text-[var(--text-primary)] text-sm ${item.done ? 'line-through' : ''}`}>
                        {item.title}
                      </p>
                      <TypeDot type={item.type} />
                    </div>
                    <p className="mt-0.5 text-xs text-[var(--text-muted)]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Tools & Health Status */}
          <aside className="space-y-5">
            {/* Trip Health Check Card */}
            <div className="card-shadow rounded-3xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)]">Trip Health</p>
                <span className="inline-flex rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold text-emerald-500">
                  92% Ready
                </span>
              </div>
              <div className="mt-4 space-y-3.5">
                <HealthRow label="Flights aggregated" status="complete" />
                <HealthRow label="Hotels confirmed" status="complete" />
                <HealthRow label="Day 4 itinerary gap" status="warning" />
              </div>
            </div>

            {/* Interactive Quick Actions */}
            <div className="card-shadow rounded-3xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-subtle)] mb-3">Quick Actions</p>
              <div className="space-y-2.5">
                <button
                  type="button"
                  onClick={() => triggerToast('Transit buffer added (+30m between activities)')}
                  className="w-full text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-muted)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-teal-500 transition-colors flex items-center gap-2"
                >
                  <span>⏱</span> Add transit buffer
                </button>
                <button
                  type="button"
                  onClick={() => triggerToast('Read-only link copied to clipboard!')}
                  className="w-full text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-muted)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-teal-500 transition-colors flex items-center gap-2"
                >
                  <span>🔗</span> Share trip link
                </button>
                <button
                  type="button"
                  onClick={() => triggerToast('Calendar file exported (wayfarer-lisbon.ics)')}
                  className="w-full text-left rounded-xl border border-[var(--border-default)] bg-[var(--bg-muted)] px-3.5 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-teal-500 transition-colors flex items-center gap-2"
                >
                  <span>📅</span> Export to iCal / Google
                </button>
              </div>
            </div>

            {/* Jump to Iceland Page Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate('iceland')
                  } else {
                    document.getElementById('iceland')?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary w-full rounded-2xl py-3.5 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <span>Continue to Iceland ↓</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

function HealthRow({ label, status }) {
  const isComplete = status === 'complete'
  return (
    <div className="flex items-center justify-between gap-2 text-xs">
      <span className="font-medium text-[var(--text-muted)]">{label}</span>
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold ${
          isComplete
            ? 'bg-emerald-500/20 text-emerald-500'
            : 'bg-amber-500/20 text-amber-500'
        }`}
      >
        {isComplete ? '✓' : '!'}
      </span>
    </div>
  )
}
