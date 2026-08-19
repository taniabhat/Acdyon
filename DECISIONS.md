# Way.farer — Design & Build Decisions

## Stack & design choices

**Vite + React + Tailwind CSS v4** for instant Vercel/Netlify deploy. The layout was rebuilt to match the **Adcyon reference video**: full-bleed cinematic photography, oversized serif destination titles layered behind peaks, floating search widget (Flight / Hotel / Rental tabs), left thumbnail navigation, and vertical social rail.

**Vertical scroll snap** (`scroll-snap-type: y mandatory`) gives five distinct full-viewport "pages" — one per destination — without pagination or routing. This mirrors the reference's immersive single-place hero while scaling to five locations (Iceland, Norway, Patagonia, New Zealand, Faroe Islands).

Typography: **Cormorant Garamond** (editorial serif for country names) + **Outfit** (clean UI sans). Photos from Unsplash CDN.

## Trade-off under time pressure

**Background images are CDN-hosted, not locally optimized.** No art-directed masking splits the mountain in front of the "ICELAND" letterforms (as in the reference Figma/video); instead, large title text sits behind a gradient overlay with the location name in front.

**With a real week:** export per-destination layered PNGs for true text-behind-peak depth; add subtle parallax on scroll; lazy-load next section image; build functional search dropdowns; add mobile swipe hints and hamburger drawer for side nav.

## AI usage & human verification

AI assisted with **scaffolding**, **component structure**, and **initial copy**. Personally verified: extracted frames from `Adcyon reference.mp4` to match layout; tested scroll snap across 5 sections; checked responsive behavior at 390px; confirmed no fake testimonials or inflated stats; tested Konami / logo easter egg.
