import { useState } from 'react'

const TABS = ['Flight', 'Hotel', 'Rental']

function FieldIcon({ type }) {
  const icons = {
    location: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    ),
    type: (
      <path d="M14 6l-3.75 5 2.75 3.5L9.5 19H4v-5.5l3.75-3.75L14 6zM5.5 17.5L9 14l2 2.5L9.5 17.5H5.5z" />
    ),
    when: (
      <>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    travel: (
      <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-7 9v-1.5a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5V21H5z" />
    ),
  }

  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      {icons[type]}
    </svg>
  )
}

export default function SearchWidget({ destinationName }) {
  const [activeTab, setActiveTab] = useState('Hotel')
  const [searching, setSearching] = useState(false)
  const [searchedMsg, setSearchedMsg] = useState('')

  const handleSearch = () => {
    setSearching(true)
    setSearchedMsg('')
    setTimeout(() => {
      setSearching(false)
      setSearchedMsg(`Found 14 available ${activeTab.toLowerCase()} options in ${destinationName}!`)
      setTimeout(() => setSearchedMsg(''), 4000)
    }, 800)
  }

  return (
    <div className="search-widget relative mx-auto w-full max-w-4xl px-4">
      {searchedMsg && (
        <div className="absolute -top-12 left-1/2 z-50 -translate-x-1/2 rounded-full border border-teal-500/30 bg-slate-900/90 px-5 py-2 text-xs font-semibold text-white shadow-xl backdrop-blur">
          ✦ {searchedMsg}
        </div>
      )}

      <div className="mb-[-1px] flex justify-center gap-1 sm:justify-start sm:pl-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`search-tab ${activeTab === tab ? 'search-tab-active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="search-bar flex flex-col gap-3 rounded-[2rem] p-3 sm:flex-row sm:items-center sm:gap-0 sm:p-2 sm:pl-4">
        <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-0">
          <SearchField icon="location" label="Location" value={destinationName} />
          <SearchField icon="type" label="Type" value="Adventure" />
          <SearchField icon="when" label="When" value="Flexible" />
          <SearchField icon="travel" label="Travel" value="2 guests" />
        </div>

        <button
          type="button"
          onClick={handleSearch}
          disabled={searching}
          className="search-btn mx-auto sm:mx-0 cursor-pointer"
          aria-label={`Search ${activeTab} for ${destinationName}`}
          title={`Search ${activeTab} for ${destinationName}`}
        >
          {searching ? (
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="10" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3-3" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

function SearchField({ icon, label, value }) {
  return (
    <button type="button" className="search-field group">
      <span className="search-field-icon">
        <FieldIcon type={icon} />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[10px] font-medium uppercase tracking-wider text-[var(--chrome-muted)]">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-[var(--chrome-fg)]">{value}</span>
      </span>
      <svg className="h-3.5 w-3.5 shrink-0 text-[var(--chrome-muted)] transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  )
}
