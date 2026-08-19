# Way.farer — Design & Build Decisions

## 1. Stack & Architecture Choices

- **Vite 8 + React 19 + Tailwind CSS v4**: Built for instant zero-config deployment on Vercel or Netlify. Pure client-side Single Page Application (SPA) requiring no backend or database.
- **Vertical Scroll Snap System**: `scroll-snap-type: y mandatory` delivers distinct full-viewport pages without router overhead or page reloads:
  1. `home`: Dedicated Hero Landing Page (matching reference UI layout)
  2. `showcase`: Interactive Product Showcase ("Show, Don't Tell" workspace)
  3. `iceland`: Eystrahorn mountains
  4. `norway`: Lofoten archipelago
  5. `patagonia`: Torres del Paine
  6. `new-zealand`: Milford Sound
  7. `faroe`: Gásadalur village
- **All-or-Nothing Theme Engine**: Comprehensive CSS variable tokens (`:root` & `html.dark`) backing instant Light Mode (warm light peach `#FFF5EE`) and Dark Mode (`#0B0F17`) switching with high-contrast text readability.

---

## 2. UI & Design System Implementations

- **Reference Hero Page Layout**:
  - Display Headline: *"Discover Your Life, Travel Where You Want"*
  - Floating Search Card Card: Tabs (`Hotel`, `Flight`, `Packages`), form fields (`Location`, `Check in`, `Check out`, `Guest`), and rose accent search button.
  - Travel Illustration: Custom SVG component featuring a retro camper van with luggage, open book map base, flying airplane, and iconic world landmarks (Eiffel Tower, Leaning Tower of Pisa, Christ Redeemer).
- **Destination Typography & Letter Motion**:
  - Single-line title enforcement (`white-space: nowrap !important; word-break: keep-all;`) to prevent word wrapping on any screen size.
  - Unique Google Fonts tailored per destination:
    - **Iceland**: *Cormorant Garamond* (classic editorial serif)
    - **Norway**: *Syne* (wide arctic geometric sans, high contrast without bright white background glow)
    - **Patagonia**: *Playfair Display* (rugged mountain serif)
    - **New Zealand**: *Bodoni Moda* (sleek fjord serif)
    - **Faroe Islands**: *Marcellus* (Atlantic edge serif)
  - Silk-smooth staggered entrance transition reveals (`cubic-bezier(0.16, 1, 0.3, 1)` with `50ms` letter offsets) that settle rock-solid into position without any infinite shaking or jitter loops.
- **Overlap Protection**: Positioned `.scroll-indicator` dots (`right: 1.25rem`) and `.social-rail` links (`right: 4.5rem`) with clear separation so vertical text and navigation dots never collide.

---

## 3. Core Feature Set ("Show, Don't Tell" & Integrity)

- **Interactive Live Itinerary**: Switch day tabs (Day 1 to Day 4), toggle item checkmarks, add custom activities live, inspect real-time Trip Health status, and simulate quick export actions.
- **Strict Content Integrity**: 100% honest product utility copy. Zero fake user counts, zero fake testimonials, and zero fake investor logos.
- **Interactive Compass Easter Egg**:
  - Triggers via 7 hovers over the header compass logo ring or pressing the Konami code (`↑ ↑ ↓ ↓ ← → ← → B A`).
  - Activates a 720° compass needle spin (`compass-spin`), golden pulsing aura (`adventure-glow`), and a floating toast notification (*"✦ Adventure Mode Unlocked! Secret Compass Activated"*).

---

## 4. Trade-offs & Future Enhancements

- **CDN Image Assets**: High-resolution Unsplash nature photos are fetched over CDN. For production offline use, assets could be optimized into WebP/AVIF formats locally.
- **Future Week Improvements**: Add multi-language translation dictionaries, sync calendar export with Google/Outlook APIs, and save custom created itineraries to browser `IndexedDB`.

---

## 5. Verification & Testing

- Verified zero build errors via `npm run build` (built in 500ms).
- Verified Light Mode peach background, high-contrast dark slate text, smooth letter reveals, and right-side rail separation in browser across mobile (390px) and desktop (1440px+).
