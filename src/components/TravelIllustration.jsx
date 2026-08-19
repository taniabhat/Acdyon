export default function TravelIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-4xl pt-4 pb-2 px-4 select-none pointer-events-none">
      <svg
        viewBox="0 0 900 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[320px] drop-shadow-xl"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="bookCover" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C29B70" />
            <stop offset="50%" stopColor="#D8B486" />
            <stop offset="100%" stopColor="#C29B70" />
          </linearGradient>

          <linearGradient id="bookPage" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F4ECE1" />
          </linearGradient>

          <linearGradient id="vanRed" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#EE5253" />
          </linearGradient>

          <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#A29BFE" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="globeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7BED9F" />
            <stop offset="100%" stopColor="#2ED573" />
          </linearGradient>
        </defs>

        {/* Floating Clouds & Flight Trail */}
        <path
          d="M120 100 Q 250 40 450 60 T 780 70"
          stroke="#38ADA9"
          strokeWidth="2"
          strokeDasharray="6 6"
          opacity="0.6"
        />

        {/* Airplane in Sky */}
        <g transform="translate(680, 50) rotate(-12) scale(0.9)">
          <path
            d="M0 12 L35 0 L28 12 L45 15 L28 18 L35 30 L0 18 L-15 15 Z"
            fill="#EE5253"
          />
          <path
            d="M10 12 L35 0 L25 12 Z"
            fill="#FF7675"
          />
        </g>

        {/* Open Book Base */}
        <g id="open-book" transform="translate(0, 180)">
          {/* Book Spine Shadow */}
          <ellipse cx="450" cy="140" rx="380" ry="25" fill="rgba(0,0,0,0.12)" />

          {/* Book Cover Base */}
          <path
            d="M70 120 Q 450 160 830 120 L 810 140 Q 450 180 90 140 Z"
            fill="url(#bookCover)"
          />

          {/* Left Page */}
          <path
            d="M100 115 Q 440 150 450 125 L 450 40 Q 280 20 110 50 Z"
            fill="url(#bookPage)"
            stroke="#E0D5C1"
            strokeWidth="2"
          />

          {/* Right Page */}
          <path
            d="M450 125 Q 460 150 800 115 L 790 50 Q 620 20 450 40 Z"
            fill="url(#bookPage)"
            stroke="#E0D5C1"
            strokeWidth="2"
          />

          {/* Map Lines on Book Pages */}
          <path
            d="M180 70 Q 280 90 400 65"
            stroke="#2ED573"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M500 65 Q 650 90 720 75"
            stroke="#2ED573"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Map Location Pin Dots */}
          <circle cx="180" cy="70" r="4" fill="#EE5253" />
          <circle cx="400" cy="65" r="4" fill="#EE5253" />
          <circle cx="720" cy="75" r="4" fill="#EE5253" />
        </g>

        {/* Background Mountain Peaks */}
        <g id="mountains" transform="translate(180, 70)">
          {/* Peak 1 */}
          <polygon points="120,150 190,50 260,150" fill="url(#mountainGrad)" />
          <polygon points="190,50 175,75 190,85 205,75" fill="#FFF" opacity="0.9" />

          {/* Peak 2 */}
          <polygon points="210,150 290,30 370,150" fill="url(#mountainGrad)" />
          <polygon points="290,30 270,60 290,75 310,60" fill="#FFF" opacity="0.9" />
        </g>

        {/* World Landmarks (Eiffel Tower, Pisa, Christ Redeemer) */}
        <g id="landmarks">
          {/* Eiffel Tower Left */}
          <g transform="translate(240, 110) scale(0.65)">
            <path
              d="M30 110 L50 10 L70 110 M20 110 L80 110 M35 75 L65 75 M40 45 L60 45"
              stroke="#2D3436"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path d="M45 10 L55 10 L50 0 Z" fill="#2D3436" />
          </g>

          {/* Leaning Tower of Pisa Right */}
          <g transform="translate(620, 95) rotate(8) scale(0.65)">
            <rect x="20" y="20" width="45" height="100" rx="4" fill="#DFE6E9" stroke="#636E72" strokeWidth="3" />
            <line x1="20" y1="40" x2="65" y2="40" stroke="#636E72" strokeWidth="2" />
            <line x1="20" y1="65" x2="65" y2="65" stroke="#636E72" strokeWidth="2" />
            <line x1="20" y1="90" x2="65" y2="90" stroke="#636E72" strokeWidth="2" />
            {/* Arches */}
            <circle cx="32" cy="30" r="3" fill="#636E72" />
            <circle cx="53" cy="30" r="3" fill="#636E72" />
            <circle cx="32" cy="52" r="3" fill="#636E72" />
            <circle cx="53" cy="52" r="3" fill="#636E72" />
          </g>

          {/* Christ Redeemer Statue Right */}
          <g transform="translate(710, 115) scale(0.55)">
            <path d="M40 90 L40 30 M15 40 L65 40 M35 30 Q40 15 45 30" stroke="#74B9FF" strokeWidth="6" strokeLinecap="round" />
            <circle cx="40" cy="18" r="7" fill="#74B9FF" />
          </g>
        </g>

        {/* CENTERPIECE: Red Travel Camper Van (VW Bus) */}
        <g id="camper-van" transform="translate(330, 110)">
          {/* Shadow under van */}
          <ellipse cx="120" cy="130" rx="110" ry="14" fill="rgba(0,0,0,0.25)" />

          {/* Luggage Stack on Roof */}
          <g id="luggage" transform="translate(45, -30)">
            {/* Suitcase 1 (Yellow) */}
            <rect x="10" y="8" width="55" height="22" rx="3" fill="#FDCB6E" stroke="#D6A23B" strokeWidth="2" />
            <line x1="37" y1="8" x2="37" y2="30" stroke="#D6A23B" strokeWidth="2" />

            {/* Suitcase 2 (Blue) */}
            <rect x="70" y="12" width="45" height="18" rx="3" fill="#0984E3" stroke="#005691" strokeWidth="2" />

            {/* Surfboard / Duffle (Green) */}
            <path d="M5 2 L130 2 C135 2 135 8 130 8 L5 8 Z" fill="#00B894" />
          </g>

          {/* Roof Rack */}
          <rect x="35" y="0" width="150" height="6" rx="2" fill="#636E72" />
          <line x1="55" y1="6" x2="55" y2="12" stroke="#636E72" strokeWidth="3" />
          <line x1="165" y1="6" x2="165" y2="12" stroke="#636E72" strokeWidth="3" />

          {/* Van Body Upper (White) */}
          <path
            d="M30 50 Q 30 12 60 12 L 175 12 Q 200 12 205 50 Z"
            fill="#FFFDF9"
            stroke="#DFE6E9"
            strokeWidth="2"
          />

          {/* Van Body Lower (Red) */}
          <path
            d="M20 50 L 215 50 Q 220 95 200 110 L 30 110 Q 15 95 20 50 Z"
            fill="url(#vanRed)"
          />

          {/* Front V-Shape Trim */}
          <path d="M20 50 L 50 85 L 20 110 Z" fill="#FFFDF9" />
          <circle cx="35" cy="85" r="7" fill="#FDCB6E" stroke="#FFF" strokeWidth="2" />

          {/* Windows */}
          <rect x="65" y="20" width="38" height="26" rx="4" fill="#74B9FF" stroke="#2D3436" strokeWidth="2" />
          <rect x="112" y="20" width="38" height="26" rx="4" fill="#74B9FF" stroke="#2D3436" strokeWidth="2" />
          <rect x="158" y="20" width="35" height="26" rx="4" fill="#74B9FF" stroke="#2D3436" strokeWidth="2" />

          {/* Headlights */}
          <circle cx="28" cy="65" r="7" fill="#FFEAA7" stroke="#636E72" strokeWidth="2" />
          <circle cx="208" cy="65" r="6" fill="#FFEAA7" stroke="#636E72" strokeWidth="2" />

          {/* Bumper */}
          <rect x="10" y="102" width="205" height="12" rx="4" fill="#DFE6E9" stroke="#B2BEC3" strokeWidth="2" />

          {/* Wheels */}
          {/* Wheel Left */}
          <g transform="translate(60, 110)">
            <circle cx="0" cy="0" r="20" fill="#2D3436" />
            <circle cx="0" cy="0" r="11" fill="#DFE6E9" />
            <circle cx="0" cy="0" r="5" fill="#636E72" />
          </g>

          {/* Wheel Right */}
          <g transform="translate(165, 110)">
            <circle cx="0" cy="0" r="20" fill="#2D3436" />
            <circle cx="0" cy="0" r="11" fill="#DFE6E9" />
            <circle cx="0" cy="0" r="5" fill="#636E72" />
          </g>
        </g>

        {/* Decorative Sparkle Stars */}
        <g id="sparkles" fill="#FDCB6E">
          <path d="M150 50 L153 60 L163 63 L153 66 L150 76 L147 66 L137 63 L147 60 Z" />
          <path d="M780 130 L782 138 L790 140 L782 142 L780 150 L778 142 L770 140 L778 138 Z" />
          <path d="M520 25 L522 30 L527 32 L522 34 L520 39 L518 34 L513 32 L518 30 Z" />
        </g>
      </svg>
    </div>
  )
}
