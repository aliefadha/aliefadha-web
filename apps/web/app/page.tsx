import BlurFadeText from "@/components/blur-fade-text"
import { GitHubActivity } from "@/components/github-activity"
import { BlurFade } from "@workspace/ui/components/blur-fade"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar"
import Markdown from "react-markdown"
import WorkSection from "@/components/section/work-section"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { DATA } from "@/lib/data"
import ProjectsSection from "@/components/section/project-section"
import ContactSection from "@/components/section/contact-section"
import CertificationSection from "@/components/section/certification-section"

const BLUR_FADE_DELAY = 0.04

export default function Page() {
  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text="Hi, I'm Alief Adha"
              />
              <BlurFadeText
                className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={
                  "Software Engineer based in Jakarta, Indonesia. I love solving problems with technology and build things mainly web projects that didn't break."
                }
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 rounded-full border shadow-lg ring-4 ring-muted md:size-32">
                <AvatarImage alt={"Alief Adha"} src="/hero.webp" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose dark:prose-invert max-w-full font-sans leading-relaxed text-pretty text-muted-foreground">
              <Markdown>
                Software Engineer with 2 years of experience on building web
                application. Kinda fresh graduate from [Universitas Andalas,
                majoring in Computer Engineering](https://ce.fti.unand.ac.id/),
                while solving various problems for clients via web applications.
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </section>
      <section id="github">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Github Activity</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <GitHubActivity username="aliefadha" />
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="certifications">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Certifications & Courses</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            <CertificationSection />
          </div>
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            <BlurFade delay={BLUR_FADE_DELAY * 8}>
              <Link
                href="https://ce.fti.unand.ac.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-x-3"
              >
                <div className="flex min-w-0 flex-1 items-center gap-x-3">
                  <img
                    src="/unand.png"
                    alt="Universitas Andalas"
                    className="size-8 flex-none overflow-hidden rounded-full border object-contain p-1 shadow ring-2 ring-border md:size-10"
                  />
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <div className="flex items-center gap-2 leading-none font-semibold">
                      Universitas Andalas
                      <ArrowUpRight
                        className="h-3.5 w-3.5 -translate-x-2 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      B.Eng on Computer Engineering
                    </div>
                  </div>
                </div>
                <div className="flex flex-none items-center gap-1 text-right text-xs text-muted-foreground tabular-nums">
                  <span>2021 - 2025</span>
                </div>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="flex h-8 w-fit items-center gap-2 rounded-xl border border-border bg-background px-4 ring-2 ring-border/20">
                  {skill.svg && (
                    <span
                      className="size-4 flex-none [&>svg]:size-full"
                      dangerouslySetInnerHTML={{ __html: skill.svg }}
                    />
                  )}
                  <span className="text-sm font-medium text-foreground">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  )
}
