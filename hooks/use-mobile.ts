"use client"

import { useEffect, useRef, useState } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)
  const initializedRef = useRef(false)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = (e?: MediaQueryListEvent) => {
      setIsMobile(e ? e.matches : mql.matches)
    }

    if (!initializedRef.current) {
      handler()
      initializedRef.current = true
    }

    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [breakpoint])

  return !!isMobile
}
