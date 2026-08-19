export default function ScrollIndicator({ sections, activeId, onSelect }) {
  return (
    <nav className="scroll-indicator" aria-label="Page scroll navigation">
      {sections.map((sec) => {
        const isActive = activeId === sec.id
        return (
          <button
            key={sec.id}
            type="button"
            onClick={() => onSelect(sec.id)}
            className={`scroll-dot ${isActive ? 'scroll-dot-active' : ''}`}
            aria-label={`Jump to ${sec.name}`}
            title={sec.name}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="sr-only">{sec.name}</span>
          </button>
        )
      })}
    </nav>
  )
}
