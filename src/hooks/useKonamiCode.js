import { useEffect, useState } from 'react'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
]

export function useKonamiCode(onActivate) {
  const [progress, setProgress] = useState(0)
  const [activated, setActivated] = useState(false)

  useEffect(() => {
    if (activated) return

    function handleKeyDown(event) {
      const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
      const expected = KONAMI[progress]

      if (key === expected) {
        const next = progress + 1
        if (next === KONAMI.length) {
          setActivated(true)
          onActivate?.()
        } else {
          setProgress(next)
        }
      } else {
        setProgress(key === KONAMI[0] ? 1 : 0)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [progress, activated, onActivate])

  return { activated, reset: () => setActivated(false) }
}
