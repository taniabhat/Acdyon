export default function SocialRail({ description }) {
  return (
    <aside className="social-rail hidden xl:flex" aria-label="Social links">
      <a href="#" className="social-link">Facebook</a>
      <a href="#" className="social-link">Twitter</a>
      <a href="#" className="social-link">Instagram</a>

      <div className="badge-ring mt-auto" aria-hidden="true">
        <svg viewBox="0 0 120 120" className="h-24 w-24 animate-spin-slow">
          <defs>
            <path id="circlePath" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" />
          </defs>
          <text className="badge-text fill-white/80 text-[8px] uppercase tracking-[0.2em]">
            <textPath href="#circlePath" startOffset="0%">
              {description} · Way.farer ·
            </textPath>
          </text>
        </svg>
      </div>
    </aside>
  )
}
