import { useEffect, type ReactNode } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Footer from "../Footer"
import MobileDeviceFrame from "../MobileDeviceFrame"
import { fadeUp } from "../SectionWrapper"
import { assetPath } from "../../utils/assetPath"
import type { Project } from "../../data/projects"

export function StudyShell({
  title,
  description,
  projectTitle,
  children,
}: {
  title: string
  description: string
  projectTitle: string
  children: ReactNode
}) {
  useEffect(() => {
    const previousTitle = document.title
    const meta = document.querySelector('meta[name="description"]')
    const previousDescription = meta?.getAttribute("content") ?? ""
    document.title = title
    meta?.setAttribute("content", description)
    return () => {
      document.title = previousTitle
      meta?.setAttribute("content", previousDescription)
    }
  }, [title, description])

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <Link
            to="/"
            className="text-sm font-medium text-text-secondary transition-colors hover:text-accent"
          >
            ← Back to Home
          </Link>
          <span className="text-sm font-medium text-text-primary">{projectTitle}</span>
        </div>
      </header>
      <motion.main
        className="mx-auto max-w-6xl px-6 py-12 md:py-16"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

export function StudySection({
  id,
  kicker,
  title,
  children,
}: {
  id: string
  kicker?: string
  title: string
  children: ReactNode
}) {
  return (
    <motion.section
      id={id}
      className="mt-20 md:mt-28"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {kicker && (
        <p className="mb-3 text-xs font-medium tracking-[0.16em] text-accent uppercase">{kicker}</p>
      )}
      <h2 className="max-w-4xl text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </motion.section>
  )
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-4xl space-y-4 leading-relaxed text-text-secondary">{children}</div>
}

export function Statement({ children }: { children: ReactNode }) {
  return (
    <p className="max-w-4xl text-2xl leading-snug font-medium tracking-tight text-text-primary md:text-3xl">
      {children}
    </p>
  )
}

export function WideImage({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption?: string
}) {
  return (
    <figure>
      <img
        src={assetPath(src)}
        alt={alt}
        className="h-auto w-full rounded-2xl border border-border bg-surface object-contain"
      />
      {caption && <figcaption className="mt-3 max-w-4xl text-sm text-text-secondary">{caption}</figcaption>}
    </figure>
  )
}

export function Sequence({
  label,
  steps,
}: {
  label?: string
  steps: string[]
}) {
  return (
    <div>
      {label && <p className="mb-3 text-sm font-semibold text-text-primary">{label}</p>}
      <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, index) => (
          <li key={`${label}-${step}`} className="flex items-center gap-2">
            <span className="text-sm text-text-primary sm:text-base">{step}</span>
            {index < steps.length - 1 && (
              <span className="text-text-secondary" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

export function PhoneSet({
  shots,
  columns = 3,
}: {
  shots: { src: string; alt: string; caption?: string }[]
  columns?: 2 | 3
}) {
  return (
    <ul
      className={`grid grid-cols-1 gap-x-8 gap-y-12 ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {shots.map((shot) => (
        <li key={shot.alt}>
          <MobileDeviceFrame src={assetPath(shot.src)} alt={shot.alt} />
          {shot.caption && (
            <p className="mx-auto mt-4 max-w-xs text-center text-sm text-text-secondary">
              {shot.caption}
            </p>
          )}
        </li>
      ))}
    </ul>
  )
}

export function ProjectLinks({ project }: { project: Project }) {
  const links = [
    project.links.github ? { label: "GitHub", href: project.links.github } : null,
    project.links.live
      ? { label: project.isDesignProject ? "Prototype" : "Live site", href: project.links.live }
      : null,
  ].filter(Boolean) as { label: string; href: string }[]

  if (links.length === 0) return null

  return (
    <div className="mt-6 flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent hover:text-accent-hover"
        >
          {link.label} →
        </a>
      ))}
    </div>
  )
}

export function StudyNav({
  prev,
  next,
}: {
  prev: { title: string; href: string } | null
  next: { title: string; href: string } | null
}) {
  return (
    <nav
      aria-label="Other projects"
      className="mt-20 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between"
    >
      {prev ? (
        <Link
          to={prev.href}
          className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/30"
        >
          <span className="text-xs text-text-secondary">Previous</span>
          <p className="font-medium text-text-primary group-hover:text-accent">← {prev.title}</p>
        </Link>
      ) : (
        <div />
      )}
      <Link to="/" className="self-center text-sm font-medium text-accent hover:text-accent-hover">
        All Projects
      </Link>
      {next ? (
        <Link
          to={next.href}
          className="group rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent/30 sm:text-right"
        >
          <span className="text-xs text-text-secondary">Next</span>
          <p className="font-medium text-text-primary group-hover:text-accent">{next.title} →</p>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
