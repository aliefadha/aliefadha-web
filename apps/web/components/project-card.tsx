/* eslint-disable @next/next/no-img-element */
"use client"

import { Badge } from "@workspace/ui/components/badge"
import { cn } from "@workspace/ui/lib/utils"
import { ArrowUpRight, Globe } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Markdown from "react-markdown"

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false)

  if (!src || imageError) {
    return <div className="h-48 w-full bg-muted" />
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-48 w-full object-cover"
      onError={() => setImageError(true)}
    />
  )
}

interface Props {
  title: string
  href?: string
  description: string
  dates: string
  tags: readonly string[]
  link?: string
  image?: string
  video?: string
  links?: readonly {
    type: "Website" | "Source"
    href: string
  }[]
  className?: string
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted",
        links && links.length > 0 ? "cursor-pointer" : "cursor-default",
        className
      )}
    >
      <div className="relative shrink-0">
        {links && links.length > 0 ? (
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-full object-cover"
              />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="h-48 w-full bg-muted" />
            )}
          </Link>
        ) : (
          <div>
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-full object-cover"
              />
            ) : image ? (
              <ProjectImage src={image} alt={title} />
            ) : (
              <div className="h-48 w-full bg-muted" />
            )}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 bg-black text-xs text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.type === "Website" ? (
                    <Globe className="h-3 w-3" />
                  ) : (
                    <svg viewBox="0 0 1024 1024" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)"
                        fill="#ffff"
                        className="h-3 w-3"
                      />
                    </svg>
                  )}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          {links && links.length > 0 && (
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          )}
        </div>
        <div className="prose dark:prose-invert max-w-full flex-1 font-sans text-xs leading-relaxed text-pretty text-muted-foreground">
          <Markdown>{description}</Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
