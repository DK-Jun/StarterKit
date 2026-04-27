"use client"

import { useEffect, useState } from "react"

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const handler = () => setIsMobile(mql.matches)
    mql.addEventListener("change", handler)
    setIsMobile(mql.matches)
    return () => mql.removeEventListener("change", handler)
  }, [breakpoint])

  return !!isMobile
}
