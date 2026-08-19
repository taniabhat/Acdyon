export default function Footer({ adventureMode }) {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-default px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-semibold text-primary">
            Way<span className="text-[var(--accent)]">.</span>farer
          </p>
          <p className="mt-1 text-sm text-subtle">
            © {year} Way.farer. Crafted for travelers who plan ahead.
          </p>
          {adventureMode && (
            <p className="mt-2 text-xs font-medium text-[var(--accent)] animate-pulse">
              ✦ Adventure Mode unlocked
            </p>
          )}
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm" aria-label="Footer">
          <a href="#features" className="text-muted no-underline transition-colors hover:text-primary">
            Features
          </a>
          <a href="#showcase" className="text-muted no-underline transition-colors hover:text-primary">
            Product
          </a>
          <a href="#cta" className="text-muted no-underline transition-colors hover:text-primary">
            Get started
          </a>
          <a
            href="mailto:hello@way.farer"
            className="text-muted no-underline transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}
