import { useState } from "react"
import type { ProjectScreenshot } from "../data/projects"
import MobileDeviceFrame from "./MobileDeviceFrame"
import { assetPath } from "../utils/assetPath"

interface ScreenshotGridProps {
  screenshots: ProjectScreenshot[]
  variant?: "mobile" | "web"
  layout?: "grid" | "featured"
  projectSlug?: string
  title?: string
  subtitle?: string
  liveUrl?: string
}

function screenshotAlt(shot: ProjectScreenshot, fallback: string) {
  return shot.description != null ? `${shot.title} — ${shot.description}` : fallback
}

function ScrollHint() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 bg-gradient-to-t from-white/90 via-white/55 to-transparent px-3 pt-10 pb-3"
      aria-hidden="true"
    >
      <span className="text-[11px] font-medium tracking-wide text-text-secondary/80">
        Scroll to explore
      </span>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        className="text-text-secondary/55"
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

function ScreenshotPlaceholder({
  title,
  variant,
  useDeviceFrame,
}: {
  title: string
  variant: "mobile" | "web"
  useDeviceFrame: boolean
}) {
  if (variant === "mobile" && useDeviceFrame) {
    return (
      <div className="relative mx-auto w-full max-w-[340px] rounded-[2.75rem] bg-neutral-950 p-[10px] shadow-[0_18px_45px_rgba(15,23,42,0.18)] sm:max-w-[380px]">
        <div
          className="absolute top-4 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black"
          aria-hidden="true"
        />
        <div className="flex aspect-[9/16] items-center justify-center overflow-hidden rounded-[2.25rem] bg-gradient-to-b from-[#f3f4f6] to-[#e8eaed] px-4 text-center">
          <div>
            <p className="text-xs font-medium tracking-wide text-text-secondary/70 uppercase">
              Screenshot
            </p>
            <p className="mt-1 text-sm font-medium text-text-primary/60">{title}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`mx-auto flex items-center justify-center rounded-2xl border border-border bg-gradient-to-b from-[#f3f4f6] to-[#e8eaed] px-4 text-center shadow-sm ${
        variant === "mobile"
          ? "aspect-[9/16] w-full max-w-[360px]"
          : "aspect-[16/10] w-full"
      }`}
    >
      <div>
        <p className="text-xs font-medium tracking-wide text-text-secondary/70 uppercase">
          Screenshot
        </p>
        <p className="mt-1 text-sm font-medium text-text-primary/60">{title}</p>
      </div>
    </div>
  )
}

function ScrollableDesktopPreview({
  shot,
  onError,
}: {
  shot: ProjectScreenshot
  onError: () => void
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      <div
        className="screenshot-scroll h-[min(52vh,480px)] max-h-[520px] overflow-y-auto overscroll-contain outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 sm:h-[480px]"
        tabIndex={0}
        role="region"
        aria-label={`${shot.title} scrollable preview. Use arrow keys or scroll to explore.`}
      >
        <img
          src={assetPath(shot.image)}
          alt={screenshotAlt(shot, `${shot.title} desktop screenshot`)}
          className="block h-auto w-full max-w-full align-top"
          onError={onError}
        />
      </div>
      <ScrollHint />
    </div>
  )
}

function ScrollableMobilePreview({
  shot,
  onError,
}: {
  shot: ProjectScreenshot
  onError: () => void
}) {
  return (
    <div className="mx-auto w-full max-w-[360px]">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <div
          className="screenshot-scroll h-[min(70vh,680px)] max-h-[720px] overflow-y-auto overscroll-contain outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 sm:h-[680px]"
          tabIndex={0}
          role="region"
          aria-label={`${shot.title} scrollable preview. Use arrow keys or scroll to explore.`}
        >
          <img
            src={assetPath(shot.image)}
            alt={screenshotAlt(shot, `${shot.title} mobile homepage screenshot`)}
            className="block h-auto w-full max-w-full"
            onError={onError}
          />
        </div>
        <ScrollHint />
      </div>
    </div>
  )
}

