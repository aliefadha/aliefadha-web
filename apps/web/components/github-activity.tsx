"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

interface GitHubActivityProps {
  username: string
}

export function GitHubActivity({ username }: GitHubActivityProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const container = scrollContainerRef.current
    if (!container) return

    const scrollToRight = () => {
      container.scrollLeft = container.scrollWidth
    }

    const frame = requestAnimationFrame(scrollToRight)
    const mutationObserver = new MutationObserver(scrollToRight)
    const resizeObserver = new ResizeObserver(scrollToRight)

    mutationObserver.observe(container, { childList: true, subtree: true })
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(frame)
      mutationObserver.disconnect()
      resizeObserver.disconnect()
    }
  }, [mounted, resolvedTheme, username])

  if (!mounted) {
    return (
      <div className="h-[130px] w-full animate-pulse rounded-lg bg-muted" />
    )
  }

  const colorScheme = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <div ref={scrollContainerRef} className="w-full overflow-x-auto">
      <GitHubCalendar
        username={username}
        colorScheme={colorScheme}
        blockSize={12}
        blockMargin={4}
        fontSize={12}
        style={{ width: "100%" }}
      />
    </div>
  )
}
