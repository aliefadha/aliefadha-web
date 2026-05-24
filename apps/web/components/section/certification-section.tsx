import { BlurFade } from "@workspace/ui/components/blur-fade"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const BLUR_FADE_DELAY = 0.04

export default function CertificationSection() {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * 8}>
      <div className="flex flex-col gap-y-3">
        <Link
          href="https://www.coursera.org/account/accomplishments/verify/CTX112COYGN1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-x-3"
        >
          <div className="flex min-w-0 flex-1 items-center gap-x-3">
            <div className="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10">
              <svg
                viewBox="0 0 1155 164"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <path
                  d="M160 82c0-45 36-81 82-81s83 36 83 81c0 44-37 80-83 80s-82-36-82-80zm125 0a43 43 0 0 0-86 0 43 43 0 0 0 86 0zm706 1c0-49 40-82 76-82 24 0 38 8 48 22l3-19h37v155h-37l-4-16c-11 12-25 19-47 19-36 0-76-31-76-79zm126 0c0-24-20-43-43-43-24 0-43 19-43 43 0 21 19 41 42 41 24 0 44-20 44-41zM946 22V4h-40v155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zm-404 0V4h-41l1 155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zM339 99V4h40v90c0 20 11 32 31 32 21 0 34-13 34-38V4h40v155h-40v-18c-10 15-25 22-47 22-36 0-58-26-58-64zm392-17c0-44 31-81 80-81 46 0 78 37 78 80l-1 13H770c4 18 20 32 43 32 14 0 29-5 38-17l28 22a80 80 0 0 1-66 31c-47 0-82-35-82-80zm118-16c-3-16-19-28-38-28s-34 11-40 27l78 1zm-262 60 36-19c6 13 18 20 35 20 15 0 21-5 21-12 0-25-85-10-85-67 0-31 28-48 62-48 26 0 49 12 61 33l-35 19c-5-11-15-17-28-17-12 0-18 5-18 12 0 24 85 9 85 67 0 30-25 48-64 48-34 0-58-11-70-36zM0 82C0 37 37 1 82 1c28 0 55 13 70 37l-34 20a43 43 0 0 0-36-19c-23 0-42 20-42 43 0 22 19 42 42 42a43 43 0 0 0 37-20l34 20A83 83 0 0 1 0 82z"
                  fill="#0056D2"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <div className="flex items-center gap-2 text-xs leading-none font-semibold">
                Application Development using Microservices and Serverless
                <ArrowUpRight
                  className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
            <span>Jul 2025</span>
          </div>
        </Link>

        <Link
          href="https://www.coursera.org/account/accomplishments/verify/WO39RM9L4ECP"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-x-3"
        >
          <div className="flex min-w-0 flex-1 items-center gap-x-3">
            <div className="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10">
              <svg
                viewBox="0 0 1155 164"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <path
                  d="M160 82c0-45 36-81 82-81s83 36 83 81c0 44-37 80-83 80s-82-36-82-80zm125 0a43 43 0 0 0-86 0 43 43 0 0 0 86 0zm706 1c0-49 40-82 76-82 24 0 38 8 48 22l3-19h37v155h-37l-4-16c-11 12-25 19-47 19-36 0-76-31-76-79zm126 0c0-24-20-43-43-43-24 0-43 19-43 43 0 21 19 41 42 41 24 0 44-20 44-41zM946 22V4h-40v155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zm-404 0V4h-41l1 155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zM339 99V4h40v90c0 20 11 32 31 32 21 0 34-13 34-38V4h40v155h-40v-18c-10 15-25 22-47 22-36 0-58-26-58-64zm392-17c0-44 31-81 80-81 46 0 78 37 78 80l-1 13H770c4 18 20 32 43 32 14 0 29-5 38-17l28 22a80 80 0 0 1-66 31c-47 0-82-35-82-80zm118-16c-3-16-19-28-38-28s-34 11-40 27l78 1zm-262 60 36-19c6 13 18 20 35 20 15 0 21-5 21-12 0-25-85-10-85-67 0-31 28-48 62-48 26 0 49 12 61 33l-35 19c-5-11-15-17-28-17-12 0-18 5-18 12 0 24 85 9 85 67 0 30-25 48-64 48-34 0-58-11-70-36zM0 82C0 37 37 1 82 1c28 0 55 13 70 37l-34 20a43 43 0 0 0-36-19c-23 0-42 20-42 43 0 22 19 42 42 42a43 43 0 0 0 37-20l34 20A83 83 0 0 1 0 82z"
                  fill="#0056D2"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <div className="flex items-center gap-2 text-xs leading-none font-semibold">
                Introduction to Agile Development and Scrum
                <ArrowUpRight
                  className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
            <span>Jun 2025</span>
          </div>
        </Link>

        <Link
          href="https://www.coursera.org/account/accomplishments/verify/U33TWVWIHUB4"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-x-3"
        >
          <div className="flex min-w-0 flex-1 items-center gap-x-3">
            <div className="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10">
              <svg
                viewBox="0 0 1155 164"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <path
                  d="M160 82c0-45 36-81 82-81s83 36 83 81c0 44-37 80-83 80s-82-36-82-80zm125 0a43 43 0 0 0-86 0 43 43 0 0 0 86 0zm706 1c0-49 40-82 76-82 24 0 38 8 48 22l3-19h37v155h-37l-4-16c-11 12-25 19-47 19-36 0-76-31-76-79zm126 0c0-24-20-43-43-43-24 0-43 19-43 43 0 21 19 41 42 41 24 0 44-20 44-41zM946 22V4h-40v155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zm-404 0V4h-41l1 155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zM339 99V4h40v90c0 20 11 32 31 32 21 0 34-13 34-38V4h40v155h-40v-18c-10 15-25 22-47 22-36 0-58-26-58-64zm392-17c0-44 31-81 80-81 46 0 78 37 78 80l-1 13H770c4 18 20 32 43 32 14 0 29-5 38-17l28 22a80 80 0 0 1-66 31c-47 0-82-35-82-80zm118-16c-3-16-19-28-38-28s-34 11-40 27l78 1zm-262 60 36-19c6 13 18 20 35 20 15 0 21-5 21-12 0-25-85-10-85-67 0-31 28-48 62-48 26 0 49 12 61 33l-35 19c-5-11-15-17-28-17-12 0-18 5-18 12 0 24 85 9 85 67 0 30-25 48-64 48-34 0-58-11-70-36zM0 82C0 37 37 1 82 1c28 0 55 13 70 37l-34 20a43 43 0 0 0-36-19c-23 0-42 20-42 43 0 22 19 42 42 42a43 43 0 0 0 37-20l34 20A83 83 0 0 1 0 82z"
                  fill="#0056D2"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <div className="flex items-center gap-2 text-xs leading-none font-semibold">
                Google Cloud Fundamentals: Core Infrastructure
                <ArrowUpRight
                  className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
            <span>Jun 2025</span>
          </div>
        </Link>

        <Link
          href="https://www.coursera.org/account/accomplishments/verify/F4Y0GY2ULKUY"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-x-3"
        >
          <div className="flex min-w-0 flex-1 items-center gap-x-3">
            <div className="flex size-8 flex-none items-center justify-center overflow-hidden rounded-full border p-1 shadow ring-2 ring-border md:size-10">
              <svg
                viewBox="0 0 1155 164"
                fillRule="evenodd"
                clipRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
              >
                <path
                  d="M160 82c0-45 36-81 82-81s83 36 83 81c0 44-37 80-83 80s-82-36-82-80zm125 0a43 43 0 0 0-86 0 43 43 0 0 0 86 0zm706 1c0-49 40-82 76-82 24 0 38 8 48 22l3-19h37v155h-37l-4-16c-11 12-25 19-47 19-36 0-76-31-76-79zm126 0c0-24-20-43-43-43-24 0-43 19-43 43 0 21 19 41 42 41 24 0 44-20 44-41zM946 22V4h-40v155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zm-404 0V4h-41l1 155h40V76c0-26 12-39 34-39l4 1 7-38c-21 0-36 7-45 22zM339 99V4h40v90c0 20 11 32 31 32 21 0 34-13 34-38V4h40v155h-40v-18c-10 15-25 22-47 22-36 0-58-26-58-64zm392-17c0-44 31-81 80-81 46 0 78 37 78 80l-1 13H770c4 18 20 32 43 32 14 0 29-5 38-17l28 22a80 80 0 0 1-66 31c-47 0-82-35-82-80zm118-16c-3-16-19-28-38-28s-34 11-40 27l78 1zm-262 60 36-19c6 13 18 20 35 20 15 0 21-5 21-12 0-25-85-10-85-67 0-31 28-48 62-48 26 0 49 12 61 33l-35 19c-5-11-15-17-28-17-12 0-18 5-18 12 0 24 85 9 85 67 0 30-25 48-64 48-34 0-58-11-70-36zM0 82C0 37 37 1 82 1c28 0 55 13 70 37l-34 20a43 43 0 0 0-36-19c-23 0-42 20-42 43 0 22 19 42 42 42a43 43 0 0 0 37-20l34 20A83 83 0 0 1 0 82z"
                  fill="#0056D2"
                  fillRule="nonzero"
                />
              </svg>
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-0.5">
              <div className="flex items-center gap-2 text-xs leading-none font-semibold">
                Introduction to DevOps
                <ArrowUpRight
                  className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
            <span>Feb 2025</span>
          </div>
        </Link>
      </div>
    </BlurFade>
  )
}
