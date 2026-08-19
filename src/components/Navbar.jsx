function CompassIcon({ className = '', spinning = false }) {
  return (
    <svg
      className={`${className} ${spinning ? 'compass-spin' : ''}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 6 L18.5 16 L16 26 L13.5 16 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M16 10 L17 16 L16 22 L15 16 Z"
        fill="var(--bg-elevated)"
      />
      <circle cx="16" cy="16" r="1.5" fill="currentColor" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar({ theme, toggleTheme, adventureMode, onLogoHover }) {
  return (
    <header className="sticky top-0 z-50 border-b border-default bg-elevated/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="group flex items-center gap-2.5 text-primary no-underline"
          onMouseEnter={onLogoHover}
        >
          <span
            className={`flex h-9 w-9 items-center justify-center rounded-xl bg-muted text-[var(--accent)] transition-transform duration-300 group-hover:scale-105 ${adventureMode ? 'adventure-glow' : ''}`}
          >
            <CompassIcon className="h-5 w-5" spinning={adventureMode} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Way<span className="text-[var(--accent)]">.</span>farer
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#showcase" className="text-sm font-medium text-muted no-underline transition-colors hover:text-primary">
            Product
          </a>
          <a href="#features" className="text-sm font-medium text-muted no-underline transition-colors hover:text-primary">
            Features
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted no-underline transition-colors hover:text-primary">
            How it works
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-default text-muted transition-colors hover:bg-muted hover:text-primary"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#cta"
            className="btn-primary hidden rounded-xl px-4 py-2.5 text-sm font-semibold no-underline sm:inline-flex"
          >
            Start Planning Free
          </a>
        </div>
      </nav>
    </header>
  )
}

export { CompassIcon }
