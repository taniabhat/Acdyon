import { DESTINATIONS } from '../data/destinations'

export default function SideNav({ activeId, onSelect }) {
  const others = DESTINATIONS.filter((d) => d.id !== activeId).slice(0, 3)

  return (
    <nav className="side-nav hidden lg:flex" aria-label="Destinations">
      {others.map((dest) => (
        <button
          key={dest.id}
          type="button"
          onClick={() => onSelect(dest.id)}
          className="side-nav-thumb group"
          aria-label={`Go to ${dest.name}`}
        >
          <img
            src={dest.thumb}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </button>
      ))}
    </nav>
  )
}
