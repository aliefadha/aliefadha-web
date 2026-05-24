"use client"

import { GitHubCalendar } from "react-github-calendar"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface GitHubActivityProps {
  username: string
}

export function GitHubActivity({ username }: GitHubActivityProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-[130px] w-full animate-pulse rounded-lg bg-muted" />
    )
  }

  const colorScheme = resolvedTheme === "dark" ? "dark" : "light"

  return (
    <div className="w-full overflow-x-auto">
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