function ScreenshotCard({
  shot,
  variant,
  useDeviceFrame,
  align = "start",
  imageClassName,
}: {
  shot: ProjectScreenshot
  variant: "mobile" | "web"
  useDeviceFrame: boolean
  align?: "start" | "center"
  imageClassName?: string
}) {
  const [failed, setFailed] = useState(false)
  const hasImage = Boolean(shot.image?.trim()) && !failed
  const presentation = shot.presentation ?? "default"
  const isScrollableMobile = presentation === "scrollable-mobile"
  const isScrollableDesktop = presentation === "scrollable-desktop"
  const captionAlign =
    align === "center" ||
    isScrollableMobile ||
    (variant === "mobile" && !imageClassName)
      ? "text-center"
      : "text-left"

  return (
    <figure className="flex h-full flex-col">
      {hasImage ? (
        isScrollableMobile ? (
          <ScrollableMobilePreview shot={shot} onError={() => setFailed(true)} />
        ) : isScrollableDesktop ? (
          <ScrollableDesktopPreview shot={shot} onError={() => setFailed(true)} />
        ) : variant === "mobile" && useDeviceFrame ? (
          <MobileDeviceFrame
            src={assetPath(shot.image)}
            alt={shot.title}
            onError={() => setFailed(true)}
          />
        ) : variant === "mobile" && !imageClassName ? (
          <img
            src={assetPath(shot.image)}
            alt={shot.title}
            className="mx-auto h-auto w-full max-w-[360px] rounded-2xl object-contain"
            onError={() => setFailed(true)}
          />
        ) : (
          <img
            src={assetPath(shot.image)}
            alt={screenshotAlt(shot, shot.title)}
            className={
              imageClassName ??
              "mx-auto block h-auto w-full rounded-2xl object-contain"
            }
            onError={() => setFailed(true)}
          />
        )
      ) : (
        <ScreenshotPlaceholder
          title={shot.title}
          variant={isScrollableMobile ? "mobile" : variant}
          useDeviceFrame={useDeviceFrame && !isScrollableMobile && !isScrollableDesktop}
        />
      )}

      <figcaption className={`mt-4 ${captionAlign}`}>
        <p className="text-sm font-medium text-text-primary sm:text-base">{shot.title}</p>
        {shot.description && (
          <p className="mt-1 text-sm text-text-secondary">{shot.description}</p>
        )}
      </figcaption>
    </figure>
  )
}

function FeaturedLayout({
  screenshots,
  variant,
  useDeviceFrame,
  liveUrl,
}: {
  screenshots: ProjectScreenshot[]
  variant: "mobile" | "web"
  useDeviceFrame: boolean
  liveUrl?: string
}) {
  const hero = screenshots.find((s) => (s.presentation ?? "default") === "default")
  const desktopRow = screenshots.filter((s) => s.presentation === "scrollable-desktop")
  const mobileShots = screenshots.filter((s) => s.presentation === "scrollable-mobile")
  const used = new Set(
    [hero, ...desktopRow, ...mobileShots].filter(Boolean).map((s) => s!.title),
  )
  const leftover = screenshots.filter((s) => !used.has(s.title))

  return (
    <div className="flex flex-col gap-10 md:gap-12">
      {hero && (
        <ScreenshotCard
          shot={hero}
          variant={variant}
          useDeviceFrame={false}
          imageClassName="block h-auto w-full rounded-2xl object-contain"
        />
      )}

      {desktopRow.length > 0 && (
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-8">
          {desktopRow.map((shot) => (
            <ScreenshotCard
              key={shot.title}
              shot={shot}
              variant={variant}
              useDeviceFrame={false}
            />
          ))}
        </div>
      )}

      {mobileShots.map((shot) => (
        <div key={shot.title} className="mx-auto w-full">
          <ScreenshotCard
            shot={shot}
            variant={variant}
            useDeviceFrame={false}
            align="center"
          />
        </div>
      ))}

      {liveUrl && (
        <div className="text-center">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Live Site →
          </a>
        </div>
      )}

      {leftover.map((shot) => (
        <ScreenshotCard
          key={shot.title}
          shot={shot}
          variant={variant}
          useDeviceFrame={useDeviceFrame && variant === "mobile"}
          imageClassName="block h-auto w-full rounded-2xl object-contain"
        />
      ))}
    </div>
  )
}

export default function ScreenshotGrid({
  screenshots,
  variant = "mobile",
  layout = "grid",
  projectSlug,
  title = "Screenshots",
  subtitle = "A closer look at the main screens and user flows.",
  liveUrl,
}: ScreenshotGridProps) {
  if (screenshots.length === 0) return null

  const useDeviceFrame = variant === "mobile" && projectSlug !== "carshare"

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-2 text-xl font-semibold text-text-primary md:text-2xl">{title}</h2>
        <p className="text-base text-text-secondary">{subtitle}</p>
      </div>

      {layout === "featured" ? (
        <FeaturedLayout
          screenshots={screenshots}
          variant={variant}
          useDeviceFrame={useDeviceFrame}
          liveUrl={liveUrl}
        />
      ) : (
        <div
          className={
            variant === "mobile"
              ? "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2"
          }
        >
          {screenshots.map((shot) => (
            <ScreenshotCard
              key={shot.title}
              shot={shot}
              variant={variant}
              useDeviceFrame={useDeviceFrame}
            />
          ))}
        </div>
      )}
    </div>
  )
}
