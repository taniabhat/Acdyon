export default function Header({ adventureMode, onLogoHover, theme, toggleTheme, onSelectHome }) {
  return (
    <header className="site-header flex items-center justify-between px-6 py-4 fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Left: Interactive Compass Logo (Easter Egg Anchor) */}
      <div className="flex items-center gap-3 pointer-events-auto">
        <button
          type="button"
          onClick={() => onSelectHome?.('home')}
          onMouseEnter={onLogoHover}
          className="flex items-center gap-2.5 border-0 bg-transparent cursor-pointer p-0 text-left group"
          aria-label="Way.farer home (Hover 7 times or press Konami code for secret Easter Egg)"
          title="Hover 7 times or press Konami code (↑ ↑ ↓ ↓ ← → ← → B A) for secret Easter Egg!"
        >
          <span className={`header-logo-ring ${adventureMode ? 'adventure-glow compass-spin' : ''}`}>
            <svg viewBox="0 0 32 32" fill="none" className="h-5 w-5" aria-hidden="true">
              <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <path d="M16 4 L18.5 16 L16 28 L13.5 16 Z" fill="currentColor" />
              <circle cx="16" cy="16" r="2" fill="var(--bg-primary)" />
            </svg>
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-[var(--text-primary)]">
            Way<span className="text-rose-500">.</span>farer
          </span>
        </button>
      </div>

      {/* Center: Navigation Bar Links */}
      <nav className="hidden md:flex items-center gap-8 rounded-full border border-[var(--border-default)] bg-[var(--chrome-bg)] px-6 py-2 shadow-sm backdrop-blur-md pointer-events-auto">
        <button
          type="button"
          onClick={() => onSelectHome?.('iceland')}
          className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-rose-500 transition-colors border-0 bg-transparent cursor-pointer"
        >
          Destinations
        </button>
        <button
          type="button"
          onClick={() => onSelectHome?.('showcase')}
          className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-rose-500 transition-colors border-0 bg-transparent cursor-pointer"
        >
          Product Demo
        </button>
        <button
          type="button"
          onClick={() => onSelectHome?.('home')}
          className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-rose-500 transition-colors border-0 bg-transparent cursor-pointer"
        >
          Features
        </button>
        <button
          type="button"
          onClick={() => onSelectHome?.('faroe')}
          className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] hover:text-rose-500 transition-colors border-0 bg-transparent cursor-pointer"
        >
          Support
        </button>
      </nav>

      {/* Right Controls: Language Selector + Theme Toggle + Sign In CTA */}
      <div className="flex items-center gap-3 pointer-events-auto">
        {/* Language Selector */}
        <button
          type="button"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-default)] bg-[var(--chrome-bg)] px-3 py-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--text-primary)] backdrop-blur transition-colors"
        >
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10z" />
          </svg>
          <span>English</span>
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        {/* Dark / Light Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className="header-icon-btn"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? (
            <svg className="h-4 w-4 text-amber-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            <svg className="h-4 w-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        {/* Sign In CTA Button */}
        <button
          type="button"
          onClick={() => onSelectHome?.('showcase')}
          className="rounded-xl bg-rose-500 hover:bg-rose-600 px-5 py-2 text-xs font-bold text-white shadow-md transition-all transform hover:-translate-y-0.5"
        >
          Sign In
        </button>
      </div>
    </header>
  )
}
