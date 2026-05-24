import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import { DATA } from "@/lib/data"
import { Dock, DockIcon } from "@workspace/ui/components/dock"
import { Separator } from "@workspace/ui/components/separator"
import { FileText, House } from "lucide-react"

const NAV_ITEMS = [
  { label: "Home", href: "#", icon: House },
  { label: "CV", href: "/cv.pdf", icon: FileText },
]

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-30">
      <Dock className="pointer-events-auto relative z-50 mx-auto flex h-14 w-fit gap-2 border bg-card/90 p-2 shadow-[0_0_10px_3px] shadow-primary/5 backdrop-blur-3xl">
        {NAV_ITEMS.map(({ label, href, icon: Icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <a href={href}>
                <DockIcon className="size-full cursor-pointer rounded-3xl border border-border bg-background p-0 backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground">
                  <Icon className="size-full" />
                </DockIcon>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
            >
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
        <Separator
          orientation="vertical"
          className="m-auto h-2/3 w-px bg-border"
        />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social], index) => {
            const isExternal = social.url.startsWith("http")
            return (
              <Tooltip key={`social-${name}-${index}`}>
                <TooltipTrigger asChild>
                  <a
                    href={social.url}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <DockIcon className="size-full cursor-pointer rounded-3xl border border-border bg-background p-0 text-muted-foreground backdrop-blur-3xl transition-colors hover:bg-muted hover:text-foreground">
                      <div
                        className="size-full overflow-hidden rounded-sm object-contain [&>svg]:size-full"
                        dangerouslySetInnerHTML={{ __html: social.svg }}
                      />
                    </DockIcon>
                  </a>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary px-4 py-2 text-sm text-primary-foreground shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            )
          })}
      </Dock>
    </div>
  )
}
