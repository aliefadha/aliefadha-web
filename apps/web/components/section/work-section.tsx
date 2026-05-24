/* eslint-disable @next/next/no-img-element */
"use client"
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@workspace/ui/components/accordion"
import { ChevronDown, ChevronRight } from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

const work = [
  {
    company: "Metro Indonesian Software",
    href: "https://metro-software.com/",
    badges: [],
    location: "Padang, West Sumatera",
    title: "Software Engineer",
    logoUrl: "/metro-software.png",
    start: "Sep 2024",
    end: "Apr 2026",
    description: [
      "Developed and architected minimum viable product (MVP) phased point of sale system.",
      "Designed database and REST API for custom ERP system centralizing inventory management across 7 branches.",
      "Developed gaming rental booking platform to process 100+ daily transactions.",
    ],
  },
  {
    company: "Studio20 Malaysia",
    badges: [],
    href: "https://studio20.my/",
    location: "Remote",
    title: "Fullstack Developer",
    logoUrl: "/studio20.png",
    start: "Sept 2025",
    end: "Nov 2025",
    description: [
      "Designed and implemented an ACID-compliant PostgreSQL database.",
      "Integrated backend with notification system using Firebase.",
      "Connected LLM models to backend for sentiment analysis and content summary.",
    ],
  },
  {
    company: "PT Surveyor Indonesia",
    badges: [],
    href: "https://www.ptsi.co.id/",
    location: "Jakarta",
    title: "Human Resource Intern",
    logoUrl: "/ptsi.png",
    start: "Sept 2023",
    end: "Feb 2024",
    description: [
      "Digitalized employee record of leave letter.",
      "Developed employee leave management system.",
      "Developed and maintained Microsoft Excel spreadsheets with automated formulas to compute employee tax deduction",
    ],
  },
]

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false)

  if (!src || imageError) {
    return (
      <div className="size-8 flex-none rounded-full border bg-muted p-1 shadow ring-2 ring-border md:size-10" />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-border md:size-10"
      onError={() => setImageError(true)}
    />
  )
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-6">
      {work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="grid w-full gap-2 border-b-0"
        >
          <AccordionTrigger className="group cursor-pointer rounded-none p-0 transition-colors hover:no-underline [&_[data-slot=accordion-trigger-icon]]:hidden [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-3 text-left">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <LogoImage src={work.logoUrl} alt={work.company} />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 leading-none font-semibold">
                    {work.company}
                    <span className="relative inline-flex h-3.5 w-3.5 items-center">
                      <ChevronRight
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 stroke-2 text-muted-foreground transition-all duration-300 ease-out",
                          "translate-x-0 opacity-0",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:pointer-events-none group-data-[state=open]:!translate-x-0 group-data-[state=open]:!opacity-0"
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "absolute h-3.5 w-3.5 shrink-0 stroke-2 text-muted-foreground transition-all duration-200",
                          "rotate-0 opacity-0",
                          "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100"
                        )}
                      />
                    </span>
                  </div>
                  <div className="font-sans text-sm text-muted-foreground">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
                <span>
                  {work.start} - {work.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="ml-13 px-0 py-2 text-xs text-muted-foreground sm:text-sm">
            <ul className="list-disc space-y-1 pb-1 pl-4">
              {work.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
