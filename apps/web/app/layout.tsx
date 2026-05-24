import { Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { FlickeringGrid } from "@workspace/ui/components/flickering-grid"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import Navbar from "@/components/navbar"
import { Metadata } from "next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Alief Adha",
  description:
    "Software Engineer based in Jakarta, Indonesia. problem solvers using technology and build things mainly web projects that didn't break.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "Alief Adha",
    description:
      "Software Engineer based in Jakarta, Indonesia. problem solvers using technology and build things mainly web projects that didn't break.",
    url: "https://aliefadha.com",
    siteName: "Alief Adha",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Alief Adha",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <TooltipProvider>
          <div className="absolute inset-0 top-0 right-0 left-0 z-0 h-[100px] overflow-hidden">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>
          <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-24 sm:py-24">
            {children}
          </div>
          <Navbar />
        </TooltipProvider>
      </body>
    </html>
  )
}
